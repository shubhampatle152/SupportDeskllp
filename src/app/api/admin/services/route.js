
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Service from '@/models/Service';

// IMPORTANT: Add authentication/authorization checks for all admin routes

export async function GET(request) {
  // TODO: Add authentication check
  try {
    await dbConnect();
    const services = await Service.find({});
    return NextResponse.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json({ message: "Error fetching services", details: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  // TODO: Add authentication check
  try {
    await dbConnect();
    const body = await request.json();
    const { title, description, iconName, status } = body;

    if (!title || !description || !iconName || !status) {
      return NextResponse.json({ message: "Missing required fields: title, description, iconName, status" }, { status: 400 });
    }

    const newService = new Service({
      title,
      description,
      iconName,
      status,
    });
    await newService.save();
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    console.error("Error creating service:", error);
    if (error.name === 'ValidationError') {
      return NextResponse.json({ message: "Validation Error", errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ message: "Error creating service", details: error.message }, { status: 500 });
  }
}

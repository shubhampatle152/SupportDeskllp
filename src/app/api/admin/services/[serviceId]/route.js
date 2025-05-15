
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Service from '@/models/Service';

// IMPORTANT: Add authentication/authorization checks for all admin routes

export async function GET(request, { params }) {
  // TODO: Add authentication check
  await dbConnect();
  const { serviceId } = params;

  try {
    if (!serviceId.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json({ message: "Invalid service ID format" }, { status: 400 });
    }
    const service = await Service.findById(serviceId);
    if (!service) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }
    return NextResponse.json(service);
  } catch (error) {
    console.error(`Error fetching service ${serviceId}:`, error);
    return NextResponse.json({ message: "Error fetching service", error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  // TODO: Add authentication check
  await dbConnect();
  const { serviceId } = params;
  
  try {
    if (!serviceId.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json({ message: "Invalid service ID format" }, { status: 400 });
    }
    const body = await request.json();
    const { title, description, iconName, status } = body;

    if (!title || !description || !iconName || !status) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      { title, description, iconName, status },
      { new: true, runValidators: true }
    );

    if (!updatedService) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }
    return NextResponse.json(updatedService);
  } catch (error) {
    console.error(`Error updating service ${serviceId}:`, error);
    if (error.name === 'ValidationError') {
      return NextResponse.json({ message: "Validation Error", errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ message: "Error updating service", error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  // TODO: Add authentication check
  await dbConnect();
  const { serviceId } = params;

  try {
    if (!serviceId.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json({ message: "Invalid service ID format" }, { status: 400 });
    }
    const deletedService = await Service.findByIdAndDelete(serviceId);

    if (!deletedService) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error(`Error deleting service ${serviceId}:`, error);
    return NextResponse.json({ message: "Error deleting service", error: error.message }, { status: 500 });
  }
}

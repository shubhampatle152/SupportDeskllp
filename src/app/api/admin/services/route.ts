
import { NextResponse, type NextRequest } from 'next/server';

// Placeholder - In a real app, this would interact with a database
// and you'd add proper authentication/authorization checks here.
let mockServices = [
  { id: "1", title: "Back-Office Support", description: "Efficient handling of your administrative tasks.", iconName: "Briefcase", status: "Active" },
  { id: "2", title: "Digital Marketing", description: "Boost your online presence and reach.", iconName: "Megaphone", status: "Active" },
  { id: "3", title: "Web Development", description: "Custom websites and web applications.", iconName: "Codepen", status: "Draft" },
];

export async function GET(request: NextRequest) {
  // TODO: Add authentication check from session cookie
  return NextResponse.json(mockServices);
}

export async function POST(request: NextRequest) {
  // TODO: Add authentication check from session cookie
  try {
    const body = await request.json();
    const { title, description, iconName, status } = body;

    if (!title || !description || !iconName || !status) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const newService = {
      id: String(mockServices.length + 1 + Math.random()), // simple unique ID
      title,
      description,
      iconName,
      status,
    };
    mockServices.push(newService);
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    console.error("Error creating service:", error);
    return NextResponse.json({ message: "Error creating service" }, { status: 500 });
  }
}

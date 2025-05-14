
import { NextResponse, type NextRequest } from 'next/server';

// Placeholder - In a real app, this would interact with a database
// and you'd add proper authentication/authorization checks here.
let mockServices = [
  { id: "1", title: "Back-Office Support", description: "Efficient handling of your administrative tasks.", iconName: "Briefcase", status: "Active" },
  { id: "2", title: "Digital Marketing", description: "Boost your online presence and reach.", iconName: "Megaphone", status: "Active" },
  { id: "3", title: "Web Development", description: "Custom websites and web applications.", iconName: "Codepen", status: "Draft" },
];


export async function GET(
  request: NextRequest,
  { params }: { params: { serviceId: string } }
) {
  // TODO: Add authentication check
  const serviceId = params.serviceId;
  const service = mockServices.find(s => s.id === serviceId);

  if (service) {
    return NextResponse.json(service);
  } else {
    return NextResponse.json({ message: "Service not found" }, { status: 404 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { serviceId: string } }
) {
  // TODO: Add authentication check
  const serviceId = params.serviceId;
  try {
    const body = await request.json();
    const { title, description, iconName, status } = body;

    if (!title || !description || !iconName || !status) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const serviceIndex = mockServices.findIndex(s => s.id === serviceId);
    if (serviceIndex === -1) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }

    mockServices[serviceIndex] = { ...mockServices[serviceIndex], title, description, iconName, status };
    return NextResponse.json(mockServices[serviceIndex]);
  } catch (error) {
    console.error(`Error updating service ${serviceId}:`, error);
    return NextResponse.json({ message: "Error updating service" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { serviceId: string } }
) {
  // TODO: Add authentication check
  const serviceId = params.serviceId;
  const serviceIndex = mockServices.findIndex(s => s.id === serviceId);

  if (serviceIndex === -1) {
    return NextResponse.json({ message: "Service not found" }, { status: 404 });
  }

  mockServices.splice(serviceIndex, 1);
  return NextResponse.json({ message: "Service deleted successfully" }, { status: 200 });
}

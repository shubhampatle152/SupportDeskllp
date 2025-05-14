"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock } from "lucide-react";
import { format } from "date-fns";

// Placeholder data - replace with API call
const mockScheduledCalls = [
  { id: "call1", name: "John Doe", email: "john.doe@example.com", preferredDate: new Date("2024-08-15T00:00:00.000Z"), preferredTime: "10:00 AM", status: "Pending" },
  { id: "call2", name: "Jane Smith", email: "jane.smith@example.com", preferredDate: new Date("2024-08-16T00:00:00.000Z"), preferredTime: "02:30 PM", status: "Confirmed" },
  { id: "call3", name: "Alice Wonderland", email: "alice@example.com", preferredDate: new Date("2024-08-18T00:00:00.000Z"), preferredTime: "11:00 AM", status: "Pending" },
];

export default function AdminScheduledCallsPage() {
  const calls = mockScheduledCalls;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Scheduled Calls</h2>
        <p className="text-muted-foreground">
          View and manage consultation calls scheduled by users.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Call Requests</CardTitle>
          <CardDescription>List of all scheduled call requests.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden sm:table-cell">Email</TableHead>
                <TableHead>Preferred Date</TableHead>
                <TableHead className="hidden md:table-cell">Preferred Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {calls.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center h-24">
                    No scheduled calls found.
                  </TableCell>
                </TableRow>
              )}
              {calls.map((call) => (
                <TableRow key={call.id}>
                  <TableCell className="font-medium">{call.name}</TableCell>
                  <TableCell className="hidden sm:table-cell">{call.email}</TableCell>
                  <TableCell>{format(call.preferredDate, "PPP")}</TableCell>
                  <TableCell className="hidden md:table-cell">{call.preferredTime}</TableCell>
                  <TableCell>
                    <Badge variant={call.status === "Confirmed" ? "default" : "secondary"}>
                      {call.status === "Confirmed" ? <CheckCircle className="mr-1 h-3 w-3" /> : <Clock className="mr-1 h-3 w-3" />}
                      {call.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {call.status === "Pending" && (
                      <Button variant="outline" size="sm" className="mr-2 border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700" onClick={() => alert(`Confirming call for ${call.name} - not implemented.`)}>
                        {/* Add onClick handler for confirm action */}
                        <CheckCircle className="mr-1 h-4 w-4" /> Confirm
                      </Button>
                    )}
                     <Button variant="outline" size="sm" className="text-destructive hover:text-destructive-foreground hover:bg-destructive/90" onClick={() => alert(`Canceling call for ${call.name} - not implemented.`)}>
                      {/* Add onClick handler for cancel/delete action */}
                      <XCircle className="mr-1 h-4 w-4" /> Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
            <CardTitle className="text-lg">Note:</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-muted-foreground">
            This page uses placeholder data. Functionality for confirming or canceling calls
            needs to be connected to backend API routes that update the call status.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}

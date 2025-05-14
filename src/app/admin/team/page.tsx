"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { TEAM_MEMBERS } from "@/lib/constants"; // Using existing constants for mock

export default function AdminTeamPage() {
  // Using TEAM_MEMBERS from constants as mock data
  const teamMembers = TEAM_MEMBERS;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Manage Team Members</h2>
          <p className="text-muted-foreground">
            Add, edit, or remove team member profiles.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/team/new"> {/* This route will need to be created */}
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Member
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members List</CardTitle>
          <CardDescription>Current team members displayed on the "About Us" page.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Photo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="hidden md:table-cell">Bio (Excerpt)</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center h-24">
                    No team members found. <Link href="/admin/team/new" className="text-primary hover:underline">Add one now</Link>.
                  </TableCell>
                </TableRow>
              )}
              {teamMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={member.photoUrl} alt={member.name} data-ai-hint={member['data-ai-hint']}/>
                      <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell className="hidden md:table-cell max-w-xs truncate">{member.bio}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" asChild className="mr-2">
                      <Link href={`/admin/team/edit/${member.id}`}> {/* This route will need to be created */}
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => alert(`Delete action for ${member.name} - not implemented.`)}>
                      {/* Add onClick handler for delete action */}
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
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
            This page uses placeholder data from `src/lib/constants.ts`. Functionality for adding, editing, and deleting team members needs to be connected to backend API routes. The "Add New Member" and "Edit" buttons link to routes that need to be created.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function Profile() {
  return (
    <div className="w-full h-full py-6 grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label>Full Name</Label>
        <Input placeholder="Alex Johnson" />
      </div>
      <div className="space-y-2">
        <Label>Email</Label>
        <Input placeholder="alex@email.com" />
      </div>
      <div className="space-y-2">
        <Label>Phone</Label>
        <Input placeholder="Phone number" type="tel" />
      </div>
      <div className="space-y-2">
        <Label>Location</Label>
        <Input placeholder="Location here" />
      </div>
      <div className="space-y-2">
        <Label>Bio</Label>
        <Textarea className="h-[140px]" placeholder="" />
      </div>
      <div className="space-y-2">
        <Label>Interests</Label>
        <Textarea className="h-[140px]" placeholder="" />
      </div>
      <div className="space-y-2">
        <Label>Educations</Label>
        <Input placeholder="" />
      </div>
      <div className="space-y-2">
        <Label>Occupations</Label>
        <Input placeholder="" />
      </div>
    </div>
  );
}

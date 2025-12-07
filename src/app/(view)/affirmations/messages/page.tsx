"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  BanIcon,
  EditIcon,
  EyeIcon,
  PlusIcon,
  SearchIcon,
  SlidersIcon,
  TrashIcon,
} from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { useState } from "react";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Page() {
  const [files, setFiles] = useState<File[] | undefined>();
  const handleDrop = (files: File[]) => {
    console.log(files);
    setFiles(files);
  };
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      {/* Main Grid */}
      <div className="w-full">
        {/* Traffic Card */}
        <Card className="lg:h-[400px] flex flex-col">
          <CardHeader className="flex flex-wrap justify-between items-center gap-3">
            <CardTitle className="text-2xl">Affirmation Messages</CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"special"}>
                  <PlusIcon />
                  Add Messages
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Affirmation Message</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Dropzone
                    accept={{ "image/*": [] }}
                    maxFiles={1}
                    // maxSize={1024 * 1024 * 10}
                    // minSize={1024}
                    onDrop={handleDrop}
                    onError={console.error}
                    src={files}
                  >
                    <DropzoneEmptyState />
                    <DropzoneContent />
                  </Dropzone>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-3">
                      <Label>Category</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label>Tone</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Tone" />
                        </SelectTrigger>
                      </Select>
                    </div>
                  </div>
                  <Label>Message Text</Label>
                  <Textarea />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant={"outline"}>Cancel</Button>
                  </DialogClose>
                  <Button variant={"special"}>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent className="flex-1 space-y-6">
            <div className="flex gap-4">
              <InputGroup>
                <InputGroupInput placeholder="Search passengers by name,email, or phone...." />
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
              </InputGroup>
              <Button variant={"outline"} className="px-8!">
                <SlidersIcon /> Filter
              </Button>
            </div>
            <Table>
              <TableHeader className="bg-secondary">
                <TableRow>
                  <TableHead className="text-center">Message Text</TableHead>
                  <TableHead className="text-center">Category</TableHead>
                  <TableHead className="text-center">Tone</TableHead>
                  <TableHead className="text-center">Created Date</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">
                    Discipline equals freedom
                  </TableCell>
                  <TableCell className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                    <div className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                      <Badge>Staightforward</Badge>
                    </div>
                  </TableCell>
                  <TableCell className="">
                    <div className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                      Direct
                    </div>
                  </TableCell>
                  <TableCell className="text-center ">2025-10-22</TableCell>
                  <TableCell className="text-center space-x-2">
                    <Button variant={"outline"} size={"icon"}>
                      <EditIcon />
                    </Button>
                    <Button variant={"outline"} size={"icon"}>
                      <TrashIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

import Container from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function DesignPage() {
  return (
    <Container>
      <SectionHeading
        eyebrow="Design System"
        title="UI Components Showcase"
        description="Preview of all base components with your design system."
      />

      <div className="space-y-8">
        {/* Buttons */}
        <div className="space-x-4">
          <Button>Primary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>

        {/* Card */}
        <Card className="p-4">
          <h3 className="font-bold">Card Component</h3>
          <p className="text-muted-foreground">This is a simple card with padding.</p>
        </Card>

        {/* Badge */}
        <div className="space-x-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>

        {/* Input & Textarea */}
        <div className="space-y-4">
          <Input placeholder="Enter text here..." />
          <Textarea placeholder="Write a longer message..." />
        </div>

        {/* Separator */}
        <Separator />
        <p className="text-sm text-muted-foreground">Separator above separates sections.</p>

        {/* Avatar */}
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/er-mohangc07.png" alt="@er-mohangc07" />
            <AvatarFallback>MG</AvatarFallback>
          </Avatar>
          <span className="text-sm">Avatar Example</span>
        </div>

        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            Open Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sheet (Sidebar) */}
        <Sheet>
          <SheetTrigger>
            Open Sheet
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Example</SheetTitle>
            </SheetHeader>
            <p className="mt-4 text-muted-foreground">
              This is a sheet component (like a sidebar or modal).
            </p>
          </SheetContent>
        </Sheet>
      </div>
    </Container>
  );
}

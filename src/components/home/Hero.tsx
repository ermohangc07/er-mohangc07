import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 space-y-6">
          <Badge>Computer Engineer & Educator</Badge>
          <h1 className="text-4xl font-bold tracking-tight">
            Learn technology by building real things.
          </h1>
          <p className="text-lg text-muted-foreground">
            I design courses for young learners, combining my computer engineering background
            with hands-on, project-based lessons.
          </p>
          <div className="flex gap-4">
            <Button>Explore Courses</Button>
            <Button variant="outline">Start a Project</Button>
          </div>
        </div>

        {/* Visual */}
        <div className="flex-1">
          <Image
            src="/hero-visual.png" // replace with portrait or abstract tech image
            alt="Hero Visual"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

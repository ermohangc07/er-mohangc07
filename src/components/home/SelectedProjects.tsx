import { Card } from "@/components/ui/card";

export default function SelectedProjects() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Selected Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6">
              <h3 className="font-semibold">Project {i}</h3>
              <p className="text-sm text-muted-foreground">Project description placeholder.</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

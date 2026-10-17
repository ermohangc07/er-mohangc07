import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-16 bg-teal-600 text-white text-center">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-4">Looking for a Freelance Client?</h2>
        <p className="mb-6 text-lg">
          Let’s collaborate on technology, education, or creative projects.
        </p>
        <Button variant="secondary">Contact Me</Button>
      </div>
    </section>
  );
}

const reasons = [
  "1+ year teaching coding and robotics",
  "Computer engineering background",
  "Project-based learning",
  "Beginner-friendly lessons",
];

export default function WhyLearnWithMohan() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Learn With Mohan</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <li
              key={reason}
              className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md"
            >
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

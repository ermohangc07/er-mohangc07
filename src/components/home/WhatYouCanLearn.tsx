const topics = [
  "Coding",
  "Robotics",
  "Python",
  "Web Development",
  "Photography",
  "Videography",
];

export default function WhatYouCanLearn() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What You Can Learn</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic}
              className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="font-semibold">{topic}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

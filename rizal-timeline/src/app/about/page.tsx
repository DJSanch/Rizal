import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Rizal Timeline",
  description: "About the creators of the Rizal Timeline project.",
};

export default function AboutPage() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>

      <div className="space-y-6">
        {/* Daniel */}
        <article className="rounded-lg border bg-card text-card-foreground p-6">
          <div className="flex items-start gap-4">
            <Image
              src="/images/Gradpic.jpg"
              alt="Daniel John Henrick D. Sanchez"
              width={200}
              height={200}
              className="w-78 h-78 rounded-md object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">Daniel John Henrick D. Sanchez</h2>
              <p className="text-sm text-muted-foreground">BS Computer Science</p>
              <p className="mt-3 leading-relaxed">
                Daniel John Henrick D. Sanchez is a Bachelor of Science in Computer Science student who is passionate about technology, research, and innovation. His academic journey is driven by a strong curiosity for solving problems through programming, system design, and data analysis. Beyond technical skills, he values critical thinking, creativity, and discipline—traits he connects with the life and works of Dr. José Rizal.
              </p>
              
              <p className="mt-3 leading-relaxed">
                As a student, Daniel actively seeks opportunities to apply his knowledge to real-world projects, reflecting Rizal&apos;s belief in education as a foundation for national progress. He believes that Computer Science is not only about coding but also about building solutions that can contribute to society&apos;s development. Inspired by Rizal&apos;s intellectual legacy, Daniel aims to use his skills in technology to promote positive change and innovation for the future.
              </p>
            </div>
          </div>
        </article>

        {/* Lewis */}
        <article className="rounded-lg border bg-card text-card-foreground p-6">
          <div className="flex items-start gap-4">
            <Image
              src="/images/lewis.jpeg"
              alt="Lewis Carl Delimo Magdamo"
              width={400}
              height={400}
              className="w-88 h-88 rounded-md object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">Lewis Carl Delimo Magdamo</h2>
              <p className="text-sm text-muted-foreground">BS Computer Science</p>
              <p className="mt-3 leading-relaxed">
              Lewis Carl Delimo Magdamo is a Bachelor of Science in Computer Science student who strives to combine technical expertise with social responsibility. His academic pursuits are centered on programming, system development, and digital problem-solving, with a vision of using technology to address everyday challenges.
              </p>
              <p className="mt-3 leading-relaxed">
                Lewis looks up to Dr. José Rizal&apos;s dedication to knowledge, service, and nation-building as an inspiration for his own growth as a student and future professional. He believes that, like Rizal, today&apos;s youth have a role to play in shaping society through education, innovation, and leadership. With his passion for Computer Science, Lewis aspires to contribute not only to technological advancement but also to the betterment of his community.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <Avatar className="h-32 w-32 border-4 border-border">
              <AvatarImage src="/professional-profile.png" alt="Profile" />
              <AvatarFallback className="text-3xl">GH</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                About Me
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Software engineer, AI enthusiast, and robotics tinkerer.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Welcome to Grievance & Ham, my personal corner of the internet
                where I share thoughts on software development, artificial
                intelligence, and robotics. This blog is a collection of both my
                pet projects (the things I love building) and my pet peeves (the
                things that drive me crazy in tech).
              </p>

              <p>
                I'm passionate about building scalable web applications,
                exploring the frontiers of AI and machine learning, and
                tinkering with robotics projects in my spare time. Whether it's
                diving deep into the latest Next.js features, experimenting with
                LLMs, or building autonomous systems, I love sharing what I
                learn along the way.
              </p>

              <p>
                When I'm not coding, you'll find me reading about emerging
                technologies, contributing to open source projects, or debugging
                why my robot won't turn left. I believe in learning in public
                and hope that sharing my experiences helps others on their own
                technical journeys.
              </p>

              <p>
                This blog is built with Next.js, TypeScript, and Tailwind CSS—a
                stack I genuinely enjoy working with. Feel free to explore the
                articles, reach out if you have questions, or connect with me on
                social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Grievance & Ham. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                RSS
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <Avatar className="h-32 w-32 border-4 border-border object-cover rounded-full">
              <AvatarImage
                src="/professional-profile.png"
                alt="Profile"
                className="animate-fadeIn"
              />
              <AvatarFallback>
                <User className="h-20 w-20" />
              </AvatarFallback>
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
                Welcome to Grievance & Ham! I am{" "}
                <span className="font-bold">H</span>enry{" "}
                <span className="font-bold">A</span>lexander{" "}
                <span className="font-bold">M</span>atsumoto (the aforementioned
                ham), and if you’re in the market to read the scattered musings
                and whinings (the aforementioned grievances) of a talkative
                tech-enthusiast, you’ve lucked out!
              </p>

              <p>
                I love to build, but even more than I love to build, I love to
                stare angrily at bugs. I love it so much that I became a
                software engineer so I could do it as a 9-5. I used to just
                complain, fruitlessly. Clicking the label of a check box should
                always tick the check box. Links should always open in a new
                tab. All websites should be required to have dark mode. I taught
                myself web development hoping I could fix all these things, but
                what I found at the end of that road were just many, many, many
                more bugs.
              </p>

              <p>
                My webpages don’t look the same on Chrome and Safari. My
                chatbots forget how to call functions when the full moon is out.
                My robotic Lego arm can’t lift itself up because of an oddity of
                the IRL development environment called “too much gravity”. It
                turns out there are too many bugs to fix, so my journey has come
                full circle, and I’m here again, fruitlessly complaining about
                them.
              </p>

              <p>
                P.S. As far as Dr. Seuss books go, I was always partial to “Are
                You My Mother?”, but that blog name was taken.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

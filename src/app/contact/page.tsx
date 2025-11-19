"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Mail, Github, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "Portfolio",
    icon: User,
    href: "https://henryamatsu.com/",
    description: "Check out my porfolio",
    handle: "henryamatsu.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/henryamatsu/",
    description: "Connect professionally",
    handle: "Henry Matsumoto",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/henryamatsu",
    description: "Check out my code",
    handle: "@henryamatsu",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/henryamatsu",
    description: "Follow me on Twitter",
    handle: "@henryamatsu",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground mb-12 text-pretty leading-relaxed">
            Have a question, want to collaborate, or just want to say hi? Feel
            free to reach out through any of these channels.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              >
                <Card className="group hover:border-primary/50 transition-colors h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                        <link.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{link.name}</CardTitle>
                    </div>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-mono text-muted-foreground">
                      {link.handle}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-12 p-6 border border-border rounded-lg bg-muted/30">
            <h2 className="text-xl font-bold mb-2">Prefer Email?</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I typically respond within 24-48 hours. Whether you have a
              question about a blog post, want to discuss a project, or just
              want to connect, I'd love to hear from you.
            </p>
            <Button asChild>
              <a href="mailto:henryamatsu@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

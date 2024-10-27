"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Cpu, Sparkles } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js 16",
    excerpt:
      "Exploring the latest features in Next.js 16 and how they improve performance and developer experience.",
    date: "2025-01-20",
    category: "Web Dev",
    tags: ["Next.js", "React", "Performance"],
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Future of AI Agents in Software Development",
    excerpt:
      "How AI-powered coding assistants are transforming the way we write and maintain code.",
    date: "2025-01-15",
    category: "AI",
    tags: ["AI", "LLMs", "Development"],
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Robotics and Computer Vision: A Practical Guide",
    excerpt:
      "Understanding the fundamentals of computer vision and its applications in modern robotics.",
    date: "2025-01-10",
    category: "Robotics",
    tags: ["Robotics", "Computer Vision", "Python"],
    readTime: "15 min read",
  },
];

const categories = [
  { name: "Web Dev", icon: Code2, color: "text-primary" },
  { name: "AI", icon: Sparkles, color: "text-accent" },
  { name: "Robotics", icon: Cpu, color: "text-chart-3" },
];

export default function Home() {
  const router = useRouter();

  const handleCategoryClick = (categoryName: string) => {
    router.push(`/articles?search=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-12 py-8 md:py-12">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            A place to talk about{" "}
            <span className="text-primary">pet-projects</span> and{" "}
            <span className="text-accent">pet-peeves</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            The personal ramblings of a software, AI, and robotics enthusiast.
          </p>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="gap-2 bg-transparent"
                onClick={() => handleCategoryClick(category.name)}
              >
                <category.icon className={`h-4 w-4 ${category.color}`} />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="group hover:border-primary/50 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="gap-2 p-0 h-auto font-semibold text-primary"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
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
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                GitHub
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
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

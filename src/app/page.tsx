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
import articlesData from "@/articles.json";

const blogPosts = Object.values(articlesData).sort((a, b) => b.id - a.id);

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
    </div>
  );
}

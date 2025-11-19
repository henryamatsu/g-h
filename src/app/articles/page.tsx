"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Code2, Cpu, Sparkles } from "lucide-react";
import articlesData from "@/articles.json";

const allBlogPosts = Object.values(articlesData);

const categories = [
  { name: "Web Dev", icon: Code2, color: "text-primary" },
  { name: "AI", icon: Sparkles, color: "text-accent" },
  { name: "Robotics", icon: Cpu, color: "text-chart-3" },
];

export default function ArticlesPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const filteredPosts = allBlogPosts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      // If there's a search query, prioritize exact matches
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();

        // Check if category matches exactly
        const aCategoryMatch = a.category.toLowerCase() === searchLower;
        const bCategoryMatch = b.category.toLowerCase() === searchLower;

        if (aCategoryMatch && !bCategoryMatch) return -1;
        if (!aCategoryMatch && bCategoryMatch) return 1;

        // Check if any tag matches exactly
        const aTagMatch = a.tags.some(
          (tag) => tag.toLowerCase() === searchLower
        );
        const bTagMatch = b.tags.some(
          (tag) => tag.toLowerCase() === searchLower
        );

        if (aTagMatch && !bTagMatch) return -1;
        if (!aTagMatch && bTagMatch) return 1;
      }

      // Default: maintain original order (by date)
      return b.id - a.id;
    });

  return (
    <div className="min-h-screen">
      {/* Articles Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            All Articles
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Explore all posts about web development, AI, and robotics.
          </p>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="gap-2 bg-transparent"
                onClick={() => setSearchQuery(category.name)}
              >
                <category.icon className={`h-4 w-4 ${category.color}`} />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles by title, content, tags, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* Results Count */}
          {searchQuery && (
            <p className="text-sm text-muted-foreground mb-6">
              Found {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""}
            </p>
          )}

          {/* Articles Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredPosts.map((post) => (
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

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

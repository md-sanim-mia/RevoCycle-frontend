import { Search, Calendar, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCards from "./BlogCard";
import { Helmet } from "react-helmet-async";

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Mountain Biking: From Beginner to Pro",
    excerpt:
      "Discover everything you need to know about mountain biking, from choosing your first bike to mastering advanced techniques on challenging trails.",
    content:
      "Mountain biking is more than just a sport—it's a way to connect with nature...",
    image:
      "https://images.unsplash.com/photo-1544191696-15693072e0b5?w=800&h=500&fit=crop&crop=center",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      bio: "Professional mountain biker and cycling coach",
    },
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Mountain Biking",
    tags: ["beginner", "guide", "mountain biking", "tips"],
    featured: true,
    views: 2847,
    likes: 156,
    comments: 23,
  },
  {
    id: 2,
    title: "Electric Bikes Revolution: The Future of Urban Commuting",
    excerpt:
      "Explore how electric bikes are transforming city transportation with eco-friendly solutions and cutting-edge technology.",
    content: "The urban landscape is changing rapidly...",
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=500&fit=crop&crop=center",
    author: {
      name: "Mike Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      bio: "E-bike specialist and urban mobility expert",
    },
    publishedAt: "2024-01-12",
    readTime: "6 min read",
    category: "Electric Bikes",
    tags: ["electric", "commuting", "urban", "technology"],
    featured: true,
    views: 1923,
    likes: 89,
    comments: 15,
  },
  {
    id: 3,
    title: "Essential Bike Maintenance: Keep Your Ride Running Smooth",
    excerpt:
      "Learn the fundamental maintenance skills every cyclist should know to keep their bike in perfect condition year-round.",
    content: "Regular maintenance is the key to a long-lasting bike...",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&crop=center",
    author: {
      name: "Alex Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      bio: "Certified bike mechanic with 15+ years experience",
    },
    publishedAt: "2024-01-10",
    readTime: "10 min read",
    category: "Maintenance",
    tags: ["maintenance", "repair", "tools", "diy"],
    views: 3156,
    likes: 234,
    comments: 45,
  },
  {
    id: 4,
    title: "Road Cycling vs Mountain Biking: Finding Your Perfect Match",
    excerpt:
      "Compare the thrills and challenges of road cycling versus mountain biking to discover which style suits your personality and goals.",
    content: "Choosing between road cycling and mountain biking...",
    image:
      "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=500&fit=crop&crop=center",
    author: {
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      bio: "Multi-discipline cyclist and sports journalist",
    },
    publishedAt: "2024-01-08",
    readTime: "7 min read",
    category: "Comparison",
    tags: ["road cycling", "mountain biking", "comparison", "guide"],
    views: 1654,
    likes: 78,
    comments: 19,
  },
  {
    id: 5,
    title: "Top 10 Cycling Routes Around the World You Must Experience",
    excerpt:
      "Discover breathtaking cycling destinations from mountain passes to coastal roads that every cycling enthusiast should add to their bucket list.",
    content: "The world is full of incredible cycling routes...",
    image:
      "https://images.unsplash.com/photo-1544191696-15693072e0b5?w=800&h=500&fit=crop&crop=center",
    author: {
      name: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      bio: "Adventure cyclist and travel photographer",
    },
    publishedAt: "2024-01-05",
    readTime: "12 min read",
    category: "Travel",
    tags: ["travel", "routes", "adventure", "destinations"],
    views: 4231,
    likes: 312,
    comments: 67,
  },
  {
    id: 6,
    title: "Bike Safety 101: Essential Gear and Road Rules Every Cyclist Needs",
    excerpt:
      "Master the fundamentals of cycling safety with our comprehensive guide to protective gear, traffic rules, and defensive riding techniques.",
    content: "Safety should always be the top priority...",
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=500&fit=crop&crop=center",
    author: {
      name: "Lisa Park",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      bio: "Cycling safety instructor and advocate",
    },
    publishedAt: "2024-01-03",
    readTime: "5 min read",
    category: "Safety",
    tags: ["safety", "gear", "rules", "protection"],
    views: 2187,
    likes: 145,
    comments: 28,
  },
  {
    id: 7,
    title: "Nutrition for Cyclists: Fuel Your Ride with the Right Foods",
    excerpt:
      "Optimize your cycling performance with expert nutrition advice, meal planning tips, and hydration strategies for rides of any distance.",
    content: "Proper nutrition is crucial for cycling performance...",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&crop=center",
    author: {
      name: "Dr. James Miller",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      bio: "Sports nutritionist and cycling coach",
    },
    publishedAt: "2024-01-01",
    readTime: "9 min read",
    category: "Nutrition",
    tags: ["nutrition", "performance", "health", "diet"],
    views: 1876,
    likes: 98,
    comments: 34,
  },
  {
    id: 8,
    title: "Winter Cycling: How to Keep Riding When the Temperature Drops",
    excerpt:
      "Don't let cold weather stop your cycling routine. Learn essential tips for safe and comfortable winter riding in any climate.",
    content: "Winter doesn't have to mean the end of cycling season...",
    image:
      "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=500&fit=crop&crop=center",
    author: {
      name: "Tom Anderson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      bio: "All-weather cyclist and gear reviewer",
    },
    publishedAt: "2023-12-28",
    readTime: "6 min read",
    category: "Seasonal",
    tags: ["winter", "weather", "gear", "tips"],
    views: 1432,
    likes: 67,
    comments: 12,
  },
  {
    id: 9,
    title: "Building Your First Custom Bike: A Complete Step-by-Step Guide",
    excerpt:
      "Transform your cycling experience by building a custom bike tailored to your exact needs, preferences, and riding style.",
    content: "Building a custom bike is one of the most rewarding...",
    image:
      "https://images.unsplash.com/photo-1544191696-15693072e0b5?w=800&h=500&fit=crop&crop=center",
    author: {
      name: "Rachel Green",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      bio: "Custom bike builder and frame designer",
    },
    publishedAt: "2023-12-25",
    readTime: "15 min read",
    category: "Custom Builds",
    tags: ["custom", "build", "diy", "components"],
    views: 3654,
    likes: 287,
    comments: 89,
  },
];

const categories = [
  { name: "All", count: 9 },
  { name: "Mountain Biking", count: 2 },
  { name: "Electric Bikes", count: 1 },
  { name: "Maintenance", count: 1 },
  { name: "Safety", count: 1 },
  { name: "Travel", count: 1 },
  { name: "Nutrition", count: 1 },
  { name: "Seasonal", count: 1 },
  { name: "Custom Builds", count: 1 },
];

const recentPosts = blogPosts.slice(0, 4);
const popularTags = [
  "mountain biking",
  "electric",
  "maintenance",
  "safety",
  "travel",
  "nutrition",
  "gear",
  "tips",
];

const AllBlogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter and sort posts
  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return (
            new Date(a.publishedAt).getTime() -
            new Date(b.publishedAt).getTime()
          );
        case "popular":
          return b.views - a.views;
        case "trending":
          return b.likes - a.likes;
        default: // newest
          return (
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
          );
      }
    });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  // Pagination
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = regularPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <>
      <Helmet>
        <title>RevoCycle - Blogs </title>
      </Helmet>
      <div>
        <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop&crop=center"
              alt="Cycling Blog"
              className="object-cover"
            />
          </div>

          <div className="relative container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Latest Cycling Insights
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Cycling <span className="text-red-500">Blog</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Expert tips, gear reviews, and inspiring stories from the world
                of cycling
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="search"
                    placeholder="Search articles, tips, reviews..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-6 py-12">
          {/* Featured Posts */}
          {featuredPosts.length > 0 &&
            !searchTerm &&
            selectedCategory === "All" && (
              <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Featured Articles
                  </h2>
                  <Badge className="bg-red-500 text-white">
                    Editor's Choice
                  </Badge>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {featuredPosts.slice(0, 3).map((post, index) => (
                    <BlogCards key={index} post={post} index={index} />
                  ))}
                </div>
              </section>
            )}

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Filters and Controls */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedCategory === "All"
                      ? "All Articles"
                      : selectedCategory}
                  </h2>
                  <span className="text-gray-500">
                    ({filteredPosts.length} articles)
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="trending">Trending</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Mode Toggle */}
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className={
                        viewMode === "grid" ? "bg-black text-white" : ""
                      }
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className={
                        viewMode === "list" ? "bg-black text-white" : ""
                      }
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Blog Posts */}
              {paginatedPosts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                    className="bg-transparent"
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <>
                  <div
                    className={
                      viewMode === "grid"
                        ? "grid md:grid-cols-2 gap-8"
                        : "space-y-6"
                    }
                  >
                    {paginatedPosts.map((post, index) => (
                      <BlogCards
                        key={post.id}
                        index={index}
                        post={post}
                        viewMode={viewMode}
                      />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-12">
                      <Button
                        variant="outline"
                        onClick={() =>
                          setCurrentPage(Math.max(1, currentPage - 1))
                        }
                        disabled={currentPage === 1}
                        className="bg-transparent"
                      >
                        Previous
                      </Button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <Button
                            key={page}
                            variant={
                              currentPage === page ? "default" : "outline"
                            }
                            onClick={() => setCurrentPage(page)}
                            className={
                              currentPage === page
                                ? "bg-black text-white"
                                : "bg-transparent"
                            }
                          >
                            {page}
                          </Button>
                        )
                      )}

                      <Button
                        variant="outline"
                        onClick={() =>
                          setCurrentPage(Math.min(totalPages, currentPage + 1))
                        }
                        disabled={currentPage === totalPages}
                        className="bg-transparent"
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-colors ${
                            selectedCategory === category.name
                              ? "bg-black text-white"
                              : "hover:bg-gray-50 text-gray-700"
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="text-sm">{category.count}</span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Posts */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Recent Posts
                    </h3>
                    <div className="space-y-4">
                      {recentPosts.map((post) => (
                        <Link
                          key={post.id}
                          to={`/blog/${post.id}`}
                          className="group block"
                        >
                          <div className="flex gap-3">
                            <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 group-hover:text-black text-sm line-clamp-2 mb-1">
                                {post.title}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {post.readTime}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearchTerm(tag)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-gradient-to-br from-black to-gray-800 text-white">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Stay Updated</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Get the latest cycling tips and insights delivered to your
                      inbox.
                    </p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                      <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AllBlogs;

"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  User,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
  Heart,
  MessageCircle,
  Bookmark,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Mock blog post data
const blogPost = {
  id: 1,
  title: "The Ultimate Guide to Mountain Biking: Tips for Beginners and Pros",
  slug: "ultimate-guide-mountain-biking-tips",
  excerpt:
    "Discover everything you need to know about mountain biking, from choosing the right bike to mastering advanced techniques on challenging trails.",
  content: `
    <p>Mountain biking is more than just a sport—it's a way to connect with nature, challenge yourself physically and mentally, and experience the thrill of conquering challenging terrain. Whether you're a complete beginner or looking to take your skills to the next level, this comprehensive guide will provide you with everything you need to know.</p>

    <h2>Getting Started: Choosing Your First Mountain Bike</h2>
    <p>The foundation of any great mountain biking experience starts with choosing the right bike. There are several types of mountain bikes, each designed for specific riding styles and terrain:</p>

    <h3>Cross-Country (XC) Bikes</h3>
    <p>Perfect for beginners and those who enjoy long-distance rides on varied terrain. These bikes are lightweight and efficient, making them ideal for climbing and covering ground quickly.</p>

    <h3>Trail Bikes</h3>
    <p>The most versatile option, trail bikes can handle a wide variety of terrain and riding styles. They offer a good balance between climbing efficiency and downhill capability.</p>

    <h3>Enduro/All-Mountain Bikes</h3>
    <p>Designed for aggressive riding and challenging terrain. These bikes feature more suspension travel and are built to handle steep descents and technical features.</p>

    <h2>Essential Gear and Safety Equipment</h2>
    <p>Safety should always be your top priority when mountain biking. Here's a list of essential gear every mountain biker should have:</p>

    <ul>
      <li><strong>Helmet:</strong> A properly fitted helmet is non-negotiable. Look for one specifically designed for mountain biking with good ventilation.</li>
      <li><strong>Protective Gear:</strong> Knee and elbow pads, especially for beginners or when riding technical terrain.</li>
      <li><strong>Gloves:</strong> Improve grip and protect your hands in case of falls.</li>
      <li><strong>Eye Protection:</strong> Sunglasses or clear glasses to protect from debris and UV rays.</li>
      <li><strong>Hydration Pack:</strong> Stay hydrated during long rides with a comfortable hydration pack.</li>
    </ul>

    <h2>Basic Techniques for Mountain Biking</h2>
    <p>Mastering these fundamental techniques will make your rides safer and more enjoyable:</p>

    <h3>Body Position</h3>
    <p>Maintain a neutral riding position with your weight centered over the bike. Keep your elbows and knees slightly bent, and your eyes looking ahead to anticipate obstacles.</p>

    <h3>Braking</h3>
    <p>Use both brakes evenly, with slightly more pressure on the front brake. Practice modulating your braking to avoid skidding and maintain control.</p>

    <h3>Cornering</h3>
    <p>Lean the bike into turns while keeping your body upright. Look through the turn to where you want to go, not at obstacles you want to avoid.</p>

    <h2>Trail Etiquette and Environmental Responsibility</h2>
    <p>As mountain bikers, we have a responsibility to preserve the trails and natural areas we enjoy. Follow these guidelines:</p>

    <ul>
      <li>Yield to hikers and horseback riders</li>
      <li>Stay on designated trails</li>
      <li>Don't ride on muddy trails to prevent erosion</li>
      <li>Pack out all trash</li>
      <li>Respect wildlife and other trail users</li>
    </ul>

    <h2>Building Your Skills Progressively</h2>
    <p>Mountain biking is a skill-based sport that requires patience and practice. Start with easier trails and gradually work your way up to more challenging terrain. Consider taking a skills clinic or riding with more experienced bikers who can provide guidance and tips.</p>
    <p>Remember, every expert was once a beginner. Focus on having fun and enjoying the journey rather than rushing to tackle the most difficult trails. With time, practice, and the right mindset, you'll develop the skills and confidence to tackle any trail.</p>
  `,
  author: {
    name: "Sarah Johnson",
    bio: "Professional mountain biker and certified instructor with over 10 years of experience. Sarah has competed in national championships and now focuses on teaching others the joy of mountain biking.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    social: {
      twitter: "@sarahjohnsonmtb",
      instagram: "@sarahjohnsonmtb",
    },
  },
  publishedAt: "2024-01-15",
  readTime: "8 min read",
  category: "Tips & Guides",
  tags: ["Mountain Biking", "Beginner Guide", "Safety", "Techniques"],
  image:
    "https://images.unsplash.com/photo-1544191696-15693072e0b5?w=1200&h=600&fit=crop&crop=center",
  likes: 142,
  comments: 28,
  shares: 35,
};

// Related posts
const relatedPosts = [
  {
    id: 2,
    title: "Best Electric Bikes for Urban Commuting in 2024",
    excerpt: "Discover the top e-bikes that will transform your daily commute",
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=250&fit=crop&crop=center",
    author: "Mike Chen",
    publishedAt: "2024-01-12",
    readTime: "6 min read",
    category: "Reviews",
  },
  {
    id: 3,
    title: "Essential Bike Maintenance Tips for Every Cyclist",
    excerpt:
      "Keep your bike running smoothly with these expert maintenance tips",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
    author: "Alex Rodriguez",
    publishedAt: "2024-01-10",
    readTime: "5 min read",
    category: "Maintenance",
  },
  {
    id: 4,
    title: "Road Cycling vs Mountain Biking: Which is Right for You?",
    excerpt:
      "Compare the benefits and challenges of road cycling and mountain biking",
    image:
      "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400&h=250&fit=crop&crop=center",
    author: "Emma Wilson",
    publishedAt: "2024-01-08",
    readTime: "7 min read",
    category: "Comparison",
  },
];

// Table of contents
const tableOfContents = [
  {
    id: "getting-started",
    title: "Getting Started: Choosing Your First Mountain Bike",
  },
  { id: "essential-gear", title: "Essential Gear and Safety Equipment" },
  { id: "basic-techniques", title: "Basic Techniques for Mountain Biking" },
  {
    id: "trail-etiquette",
    title: "Trail Etiquette and Environmental Responsibility",
  },
  { id: "building-skills", title: "Building Your Skills Progressively" },
];

export default function BlogDetailPage() {
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById("article-content");
      if (article) {
        const scrollTop = window.scrollY;
        const docHeight = article.offsetHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight);
        const scrollPercentRounded = Math.round(scrollPercent * 100);
        setReadingProgress(Math.min(scrollPercentRounded, 100));
      }

      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sharePost = (platform: string) => {
    const url = window.location.href;
    const title = blogPost.title;

    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <>
      <Helmet>
        <title>RevoCycle - {blogPost ? blogPost.title : "Blog Details"}</title>
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* <ModernNavbar /> */}

        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div
            className="h-full bg-black transition-all duration-150"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        <main>
          {/* Breadcrumb */}
          <div className="bg-gray-50 py-4">
            <div className="container mx-auto px-6">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <Link to="/" className="hover:text-black">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/blog" className="hover:text-black">
                  Blog
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-black">{blogPost.category}</span>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative h-96 bg-black">
            <img
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                  <Badge className="mb-4 bg-white text-black">
                    {blogPost.category}
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {blogPost.title}
                  </h1>
                  <p className="text-xl text-white/90 mb-6 leading-relaxed">
                    {blogPost.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-6 text-white/80">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blogPost.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(blogPost.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blogPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Table of Contents - Desktop */}
              <div className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-black transition-colors py-1"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>

                  {/* Social Share */}
                  <div className="mt-8 pt-8 border-t">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Share Article
                    </h4>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => sharePost("twitter")}
                        className="justify-start bg-transparent"
                      >
                        <Twitter className="w-4 h-4 mr-2" />
                        Twitter
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => sharePost("facebook")}
                        className="justify-start bg-transparent"
                      >
                        <Facebook className="w-4 h-4 mr-2" />
                        Facebook
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => sharePost("linkedin")}
                        className="justify-start bg-transparent"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-6">
                {/* Article Actions */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsLiked(!isLiked)}
                      className={`bg-transparent ${
                        isLiked ? "text-red-500 border-red-500" : ""
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 mr-2 ${
                          isLiked ? "fill-current" : ""
                        }`}
                      />
                      {blogPost.likes + (isLiked ? 1 : 0)}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {blogPost.comments}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      {blogPost.shares}
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`bg-transparent ${
                      isBookmarked ? "text-black border-black" : ""
                    }`}
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        isBookmarked ? "fill-current" : ""
                      }`}
                    />
                  </Button>
                </div>

                {/* Article Content */}
                <article
                  id="article-content"
                  className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-black prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <h4 className="font-semibold text-gray-900 mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-6 bg-gray-50">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src={blogPost.author.avatar || "/placeholder.svg"}
                      />
                      <AvatarFallback>
                        {blogPost.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">
                        {blogPost.author.name}
                      </h4>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {blogPost.author.bio}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">Follow:</span>
                        <a
                          href="#"
                          className="text-sm text-black hover:underline"
                        >
                          {blogPost.author.social.twitter}
                        </a>
                        <a
                          href="#"
                          className="text-sm text-black hover:underline"
                        >
                          {blogPost.author.social.instagram}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-3">
                <div className="sticky top-24 space-y-8">
                  {/* Newsletter Signup */}
                  <div className="p-6 bg-black text-white">
                    <h3 className="font-bold mb-3">Stay Updated</h3>
                    <p className="text-sm text-white/80 mb-4">
                      Get the latest cycling tips and product reviews delivered
                      to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-3 py-2 bg-white text-black text-sm"
                      />
                      <Button className="w-full bg-white text-black hover:bg-gray-100">
                        Subscribe
                      </Button>
                    </div>
                  </div>

                  {/* Popular Posts */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4">
                      Popular Posts
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.slice(0, 3).map((post) => (
                        <Link
                          key={post.id}
                          to={`/blog/${post.id}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <div className="relative w-16 h-16 bg-gray-100 flex-shrink-0">
                              <img
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                className="object-cover"
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group block bg-white"
                  >
                    <div className="relative aspect-[16/10] bg-gray-100 mb-4">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3 bg-gray-100 text-gray-700">
                        {post.category}
                      </Badge>
                      <h3 className="font-bold text-gray-900 group-hover:text-black mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-black text-white hover:bg-gray-800 shadow-lg z-40"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        )}
      </div>
    </>
  );
}

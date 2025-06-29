import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Mountain Biking Beginners",
    excerpt:
      "Starting your mountain biking journey? Here are the essential tips every beginner should know.",
    image:
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=1048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Tips & Guides",
  },
  {
    id: 2,
    title: "The Future of Electric Bikes: What to Expect",
    excerpt:
      "Explore the latest innovations in e-bike technology and what the future holds for electric cycling.",
    image:
      "https://media.istockphoto.com/id/1345667644/photo/asian-chinese-couple-cyclist-enjoy-road-biking-cycling-during-weekend-morning-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=5TvAWYzFTei4ywZdv_DUcnrLNn8P3-K5_wyJZp93PwA=",
    author: "Mike Chen",
    date: "March 12, 2024",
    category: "Technology",
  },
  {
    id: 3,
    title: "Bike Maintenance: Keep Your Ride in Perfect Condition",
    excerpt:
      "Learn the essential maintenance tips to keep your bicycle running smoothly for years to come.",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJpY3ljbGV8ZW58MHx8MHx8fDA%3D",
    author: "Alex Rodriguez",
    date: "March 10, 2024",
    category: "Maintenance",
  },
];

export function BlogSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest cycling tips, product reviews, and
            industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-red-500 hover:text-red-600"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button
              variant="outline"
              size="lg"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 bg-transparent"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

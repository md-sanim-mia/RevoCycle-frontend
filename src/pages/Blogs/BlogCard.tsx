import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Play } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BlogCards = (post: any, index: number) => {
  const blog = post?.post;
  console.log(post);
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div>
      <article
        className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        style={{ animationDelay: `${index * 150}ms` }}
      >
        {/* Premium Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            className={`object-cover transition-all duration-700 ${
              imageLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
            } group-hover:scale-110`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <Badge className="bg-white/90 backdrop-blur-md text-gray-900 hover:bg-white text-sm font-semibold px-4 py-2 border-0 shadow-lg">
              {blog?.category}
            </Badge>
          </div>

          {/* Read Time */}
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Badge className="bg-black/70 backdrop-blur-md text-white text-sm px-3 py-1">
              {blog?.readTime || "5 min read"}
            </Badge>
          </div>

          {/* Play Button for Video blogs */}
          {blog?.type === "video" && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-gray-900 ml-1" />
              </button>
            </div>
          )}
        </div>

        {/* Enhanced Content */}
        <div className="p-8">
          {/* Premium Meta */}
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src={blog?.author.avatar || "/placeholder.svg"}
                  alt={blog?.author.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="font-medium">{blog.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {blog.date}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-red-500 transition-colors duration-300 leading-tight">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
            {blog.excerpt}
          </p>

          {/* Tags */}
          {blog.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.slice(0, 3).map((tag: string, index: number) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Enhanced Read More */}
          <div className="flex items-center justify-between">
            <Link
              to={`/blog/${blog.id}`}
              className="inline-flex cursor-pointer items-center font-semibold text-red-500 hover:text-red-600 transition-colors duration-300 group/link"
            >
              Read Full Article
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
            </Link>

            {/* Engagement Stats */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>{blog.views || "1.2k"} views</span>
              <span>{blog.likes || "24"} likes</span>
            </div>
          </div>
        </div>

        {/* Premium Shine Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>
      </article>
    </div>
  );
};

export default BlogCards;

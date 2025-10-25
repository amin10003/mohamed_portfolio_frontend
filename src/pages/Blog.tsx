import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { ThemeContext } from "../context/ThemeContext";
import api from "../api/axiosConfig";

// ✅ Blog Data Interface
interface BlogData {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string;
  readTime: number;
  featured: boolean;
}

// ✅ Fetch function
const fetchBlogPosts = async (): Promise<BlogData[]> => {
  const { data } = await api.get("/blogs");
  return data;
};

const Blog: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { data: posts, isLoading, isError } = useQuery<BlogData[]>({
    queryKey: ["blogs"],
    queryFn: fetchBlogPosts,
  });

  // Loading state
  if (isLoading)
    return (
      <div
        className={`flex items-center justify-center min-h-screen text-lg ${
          theme === "dark" ? "text-emerald-300" : "text-emerald-600"
        }`}
      >
        Loading blog posts...
      </div>
    );

  // Error state
  if (isError || !posts)
    return (
      <div
        className={`flex items-center justify-center min-h-screen text-lg ${
          theme === "dark" ? "text-red-400" : "text-red-600"
        }`}
      >
        Failed to load blog posts.
      </div>
    );

  return (
    <section
      className={`min-h-screen p-8 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-blue-50 text-gray-800"
      }`}
    >
      <div
        className={`w-full max-w-5xl mx-auto shadow-2xl rounded-3xl p-10 border backdrop-blur-md transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-800/40 border-gray-700 text-gray-200"
            : "bg-white/80 border-gray-300 text-gray-800"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className={`text-4xl font-extrabold mb-2 tracking-wide ${
              theme === "dark" ? "text-emerald-300" : "text-emerald-600"
            }`}
          >
            Blog
          </h1>
          <p
            className={`text-lg italic ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Thoughts, tutorials, and lessons from my frontend development journey
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid sm:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className={`rounded-2xl p-6 border transition-all duration-300 hover:scale-105 shadow-lg ${
                theme === "dark"
                  ? "bg-gray-700/30 border-gray-700 hover:border-emerald-400"
                  : "bg-gray-100/60 border-gray-300 hover:border-emerald-500"
              }`}
            >
              <h2
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-emerald-300" : "text-emerald-600"
                }`}
              >
                {post.title}
              </h2>
              <p
                className={`mb-3 text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {post.excerpt}
              </p>
              
              {/* Tags */}
              {post.tags && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.split(',').map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs rounded-full ${
                        theme === "dark"
                          ? "bg-emerald-900/40 text-emerald-300"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}

              {/* Meta info */}
              <div className={`text-xs mb-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime} min read</span>
                <span className="mx-2">•</span>
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>

              <a
                href={`/blog/${post.id}`}
                className={`text-sm font-medium hover:underline transition-colors duration-300 ${
                  theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                Read more →
              </a>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div
          className={`text-center mt-12 text-sm border-t pt-4 ${
            theme === "dark"
              ? "text-gray-400 border-gray-700"
              : "text-gray-600 border-gray-300"
          }`}
        >
          "Every line of code tells a story — these blogs are mine."
        </div>
      </div>
    </section>
  );
};

export default Blog;

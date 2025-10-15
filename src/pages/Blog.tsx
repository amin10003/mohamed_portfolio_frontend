import React from "react";

const Blog: React.FC = () => (
  <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8">
    <div className="w-full max-w-4xl bg-gray-800/60 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-700 animate-fadeIn text-gray-200">
      <h1 className="text-4xl font-extrabold text-emerald-300 mb-8 text-center tracking-wide">
        Blog
      </h1>
      <div className="space-y-6">
        {[
          {
            title: "How I Built My Portfolio with React & Tailwind",
            link: "#",
            desc: "Step-by-step walkthrough of setting up my portfolio using React, TypeScript, and TailwindCSS.",
          },
          {
            title: "TailwindCSS Tips for Beginners",
            link: "#",
            desc: "Top tips for using Tailwind effectively — from responsive design to custom themes.",
          },
          {
            title: "React Router Made Simple",
            link: "#",
            desc: "Breaking down React Router in an easy-to-understand way with real project examples.",
          },
        ].map((post, idx) => (
          <article
            key={idx}
            className="bg-gray-700/50 rounded-2xl p-6 border border-gray-700 hover:border-emerald-400 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-emerald-400 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-300 mb-2">{post.desc}</p>
            <a
              href={post.link}
              className="text-emerald-300 hover:underline text-sm"
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;

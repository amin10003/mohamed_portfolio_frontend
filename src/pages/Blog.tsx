import React from "react";

const Blog: React.FC = () => (
  <section className="p-6">
    <h1 className="text-3xl font-bold mb-6">Blog</h1>
    <div className="space-y-6">
      <article className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">How I Built My Portfolio with React & Tailwind</h2>
        <p className="text-gray-600 mt-2">
          A step-by-step walkthrough of how I set up my portfolio using React, TypeScript, and TailwindCSS.  
          <a href="#" className="text-blue-600 hover:underline">Read more →</a>
        </p>
      </article>
      <article className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">TailwindCSS Tips for Beginners</h2>
        <p className="text-gray-600 mt-2">
          Sharing my top tips for using Tailwind effectively, including responsive design and custom themes.  
          <a href="#" className="text-blue-600 hover:underline">Read more →</a>
        </p>
      </article>
      <article className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">React Router Made Simple</h2>
        <p className="text-gray-600 mt-2">
          Explaining how routing works in React with real examples from my portfolio project.  
          <a href="#" className="text-blue-600 hover:underline">Read more →</a>
        </p>
      </article>
    </div>
  </section>
);

export default Blog;

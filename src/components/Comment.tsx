"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CommentsSection = () => {
  const [comments, setComments] = useState([
    { name: "Royal Blue", comment: "Please update a little more!" },
    { name: "Noor Mohammad", comment: "Please make your article more focused on the subject." },
  ]);
  const [formData, setFormData] = useState({ name: "", email: "", comment: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.comment) {
      setComments([...comments, { name: formData.name, comment: formData.comment }]);
      setFormData({ name: "", email: "", comment: "" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-24 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
      {/* Header */}
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800 dark:text-gray-200">
        Leave a Comment
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-md shadow-md transition-colors duration-300"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <textarea
          name="comment"
          placeholder="Your Comment"
          value={formData.comment}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300"
        >
          Submit
        </button>
      </form>

      {/* Comments Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Comments
        </h3>
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {comments.map((comment, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-200 dark:bg-gray-700 rounded-md shadow-md transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-purple-600 dark:text-purple-400 font-semibold">{comment.name}:</p>
              <p className="text-gray-800 dark:text-gray-200">{comment.comment}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CommentsSection;

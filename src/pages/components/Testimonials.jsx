import React, { useState } from "react";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    { name: "John Doe", rating: 5, feedback: "Great experience! Highly recommend." },
    { name: "Jane Smith", rating: 4, feedback: "Very professional and kind doctor." },
  ]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && rating && feedback) {
      const newTestimonial = { name, rating: parseInt(rating), feedback };
      setTestimonials([newTestimonial, ...testimonials]);
      setName("");
      setRating("");
      setFeedback("");
    }
  };

  return (
    <section className="bg-gray-100 py-10 px-10">
      <h2 className="text-3xl font-bold text-teal-700 p-4">TESTIMONIALS</h2>
      
      {/* Feedback Form */}
      <form className="bg-white p-6 shadow-md rounded-md mb-6" onSubmit={handleSubmit}>
        <h3 className="text-lg font-semibold mb-4">Share Your Experience</h3>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
          required
        />
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
          required
        >
          <option value="">Select Rating</option>
          <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
          <option value="4">⭐⭐⭐⭐ - Very Good</option>
          <option value="3">⭐⭐⭐ - Good</option>
          <option value="2">⭐⭐ - Fair</option>
          <option value="1">⭐ - Poor</option>
        </select>
        <textarea
          placeholder="Your Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
          rows="3"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-600"
        >
          Submit Feedback
        </button>
      </form>

      {/* Display Testimonials */}
      <div className="grid gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md">
            <h4 className="font-semibold text-teal-700">{testimonial.name}</h4>
            <p className="text-yellow-500">{"⭐".repeat(testimonial.rating)}</p>
            <p className="text-gray-700">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

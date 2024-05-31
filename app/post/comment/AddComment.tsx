"use client"
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddComment = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const FormSubmitHandle = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === "") return toast.error("Enter your name!");
    if (comment === "") return toast.error("Write something!");
    if (comment) return toast.success("Comment success sending!");
    if (name) return toast.success("Comment success sending!");

    // Add your form submission logic here
  };

  return (
    <form method="POST" onSubmit={FormSubmitHandle} className="bg-slate-600 comment-form">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        className="input-field"
        placeholder="Your Name"
      />

      <input
        onChange={(e) => setComment(e.target.value)}
        name="comment"
        className="input-field"
        placeholder="Add your comment..."
      ></input>

      <button type="submit" className="submit-button">
        Send Comment
      </button>
    </form>
  );
};

export default AddComment;

"use client";
import SignUp from "@/components/SignUp";
import { useState } from "react";
import Success from "@/components/Success";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (isSubmitted) {
      setIsSubmitted(false);
      setEmail("");
      return;
    }
    if (!email) {
      setError("Email field cannot be blank");
    } else {
      setIsSubmitted(true);
      setError("");
    }
  };

  return (
    <div className="sm:flex sm:justify-center h-screen sm:items-center">
      {isSubmitted ? (
        <Success email={email} handleSubmit={handleSubmit} />
      ) : (
        <SignUp
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          error={error}
          className="border-4 border-black"
        />
      )}
    </div>
  );
}

"use client";
import SignUp from "@/components/SignUp";
import { useState } from "react";
import Success from "@/components/Success";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setError("Email field cannot be blank");
    } else {
      setIsSubmitted(true);
      setError("");
    }
  };

  return (
    <div className="flex justify-center h-screen items-center">
      {isSubmitted ? (
        <Success email={email} />
      ) : (
        <SignUp
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          error={error}
        />
      )}
    </div>
  );
}

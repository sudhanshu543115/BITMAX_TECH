"use client";

import { useEffect, useState } from "react";

export default function TypingText({ words = [] }) {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Ensure client-only rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || words.length === 0) return;

    const current = words[index];
    let timeout;

    if (!deleting && subIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);
      }, 100);
    } else if (deleting && subIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);
      }, 60);
    } else {
      timeout = setTimeout(() => {
        setDeleting((prev) => !prev);
        if (deleting) {
          setIndex((prev) => (prev + 1) % words.length);
        }
      }, 1200);
    }

    return () => clearTimeout(timeout);
  }, [mounted, subIndex, deleting, index, words]);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <span className="after:content-['|'] after:ml-1 after:animate-pulse">
      {text}
    </span>
  );
}

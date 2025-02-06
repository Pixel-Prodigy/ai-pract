import React, { useState, useEffect } from "react";

export function AppearText({ children, className }) {
  const [appear, setAppear] = useState({
    opacity: 0,
    transform: "translateY(70%)",
  });

  useEffect(() => {
    setAppear({
      opacity: 1,
      transform: "translateY(0)",
    });
  }, []);

  return (
    <div
      className={`font-semibold  font-sans duration-800 transition-all ${className}`}
      style={appear}
    >
      {children}
    </div>
  );
}

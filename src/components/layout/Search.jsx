import React, { useState, useEffect } from "react";
import { AppearText } from "../ui/AppearText";

export function Search() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState({
    opacity: 0,
    transform: "translateY(60%)",
  });
  const API_KEY = import.meta.env.VITE_API_KEY_HUGGINGFACE; // Hugging Face API Key

  useEffect(() => {
    setStyle({ opacity: 1, transform: "translateY(0)" });
  }, []);

  const handleSend = () => {
    if (!input) {
      return;
    }

    setMessages([...messages, { role: "user", text: input }]);
    setLoading(true);

    fetch(
      "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: input,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const aiMessage =
          data[0]?.generated_text || "Sorry, something went wrong.";

        setMessages([
          ...messages,
          { role: "user", text: input },
          { role: "ai", text: aiMessage },
        ]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setMessages([
          ...messages,
          { role: "user", text: input },
          { role: "ai", text: "Sorry, something went wrong." },
        ]);
        setLoading(false);
      });

    setInput("");
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-fit">
      <AppearText className="text-white text-8xl text-center">
        <h1 className="text-white text-6xl text-center mb-4">AI Chat</h1>
      </AppearText>

      <div
        className="w-full flex flex-col gap-8 items-center justify-center h-fit"
        style={{ transition: "opacity 0.5s, transform 0.5s", ...style }}
      >
        <div className="bg-gray-300/80 p-4 rounded-md w-full h-96 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`bg-${
                  message.role === "user" ? "orange" : "blue"
                }-500 text-white p-3 rounded-md max-w-[70%] mt-2`}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="bg-gray-300/80 rounded-md text-white p-4 w-full"
        />

        <button
          className="bg-orange-500 w-36 h-12 rounded-lg ml-6 text-white font-bold hover:bg-transparent hover:border-2 border-orange-500 hover:text-orange-500 transition-colors duration-400 ease-in-out active:scale-105 flex items-center justify-center"
          onClick={handleSend}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </div>
    </div>
  );
}

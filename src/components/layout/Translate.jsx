import React, { useState, useEffect } from "react";
import { AppearText } from "../ui/AppearText";
import { FaClipboard } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function Translate() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState({
    opacity: 0,
    transform: "translateY(60%)",
  });
  const [copied, setCopied] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("hi");
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    setStyle({ opacity: 1, transform: "translateY(0)" });
  }, []);

  const handleSend = () => {
    setLoading(true);

    const modelMap = {
      en: "Helsinki-NLP/opus-mt-en-fr",
      fr: "Helsinki-NLP/opus-mt-fr-en",
      es: "Helsinki-NLP/opus-mt-en-es",
      ja: "Helsinki-NLP/opus-mt-en-ja",
      hi: "Helsinki-NLP/opus-mt-en-hi",
    };

    const model = modelMap[selectedLanguage];

    fetch(`https://api-inference.huggingface.co/models/${model}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: input }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(
          data[0]?.translation_text || "System busy try again later..."
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error("An error:", error);
        setResponse("An error occurred while fetching the response.");
      });
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-fit">
      <AppearText className="text-white text-8xl text-center">
        <h1 className="text-white text-6xl text-center mb-4">
          Text Translator
        </h1>
      </AppearText>

      <div
        className="w-full flex flex-col gap-8 items-center justify-center h-fit"
        style={{ transition: "opacity 0.5s, transform 0.5s", ...style }}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your text to translate here"
          className="bg-gray-300/80 rounded-md text-white p-4 w-full"
        />

        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="bg-gray-300/80 ml-5 text-white p-2  rounded-md"
        >
          <option value="en">French to English</option>
          <option value="es">English to Spanish</option>
          <option value="ja">English to Japanese</option>
          <option value="hi">English to Hindi</option>
          <option value="fr">English to French</option>
        </select>

        <button
          className="bg-orange-500 w-36 h-12 rounded-lg ml-6 text-white font-bold hover:bg-transparent hover:border-2 border-orange-500 hover:text-orange-500 transition-colors duration-400 ease-in-out active:scale-105 flex items-center justify-center"
          onClick={handleSend}
          disabled={loading}
        >
          {loading ? "Processing..." : "Translate"}
        </button>
        {response && (
          <div className="bg-gray-300/80 p-4 rounded-md w-full text-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-orange-500 text-xl">Translated Text:</h3>
              <CopyToClipboard text={response}>
                <button className="flex items-center text-white mt-4 underline cursor-pointer hover:text-orange-500">
                  <FaClipboard className="mr-2" />
                  Copy to Clipboard
                </button>
              </CopyToClipboard>
            </div>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

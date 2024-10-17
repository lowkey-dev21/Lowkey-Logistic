import React, { useState, useEffect } from "react";

const TextAnimation = () => {
  const [typedText, setTypedText] = useState("");
  const text = "Welcome to  LOWKEY Logistic.";
  const interval = 100; // Delay between each character in milliseconds

  const typingRender = (text, updater, interval) => {
    let localTypingIndex = 0;
    let localTyping = "";
    if (text) {
      let printer = setInterval(() => {
        if (localTypingIndex < text.length) {
          updater((localTyping += text[localTypingIndex]));
          localTypingIndex += 1;
        } else {
          localTypingIndex = 0;
          localTyping = " ";
          clearInterval(printer);
        }
      }, interval);
    }
  };

  useEffect(() => {
    typingRender(text, setTypedText, interval);
  }, [text, interval]);

  // Function to apply lime color to "LOWKEY"
  const applyLimeColor = (word) => {
    return word === "LOWKEY" ? <span style={{ color: 'lime' }}>{word}</span> : word;
  };

  // Split typedText into words and apply lime color to "LOWKEY"
  const words = typedText.split(" ").map(applyLimeColor);

  return (
    <span className="flex text-xl justify-center w-full font-bold text-center">
      {words.map((word, index) => (
        <React.Fragment key={index}>
          {word}
          {index < words.length - 1 && " "} {/* Add space after each word except the last one */}
        </React.Fragment>
      ))}
    </span>
  );
};

export default TextAnimation;

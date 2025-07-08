import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
  speed = 100,
  delay = 2000
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Start deleting after delay
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Move to next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, speed, delay]);

  return (
    <div className="text-2xl md:text-3xl text-gray-300 font-mono">
      {displayText}
      <span className="animate-pulse text-yellow-400">|</span>
    </div>
  );
};

export default TypingAnimation;
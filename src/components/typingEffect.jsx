import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!text || text.length === 0) {
      setIsTyping(false);
      return;
    }
  
    setDisplayedText(''); // Reset state before starting typing effect
  
    let index = -1;
    const lastIndex = text.length - 1;
  
    const interval = setInterval(() => {
      index += 1;
      setDisplayedText((prevText) => prevText + text[index]);
  
      if (index === lastIndex) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, speed);
  
    return () => clearInterval(interval);
  }, [text, speed]);
  

  return (
    <div>
      <span>{displayedText}</span>
      {isTyping && <span className="cursor">|</span>}  {/* Show cursor while typing */}
    </div>
  );
};

export default TypingEffect;

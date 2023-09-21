import { useState, useEffect, useRef } from "react";

export const useCursorTracker = (targetRef) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (targetRef.current) {
        const bounds = targetRef.current.getBoundingClientRect();
        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;
        const x = e.clientX - bounds.left - centerX;
        const y = e.clientY - bounds.top - centerY;;
        setCursorPos({ x, y});
    }
  };

  const handleMouseLeave = (e) => {
    setCursorPos({ x: 0, y: 0 });
  }

  useEffect( () => {
    const targetElement = targetRef.current;

    if (targetElement) {
        targetElement.addEventListener('mousemove', handleMouseMove);
        targetElement.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            targetElement.removeEventListener('mousemove', handleMouseMove);
            targetElement.removeEventListener('mouseleave', handleMouseLeave);
        }
    }
  }, [targetRef]);

  return cursorPos;
};

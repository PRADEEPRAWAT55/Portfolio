'use client';

import { useState, useEffect } from 'react';

export const useScrollSection = (sectionIds: string[], offset = 100) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout  | null = null;

    const handleScroll = () => {
      if (timeoutId) return; // Skip if a timeout is already set

      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY + offset;

        for (const sectionId of sectionIds) {
          const section = document.getElementById(sectionId);
          if (!section) continue;

          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }

        timeoutId = null; // Reset timeout   
      }, 100); // Adjust the delay as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [sectionIds, offset]);

  return activeSection;
};
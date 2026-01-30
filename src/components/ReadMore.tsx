"use client";

import { useEffect, useRef, useState } from 'react';

type ReadMoreProps = {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  clamp?: number;
};

export default function ReadMore({ children, className = '', clamp = 3 }: ReadMoreProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState<number | null>(null);
  const [fullHeight, setFullHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const computeHeights = () => {
      const cs = getComputedStyle(el);
      const lineHeight = parseFloat(cs.lineHeight || '18');
      const clampedH = lineHeight * clamp;
      setCollapsedHeight(clampedH);
      // expand fully to measure
      setFullHeight(el.scrollHeight);
      setShowToggle(el.scrollHeight > clampedH + 1);
    };

    computeHeights();
    const ro = new ResizeObserver(() => computeHeights());
    ro.observe(el);
    window.addEventListener('resize', computeHeights);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', computeHeights);
    };
  }, [children, clamp]);

  const currentMax = expanded ? (fullHeight ?? undefined) : (collapsedHeight ?? undefined);

  return (
    <div ref={ref}>
      <div
        ref={contentRef}
        className={`${className} leading-relaxed overflow-hidden`}
        style={{
          maxHeight: currentMax ? `${currentMax}px` : undefined,
          transition: 'max-height 280ms ease',
        }}
        aria-expanded={expanded}
      >
        {children}
      </div>

      {showToggle && (
        <button
          onClick={() => setExpanded((s) => !s)}
          className="mt-2 text-sm text-blue-400 hover:text-blue-300 font-medium"
          aria-label={expanded ? 'Show less' : 'Read more'}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
}

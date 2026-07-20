import React from 'react';

export interface WrappedSvgTextProps {
  x: number;
  y: number;
  lines: string[];
  lineHeight: number;
  textAnchor?: "start" | "middle" | "end";
  className?: string;
  fill?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;
}

export function WrappedSvgText({
  x,
  y,
  lines,
  lineHeight,
  textAnchor = "middle",
  className,
  fill,
  fontSize,
  fontWeight,
  fontFamily
}: WrappedSvgTextProps) {
  if (!lines || lines.length === 0) return null;

  return (
    <text
      x={x}
      y={y}
      textAnchor={textAnchor}
      className={className}
      fill={fill}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
    >
      {lines.map((line, index) => (
        <tspan
          key={`${line}-${index}`}
          x={x}
          dy={index === 0 ? 0 : lineHeight}
        >
          {line}
        </tspan>
      ))}
    </text>
  );
}

import React from 'react';
import { LayoutMessage } from '../layout/sequenceLayoutEngine';
import { WrappedSvgText } from '../layout/wrapSvgText';

interface Props {
  message: LayoutMessage;
  isActive: boolean;
  isFaded: boolean;
  markerPrefix: string;
  onClick?: () => void;
}

export function SequenceMessage({ message, isActive, isFaded, markerPrefix, onClick }: Props) {
  const { sourceX, targetX, y, isSelf, sequence, label, textLayout, messageType } = message;

  const isResponse = messageType === 'response';
  const isError = messageType === 'error';
  const isEvent = messageType === 'event';
  
  let strokeColor = "#0f172a"; // default dark
  if (isActive) strokeColor = "#0d9488"; // raia-turquoise
  else if (isResponse) strokeColor = "#64748b"; // slate
  else if (isError) strokeColor = "#ef4444"; // red
  else if (isEvent) strokeColor = "#ca8a04"; // yellow

  let markerEnd = `url(#${markerPrefix}-arrow-filled)`;
  if (isActive) markerEnd = `url(#${markerPrefix}-arrow-active)`;
  else if (isResponse) markerEnd = `url(#${markerPrefix}-arrow-response)`;
  else if (isError) markerEnd = `url(#${markerPrefix}-arrow-error)`;

  let strokeDasharray = "0";
  if (isResponse || isEvent) strokeDasharray = "6,4";

  const opacity = isFaded ? 0.35 : 1;
  const strokeWidth = isActive ? "2.5" : "1.5";

  // Calculate text vertical position
  const textY = y - textLayout.height - 4;

  return (
    <g 
      data-testid="sequence-message"
      onClick={onClick}
      className="cursor-pointer transition-opacity duration-200"
      style={{ opacity }}
    >
      {/* Hitbox for easier clicking */}
      <rect 
        x={Math.min(sourceX, targetX) - 10} 
        y={y - Math.max(30, textLayout.height + 10)} 
        width={Math.max(Math.abs(targetX - sourceX) + 20, isSelf ? 80 : 0)} 
        height={Math.max(40, textLayout.height + 20)} 
        fill="transparent" 
      />

      {isSelf ? (
        <path 
          d={`M ${sourceX} ${y} L ${sourceX + 30} ${y} L ${sourceX + 30} ${y + 15} L ${sourceX} ${y + 15}`} 
          fill="none" 
          stroke={strokeColor} 
          strokeWidth={strokeWidth} 
          markerEnd={markerEnd} 
          strokeDasharray={strokeDasharray} 
        />
      ) : (
        <line 
          x1={sourceX} 
          y1={y} 
          x2={targetX} 
          y2={y} 
          stroke={strokeColor} 
          strokeWidth={strokeWidth} 
          markerEnd={markerEnd} 
          strokeDasharray={strokeDasharray} 
        />
      )}

      {/* Badge sequence number */}
      {isActive && (
        <rect
          x={isSelf ? sourceX + 2 : (sourceX + targetX) / 2 - textLayout.width / 2 - 24}
          y={textY - 10}
          width="18"
          height="14"
          rx="3"
          fill="#f0fdfa"
          stroke="#0d9488"
          strokeWidth="1"
        />
      )}

      <text 
        x={isSelf ? sourceX + 5 : (sourceX + targetX) / 2 - textLayout.width / 2 - 15} 
        y={textY + 1} 
        fontSize="11" 
        fontWeight="bold" 
        fill={strokeColor}
        fontFamily="sans-serif"
      >
        [{sequence}]
      </text>

      <WrappedSvgText
        x={isSelf ? sourceX + 35 : (sourceX + targetX) / 2}
        y={textY + 1}
        lines={textLayout.lines}
        lineHeight={textLayout.lineHeight}
        textAnchor={isSelf ? "start" : "middle"}
        fontSize="12"
        fontWeight={isActive ? "bold" : "normal"}
        fill={strokeColor}
        fontFamily="sans-serif"
      />
      
      <title>[{sequence}] {label}{message.description ? `\n\n${message.description}` : ''}</title>
    </g>
  );
}

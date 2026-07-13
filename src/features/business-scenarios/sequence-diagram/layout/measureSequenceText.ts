export interface WrappedTextMeasurement {
  lines: string[];
  width: number;
  height: number;
  lineHeight: number;
}

let canvasContext: CanvasRenderingContext2D | null = null;

function getCanvasContext(): CanvasRenderingContext2D {
  if (!canvasContext && typeof document !== 'undefined') {
    const canvas = document.createElement('canvas');
    canvasContext = canvas.getContext('2d');
  }
  return canvasContext as CanvasRenderingContext2D;
}

export function measureAndWrapText(
  text: string,
  options: {
    font: string;
    maxWidth: number;
    lineHeight: number;
    maxLines?: number;
  }
): WrappedTextMeasurement {
  const { font, maxWidth, lineHeight, maxLines } = options;
  const ctx = getCanvasContext();
  
  if (!ctx) {
    // Fallback heurístico para SSR
    const estCharWidth = parseInt(font, 10) * 0.6 || 8;
    const maxCharsPerLine = Math.floor(maxWidth / estCharWidth);
    
    const words = text.split(' ');
    let currentLine = '';
    const lines: string[] = [];
    
    for (const word of words) {
      if ((currentLine + ' ' + word).length <= maxCharsPerLine) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    
    const resultLines = maxLines && lines.length > maxLines 
      ? [...lines.slice(0, maxLines - 1), lines[maxLines - 1] + '...']
      : lines;
      
    return {
      lines: resultLines,
      width: Math.min(maxWidth, Math.max(...resultLines.map(l => l.length * estCharWidth))),
      height: resultLines.length * lineHeight,
      lineHeight
    };
  }

  ctx.font = font;
  
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = words[0] || '';
  let maxLineWidth = ctx.measureText(currentLine).width;

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine + ' ' + word;
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && i > 0) {
      lines.push(currentLine);
      currentLine = word;
      const wordMetrics = ctx.measureText(word);
      if (wordMetrics.width > maxLineWidth) maxLineWidth = wordMetrics.width;
    } else {
      currentLine = testLine;
      if (testWidth > maxLineWidth) maxLineWidth = testWidth;
    }
  }
  
  if (currentLine) {
    lines.push(currentLine);
  }

  const resultLines = maxLines && lines.length > maxLines 
    ? [...lines.slice(0, maxLines - 1), lines[maxLines - 1] + '...']
    : lines;

  return {
    lines: resultLines,
    width: maxLineWidth,
    height: resultLines.length * lineHeight,
    lineHeight
  };
}

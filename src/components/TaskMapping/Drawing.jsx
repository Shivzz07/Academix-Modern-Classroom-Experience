import { Wallpaper } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { ReactSketchCanvas } from "react-sketch-canvas";



const PRESET_BACKGROUNDS = [
  { label: 'Transparent', value: 'transparent', pattern: true },
  { label: 'White',       value: '#ffffff',     pattern: false },
  { label: 'Black',       value: '#000000',     pattern: false },
  { label: 'Navy',        value: '#0f172a',     pattern: false },
];

const STROKE_SIZES = [2, 5, 10, 18];
const ERASER_SIZES = [8, 16, 28, 44];

const Drawing = ({ setremove, closewin, wallpaper }) => {
  const canvasRef     = useRef(null);
  const colorInputRef = useRef(null);
  const overlayRef = useRef(null)


  const [strokeColor, setStrokeColor] = useState('#ffffff');
  const [canvasColor, setCanvasColor] = useState('transparent');
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [eraserWidth, setEraserWidth] = useState(16);
  const [eraseMode,   setEraseMode]   = useState(false);
  const [saving,      setSaving]      = useState(false);

  const activatePen = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  };
  const activateEraser = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  };

  
//  console.log(typeof(wallpaper))
  //   const handleSave = async () => {
  //   const dataUrl = await canvasRef.current?.exportImage('png');
  //   if (!dataUrl) return;
  //   const a = document.createElement('a');
  //   a.href     = dataUrl;
  //   a.download = 'drawing.png';
  //   a.click();
  // };
const handleSave = async () => {
  // Export the user's drawing — transparent where nothing was drawn
  const drawingDataUrl = await canvasRef.current?.exportImage('png');
  if (!drawingDataUrl) return;

  // Plain background chosen (not transparent) → nothing to merge, just save the drawing
  if (canvasColor !== 'transparent') {
    const a = document.createElement('a');
    a.href     = drawingDataUrl;
    a.download = 'drawing.png';
    a.click();
    return;
  }

  // Transparent background → merge rotated wallpaper underneath the drawing
  const loadImg = (src) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload  = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load wallpaper at "${src}"`));
      img.src = src;
    });

  try {
    const bgImg = await loadImg(wallpaper);

    const merged  = document.createElement('canvas');
    merged.width  = bgImg.naturalWidth;
    merged.height = bgImg.naturalHeight;
    const ctx = merged.getContext('2d');

    // Layer 1 — wallpaper, rotated 180°
    ctx.save();
    ctx.translate(merged.width, merged.height);
    ctx.rotate(Math.PI); // 180°
    ctx.drawImage(bgImg, 0, 0);
    ctx.restore();

    // Layer 2 — user's drawing, scaled to match wallpaper dimensions (not rotated)
    const drawImg = await loadImg(drawingDataUrl);
    ctx.drawImage(drawImg, 0, 0, merged.width, merged.height);

    // Download merged result
    const a    = document.createElement('a');
    a.href     = merged.toDataURL('image/png');
    a.download = 'drawing.png';
    a.click();

  } catch (err) {
    console.error('Save failed:', err);
  }
};


  
  
  const pill    = 'flex items-center gap-2 bg-gray-200 rounded-full px-3 py-2';
  const iconBtn = (active) =>
    `flex items-center justify-center w-8 h-8 rounded-full transition-all duration-150 ${
      active
        ? 'bg-gray-800 text-white shadow-sm'
        : 'text-gray-400 hover:text-gray-700 hover:bg-gray-300'
    }`;

  return (
    <div ref={overlayRef} className='w-full h-full absolute z-[9999]'> {/* ← ref added */}

  
      <div className='absolute top-3 left-1/2 -translate-x-1/2 z-[10000] flex items-center gap-2.5'>

      
        <div className={pill}>
          {PRESET_BACKGROUNDS.map((bg) => (
            <button
              key={bg.value}
              title={bg.label}
              onClick={() => setCanvasColor(bg.value)}
              className='rounded-full transition-transform hover:scale-110 focus:outline-none flex-shrink-0 relative overflow-hidden'
              style={{
                width:  canvasColor === bg.value ? 22 : 18,
                height: canvasColor === bg.value ? 22 : 18,
                backgroundColor: bg.pattern ? undefined : bg.value,
                border: canvasColor === bg.value
                  ? '2.5px solid #374151'
                  : '1.5px solid rgba(0,0,0,0.2)',
                backgroundImage: bg.pattern
                  ? 'linear-gradient(45deg,#aaa 25%,transparent 25%),' +
                    'linear-gradient(-45deg,#aaa 25%,transparent 25%),' +
                    'linear-gradient(45deg,transparent 75%,#aaa 75%),' +
                    'linear-gradient(-45deg,transparent 75%,#aaa 75%)'
                  : undefined,
                backgroundSize:     bg.pattern ? '6px 6px'                    : undefined,
                backgroundPosition: bg.pattern ? '0 0,0 3px,3px -3px,-3px 0' : undefined,
              }}
            />
          ))}
        </div>

        <Divider />

        <div className={pill}>
          <button
            title="Stroke colour"
            onClick={() => colorInputRef.current?.click()}
            className='relative rounded-full overflow-hidden border-[1.5px] border-black/20 hover:scale-110 transition-transform focus:outline-none flex-shrink-0'
            style={{
              width: 20, height: 20,
              background: 'conic-gradient(#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#a855f7,#ec4899,#ef4444)',
            }}
          >
            <input
              ref={colorInputRef}
              type="color"
              value={strokeColor}
              onChange={(e) => { setStrokeColor(e.target.value); activatePen(); }}
              className='absolute inset-0 opacity-0 cursor-pointer w-full h-full'
            />
          </button>
          <div
            className='w-4 h-4 rounded-full border border-black/20 flex-shrink-0'
            style={{ backgroundColor: strokeColor }}
          />
        </div>

        <Divider />

        <div className={pill}>
          <button title="Pen" onClick={activatePen} className={iconBtn(!eraseMode)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="w-[15px] h-[15px]">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
            </svg>
          </button>
          <button title="Eraser" onClick={activateEraser} className={iconBtn(eraseMode)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="w-[15px] h-[15px]">
              <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/>
              <path d="M22 21H7"/>
              <path d="m5 11 9 9"/>
            </svg>
          </button>
        </div>

        <Divider />

      
        <div className={`${pill} gap-3`}>
          <span className='text-gray-400 text-[10px] uppercase tracking-wider select-none'>
            {eraseMode ? 'Erase' : 'Size'}
          </span>
          {(eraseMode ? ERASER_SIZES : STROKE_SIZES).map((s, i) => {
            const active  = eraseMode ? eraserWidth === s : strokeWidth === s;
            const dotSize = 8 + i * 5;
            return (
              <button
                key={s}
                title={`${s}px`}
                onClick={() => eraseMode ? setEraserWidth(s) : setStrokeWidth(s)}
                className='rounded-full transition-all hover:scale-110 focus:outline-none flex-shrink-0'
                style={{
                  width:           dotSize,
                  height:          dotSize,
                  backgroundColor: active ? '#1f2937' : 'rgba(0,0,0,0.2)',
                  boxShadow:       active ? '0 0 0 2px rgba(55,65,81,0.4)' : 'none',
                }}
              />
            );
          })}
        </div>

        <Divider />

        {/* SAVE — shows spinner while merging */}
        <button
          onClick={handleSave}
          disabled={saving}
          title="Screenshot background + save drawing"
          className='flex items-center gap-1.5 bg-gray-200 text-gray-500 hover:text-gray-800 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-wait rounded-full px-4 py-2 transition-all duration-150 text-xs font-medium'
        >
          {saving ? (
          
            <svg className="w-3.5 h-3.5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
          )}
          {saving ? 'Saving…' : 'Save'}
        </button>

        <button
          onClick={closewin}
          className='flex items-center gap-1.5 bg-gray-200 text-gray-500 hover:text-gray-800 hover:bg-gray-300 rounded-full px-4 py-2 transition-all duration-150 text-xs font-medium'
        >
          Close
        </button>
      </div>

      
      <div className='w-full absolute z-[9999]'>
        <ReactSketchCanvas
          ref={canvasRef}
          width="100%"
          height="630px"
          canvasColor={canvasColor}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
          eraserWidth={eraserWidth}
        />
      </div>
    </div>
  );
};

const Divider = () => (
  <div className='w-px h-5 bg-gray-400/40 flex-shrink-0' />
);

export default Drawing;
"use client";
/**
 * Cursor — pure render, no logic.
 * MasterScene.jsx drives all position & class updates via the RAF loop.
 */
export default function Cursor() {
  return (
    <>
      {/* Main ring cursor — 52px default, snaps to mouse instantly */}
      <div id="cursor-ring" className="cursor-ring" style={{ opacity: 0 }}>
        <span id="cursor-arrow" className="cursor-arrow" />
      </div>

      {/* Trailing dot — 5px default, lerps at 0.14 */}
      <div id="cursor-dot" className="cursor-dot" style={{ opacity: 0 }} />
    </>
  );
}

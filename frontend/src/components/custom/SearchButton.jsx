import { useState } from "react";

export default function SearchButton() {
  const [showSubButton, setShowSubButton] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Main Button */}
      <button
        onClick={() => setShowSubButton(!showSubButton)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Click Me
      </button>

      {/* Sub-Button (Conditionally Rendered) */}
      {showSubButton && (
        <button className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition">
          Sub Button
        </button>
      )}
    </div>
  );
}

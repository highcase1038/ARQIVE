import React from "react";

export default function StoryCategory(
  { category, pinError, onTouchStart, onTouchMove, onTouchEnd, children },
) {
  let categoryColor = (category === 1)
    ? "#e01783"
    : (category === 2)
    ? "#00ce7d"
    : (category === 3)
    ? "#248dc1"
    : pinError
    ? "#e63f52"
    : "grey";
  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        transition: "background-color 0.5s ease-in-out",
        backgroundColor: categoryColor,
        height: "56px",
      }}
    >
      <div
        style={{
          width: 30,
          height: 6,
          backgroundColor: "#e6e6e6",
          borderRadius: 3,
          position: "absolute",
          top: 8,
          left: "calc(50% - 15px)",
        }}
      />
      {children}
    </div>
  );
}

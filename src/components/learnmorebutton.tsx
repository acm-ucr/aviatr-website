import React from "react";

type LearnMoreButtonProps = {
  color: string; // Icon color
};

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ color }) => {
  return (
    <>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#333", // Dark background
          color: "#fff", // White text
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        <span style={{ marginRight: "8px" }}>LEARN MORE</span>
        {/* Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
      <LearnMoreButton color="purple" />
      <LearnMoreButton color="blue" />
      <LearnMoreButton color="red" />
    </>
  );
};

export default LearnMoreButton;

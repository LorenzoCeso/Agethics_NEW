import React from 'react';

interface AIAgentIconProps {
  size?: number;
  className?: string;
}

const AIAgentIcon: React.FC<AIAgentIconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Head/Face Circle */}
      <circle
        cx="12"
        cy="10"
        r="6"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      
      {/* AI Circuit Pattern in Head */}
      <path
        d="M9 8h6M10 10h4M9 12h6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      
      {/* Eyes - Digital/AI Style */}
      <circle cx="10" cy="9" r="1" fill="currentColor" />
      <circle cx="14" cy="9" r="1" fill="currentColor" />
      
      {/* Neural Network Connections */}
      <path
        d="M8 6l-2-2M16 6l2-2M6 10l-2 0M18 10l2 0M8 14l-2 2M16 14l2 2"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
      
      {/* Body/Torso */}
      <path
        d="M12 16v6M9 18h6M10 20h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Digital Pulse Effect */}
      <circle
        cx="12"
        cy="10"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.3"
        strokeDasharray="2 4"
      />
    </svg>
  );
};

export default AIAgentIcon;
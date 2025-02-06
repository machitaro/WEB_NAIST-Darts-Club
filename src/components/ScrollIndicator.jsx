import React from "react";

export const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="relative h-14 flex justify-center">
          <div 
            className="absolute w-0.5 bg-main animate-[lineMotion_1.5s_ease-in-out_infinite] left-1/2 -translate-x-1/2"
          />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2" style={{bottom: "37px"}}>
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                <path d="M2 2L10 10L18 2" fill="none" stroke="#194E73" strokeWidth="2"/>
            </svg>
        </div>
      </div>

      <p className="text-main text-base tracking-wider">
        スクロール
      </p>
    </div>
  );
};
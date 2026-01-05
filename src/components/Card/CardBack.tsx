"use client";

import { CardEdge } from "./CardEdge";
import { Star } from "./Star";

interface UserCardProps {
  onFlip?: () => void;
}

export function CardBack({ onFlip }: UserCardProps) {
  // 固定値のデータを表示
  const displayText = "ONNENAI PORTFOLIO";
  const username = "onnenai_w57";

  return (
    <div className="@container w-full min-w-[300px] aspect-[1.62/1] mx-auto font-inter rounded-lg shadow-md p-[5%] flex flex-col justify-center bg-slate-50 relative">
      <div className="absolute w-[13%] h-[13%] top-[20%] left-[15%] text-slate-400">
        <Star />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="h-[70%] flex justify-center items-center aspect-square bg-slate-50 p-3">
          <div className="text-slate-600 text-center font-bold text-[clamp(14px,3cqw,20px)] leading-tight">
            {displayText}
          </div>
        </div>
      </div>
      <div className="absolute w-[10%] h-[10%] bottom-[20%] right-[15%] text-slate-500">
        <Star />
      </div>
      <CardEdge 
        className="absolute bottom-[5%] right-[5%] text-slate-400 cursor-pointer" 
        onClick={onFlip} 
      />
    </div>
  );
}
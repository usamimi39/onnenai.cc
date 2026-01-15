"use client";

import { CardEdge } from "./CardEdge";
import { Star } from "./Star";

interface UserCardProps {
  onFlip?: () => void;
}

export function CardBack({ onFlip }: UserCardProps) {
  // 固定値のデータを表
  return (
    <div className="@container w-full min-w-75 aspect-[1.62/1] mx-auto font-inter rounded-md shadow-md p-[5%] flex flex-col justify-center bg-white relative">
      <div className="absolute w-[13%] h-[13%] top-[20%] left-[15%] text-slate-400">
        <Star />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-[80%] flex justify-center items-center bg-white p-3">
          <div className="text-slate-600 text-center font-bold text-[clamp(14px,3cqw,20px)] leading-tight">
            <p className="font-bold text-lg gap-2 py-none">
              Contact
            </p>
            <p className="font-normal text-lg gap-2 py-1">
              info@onnenai.cc
            </p>
          </div>
        </div>
      </div>
      <div className="absolute w-[10%] h-[10%] bottom-[20%] right-[15%] text-slate-500">
        <Star />
      </div>
      <CardEdge 
        className="absolute bottom-[4%] right-[3%] text-slate-400 cursor-pointer" 
        onClick={onFlip} 
      />
    </div>
  );
}
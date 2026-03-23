"use client";

import { ReactNode, MouseEvent } from "react";
import { event } from "@/lib/gtag";

type Props = {
  action: string;
  category: string;
  label?: string;
  children: ReactNode;
};

export default function TrackClick({ action, category, label, children }: Props) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    event({ action, category, label });
    // Don't prevent default — let the link/button proceed
  };

  return (
    <div onClick={handleClick} className="contents">
      {children}
    </div>
  );
}

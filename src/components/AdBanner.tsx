import React, { useEffect } from "react";

interface AdBannerProps {
  variant?: 'standard' | 'large';
}

export function AdBanner({ variant = 'standard' }: AdBannerProps) {
  // To integrate real AdSense or other ad network:
  // 1. Add their script tag to index.html 
  // 2. Replace this component with their provided ad slot code
  // Example for Google AdSense:
  /*
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-4 overflow-hidden">
      <ins className="adsbygoogle"
           style={{ display: "inline-block", width: variant === 'large' ? "300px" : "320px", height: variant === 'large' ? "250px" : "50px" }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXX"></ins>
    </div>
  );
  */

  const isLarge = variant === 'large';

  return (
    <div className={`w-full flex justify-center items-center bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 py-4 my-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 text-xs text-center shadow-sm ${isLarge ? 'min-h-[250px]' : ''}`}>
      <div className="flex flex-col items-center gap-1">
        <span className="font-bold uppercase tracking-wider text-[10px]">
          Advertisement
        </span>
        <span>Ad Space {isLarge ? '(300x250)' : '(320x50)'}</span>
      </div>
    </div>
  );
}

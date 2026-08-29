"use client";
import { Phone } from "lucide-react";

const messages = [
  "📞 Call us: +234-8135734743",
  "📞 Hotline: 08168246868",
  "✅ Certified Marine & Industrial Equipment for Hire",
  "⚡ 24-Hour Quote Response — Port Harcourt, Rivers State",
  "🔗 Email: ovwetaglobal@gmail.com",
];


export default function AnnouncementBar() {
  return (
    <div className="bg-amber-500 text-steel-950 overflow-hidden h-9 flex items-center fixed top-0 left-0 right-0 z-50">
      {/* Scrolling ticker */}
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Duplicate the messages so the scroll loops seamlessly */}
        {[...messages, ...messages].map((msg, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-xs font-bold tracking-wide px-8">
            {msg}
            <span className="text-steel-950/30 ml-6">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
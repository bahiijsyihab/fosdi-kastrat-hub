import React from 'react';
import { Gavel, PenTool, Landmark, LockKeyholeOpen } from 'lucide-react';

const iconMap = {
  Gavel: Gavel,
  PenTool: PenTool,
  Landmark: Landmark,
  LockKeyholeOpen: LockKeyholeOpen,
};

export default function ImpactTicker({ metrics }) {
  return (
    <section className="w-full bg-primary text-on-primary py-6 sm:py-8 border-y border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => {
            const Icon = iconMap[m.icon] || Gavel;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-primary-container/70 border border-emerald-700/40 shadow-sm hover:bg-primary-container transition-all group"
              >
                <div className="p-3 rounded-lg bg-secondary-fixed text-on-secondary-fixed shadow-sm group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl lg:text-3xl font-extrabold tracking-tight text-secondary-fixed">
                    {m.value}
                  </span>
                  <span className="text-xs text-primary-fixed uppercase tracking-wider font-bold mt-0.5">
                    {m.label}
                  </span>
                  <p className="text-xs text-primary-fixed-dim/90 mt-1 leading-snug">
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { serviceData } from "../data/support"

const Supports: React.FC = () => {
  return (
    <section className="wrapper bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
          {serviceData.map((val: ServiceItem, index: number) => (
            <div
              key={index}
              className={`feature p-6 rounded-2xl shadow-sm border-4 border-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${val.bg} text-center min-h-[200px] flex flex-col items-center justify-center`}
            >
              {/* Icon Circle */}
              <div className="icon w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm hover:bg-slate-200 transition-colors mx-auto">
                <div className="w-10 h-10 text-slate-700 flex items-center justify-center">
                  {/* Replace with actual Heroicons */}
                  {val.icon === "ShippingFastIcon" && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7l6 6-6 6" />
                    </svg>
                  )}
                  {val.icon === "CreditCardIcon" && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  )}
                  {val.icon === "ShieldCheckIcon" && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {val.icon === "LifebuoyIcon" && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mx-auto mb-4 leading-tight">
                {val.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                {val.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supports;

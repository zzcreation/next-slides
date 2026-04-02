"use client";

import { useState } from "react";

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
}

export default function Slides({ slides }: { slides: Slide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Slide Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-8 py-16">
        <div className="max-w-4xl w-full">
          <div className="card">
            <div className="label">Slide {currentSlide + 1} / {slides.length}</div>
            <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight">
              {slides[currentSlide].title}
            </h1>
            <div className="text-lg text-gray-700 leading-relaxed">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              currentSlide === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            ← 上一页
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide
                    ? "bg-emerald-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              currentSlide === slides.length - 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            下一页 →
          </button>
        </div>
      </div>
    </div>
  );
}
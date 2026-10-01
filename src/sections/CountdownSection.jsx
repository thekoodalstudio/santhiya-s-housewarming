import React, { useState, useEffect } from "react";
import { eventData } from "../data/eventData";
import { Sparkles } from "lucide-react";

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const targetDate = new Date(eventData.eventDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown-section">
      <div className="section-label">
        <Sparkles className="w-3.5 h-3.5 text-[#C59A45]" />
        <span>Counting Down To The Joyous Day</span>
        <Sparkles className="w-3.5 h-3.5 text-[#C59A45]" />
      </div>

      <h3 className="font-tamil text-xl sm:text-2xl font-bold text-[#4A0E1C] mb-2">
        இறை ஆசீர்வாதத்தின் தொடக்கம்
      </h3>

      {timeLeft.isPassed ? (
        <div className="bg-[#FFFDF9] rounded-2xl p-6 border-2 border-[#D4AF37] max-w-md mx-auto shadow-md">
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#4A0E1C] mb-1">
            Today is the Blessed Day! ✨
          </h4>
          <p className="font-tamil text-sm sm:text-base text-[#8B263E] font-medium">
            இன்றே இறைவனின் அருள் நிறைந்த நன்னாள்!
          </p>
        </div>
      ) : (
        <div className="countdown-grid">
          {/* Days */}
          <div className="countdown-box">
            <span className="countdown-digit">{timeLeft.days}</span>
            <span className="countdown-unit-en">Days</span>
            <span className="countdown-unit-ta">நாட்கள்</span>
          </div>

          {/* Hours */}
          <div className="countdown-box">
            <span className="countdown-digit">{timeLeft.hours}</span>
            <span className="countdown-unit-en">Hours</span>
            <span className="countdown-unit-ta">மணி</span>
          </div>

          {/* Minutes */}
          <div className="countdown-box">
            <span className="countdown-digit">{timeLeft.minutes}</span>
            <span className="countdown-unit-en">Mins</span>
            <span className="countdown-unit-ta">நிமிடம்</span>
          </div>

          {/* Seconds */}
          <div className="countdown-box">
            <span className="countdown-digit">{timeLeft.seconds}</span>
            <span className="countdown-unit-en">Secs</span>
            <span className="countdown-unit-ta">வினாடி</span>
          </div>
        </div>
      )}
    </section>
  );
}

import confetti from "canvas-confetti";

export function fireGoldenCelebration() {
  // First burst with gold and rose colors
  confetti({
    particleCount: 60,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#D4AF37", "#F3E5AB", "#8B263E", "#FAF6F0", "#C59A45"]
  });

  // Second delayed burst from left and right
  setTimeout(() => {
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#D4AF37", "#E6C875", "#8B263E"]
    });
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#D4AF37", "#E6C875", "#8B263E"]
    });
  }, 250);
}

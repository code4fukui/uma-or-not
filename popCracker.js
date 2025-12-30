import { confetti } from "https://code4fukui.github.io/confetti-es/confetti.js";

export const popCracker = () => {
  const opt = {
    particleCount: 150,
    startVelocity: 70,
    angle: 70,
    spread: 30,
    origin: { x: 0, y : 1 },
  };
  confetti(opt);
  opt.angle = 180 - opt.angle;
  opt.origin.x = 1;
  confetti(opt);
};

import { animate } from "https://cdn.jsdelivr.net/npm/animejs/+esm";

export function entrada() {
  //Test
  animate(".window", {
    scale: [0.9, 1],
    opacity: [0, 1],
  });
}

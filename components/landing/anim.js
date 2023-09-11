export const slideUp = {
  initial: {
    y: 200,
    opacity: 0,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
    opacity: 1,
  },
};

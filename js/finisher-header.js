new FinisherHeader({
  count: 50,
  size: {
    min: 2,
    max: 8,
    pulse: 0,
  },
  speed: {
    x: {
      min: 0,
      max: 0.3,
    },
    y: {
      min: 0,
      max: 0.3,
    },
  },
  colors: {
    background: "#201e3000",
    particles: ["#ffc04a"],
  },
  blending: "screen",
  opacity: {
    center: 1,
    edge: 0,
  },
  skew: 0,
  shapes: ["c"],
});

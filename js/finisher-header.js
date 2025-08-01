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
      max: 0.1,
    },
    y: {
      min: 0,
      max: 0.2,
    },
  },
  colors: {
    background: "#201e3000",
    particles: ["#7bf2e2", "#eeff92", "#ffa455"],
  },
  blending: "screen",
  opacity: {
    center: 1,
    edge: 0,
  },
  skew: 0,
  shapes: ["c"],
});

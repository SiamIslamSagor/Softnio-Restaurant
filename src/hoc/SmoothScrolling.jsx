import ReactLenis from "lenis/react";

// import ReactLenis from "lenis/dist/lenis-react.js";

function SmoothScrolling({ children }) {
  const lenisOptions = {
    lerp: 0.05,
    duration: 1,
    smoothTouch: false,
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;

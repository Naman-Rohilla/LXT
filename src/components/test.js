// import React from "react";

// const test = () => {
//   return (
//     <div style={styles.container}>
//       <div style={{ ...styles.section, backgroundColor: "#ff5733" }}>
//         Component 1
//       </div>
//       <div style={{ ...styles.section, backgroundColor: "#33c4ff" }}>
//         Component 2
//       </div>
//       <div style={{ ...styles.section, backgroundColor: "#75ff33" }}>
//         Component 3
//       </div>
//     </div>
//   );
// };

// // Inline styles
// const styles = {
//   container: {
//     height: "300vh", // Total height for the viewport to enable scrolling
//   },
//   section: {
//     height: "100vh", // Each section takes the full viewport height
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: "2rem",
//     color: "white",
//     position: "sticky",
//     top: 0,
//     zIndex: 1, // Ensures the sections stack correctly
//   },
// };

// export default test;

// --------------------------------------------------------- scroll effect

import React, { useRef, useEffect } from "react";
import "./test.scss";

const ScrollSync = () => {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  const handleScroll = (e) => {
    const target = e.target;
    const scrollRatio =
      target.scrollTop / (target.scrollHeight - target.clientHeight);

    if (target === box1Ref.current) {
      box2Ref.current.scrollTop =
        scrollRatio *
        (box2Ref.current.scrollHeight - box2Ref.current.clientHeight);
      box3Ref.current.scrollTop =
        scrollRatio *
        (box3Ref.current.scrollHeight - box3Ref.current.clientHeight);
    } else if (target === box2Ref.current) {
      box1Ref.current.scrollTop =
        scrollRatio *
        (box1Ref.current.scrollHeight - box1Ref.current.clientHeight);
      box3Ref.current.scrollTop =
        scrollRatio *
        (box3Ref.current.scrollHeight - box3Ref.current.clientHeight);
    } else if (target === box3Ref.current) {
      box1Ref.current.scrollTop =
        scrollRatio *
        (box1Ref.current.scrollHeight - box1Ref.current.clientHeight);
      box2Ref.current.scrollTop =
        scrollRatio *
        (box2Ref.current.scrollHeight - box2Ref.current.clientHeight);
    }
  };

  useEffect(() => {
    const box1 = box1Ref.current;
    const box2 = box2Ref.current;
    const box3 = box3Ref.current;

    box1.addEventListener("scroll", handleScroll);
    box2.addEventListener("scroll", handleScroll);
    box3.addEventListener("scroll", handleScroll);

    return () => {
      box1.removeEventListener("scroll", handleScroll);
      box2.removeEventListener("scroll", handleScroll);
      box3.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-sync">
      <div className="box" ref={box1Ref}>
        Box 1 content...
      </div>
      <div className="box" ref={box2Ref}>
        Box 2 content...
      </div>
      <div className="box" ref={box3Ref}>
        Box 3 content...
      </div>
    </div>
  );
};

export default ScrollSync;

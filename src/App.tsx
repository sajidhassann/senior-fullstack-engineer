import { useEffect, useState } from "react";
import clock from "./assets/outer-cl.svg";
import dark_strokes from "./assets/lg-strokes.svg";
import light_strokes from "./assets/sm-strokes.svg";
import hr_hand from "./assets/hr-hand.svg";
import min_hand from "./assets/min-hand.svg";
import sec_hand from "./assets/sec-hand.svg";
import "./App.css";

function App() {
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSec((sec) => (sec + 6) % 360);
      setMin((min) => (min + 0.1) % 360);
      setHr((hr) => (hr + 0.00833) % 360);
    }, 1000); // if timer set to 100, you can see the clock move faster
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img
        src={clock}
        style={{
          transform: "translateX(19%)",
        }}
      />
      <img
        src={light_strokes}
        style={{
          transform: "translateX(-95.5%) translateY(-1%)",
        }}
      />
      <img
        src={dark_strokes}
        style={{
          transform: `translateX(-195.5%) translateY(-1%) rotate(${30}deg)`,
        }}
      />
      <div
        style={{
          transform: `translateX(-532%) rotateZ(${sec}deg)`,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={sec_hand}
          style={{
            transform: "translateY(-23%) rotateZ(-120deg)",
          }}
        />
        <img src={sec_hand} style={{ opacity: 0 }} />
      </div>
      <div
        style={{
          transform: `translateX(-643%) rotateZ(${min}deg)`,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={min_hand}
          style={{
            transform: "translateY(-3%) rotateZ(-51.5deg)",
          }}
        />
        <img src={min_hand} style={{ opacity: 0 }} />
      </div>
      <div
        style={{
          transform: `translateX(-1100%) rotateZ(${hr}deg)`,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={hr_hand}
          style={{
            transform: "translateY(7%) rotateZ(48deg)",
          }}
        />
        <img src={hr_hand} style={{ opacity: 0 }} />
      </div>
      {/* <img
        src={min_hand}
        style={{
          position: "absolute",
          transform: `translateX(130%) translateY(86%) rotate(${min}deg)`,
        }}
      />
      <img
        src={hr_hand}
        style={{
          position: "absolute",
          transform: `translateX(130%) translateY(150%) rotate(${hr}deg)`,
        }}
      /> */}
    </div>
  );
}

export default App;

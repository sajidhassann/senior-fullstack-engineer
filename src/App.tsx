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
      setSec((sec) => (sec + 1) % 60);
      setMin((min) => (min + 1) % (60 * 60));
      setHr((hr) => (hr + 1) % (12 * 60 * 60));
    }, 1000);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <img src={clock} style={{ position: "absolute" }} />
      <img
        src={light_strokes}
        style={{
          position: "absolute",
          transform: "translateX(18%) translateY(17%)",
        }}
      />
      <img
        src={dark_strokes}
        style={{
          position: "absolute",
          transform: "translateX(18%) translateY(17%) rotate(30deg)",
        }}
      />
      <img
        src={sec_hand}
        style={{
          position: "absolute",
          transform: "translateX(109%) translateY(197%)",
        }}
      />
      <img
        src={min_hand}
        style={{
          position: "absolute",
          transform: "translateX(130%) translateY(86%)",
        }}
      />
      <img
        src={hr_hand}
        style={{
          position: "absolute",
          transform: "translateX(130%) translateY(150%)",
        }}
      />
    </div>
  );
}

export default App;

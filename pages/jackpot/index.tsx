import SliderComponent from "@/componets/slider/slider";
import styles from "./styles.module.css";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { Slider } from "@/types/types";
import Link from "next/link";

export default function JackpotPage() {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [spins, setSpins] = useState(0);
  const [wins, setWins] = useState<string[]>([]);
  const [sliders, setSliders] = useState<Slider[]>([
    {
      id: "A",
      spinning: false,
      result: -1,
    },
    {
      id: "B",
      spinning: false,
      result: -1,
    },
    {
      id: "C",
      spinning: false,
      result: -1,
    },
  ]);

  const pullLever = () => {
    if (!isSpinning && spins > 0) {
      setIsSpinning(true);
      setSpins(spins - 1);

      sliders.forEach((slider) => {
        slider.spinning = true;
        slider.result = Math.floor(Math.random() * 13);
      });
      setSliders(sliders);
      setTimeout(() => {
        checkWins();
      }, 2500);

      setTimeout(() => {
        stopSpinning();
      }, 4000);
    }
  };

  const checkWins = () => {
    var valueArr = sliders.map(function (item) {
      return item.result;
    });
    const notDuplicatesAmount = new Set(valueArr).size;
    switch (notDuplicatesAmount) {
      case 1:
        wins.unshift("JACKPOT");
        setWins(wins);
        break;
      case 2:
        wins.unshift("DOUBLE");
        setWins(wins);
        break;
      default:
        break;
    }
  };

  const stopSpinning = () => {
    setSliders((sliders) =>
      sliders.map((slider) => ({
        ...slider,
        spinning: false,
      }))
    );
    setIsSpinning(false);
  };

  return (
    <div className={styles.pageContainer}>
      <Link href='/'>X</Link>
      <h1>Jackpot</h1>
      <div className={styles.container}>
        <div className={styles.slidersContainer}>
          {sliders &&
            sliders.map((slider) => (
              <SliderComponent key={slider.id} slider={slider} />
            ))}
        </div>
        <div className={styles.leverContainer}>
          <div>
            <div className={`${styles.top} ${isSpinning ? styles.pull : ""}`}>
              <div className={styles.ball} onClick={pullLever}></div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.screw}></div>
            </div>
          </div>
          <div className={styles.coinsContainer}>
            <h2>{spins} coins</h2>
            <button onClick={() => setSpins(spins + 1)}>Insert coin</button>
          </div>
        </div>
      </div>
      <div className={styles.winsContainer}>
        {wins &&
          wins
            .slice(0, 3)
            .map((win, index) => <p key={win + index}>- {win}</p>)}
      </div>
    </div>
  );
}

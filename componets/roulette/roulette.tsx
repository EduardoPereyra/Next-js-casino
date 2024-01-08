import { Results } from "@/types/Results";
import { useState, useRef, useEffect } from "react";
import styles from "./roulette.module.css";
import Image from "next/image";

export default function RouletteComponent() {
  const [isSpinning, setIsSpinning] = useState(false);
  const ballRef = useRef<HTMLDivElement>(null);
  const totalSlots = 37;
  const results = new Results();

  useEffect(() => {
    const spinDuration = 5000; // Adjust the spin duration as needed
    const spins = 5;

    if (isSpinning && ballRef.current) {
      const result = Math.floor(Math.random() * totalSlots);
      ballRef.current.style.display = "block";
      console.log(results.results[result]);

      const spinInterval = setInterval(() => {
        if (ballRef.current) {
          const rotation =
            ((result % totalSlots) / totalSlots) * 360 + 360 * spins; // Include the number of spins in the rotation

          ballRef.current.style.transform = `rotate(${rotation}deg)`;
        }
      }, 10);
      setTimeout(() => {
        clearInterval(spinInterval);
        if (ballRef.current) {
          ballRef.current.style.transform = `rotate(0)`;
          ballRef.current.style.display = "none";
        }
        setIsSpinning(false);
      }, spinDuration);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSpinning]);

  return (
    <div className={styles.rouletteContainer}>
      <Image
        src={`/assets/roulette-hd-2.png`}
        alt={"roulette"}
        width={600}
        height={600}
      />
      <div className={styles.ball} ref={ballRef}></div>
      <div className={styles.betContainer}>
        <button
          onClick={() => {
            setIsSpinning(true);
          }}
        >
          Spin
        </button>
      </div>
    </div>
  );
}

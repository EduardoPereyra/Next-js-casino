import { Slider } from "@/types/types";
import styles from "./slider.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  slider: Slider;
};
const imagesNames = [
  "bar",
  "clover",
  "casino-roulette",
  "cocktail",
  "chip",
  "poker-cards",
  "croupier",
  "diamond",
  "dice",
  "gold-bars",
  "heart-card",
  "jackpot",
  "poker",
];

export default function SliderComponent({ slider }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const imagesSize = 100;
  const totalSlots = 39;
  const imagePadding = 50;
  const imagesNamesMultiple = imagesNames.concat(
    imagesNames.concat(imagesNames)
  );

  useEffect(() => {
    const spinDuration = 3000; // Adjust the spin duration as needed

    if (sliderRef.current && slider.spinning) {
      const spinInterval = setInterval(() => {
        if (sliderRef.current) {
          const offset =
            ((slider.result % totalSlots) + totalSlots) *
              (imagesSize + imagePadding) -
            (totalSlots / 2) * (imagesSize + imagePadding);

          sliderRef.current.style.transform = `translateY(-${offset}px)`;
        }
      }, 50); // Adjust the interval duration for smoother animation

      // Clear the interval after the spin duration
      setTimeout(() => {
        clearInterval(spinInterval);
        if (sliderRef.current) {
          sliderRef.current.style.transform = `translateY(0)`;
        }
      }, spinDuration);
    }
  }, [slider.result, slider.spinning]);

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack} ref={sliderRef}>
        {imagesNamesMultiple &&
          imagesNamesMultiple.map((image, index) => (
            <div className={styles.slide} key={`${image}_${index}`}>
              <Image
                src={`/assets/${image}.png`}
                alt={image}
                width={imagesSize}
                height={imagesSize}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

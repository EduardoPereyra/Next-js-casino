import styles from "./styles.module.css";
import Link from "next/link";
import BetTableComponent from "@/componets/bet-table/bet-table";
import RouletteComponent from "@/componets/roulette/roulette";

export default function RoulettePage() {
  return (
    <div className={styles.pageContainer}>
      <Link href='/'>X</Link>
      <h1>Roulette</h1>
      <RouletteComponent />
      <BetTableComponent slider={undefined} />
    </div>
  );
}

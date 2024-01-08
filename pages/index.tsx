import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href='/jackpot'>Jackpot</Link>
        </li>
        <li>
          <Link href='/roulette'>Roulette</Link>
        </li>
      </ul>
    </div>
  );
}

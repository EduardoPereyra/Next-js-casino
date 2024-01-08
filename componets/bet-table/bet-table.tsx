import { BetTableValuesList } from "@/types/BetTableValues";
import styles from "./bet-table.module.css";
import { BetTableValue } from "@/types/types";

type Props = {
  slider: any;
};

export default function BetTableComponent({ slider }: Props) {
  const betTable = new BetTableValuesList();

  const addBet = (number: any) => {
    console.log(JSON.stringify(number));
  };

  return (
    <div className={styles.betTableContainer}>
      <table>
        <tbody>
          {betTable.results.map((bet, index) => (
            <tr key={index}>
              {bet.numbers.map((number: BetTableValue, index: number) => (
                <td
                  key={index}
                  colSpan={number.value !== undefined ? bet.sizeCol : 1}
                  style={number.value === undefined ? { border: "none" } : {}}
                >
                  {number.value !== undefined && (
                    <button onClick={() => addBet(number)}>
                      <span
                        style={
                          number.color === "r"
                            ? { backgroundColor: "#cd061b" }
                            : number.color === "b"
                            ? { backgroundColor: "#1b1b1b" }
                            : {}
                        }
                      >
                        {number.value}
                      </span>
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

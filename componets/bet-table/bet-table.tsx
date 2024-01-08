import styles from "./bet-table.module.css";

type Props = {
  slider: any;
};

export default function BetTableComponent({ slider }: Props) {
  const betTable = [
    {
      sizeCol: 1,
      numbers: [
        // "00",
        undefined,
        {
          value: "3",
          color: "r",
        },
        {
          value: "6",
          color: "b",
        },
        {
          value: "9",
          color: "r",
        },
        {
          value: "12",
          color: "b",
        },
        {
          value: "15",
          color: "r",
        },
        {
          value: "18",
          color: "b",
        },
        {
          value: "21",
          color: "r",
        },
        {
          value: "24",
          color: "b",
        },
        {
          value: "27",
          color: "r",
        },
        {
          value: "30",
          color: "b",
        },
        {
          value: "33",
          color: "r",
        },
        {
          value: "36",
          color: "b",
        },
        { value: "2 to 1", color: "" },
      ],
    },
    {
      sizeCol: 1,
      numbers: [
        {
          value: "0",
          color: "",
        },
        {
          value: "2",
          color: "b",
        },
        {
          value: "5",
          color: "r",
        },
        {
          value: "8",
          color: "b",
        },
        {
          value: "11",
          color: "r",
        },
        {
          value: "14",
          color: "b",
        },
        {
          value: "17",
          color: "r",
        },
        {
          value: "20",
          color: "b",
        },
        {
          value: "23",
          color: "r",
        },
        {
          value: "26",
          color: "b",
        },
        {
          value: "29",
          color: "r",
        },
        {
          value: "32",
          color: "b",
        },
        {
          value: "35",
          color: "r",
        },
        { value: "2 to 1", color: "" },
      ],
    },
    {
      sizeCol: 1,
      numbers: [
        // "00",
        undefined,
        {
          value: "1",
          color: "r",
        },
        {
          value: "4",
          color: "b",
        },
        {
          value: "7",
          color: "r",
        },
        {
          value: "10",
          color: "b",
        },
        {
          value: "13",
          color: "r",
        },
        {
          value: "16",
          color: "b",
        },
        {
          value: "19",
          color: "r",
        },
        {
          value: "22",
          color: "b",
        },
        {
          value: "25",
          color: "r",
        },
        {
          value: "28",
          color: "b",
        },
        {
          value: "31",
          color: "r",
        },
        {
          value: "34",
          color: "b",
        },
        { value: "2 to 1", color: "" },
      ],
    },
    {
      sizeCol: 4,
      numbers: [
        undefined,
        { value: "1st 12", color: "" },
        { value: "2nd 12", color: "" },
        { value: "3rd 12", color: "" },
      ],
    },
    {
      sizeCol: 2,
      numbers: [
        undefined,
        { value: "1 - 18", color: "" },
        ,
        { value: "EVEN", color: "" },
        { value: "R", color: "r" },
        { value: "B", color: "b" },
        { value: "ODD", color: "" },
        { value: "19 - 36", color: "" },
      ],
    },
  ];

  const addBet = (number: any) => {
    console.log(JSON.stringify(number));
  };

  return (
    <div className={styles.betTableContainer}>
      <table>
        <tbody>
          {betTable.map((bet, index) => (
            <tr key={index}>
              {bet.numbers.map((number, index) => (
                <td
                  key={index}
                  colSpan={number !== undefined ? bet.sizeCol : 1}
                  style={number === undefined ? { border: "none" } : {}}
                >
                  {number !== undefined && (
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

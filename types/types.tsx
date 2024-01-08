export interface Slider {
  id: string;
  spinning: boolean;
  result: number;
}

export interface RouletteResult {
  value: number;
  color: string;
}

export interface BetTableValues {
  sizeCol: number;
  numbers: BetTableValue[];
}

export interface BetTableValue {
  value: string | undefined;
  color: string;
}

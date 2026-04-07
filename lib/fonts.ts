import { Crimson_Text, Instrument_Serif, Jost } from "next/font/google";

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export const bodySerif = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const labelSans = Jost({
  subsets: ["latin"],
  weight: ["500", "600"],
});

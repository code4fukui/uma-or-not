import { CSV } from "https://js.sabae.cc/CSV.js";
import { shuffle } from "https://js.sabae.cc/shuffle.js";

const data = await CSV.fetchJSON("https://code4fukui.github.io/horse-opendata/idiom4.csv");

const questions = data.map(i => ({
  full: i.四字熟語,
  missingIndex: i.四字熟語.indexOf(i.動物),
  isUma: i.動物 == "馬",
  reading: i.読み,
  meaning: i.簡単な意味,
}));

shuffle(questions);

export const getQuestions = () => questions;

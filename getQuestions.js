  const questions = [
  {
    full: "千軍万馬",
    missingIndex: 3, // 「馬」を隠す（0:千 1:軍 2:万 3:馬）
    isUma: true,
    reading: "せんぐんばんば",
    meaning: "多くの実戦経験を積んだ、強くて頼もしい人や軍勢のこと。"
  },
  {
    full: "意馬心猿",
    missingIndex: 1, // 「馬」を隠す
    isUma: true,
    reading: "いばしんえん",
    meaning: "心があちこちへ走り回って落ち着かないさま。欲望に振り回されること。"
  },
  {
    full: "竹馬之友",
    missingIndex: 1, // 「馬」を隠す
    isUma: true,
    reading: "ちくばのとも",
    meaning: "子どものころからの親しい友達。幼なじみ。"
  },
  {
    full: "電光石火",
    missingIndex: 2, // 「石」を隠す
    isUma: false,
    reading: "でんこうせっか",
    meaning: "とても素早いこと。あっという間の出来事。"
  },
  {
    full: "一期一会",
    missingIndex: 0, // 「一」を隠す
    isUma: false,
    reading: "いちごいちえ",
    meaning: "一生に一度だけの出会いと思って、人とのご縁を大切にすること。"
  },
  {
    full: "起死回生",
    missingIndex: 3, // 「生」を隠す
    isUma: false,
    reading: "きしかいせい",
    meaning: "絶望的な状況から一気に立ち直ること。"
  },
  {
    full: "東奔西走",
    missingIndex: 1, // 「奔」を隠す
    isUma: false,
    reading: "とうほんせいそう",
    meaning: "あちらこちらと忙しく走り回ること。"
  },
  {
    full: "和気藹々",
    missingIndex: 2, // 「藹」を隠す
    isUma: false,
    reading: "わきあいあい",
    meaning: "なごやかで楽しい雰囲気に満ちているさま。"
  }
];

export const getQuestions = () => questions;

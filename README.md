# uma-or-not: 四字熟語クイズ 馬か否か

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A New Year-themed web quiz game about Japanese four-character idioms (四字熟語). Guess whether the missing animal character in the idiom is '馬' (horse) or not!

## Demo

Play the game here: **https://github.com/code4fukui/uma-or-not

## How to Play

1.  An idiom is shown with one character missing (e.g., `□食虎皮`).
2.  The missing character is always an animal. Your task is to guess if it's a horse.
3.  Click the **「馬」** (Uma) button if you think it's a horse.
4.  Click the **「否」** (Ina) button if you think it's a different animal.
5.  See the correct answer and your score, then proceed to the next question!

## Features

-   A simple, single-file HTML application with no build process.
-   Randomly selects questions from a dataset of animal-related idioms.
-   Festive, New Year-inspired user interface.
-   Sound effects for correct, incorrect, and next-question actions.
-   A fun confetti effect celebrates correct answers.
-   Tracks your total score and current winning streak.

## Credits and Attributions

This project is made possible by the following open data and resources:

### Data

-   **Animal Idioms:** [idiom4.csv](https://github.com/code4fukui/horse-opendata/blob/main/idiom4.csv) from the [horse-opendata](https://github.com/code4fukui/horse-opendata/) project.

### Sound Effects

-   All sound effects are from [効果音ラボ](https://soundeffect-lab.info/).
    -   Correct Answer: [sound-ok.mp3](sound-ok.mp3) (from クイズ正解1.mp3)
    -   Incorrect Answer: [sound-ng.mp3](sound-ng.mp3) (from クイズ不正解1.mp3)
    -   Next Question: [sound-next.mp3](sound-next.mp3) (from 和太鼓でドドン.mp3)

### Libraries

-   **Confetti Effect:** [confetti-es](https://github.com/code4fukui/confetti-es)
-   **CSV Parsing & Utilities:** [CSV.js](https://js.sabae.cc/CSV.js) and [shuffle.js](https://js.sabae.cc/shuffle.js)

## License

[MIT](LICENSE)
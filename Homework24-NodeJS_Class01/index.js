import figlet from "figlet";
import chalk from "chalk";

export function generateArtText(text, font) {
  console.log(chalk.red(text));
  console.log(
    figlet.textSync("You done did it!", {
      font: font,
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );
}

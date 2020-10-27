let height = prompt('Яка висота ялиник: ', 5);

let i = 0, j = 0;
let space = "";
let star = "";

while (i < height) {
  space = "";
  star = "";
  for (j = 0; j < height - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) star += "*";
  console.log(space + star);
  i++;
}
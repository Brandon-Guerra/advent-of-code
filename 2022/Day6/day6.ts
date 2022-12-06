import buffer from "./input";

const characters = buffer.split("");

for (let index = 0; index < characters.length; index++) {
  const set = new Set();
  for (let j = index; j < index + 14; j++) {
    set.add(characters[j]);
  }
  if (set.size == 14) {
    console.log(index + 14);
    break;
  }
}

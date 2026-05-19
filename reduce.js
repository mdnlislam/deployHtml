const users = [
  { id: 1, name: "Rakib" },
  { id: 2, name: "Hasan" },
];

const obj = users.reduce((acc, cur) => {
  acc[cur.id] = cur.name;
  return acc;
}, {});
console.log(obj);

const word = ["I", "Love", "js"];

const sentence = word.reduce((acc, cur) => {
  acc = acc + " " + cur;
  return acc;
}, "");

console.log(sentence);

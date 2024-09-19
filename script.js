alert("Lets try to guess an animal");

alert("You have 5 attempts");

const animals = [
  {
    name: "Elephant",
    hints: [
      "I am the largest land animal.",
      "I have big ears that help me stay cool.",
      "I have a long trunk which I use to grab things.",
      "I live in the savanna and forests.",
      "I have tusks made of ivory.",
    ],
  },
  {
    name: "Giraffe",
    hints: [
      "I have the longest neck of all land animals.",
      "I can eat leaves high up in trees.",
      "I live in Africa.",
      "I am known for my long legs and neck.",
      "My fur has a pattern of spots.",
    ],
  },
  {
    name: "Lion",
    hints: [
      "I am often called the king of the jungle.",
      "I live in prides with other members of my species.",
      "The males have a big, bushy mane.",
      "I hunt in groups called prides.",
      "I roar to communicate with others.",
    ],
  },
];

const randomAnim = Math.floor(Math.random() * animals.length);
let attempt = animals[randomAnim].hints.length;
let remainAtt = attempt;
let answer = null;

for (let index = 0; index < attempt; index++) {
  alert(animals[randomAnim].hints[index]);
  answer = prompt(animals[randomAnim].hints[index]);

  let chosedAnim = animals[randomAnim].name.toLowerCase();

  if (chosedAnim === answer.toLowerCase()) {
    alert(" Congrats you win");
    break;
  } else {
    remainAtt--;

    if (remainAtt > 0) {
      alert(`You have ${remainAtt} left`);
    } else {
      alert(`You lost right answer is ${chosedAnim}`);
      break;
    }
  }
}

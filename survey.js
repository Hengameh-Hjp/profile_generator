
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let str2ask = ["What's your name? Nicknames are also acceptable :)\n",
"What's an activity you like doing?\n",
"What do you listen to while doing that?\n",
"Which meal is your favourite (eg: dinner, brunch, etc.)\n",
"What's your favourite thing to eat for that meal?\n",
"Which sport is your absolute favourite?\n",
"What is your superpower? In a few words, tell us what you are amazing at!\n\n"]
rl.question(str2ask[0], (name) => {
  rl.question(str2ask[1], (activity) => {
    rl.question(str2ask[2], (meal) => {
      rl.question(str2ask[3], (favourite) => {
        rl.question(str2ask[4], (sport) => {
          rl.question(str2ask[5], (superpower) => {
  console.log(`${name} likes doing ${activity} and eat ${meal} with ${favourite} and do ${sport}. \n His/her super power is ${superpower}`);
  rl.close();
})
})
})
})
})
});

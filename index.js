//import required packages

const chalk = require('chalk');
var readlineSync = require("readline-sync");

//Initial score

score = 0

//Welcome note

console.log(chalk.yellowBright("So, You call yourself an anime fan?\nLet's see how much you know about Naruto(The Anime) \n\n"))
console.log(chalk.yellowBright("Try to answer truthfully without looking at the code. \n\n"))

//greetings / take username

var userName = readlineSync.question((chalk.magentaBright("What is your name senpai? ")))
console.log(chalk.cyanBright("\nKonnichiwa! " + userName + "\nYou're going to be tested rigorously, Stay on your toes!\n\n"))

//Rules

console.log(chalk.yellowBright("---------------------------------------------------\n"))

//Let's see if you can beat the high score

console.log(chalk.redBright("Rules: \n1. -2 for wrong answer.\n2. +5 for correct answer.\n3. There are 4 levels (Each level is tougher than before).\n4. You need to complete the previous level before continuing to the next one.\n"))
//Leader board

console.log(chalk.greenBright("Leader board:\n1. Akansha - 26 Points!\n2. Swapnil - 18 Points!\n3. Mihir - 13 Points!\n"))
console.log(chalk.yellowBright("---------------------------------------------------\n"))

//ask the user if he want to play

var userInterested = readlineSync.question(chalk.green("Are you ready?\n(Press 'y' to continue or 'n' to stop)\n\n"))
if (userInterested === "y") {
  console.log(chalk.blue("\nSweet! Let's begin.\n"))

  function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toLowerCase() === answer) {
      score = score + 5;
      console.log(chalk.green("That's correct!"))
      console.log(chalk.cyan("Score: " + score))
      console.log(chalk.yellowBright("\n---------------------------------------------------\n"))
    } else {
      score = score - 2;
      console.log(chalk.red("Sike!! That's the wrong answer."))
      console.log(chalk.green("The answer was " + answer))
      console.log(chalk.cyan("Score: " + score))
      console.log(chalk.yellowBright("\n---------------------------------------------------\n"))
    }
  }

  //Questions
  var question = [
    {
      question: "Q.1) Who gave Kakashi his sharingan eye?\na.Tobirama\nb.Obito\nc.Madara\nd.Sasuke\nAnswer: ",
      answer: "b"
    },
    {
      question: "Q.2) Who is the second Hokage?\na.Naruto\nb.Sarutobi\nc.Tobirama\nd.Minato\nAnswer: ",
      answer: "c"
    },
    {
      question: "Q.3) Who is the white fang?\na.Sakumo Hatake\nb.Sakura Haruno\nc.Sasuke Uchiha\nd.Shino Aburame\nAnswer: ",
      answer: "a"
    },
    {
      question: "Q.4) Who is the Pervy Sage?\na.Jiraiya\nb.Kakashi\nc.Naruto\nd.Ebisu\nAnswer: ",
      answer: "a"
    },
    {
      question: "Q.5) Who created the Rasengan?\na.Orochimaru\nb.Jiraiya\nc.Minato Namikaze\nd.Naruto Uzumaki\nAnswer: ",
      answer: "c"
    },
    {
      question: "Q.6) Who is the seventh Hokage?\na.Naruto\nb.Sarutobi\nc.Tobirama\nd.Minato\nAnswer: ",
      answer: "a"
    },
    {
      question: "Q.7) Who does Madara get his Eternal Mangekyo Sharingan from?\na.Izuna\nb.Sasuke\nc.Itachi\nd.Sarutobi\nAnswer: ",
      answer: "a"
    },
    {
      question: "Q.8) What is Minato's nickname?\na.The Red Flash\nb.The Yellow Flash\nc.Flash Ninja\nd.Copy Ninja\nAnswer: ",
      answer: "b"
    },
    {
      question: "Q.9) Who is the first ninja Sasuke Uchiha Copied with the sharingan?\na.Orochimaru\nb.Naruto\nc.Rock Lee\nd.Itachi Uchiha\nAnswer: ",
      answer: "c"
    },
    {
      question: "Q.10) Who prevented naruto from going into nine tails when he was fighting with Pain?\na.Kushina\nb.Minato\nc.Tsunade\nd.Jiraiya\nAnswer: ",
      answer: "b"
    },
    {
      question: "Q.11) What is Kakashi/Obito Sharingan ability?\na.Kamui\nb.Amaterasu\nc.Tsukiyomi\nd.Kotoamatsukami\nAnswer: ",
      answer: "a"
    },
    {
      question: "Q.12) How many sharingan does Danzo have?\na.1\nb.2\nc.11\nd.10\nAnswer: ",
      answer: "d"
    }
  ];

  for (var i = 0; i < question.length - 9; i++) {
    var currentQuestion = question[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
  if (score >= 5) {
    console.log("\nNice! Keep going!\nYou've now entered level 2\n")
  } else if (score < 4) {
    console.log("\nYou really need to watch some anime.\n") 
  }


  for (var i = 3; i < question.length - 6; i++) {
    var currentQuestion = question[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
  if (score >= 15) {
    console.log("\nYou're doing really good. Keep it up!\nYou've now entered level 3\n")
  } else if (score < 14) {
    console.log("\nYou did ok.. But you shall not PASS!\n")
  }


  for (var i = 6; i < question.length - 3; i++) {
    var currentQuestion = question[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
  if (score >= 25) {
    console.log("\nYou're doing really good. Keep it up!\n You've now entered level 4\n")
  } else if (score < 24) {
    console.log("\nYou did great.. But you shall not PASS!\n")
  }


  for (var i = 9; i < question.length; i++) {
    var currentQuestion = question[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
  if (score >= 35) {
    console.log("\nOMG! You're the chosen one!\n")
  } else if (score < 34) {
    console.log("\nYou made it this far. In my books you are a WINNER!\n")
  }






} else if (userInterested === "n") {
  console.log(chalk.magentaBright("\noki-doki try later sometime."));
} else {
  console.log(chalk.red("\nBZZZZZ!!! Wrong input!"));
}

console.log(chalk.blueBright("\nTwitter: @Rakshit1337\n\n"));
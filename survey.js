// const readline = require('readline');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let surveyAnswers = [];

// Prompt for user inputs
readline.question('\n----\nName : ', answer => {
  surveyAnswers.push(answer);
  readline.question('----\nFavorite activity : ', answer => {
    surveyAnswers.push(answer);
    readline.question('----\nListen while doing fav activity : ', answer => {
      surveyAnswers.push(answer);
      readline.question('----\nFavorite meal: ', answer => {
        surveyAnswers.push(answer);
        readline.question('----\nFavorite thing to eat w/: ', answer => {
          surveyAnswers.push(answer);
          readline.question('----\nFavourite sport: ', answer => {
            surveyAnswers.push(answer);
            readline.question('----\nYour superpower: ', answer => {
              surveyAnswers.push(answer);
              readline.close();
              
               // display the info
              const name = surveyAnswers[0];
              const favActivity = surveyAnswers[1];
              //....
              console.log();
              console.log(`\n----\nYour profile is ready!\nName: ${name}\nFav Activity: ${favActivity}\n----\n`);
            });
          });
        });
      });
     });
  });
});

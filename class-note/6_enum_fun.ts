// function askQuestion(answer: string) {
//   if (answer === 'yes') {
//     console.log('정답입니다.');
//   }
//   if (answer === 'no') {
//     console.log('오답입니다.');
//   }
// }
// askQuestion('yes');
// askQuestion('예스');
// askQuestion('y');

enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다.');
  }
  if (answer === Answer.No) {
    console.log('오답입니다.');
  }
}

askQuestion(Answer.Yes);

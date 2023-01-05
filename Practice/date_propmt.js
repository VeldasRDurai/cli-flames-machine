import datePrompt from 'date-prompt';

// datePrompt('When is your birthday?')
// .then(isoStr => {
//     console.log('Submitted with', isoStr)
//     console.log( typeof( isoStr ) );
// })
// .catch(isoStr => console.log('Aborted with', isoStr))

let x = await datePrompt('date : ');
console.log(x);
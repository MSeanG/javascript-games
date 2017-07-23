// $(function(){
    // 
// });
/* An array of words */
var wordlist = [
    'alphabet',
    'chapter',
    'character',
    'grammar',
    'letter',
    'paragraph',
    'punctuation',
    'spelling',
    'sentence',
    'word'
];
/* test for wordlist array
var el = $('#random-word');
el.html(wordlist);
*/

/* Grab a random word from the wordlist array */
var randomWord = wordlist[Math.floor(Math.random()*wordlist.length)];
/* test for randomWord from wordlist
var el = $('#random-word');
el.html(randomWord);
*/

/* Set up an answer array and loop through the letters of the random word and hide them with a dash */
var answerArray = [];
for(var i = 0; i < randomWord.length; i++);
    answerArray[i] = '- ';
/* test for hidden randomWord with correct amount of dashes for the randomWord length
var el = $('#random-word');
el.html(answerArray);
*/
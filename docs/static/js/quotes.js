var quotes = [
  'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.'+' \n'+'–William Paul Thurston',
  'Without mathematics, there’s nothing you can do. Everything around you is mathematics.'+'\n'+' –Shakuntala Devi',
  'The only way to learn mathematics is to do mathematics.'+'\n'+' –Paul Halmos',
  'Mathematics is the most beautiful and most powerful creation of the human spirit.'+'\n'+' –Stefan Banach',
  'Mathematics is, in its way, the poetry of logical ideas.'+'\n'+' –Albert Einstein',
  'In mathematics, the art of proposing a question must be held of higher value than solving it.'+'\n'+' –George Cantor',
  'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.'+'\n'+' –David Hilbert',
  'It\'s fine to work on any problem, so long as it generates interesting mathematics along the way - even if you don\'t solve it at the end of the day.'+'\n'+' –Andrew Wiles',
  'Mathemathics is the queen of the sciences.'+'\n'+' –Carl Friedrich Gauss',
  'He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.'+'\n'+' –Confucius'
]
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var quote =  quotes[randomNumber];
  var newText = quote.replace(/\n/g , "<br>");
  document.getElementById('quoteDisplay').innerHTML = newText;
}

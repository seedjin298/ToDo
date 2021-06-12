const quotes = [
    {
      quote: "Be yourself. Everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      quote:
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      author: "Bernard M. Baruch",
    },
    {
      quote:
        "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
      author: "William W. Purkey",
    },
    {
      quote:
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      author: "Dr. Seuss",
    },
    {
      quote: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote:
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "Mahatma Gandhi",
    },
    {
      quote:
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "Insanity is doing the same thing, over and over again, but expecting different results.",
      author: "Narcotics Anonymous",
    },
    {
      quote:
        "Good friends, good books, and a sleepy conscience: this is the ideal life.",
      author: "Mark Twain",
    },
  ];
  
  const writeQuote = document.querySelector("#quote span:first-child");
  const writeAuthor = document.querySelector("#quote span:last-child");
  
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  writeQuote.innerText = todaysQuote.quote;
  writeAuthor.innerText = todaysQuote.author;
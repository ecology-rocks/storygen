/*
//a or an. Function is good, but implementation is a bit rough. 
//It only runs once when it compiles, not on refresh.
  const aWord = function(word){
    //define vowels
    var vowelArray = ['a', 'e', 'i', 'o', 'u'];
    //if there's no match in vowelArray, return "a"
    if(vowelArray.indexOf(word.charAt(0)) == -1){
       return "a " + word;
    //otherwise, return "an"
    } else{
       return "an " + word;
    }
  };*/

//console.log(aWord("ether"));


/*const aAn = pep.match()
    .case(/^[aeiou]/,   (_, x) => 'an ' + x)
    .case(/.asterisk/,       (x) => 'a ' + x);
//this is how to run this that doesn't work:
//aAn(myChoices.impressively).run()*/



//ebook creation

//ebook generation
//var epub = require("epub-gen");

/*app.get('/makeBook', function(req, res){
  var option = {
        title: "Alice's Adventures in Wonderland", // *Required, title of the book.
        author: "Lewis Carroll", // *Required, name of the author.
        publisher: "Macmillan & Co.", // optional
        cover: "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fbook.png?1530705218264", // Url or File path, both ok.
        content: [
            {
                title: "About the author", // Optional
                author: "John Doe", // Optional
                data: "<h2>Charles Lutwidge Dodgson</h2>"
                +"<div lang=\"en\">Better known by the pen name Lewis Carroll...</div>" // pass html string
            },
            {
                title: "Down the Rabbit Hole",
                data: "<p>Alice was beginning to get very tired...</p>"
            }
        ]
    };
    new epub(option, 'experimental/book.epub').promise.then(function(){
        res.send("Ebook Generated Successfully!")
   	}, function(err){
        console.error("Failed to generate Ebook because of ", err)
    })
});
*/
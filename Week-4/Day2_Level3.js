var s = "love is the best thing in this world. Some found their love and some are still looking for their love.";

var arr = s.split(" ");

var wordCount = 0;

arr.forEach(function(str){
    if(str === "love"){
        wordCount++;
    }
})

console.log(wordCount);
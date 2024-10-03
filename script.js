var user = prompt("Enter a Sentence");
user = user.toLowerCase();
var vowel = ["a","e","i","o","u"];
var result = 0;

for (var i = 0; i < user.length ; i++){
    var vowelcount = user[i];
    if(vowel.includes(vowelcount)){
        result++;
    }
}

alert("Total Number of Vowels in this Sentence is " + result+":");
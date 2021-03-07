let button = document.querySelector("button");

button.addEventListener("click", () => {
    let message = document.getElementById("message");
    let result = document.getElementById('result');
    let text = message.value.toLowerCase();
    if (text.length < 20) {
        alert("Your message is too short!")
    } else {
        let words = text.split(" ");
        let counts = {};
        let maxNum = -1;
        let mostFrequent;
        (function (array) {
            for (let i = 0, len = array.length; i < len; i++) {
                let word = array[i];

                if (counts[word] === undefined) {
                    counts[word] = 1;
                } else {
                    counts[word] = counts[word] + 1;
                }
                if (counts[word] > maxNum) {
                    mostFrequent = words[i];
                }
            }
            result.innerHTML = 'The most frequent word of this message is "' + mostFrequent + '.';
        })(words);
        var randomPhrasesAndPictures = [
            {
                phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
                imageURL: "https://i.pinimg.com/originals/57/17/c9/5717c96476b80252a18bac0ab09c84ee.jpg"
    },
            {
                phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
                imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
            {
                phrase: "You are a wizard, Harry (c) Hagrid",
                imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]
        let i = Math.random();
        let arrayLength = randomPhrasesAndPictures.length;
        i = Math.floor(i * arrayLength);
        document.getElementById("phrase").innerHTML = randomPhrasesAndPictures[i].phrase;
        document.getElementById("picture").src = randomPhrasesAndPictures[i].imageURL;
    }
});

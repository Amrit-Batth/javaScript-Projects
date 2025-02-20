const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const nxt = document.getElementById("nxt");
const tweet = document.getElementById("tweet")

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote(api_url);

nxt.addEventListener("click",getquote);
tweet.addEventListener("click",()=>{
    window.open("https://x.com/tweeter?lang=en");
})
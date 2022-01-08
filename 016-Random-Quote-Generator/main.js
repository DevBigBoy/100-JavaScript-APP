const quoteText = document.querySelector(".quote"),
  quoteBtn = document.getElementById("random-btn"),
  author = document.getElementById("author"),
  soundBtn = document.querySelector(".sound"),
  copyBtn = document.querySelector(".copy"),
  twitterBtn = document.querySelector(".twitter"),
  facebookBtn = document.querySelector(".facebook");

quoteBtn.addEventListener("click", randomQuote);

// TODO => Random Quote Function

function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerText = result.content;
      author.innerText = result.author;
      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "New Quote";
    });
}

soundBtn.addEventListener("click", ()=>{
  if(!quoteBtn.classList.contains("loading")){
      let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`);
      synth.speak(utterance);
      setInterval(()=>{
          !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
      }, 10);
  }
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank");
});

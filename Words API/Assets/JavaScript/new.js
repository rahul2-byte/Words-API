/*
 *---------------------------------------------------------
 * /// API call for fetching Quotes.(@Start) ///
 * --------------------------------------------------------
 */
window.addEventListener("load", () => {
  fetch("https://type.fit/api/quotes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const number = Math.floor(Math.random() * data.length);
      const center_txt = document.querySelector(".main-text");
      const quote_author = document.querySelector(".quote-author");
      center_txt.innerHTML = `&#8220` + data[number].text + ` &#8221`;
      quote_author.textContent = `-- ${data[number].author}`;
    })
    .catch((error) => {
      console.log(error);
    });
});
/*
 *---------------------------------------------------------
 * /// API call for fetching Quotes.(@End) ///
 * --------------------------------------------------------
 */

/*
 *---------------------------------------------------------
 * /// Event trigers when we search the word.(@Start) ///
 * --------------------------------------------------------
 */
{
  const form = document.querySelector("form");
  const inputVar = document.querySelector("input[type = text]");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(inputVar.value.trim());
    if (!inputVar.value.trim()) {
      const search_info = document.getElementById("search-info"); // Get the info for search-bar.
      search_info.className = "search-info-show";
      /*
       * To remove the Meaning div from page.
       * Whether is exists or not.
       */
      const meaningContainer = document.querySelector(".container");
      meaningContainer.remove(); // changed meaningdiv to meaningcontainer.
    } else {
      const Meaningdiv = document.querySelector(".meaning-container");
      // console.log(Meaningdiv);
      // Checking if Meaning div is present in DOM tree
      if (typeof Meaningdiv !== undefined && Meaningdiv !== null) {
        console.log("Here ELement is present.");
        const returneddata = fetchdata(inputVar.value).then((data) => {
          // console.log(data);
          const length = data.results.length;
          meaningContainer(); //Creating one container for all meaning boxes.
          for (let i = 1; i <= length; i++) {
            meaningDiv(); // Calling function to create  div for Meanings.
            const {
              definition,
              partOfSpeech,
              synonyms,
              examples,
            } = data.results[i];
            const word_definition = document.getElementById("word-definition");
            word_definition.textContent = definition;
            const partofspeech = document.getElementById("word-partofspeech");
            partofspeech.textContent = partOfSpeech;
            const word_synonyms = document.getElementById("word-synonyms");
            if (!synonyms) {
              word_synonyms.textContent = synonyms;
            } else {
              word_synonyms.textContent = "U/A";
            }
            const word_examples = document.getElementById("word-example");
            if (!examples) {
              word_examples.textContent = "U/A";
            } else {
              word_examples.textContent = examples;
            }
          }
        });
      } else {
        // console.log(inputVar.value.trim());
        const returneddata = fetchdata(inputVar.value).then((data) => {
          console.log(data.results);
          /*
           *To Create the Meaning div.
           */
          const search_info = document.getElementById("search-info");
          search_info.className = "search-info-hide";

          /*
           *To Create the Meaning div.
           */
          meaningContainer(); //Creating one container for all meaning boxes.
          const length = data.results.length;
          for (let i = 1; i <= length; i++) {
            meaningDiv(); // Calling function to create  div for Meanings.
            const {
              definition,
              partOfSpeech,
              synonyms,
              examples,
            } = data.results[i];
            const word_definition = document.getElementById("word-definition");
            word_definition.textContent = definition;
            const partofspeech = document.getElementById("word-partofspeech");
            partofspeech.textContent = partOfSpeech;
            const word_synonyms = document.getElementById("word-synonyms");
            word_synonyms.textContent = synonyms;
            const word_examples = document.getElementById("word-example");
            if (examples) {
              word_examples.textContent = " nothing to show";
            } else {
              word_examples.textContent = examples;
            }
          }
          console.log(length);
        });
      }
    }
  });
}
/*
 *---------------------------------------------------------
 * /// Event trigers when we search the word.(@End) ///
 * --------------------------------------------------------
 */

/*
 *---------------------------------------------------------
 * /// Function to create Meaning Div.(@Start)///
 * --------------------------------------------------------
 */
const meaningContainer = function () {
  const body = document.querySelector(".main");
  const divContainer = document.createElement("div");
  div.className = "container";
  body.insertBefore(div, body.children[5]);
};

const meaningDiv = function () {
  const meaningbox = document.querySelector(".container");
  const div = document.createElement("div");
  div.className = "meaning-container";
  div.innerHTML = `<div class="meaning-container1">
  <div class="main-aria">
      <p class="definitions mxy-1 pxy-1 bold-words" id="Searched-word" > Definition : <span class="span-definitions small-words" id="word-definition"> Defi </span></p>
      <p class="partsofspeech mxy-1 pxy-1 bold-words"> Part of Speech : <span class="span-partofspeech small-words" id="word-partofspeech">  </span></p>
      <p class="synonyms mxy-1 pxy-1 bold-words"> Synonyms : <span class="span-synonyms small-words" id="word-synonyms">  </span></p>
      <p class="examples mxy-1 pxy-1 bold-words"> Example : <span class="span-example small-words" id="word-example"> Nothing for example. </span></p>
  </div>
</div>`;
  body.insertBefore(div, body.children[5]); //Change required
};
/*
 *---------------------------------------------------------
 * /// Function to create Meaning Div.(@End)///
 * --------------------------------------------------------
 */
/*
 *---------------------------------------------------------
 * /// Callback Function to Fetch the data from Words API.(@Start)///
 * --------------------------------------------------------
 */
const fetchdata = function (inputvalue) {
  console.log(`${inputvalue} This value is present in fetchdata function.`);
  // const proxy = "https://cors-anywhere.herokuapp.com/";
  return fetch(`https://wordsapiv1.p.rapidapi.com/words/${inputvalue}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "45f5ed5258msha1bf193911617d1p1b6bb5jsn37995cada708",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      // console.log(data.results.length);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
/*
 *---------------------------------------------------------
 * /// Callback Function to Fetch the data from Words API.(@End)///
 * --------------------------------------------------------
 */

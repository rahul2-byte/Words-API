window.addEventListener("load", () => {
  fetch("https://type.fit/api/quotes")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      const number = Math.floor(Math.random() * data.length);
      console.log(number);
      const center_txt = document.querySelector(".main-text");
      center_txt.innerHTML = `&#8220` + data[number].text + ` &#8221`;
    })
    .catch((error) => {
      console.log(error);
    });
});
// const search_input_value = document.querySelector(".search-value").value;
// console.log("h2");
// console.log(search_input_value);
// console.log("hlw");

// Event trigers when we search the word.
{
  const form = document.querySelector("form");
  const inputVar = document.querySelector("input[type = text]");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(inputVar.value.trim());
    const Meaningdiv = document.querySelector(".meaning-container");
    console.log(Meaningdiv);
    // Checking if Meaning div is present in DOM tree
    if (!inputVar.value.trim()) {
      const search_info = document.getElementById("search-info"); // Get the info for search-bar.
      search_info.className = "search-info-show";
      const meaning_div = document.querySelector(".meaning-container");
      console.log(meaning_div);
      meaning_div.className = "Meaning-display-none";
      /*
       * To remove the Meaning div from page.
       */
    } else {
      if (typeof Meaningdiv !== undefined && Meaningdiv !== null) {
        console.log("Here ELement is present.");
      } else {
        /*
         *To Create the Meaning div.
         */
        const search_info = document.getElementById("search-info");
        search_info.className = "search-info-hide";
        meaningDiv(); // Calling function to create  div for Meanings.
      }
    }
  });
}

/*
 *---------------------------------------------------------
 * /// Function to create Meaning Div.///
 * --------------------------------------------------------
 */

const meaningDiv = function () {
  const body = document.querySelector(".main");
  console.log(body.children);
  const div = document.createElement("div");
  div.className = "meaning-container";
  div.innerHTML = `<div class="meaning-container">
  <div class="main-aria">
      <p class="definitions mxy-1 pxy-1 bold-words" id="Searched-word" > Word : <span class="span-definitions small-words" id="word-definition"> Defi </span></p>
      <p class="partsofspeech mxy-1 pxy-1 bold-words"> Part of Speech : <span class="span-partofspeech small-words" id="word-partofspeech"> Noun </span></p>
      <p class="synonyms mxy-1 pxy-1 bold-words"> Synonyms : <span class="span-synonyms small-words" id="word-synonyms"> Synonyms </span></p>
      <p class="examples mxy-1 pxy-1 bold-words"> Example : <span class="span-example small-words" id="word-example"> Word examples </span></p>
  </div>
</div>`;
  const TxtNode = document.createTextNode(div);
  div.appendChild(TxtNode);
  body.insertBefore(div, body.children[5]);
};

// const search_value = document.getElementsByClassName("submit-button").value;
// const option_element = document.getElementsByClassName("options");
// option_value = option_element.options[option_element.selectedIndex].value;
// console.log(`${search_value} ##### ${option_value}`);
// const proxy = "https://cors-anywhere.herokuapp.com/";
// fetch(`${proxy}https://od-api.oxforddictionaries.com/api/v2`, {
//   method: "POST",
//   headers: {
//     "app-key": "2b5b0c1888c92c462978ea102494502e",
//     "app-id": "7986711e",
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
//   },
//   false
// );

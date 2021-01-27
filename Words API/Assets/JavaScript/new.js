// window.addEventListener("load", () => {
//   fetch("https://type.fit/api/quotes")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const number = Math.floor(Math.random() * data.length);
//       console.log(number);
//       const center_txt = document.querySelector(".main-text");
//       center_txt.innerHTML = `&#8220` + data[number].text + ` &#8221`;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });
// const search_input_value = document.querySelector(".search-value").value;
// console.log("h2");
// console.log(search_input_value);
// console.log("hlw");
// Event triggers when select-box is changed.
{
  const select_box = document.querySelector(".select-box");
  select_box.addEventListener("change", (e) => {
    console.log("Item changed");
  });
}
// Event trigers when we search the word.
{
  const form = document.querySelector("form");
  const inputVar = document.querySelector("input[type = text]");
  console.log(inputVar);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(inputVar.value.trim());
    if (!inputVar.value.trim()) {
      const search_info = document.getElementById("search-info");
      search_info.className = "search-info-show";
      console.log("Search value is undefined");
    } else {
      console.log("This is else statement.");
      const search_info = document.getElementById("search-info");
      search_info.className = "search-info-hide";
    }
  });
}
// Event that will create new div for Meanings.
{
  const body = document.querySelector("body");
  const newDiv = document.querySelector(".main");
  const div = document.createElement("div");
  div.className = "meaning-container";
  div.appendChild(document.createTextNode("hello"));
  body.appendChild(div);
}
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

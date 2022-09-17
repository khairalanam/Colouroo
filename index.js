const getRandomColorAPI = async () => {
  const response = await fetch(
    "https://www.colr.org/json/schemes/random/7?scheme_size_limit=%3E5"
  );
  const data = await response.json();

  return data;
};

async function updateRandomColorAPI() {
  let numGenerated = Math.floor(Math.random() * 10000);
  const response = await fetch(
    `https://www.colr.org/json/schemes/random/7?scheme_size_limit=%3E5/${numGenerated}`
  );
  const data = await response.json();

  return data;
}

getRandomColorAPI();

var colors = [];

const generate = () => {
  updateRandomColorAPI()
    .then((data) => {
      colors = data["schemes"][0]["colors"];
      generateColours(colors);
    })
    .catch((error) => console.log(error.message));
};

function generateColours(colors) {
  var colorsPalette = document.getElementById("colors-palette").children;
  for (let i = 0; i < 5; i++) {
    var color = colorsPalette.item(i);
    var colorHex = "#" + colors[i];
    color.style.backgroundColor = colorHex;

    switch (i) {
      case 0:
        const sampleSite = document.getElementById("sample-website");
        sampleSite.style.backgroundColor = colorHex;
        break;
      case 1:
        const cardSection = document.getElementsByClassName("card-section")[0];
        cardSection.style.backgroundColor = colorHex;
        break;
      case 2:
        const btnCard = document.getElementsByClassName("btn-card")[0];
        btnCard.style.backgroundColor = colorHex;
        break;
      case 3:
        const titleCard = document.getElementsByTagName("h1")[1];
        titleCard.style.color = colorHex;
        break;
      case 4:
        const paraCard = document.getElementsByTagName("p")[0];
        paraCard.style.color = colorHex;
        break;
    }
  }
}

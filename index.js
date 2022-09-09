const getRandomColorAPI = async () => {
  const response = await fetch(
    "https://www.colr.org/json/schemes/random/7?scheme_size_limit=%3E5"
  );
  const data = await response.json();

  console.log(data);

  return data;
};

var colors = [];

getRandomColorAPI()
  .then((data) => {
    colors = data["schemes"][0]["colors"];
    console.log(colors);
    const btn = document.getElementsByClassName("main-button")[0];
    btn.addEventListener("click", generateColours(colors));
    getRandomColorAPI();
  })
  .catch((error) => console.log(error.message));

function generateColours(colors) {
  var data = getRandomColorAPI();
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
    }
  }
}

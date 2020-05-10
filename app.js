function toggleNone() {
  var element = document.getElementById("toggleNone");
  element.classList.remove("toggleNone");
  var element = document.getElementById("toggleNone2");
  element.classList.remove("toggleNone");
}


function fetch_beer() {
  var myObj, i, j, hops = "", malt = "", fermentation = "", mesh_temp = "";
  fetch('https://api.punkapi.com/v2/beers/random')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById("beer_name").innerHTML = data[0].name;
    document.getElementById("beer_tagline").innerHTML = data[0].tagline;
    document.getElementById("beer_description").innerHTML = "<span style='font-weight:bold;'>Description: </span>" + data[0].description;
    document.getElementById("beer_food_pairing").innerHTML = "<span style='font-weight:bold;'>Food pairing: </span>" + data[0].food_pairing;
    document.getElementById("beer_brewers_tips").innerHTML = "<span style='font-weight:bold;'>Brewer tips: </span>" + data[0].brewers_tips;
    document.getElementById("img").src = data[0].image_url;

    document.getElementById("beer_abv").innerHTML = "<span style='font-weight:bold;'>Alcohol abv: </span>" + data[0].abv + "%";
    document.getElementById("beer_attenuation_level").innerHTML = "<span style='font-weight:bold;'>Attenuation: </span>" + data[0].attenuation_level;

    if(data[0].method.twist != null) document.getElementById("beer_twist").innerHTML = "<span style='font-weight:bold;'>Beer twist: </span>" + data[0].method.twist;

    document.getElementById("beer_ingredients").innerHTML = "Ingredients & Instructions";
    document.getElementById("beer_yeast").innerHTML = "<span style='font-weight:bold;'>Yeast: </span>" + data[0].ingredients.yeast;

    document.getElementById("beer_volume").innerHTML = "<span style='font-weight:bold;'>Volume: </span>" + data[0].volume.value + " " + data[0].volume.unit;

    document.getElementById("beer_boil_volume").innerHTML = "<span style='font-weight:bold;'>Boil volume: </span>" + data[0].boil_volume.value + " " + data[0].boil_volume.unit;

    document.getElementById("malt").innerHTML = "Malt";
    for (i in data[0].ingredients.malt){
      malt += data[0].ingredients.malt[i].name + "<br>";
      malt += data[0].ingredients.malt[i].amount.value + " ";
      malt += data[0].ingredients.malt[i].amount.unit + "<br>";
      malt += "<br>";
    }
    document.getElementById("beer_malt").innerHTML = malt;

    document.getElementById("hops").innerHTML = "Hops";
    for (i in data[0].ingredients.hops){
      hops += data[0].ingredients.hops[i].name + "<br>";
      hops += "Add: " + data[0].ingredients.hops[i].add + "<br>";
      hops += "Attribute: " + data[0].ingredients.hops[i].attribute + "<br>";
      hops += data[0].ingredients.hops[i].amount.value + " ";
      hops += data[0].ingredients.hops[i].amount.unit + "<br>";
      hops += "<br>";
    }
    document.getElementById("beer_hops").innerHTML = hops;

    fermentation = "<span style='font-weight:bold;'>Fermentation: </span>" + data[0].method.fermentation.temp.value + " " + data[0].method.fermentation.temp.unit;
    document.getElementById("beer_fermentation").innerHTML = fermentation;

    mesh_temp = "<span style='font-weight:bold;'> Mash cooking: </span>" + data[0].method.mash_temp[0].duration + " min at " + data[0].method.mash_temp[0].temp.value + " " + data[0].method.mash_temp[0].temp.unit;
    document.getElementById("beer_mesh_temp").innerHTML = mesh_temp;

  });
}
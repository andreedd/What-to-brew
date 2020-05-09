
  function fetch_beer() {
    var myObj, i, j, hops = "", malt = "", boil = "", fermentation = "", mesh_temp = "", volume="";
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.getElementById("beer_description").innerHTML = data[0].description
      document.getElementById("beer_food_pairing").innerHTML = data[0].food_pairing
      document.getElementById("beer_brewers_tips").innerHTML = data[0].brewers_tips
      document.getElementById("img").src = data[0].image_url

      document.getElementById("beer_ingredients").innerHTML = "Ingredients"
      document.getElementById("beer_yeast").innerHTML = data[0].ingredients.yeast

      document.getElementById("beer_name").innerHTML = data[0].name
      document.getElementById("beer_tagline").innerHTML = data[0].tagline
      document.getElementById("beer_abv").innerHTML = "Alcohol abv " + data[0].abv
      document.getElementById("beer_attenuation_level").innerHTML = "Attenuation " + data[0].attenuation_level


      volume = "Volume " + data[0].volume.value + " " + data[0].volume.unit 
      document.getElementById("beer_volume").innerHTML = volume

        boil = data[0].boil_volume.value + " " + data[0].boil_volume.unit

      document.getElementById("beer_boil_volume").innerHTML = boil

      
      for (i in data[0].ingredients.hops){
        hops += data[0].ingredients.hops[i].add + "<br>";
        hops += data[0].ingredients.hops[i].attribute + "<br>";
        hops += data[0].ingredients.hops[i].name + "<br>";
        hops += data[0].ingredients.hops[i].amount.unit + "<br>";
        hops += data[0].ingredients.hops[i].amount.value + "<br>";
      }
      document.getElementById("beer_hops").innerHTML = hops

      for (i in data[0].ingredients.malt){
        malt += data[0].ingredients.malt[i].name + "<br>";
        malt += data[0].ingredients.malt[i].amount.unit + "<br>";
        malt += data[0].ingredients.malt[i].amount.value + "<br>";
      }
      document.getElementById("beer_malt").innerHTML = malt

      fermentation = "Fermentation at " + data[0].method.fermentation.temp.value + " " + data[0].method.fermentation.temp.unit
      document.getElementById("beer_fermentation").innerHTML = fermentation

      mesh_temp = data[0].method.mash_temp[0].duration + " min at " + data[0].method.mash_temp[0].temp.value + " " + data[0].method.mash_temp[0].temp.unit
      document.getElementById("beer_mesh_temp").innerHTML = mesh_temp

      document.getElementById("beer_twist").innerHTML = data[0].method.twist

    });
  }
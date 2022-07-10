<template>
<div class="router">
    <header class="header border shadow">
      <h1 class="border shadow">Genshin Guide</h1>
      <label>
        <span>Choose your element</span>
        <select name="element" @change="elementSelector()" v-model="elementColor" class="border">
          <option value="pyro">Pyro</option>
          <option value="hydro">Hydro</option>
          <option value="electro">Electro</option>
          <option value="cryo">Cryo</option>
          <option value="geo">Geo</option>
          <option value="anemo">Anemo</option>
          <option value="dendro">Dendro</option>
        </select>
      </label>
      <nav>
        <input class="menu-bouton" type="checkbox" id="menu-bouton">
        <label class="menu-icone" for="menu-bouton"><span class="nav-icone"></span></label>      
        <ul class="menu">
          <li class="border shadow">
            <router-link :to="{ name:'Home' }" class="link" @click="closeMenu()">Home</router-link>
          </li>
          <li class="border shadow">
            <router-link :to="{ name:'Guides' }" class="link" @click="closeMenu()">Characters</router-link>
          </li>
          <li class="border shadow">
            <router-link :to="{ name:'Characters' }" class="link" @click="closeMenu()">Weapons</router-link>
          </li>
          <li class="border shadow">
            <router-link :to="{ name:'Weapons' }" class="link" @click="closeMenu()">Enemies</router-link>
          </li>
          <li class="border shadow">
            <router-link :to="{ name:'Enemies' }" class="link" @click="closeMenu()">Guides</router-link>
          </li>
          <li class="border shadow">
            <router-link :to="{ name:'Account' }" class="link" @click="closeMenu()">Account</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
    <footer class="border shadow">
    <span>All images and data Copyright HoYoVerse</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      data: {},
      elementColor:'pyro',
    }
  },
  methods: {
    tempLog() {

    },
    closeMenu() {
      let menuButton = document.querySelector(".menu-bouton");
      menuButton.checked = false;
    },
    elementSelector(){
      let headerElement = document.querySelector(".header");
      console.log(headerElement);
      let headerElementsWithBorders = document.querySelectorAll(".border");
      switch (this.elementColor) {
        case 'pyro':
          headerElement.style.background = "radial-gradient(ellipse at 50%, rgba(239, 121, 57, 0.25), #2D2A29)"
          headerElementsWithBorders.forEach(element => {
            element.style.borderColor = "#EF7939";
            element.style.boxShadow = "0px 0px 0px 3px #c25030";
          })
          break;
        case 'hydro':
          headerElement.style.background = "radial-gradient(ellipse at 50%, rgba(76, 194, 241, 0.25), #2D2A29)"
          headerElementsWithBorders.forEach(element => {
            element.style.borderColor = "#4CC2F1";
            element.style.boxShadow = "0px 0px 0px 3px #3284c7";
          })
          break;
        case 'electro':
          headerElement.style.background = "radial-gradient(ellipse at 50%, rgba(175, 142, 193, 0.25), #2D2A29)"
          headerElementsWithBorders.forEach(element => {
            element.style.borderColor = "#AF8EC1";
            element.style.boxShadow = "0px 0px 0px 3px #805f9c";
          })
          break;
        case 'cryo':
          headerElement.style.background = "radial-gradient(ellipse at 50%, rgba(159, 214, 227, 0.25), #2D2A29)"
          headerElementsWithBorders.forEach(element => {
            element.style.borderColor = "#9FD6E3";
            element.style.boxShadow = "0px 0px 0px 3px #5d96a3";
          })
          break;
        case 'geo':
          headerElement.style.background = "radial-gradient(ellipse at 50%, rgba(250, 184, 51, 0.25), #2D2A29)"
          headerElementsWithBorders.forEach(element => {
            element.style.borderColor = "#F1CA99";
            element.style.boxShadow = "0px 0px 0px 3px #F6B86A";
          })
          break;
        case 'anemo':
          headerElement.style.background = "radial-gradient(ellipse at 50%, rgba(116, 194, 168, 0.25), #2D2A29)"
          headerElementsWithBorders.forEach(element => {
            element.style.borderColor = "#74C2A8";
            element.style.boxShadow = "0px 0px 0px 3px #30755e";
          })
          break;
        case 'dendro':
          headerElement.style.background = "radial-gradient(ellipse at 50%, rgba(165, 201, 49, 0.25), #2D2A29)"
          headerElementsWithBorders.forEach(element => {
            element.style.borderColor = "#A5C931";
            element.style.boxShadow = "0px 0px 0px 3px #5e7319";
          })
          break;
        }
    }
  },
  beforeMount() {
    fetch("https://api.genshin.dev/")
    .then(response => response.json())
    .then(json => {
      let menu = json.types;
      menu.forEach(option => {
        fetch(`https://api.genshin.dev/${option}`)
        .then(response => response.json())
        .then(json => {
          let fetchedDataContainer = {};
          fetchedDataContainer[option] = json;
          Object.assign(this.data, fetchedDataContainer)
        });
      });
    })
    this.$store.commit("DATA_UPDATE", this.data);
  }
}
</script>
<style>
@import url(@/assets/css/styles.css);
@import url(@/assets/css/menu.css);
</style>

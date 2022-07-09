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
            <router-link to="/" class="link" @click="closeMenu()">Home</router-link>
          </li>
          <li class="border shadow">
            <router-link to="/characters" class="link" @click="closeMenu()">Characters</router-link>
          </li>
          <li class="border shadow">
            <router-link to="/weapons" class="link" @click="closeMenu()">Weapons</router-link>
          </li>
          <li class="border shadow">
            <router-link to="/enemies" class="link" @click="closeMenu()">Enemies</router-link>
          </li>
          <li class="border shadow">
            <router-link to="/guides" class="link" @click="closeMenu()">Guides</router-link>
          </li>
          <li class="border shadow">
            <router-link to="/Account" class="link" @click="closeMenu()">Account</router-link>
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
    closeMenu() {
      let menuButton = document.querySelector(".menu-bouton");
      menuButton.checked = false;
    },
    elementSelector(){
      let headerElementsWithBorders = document.querySelectorAll(".border");
      let headerElementsWithShadows = document.querySelectorAll(".shadow");
      let forms = document.querySelectorAll(".form");
      headerElementsWithBorders.forEach(element => {
        switch (this.elementColor) {
          case 'pyro':
            element.style.borderColor = "#EF7939";
            element.style.boxShadow = "0px 0px 0px 3px #c25030";
            forms.forEach(form => {
              form.style.borderColor = "#EF7939";
              form.style.boxShadow = "0px 0px 16px 16px #c25030";
            })
            break;
          case 'hydro':
            element.style.borderColor = "#4CC2F1";
            element.style.boxShadow = "0px 0px 0px 3px #3284c7";
            forms.forEach(form => {
              form.style.borderColor = "#4CC2F1";
              form.style.boxShadow = "0px 0px 16px 16px #3284c7";
            })
            break;
          case 'electro':
            element.style.borderColor = "#AF8EC1";
            element.style.boxShadow = "0px 0px 0px 3px #805f9c";
            forms.forEach(form => {
              form.style.borderColor = "#AF8EC1";
              form.style.boxShadow = "0px 0px 16px 16px #805f9c";
            })
            break;
          case 'cryo':
            element.style.borderColor = "#9FD6E3";
            element.style.boxShadow = "0px 0px 0px 3px #5d96a3";
            forms.forEach(form => {
              form.style.borderColor = "#9FD6E3";
              form.style.boxShadow = "0px 0px 16px 16px #5d96a3";
            })
            break;
          case 'geo':
            element.style.borderColor = "#F1CA99";
            element.style.boxShadow = "0px 0px 0px 3px #F6B86A";
            forms.forEach(form => {
              form.style.borderColor = "#F1CA99";
              form.style.boxShadow = "0px 0px 16px 16px #F6B86A";
            })
            break;
          case 'anemo':
            element.style.borderColor = "#74C2A8";
            element.style.boxShadow = "0px 0px 0px 3px #30755e";
            forms.forEach(form => {
              form.style.borderColor = "#74C2A8";
              form.style.boxShadow = "0px 0px 16px 16px #30755e";
            })
            break;
          case 'dendro':
            element.style.borderColor = "#A5C931";
            element.style.boxShadow = "0px 0px 0px 3px #5e7319";
            forms.forEach(form => {
              form.style.borderColor = "#A5C931";
              form.style.boxShadow = "0px 0px 16px 16px #5e7319";
            })
            break;
        }
      })
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
          let thisData = {};
          thisData[option] = json;
          Object.assign(this.data, thisData)
        })
      })
    })
    this.$store.commit("DATA_UPDATE", this.data);
    console.log("stored data: ", this.$store.state.data);
  }
}
</script>
<style>
@import url(@/assets/css/styles.css);
@import url(@/assets/css/menu.css);
</style>

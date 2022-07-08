<template>
<div class="router">
    <header class="header">
      <h1 class="border">Genshin Player Helper</h1>
      <label>
        <span>Choose your element</span>
        <select name="element" @change="elementSelector()" v-model="elementColor">
          <option value="pyro">pyro</option>
          <option value="hydro">hydro</option>
          <option value="electro">electro</option>
          <option value="cryo">cryo</option>
          <option value="geo">geo</option>
          <option value="anemo">anemo</option>
          <option value="dendro">dendro</option>
        </select>
      </label>
      <nav>
        <input class="menu-bouton" type="checkbox" id="menu-bouton">
        <label class="menu-icone" for="menu-bouton"><span class="nav-icone"></span></label>      
        <ul class="menu" >
          <li class="border">
            <router-link to="/" class="link" @click="closeMenu()">Home</router-link>
          </li>
          <li class="border">
            <router-link to="/characters" class="link" @click="closeMenu()">Characters</router-link>
          </li>
          <li class="border">
            <router-link to="/weapons" class="link" @click="closeMenu()">Weapons</router-link>
          </li>
          <li class="border">
            <router-link to="/enemies" class="link" @click="closeMenu()">Enemies</router-link>
          </li>
          <li class="border">
            <router-link to="/guides" class="link" @click="closeMenu()">Guides</router-link>
          </li>
          <li class="border">
            <router-link to="/Account" class="link" @click="closeMenu()">Account</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
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
      elementColor:'electro',
    }
  },
  methods: {
    closeMenu() {
      let menuButton = document.querySelector(".menu-bouton");
      menuButton.checked = false;
    },
    elementSelector(){
      let headerElementsWithBorders = document.querySelectorAll(".border");
      console.log(headerElementsWithBorders);
      headerElementsWithBorders.forEach(element => {
        // switch (this.elementColor) {
        //   case 'electro'

        // }
        element.style.borderColor = "blue";
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

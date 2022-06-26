<template>
<div class="router">
    <header class="header">
      <h1>Genshin Impact Player Helper</h1>
      <nav>
        <input class="menu-bouton" type="checkbox" id="menu-bouton">
        <label class="menu-icone" for="menu-bouton"><span class="nav-icone"></span></label>      
        <ul class="menu" >
          <li>
            <router-link to="/" class="link">Home</router-link>
          </li>
          <li>
            <router-link to="/characters" class="link">Characters</router-link>
          </li>
          <li>
            <router-link to="/weapons" class="link">Weapons</router-link>
          </li>
          <li>
            <router-link to="/enemies" class="link">Enemies</router-link>
          </li>
          <li>
            <router-link to="/bosses" class="link">Bosses</router-link>
          </li>
          <li>
            <router-link to="/guides" class="link">Guides</router-link>
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

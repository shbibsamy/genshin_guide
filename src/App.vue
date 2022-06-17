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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FAF6EC;
}

body {
  background-color: #2D2A29;
}

footer {
  display: flex;
  flex-direction: column;
  border-top:4px solid #F6B86A;
}

h1 {
  font-size: 2rem;
  margin: 1rem;
  padding: 1rem;
  border: 3px solid #F1CA99;
  margin-bottom: 0%;
  box-shadow: 
  0 0 0 2px #F6B86A;
  border-radius: 7px;
}
h2 {
  font-size: 1.5rem;
}

nav {
  padding: 1.5rem;
}

nav a {
  text-decoration: none;
}

nav li {
  width: 10rem;
  padding: 0.3rem;
  margin: 0.3rem;
  border: 3px solid #F1CA99;
  box-shadow: 
  0 0 0 2px #F6B86A;
  border-radius: 8px;
}

nav a.router-link-exact-active {
  color: #FAF6EC;
  font-weight: bolder;
}

/* Menu burger start */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 16px;
}

a {
  color: #FAF6EC;
}

  /* header */
.header ul {
  padding: 0;
  margin-top: 1rem;
  list-style: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

  /* menu */

.header .menu {
  max-height: 0;
  transition: max-height .5s ease-out;
}

  /* menu icone */
.header .menu-icone {
  cursor: pointer;
  display: block;
  position: relative;
  user-select: none;
}

.header .menu-icone .nav-icone { /* Définit le span initial */
  background: #F1CA99;
  display: flex;
  height: 4px;
  position: relative;
  width: 1.5rem;
}

.header .menu-icone .nav-icone:before,
.header .menu-icone .nav-icone:after { /* Définit les spans ajoutés */
  background: #F1CA99;
  /* padding: 1px; */
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

/* Placer les span au-dessus et au-dessous du span initial */
.header .menu-icone .nav-icone:before {
  top: -9px;
}

.header .menu-icone .nav-icone:after {
  top: 9px;
}

  /* menu bouton */

.header .menu-bouton {
  display: none;
}

.header .menu-bouton:checked ~ .menu {
  max-height: fit-content; /* définit la taille du conteneur des liens*/
}

.header .menu-bouton:checked ~ .menu-icone .nav-icone {
  background: transparent;/* Fait disparaître le span initial*/
}

.header .menu-bouton:checked ~ .menu-icone .nav-icone:before {
  transform: rotate(-45deg); /* fait pivoter le span before de 45 degrès ver la gauche*/
}

.header .menu-bouton:checked ~ .menu-icone .nav-icone:after {
  transform: rotate(45deg);/* fait pivoter le span after de 45 degrès ver la droite*/
}

.header .menu-bouton:checked ~ .menu-icone .nav-icone:before,
.header .menu-bouton:checked ~ .menu-icone .nav-icone:after {
  top: 0; /* Déplace les span pour les superposer */
}

/* Desktop version */
@media (min-width: 1061px) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .home {
    height: 70vh;
  }
  .header ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }
  /* .header li {

  } */
  .header li link {
    padding: 1.25rem 1.875rem;
  }
  .header .menu {
    clear: none;
    max-height: none;
  }
  .header .menu-icone {
    display: none;
  }
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/activities">Activities</router-link>
      <router-link to="/mylist">My list</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  background-color: #862222;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 80vw;
  height: 80vh;
  /* border: 1px solid black; */
  margin: auto;
  border-radius: 10px;
  margin-top: 10vh;
  align-self: center;
  box-shadow: 0px 59px 83px -40px rgba(0, 0, 0, 0.75);
}

#nav {
  a {
    font-weight: 400;
    color: #d9dfe6;
    text-decoration: none;
    transition: 0.7s;
    padding: 15px 0 15px 0;
    min-width: 100px;
    text-align: center;
    display: inline-block;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    &.router-link-exact-active {
      background-color: #ededed;
      color: black;
      /* border-top: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black; */
      z-index: 15;
    }
    &:hover {
      background-color: aqua;
      color: black;
    }
  }
}
::-webkit-scrollbar {
  width: 2px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #862222;
  border-radius: 10px;
}
</style>

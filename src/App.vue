<template>
  <div id="app">
    <div id="nav">
      <router-link to="/activities">Activities</router-link>
      <router-link to="/mylist">My list</router-link>
    </div>
    <router-view />
    <Message
      @closeMessage="setAlertMessage($event)"
      v-if="alert"
      :message="alert"
      :danger="true"
    />
  </div>
</template>

<script>
import Message from "@/components/Message";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Message
  },
  computed: {
    ...mapState({
      alert: state => state.alertMessage
    })
  },
  methods: {
    ...mapMutations(["setAlertMessage"])
  }
};
</script>

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
  margin: 10vh auto 10vh auto;
  border-radius: 10px;
  align-self: center;
  box-shadow: 0px 59px 83px -40px rgba(0, 0, 0, 0.75);
  background-color: #ededed;
}

#nav {
  background-color: #862222;
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
.loader,
.loader:before,
.loader:after {
  background: #ffffff;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #ffffff;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: "";
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>

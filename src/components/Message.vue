<template>
  <div class="main" :class="{ danger: danger, default: !danger }">
    <span class="message"> {{ message }} </span>
    <button @click="closeMe" type="button">X</button>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: {
      type: String,
      required: true,
      default: "Hi there!"
    },
    danger: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.closeMe();
    }, 3500);
  },
  methods: {
    closeMe() {
      this.$emit("closeMessage", false);
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  float: right;
  color: white;
  background-color: transparent;
  padding: 8px 0 8px 0;
  margin: 0 15px 0 5px;
  border: none;
  cursor: pointer;
  &:focus {
    border: none;
    outline: none;
  }
  &:active {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  }
}
.main {
  position: fixed;
  right: 20px;
  bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  min-width: 200px;
  text-align: center;
  animation-name: appear;
  animation-duration: 1s;
  border: 1px white solid;
  opacity: 0.8;
}
.message {
  margin: 0 20px 0 20px;
  display: inline-block;
  padding: 8px 0 8px 0;
}
.danger {
  background-color: red;
  color: white;
}
.default {
  background-color: black;
  color: white;
}
@keyframes appear {
  0% {
    opacity: 0.1;
    right: -800px;
  }
  100% {
    opacity: 0.8;
    right: 20px;
  }
}
</style>

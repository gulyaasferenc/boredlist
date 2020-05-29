<template>
  <div class="main">
    <activity-form />
  </div>
</template>

<script>
import ActivityForm from "../components/ActivityForm";
export default {
  name: "Activities",
  components: {
    ActivityForm
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main {
  z-index: 10;
  border-radius: 10px;
  border-top-left-radius: 0px;
  background-color: #ededed;
  height: calc(96% - 52px);
  padding: 10px;
}
</style>

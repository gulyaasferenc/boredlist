<template>
  <div class="main">
    <list-table></list-table>
  </div>
</template>

<script>
import ListTable from "@/components/ListTable";
export default {
  name: "MyList",
  components: {
    ListTable
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
  background-color: #ededed;
  height: calc(100% - 52px);
  padding: 10px;
}
</style>

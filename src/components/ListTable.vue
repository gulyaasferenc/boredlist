<template>
  <div class="main">
    <div class="tablemain">
      <table>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
        <tr v-for="(item, i) in items" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ Object.values(item)[0].activity }}</td>
          <td>{{ Object.values(item)[0].participants }}</td>
          <td>
            {{
              Number(Object.values(item)[0].price) > 10 ? "expensive" : "cheap"
            }}
          </td>
          <td>
            <check-circle-icon
              @click="deleteActivity(Object.keys(item)[0])"
              class="delbutton"
              size="1.5x"
            />
          </td>
        </tr>
      </table>

      <div class="noactivity" v-if="items.length === 0">
        No activity saved yet
      </div>
    </div>
    <button @click="clearActivities" class="clearbutton">Clear All</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { CheckCircleIcon } from "vue-feather-icons";
export default {
  name: "ListTable",
  components: {
    CheckCircleIcon
  },
  data() {
    return {
      headers: ["#", "Activity", "Participants", "Budget", ""],
      tableItems: []
    };
  },
  created() {
    this.getActivitiesfromIdb();
  },
  methods: {
    ...mapActions(["getActivitiesfromIdb", "deleteActivity", "clearActivities"])
  },
  computed: {
    ...mapState({
      items: state => state.activities
    })
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: 95%;
}
.noactivity {
  text-align: center;
  padding: 50px 0 50px 0;
  width: 100%;
}
.delbutton {
  cursor: pointer;
  &:hover {
    color: red;
  }
}
.tablemain {
  height: 83%;
  overflow: auto;
  padding: 15px;
}
table {
  margin: auto;
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
}
th {
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  background-color: white;
  border-right: none;
  border-left: none;
  height: 30px;
}
td {
  border-bottom: 1px solid black;
  height: 35px;
  background-color: #862222;
  color: white;
}
.clearbutton {
  border: none;
  width: 100%;
  padding: 10px 0 10px 0;
  background-color: red;
  color: white;
  margin-top: 30px;
  border-radius: 5px;
  font-size: unset;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: black;
  }
  &:hover {
    background-color: darkslategray;
  }
}
</style>

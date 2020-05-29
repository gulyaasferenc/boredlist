<template>
  <div class="formmain">
    <form @submit.prevent="save()">
      <div class="flex">
        <div class="areal">
          <h3>You should:</h3>
          <textarea
            type="text"
            class="leftinput"
            v-model="formValues.activity"
          />
          <button type="submit" class="button-success">
            Save for later
          </button>
        </div>
        <div class="arear">
          <h3>Activity details</h3>
          <label for="type">Type</label>
          <select id="type" v-model="formValues.type">
            <option v-for="type in types" :key="type">{{ type }}</option>
          </select>
          <label for="participants">Participants</label>
          <input
            type="number"
            name
            id="participants"
            v-model="formValues.participants"
          />
          <label for="priceslider">Budget</label>
          <input
            type="range"
            name="priceslider"
            id="priceslider"
            min="0"
            max="100"
            v-model="formValues.price"
          />
          <div class="littleflex">
            <p>Cheap</p>
            <p>Expensive</p>
          </div>
          <button type="button" class="button-base" @click="getActivityFromApi">
            Hit me with a new one!
          </button>
        </div>
      </div>
    </form>
    <Message
      @closeMessage="showMessage = $event"
      message="Activity is saved to your list"
      :danger="false"
      v-if="showMessage"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Message from "../components/Message";
export default {
  name: "ActifityForm",
  components: {
    Message
  },
  data() {
    return {
      showMessage: false,
      types: [
        "education",
        "recreational",
        "social",
        "diy",
        "charity",
        "cooking",
        "relaxation",
        "music",
        "busywork"
      ],
      formValues: {
        type: null,
        activity: null,
        participants: null,
        price: 0
      }
    };
  },
  created() {
    this.getActivityFromApi();
  },
  computed: {
    ...mapState({
      activity: state => state.currentActivity
    })
  },
  methods: {
    ...mapActions(["getActivityFromApi", "addActivity"]),
    save() {
      this.addActivity(this.formValues);
      this.showMessage = true;
    }
  },
  watch: {
    activity(value) {
      this.formValues = {
        ...value,
        price: value.price * 100
      };
    }
  }
};
</script>

<style scoped lang="scss">
.formmain,
form,
.flex {
  height: 100%;
}
.littleflex {
  display: flex;
  justify-content: space-between;
  margin-top: -30px;
  color: gray;
  font-size: smaller;
}
.button {
  padding: 8px 0 8px 0;
  border-radius: 5px;
  color: white;
  background-color: darkslategrey;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: darkslategray;
  }
  &:focus {
    border: none;
    outline: none;
  }
  &:active {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  }
}
.button-success {
  @extend .button;
  background-color: green;
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
}
.button-base {
  @extend .button;
  background-color: blue;
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
}
.flex {
  display: flex;
  justify-content: space-around;
  height: 100%;
}
label {
  color: gray;
}
.areal {
  width: 55%;
  padding: 10px;
  position: relative;
  height: 90%;
}
.arear {
  width: 35%;
  padding: 10px;
  position: relative;
  height: 90%;
}
textarea {
  width: 100%;
  border: none;
  font-size: large;
}
input,
select {
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 5px 0 5px 0;
  text-align: center;
  margin: 8px 0 12px 0;
}
.leftinput {
  height: 60%;
}
</style>

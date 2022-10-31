<template>
  <div id="power-4-page">
    <div id="power-4-container">
      <div id="select-slot">
        <div v-bind:key="index" v-for="(slot,index) in Array.from(Array(7).keys())" class="slot-container">
          <button @click="selected_slot(index)" v-bind:class="player.color"/>
        </div>
      </div>
      <div id="power-4-grid">
        <div v-bind:key="index" v-for="(cell,index) in power_4_grid" class="cell-container">
          <div class="pawn" :style="{backgroundColor : cell}"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Call} from "@/app/Call";

export default {
  name: "Power-4-Page",
  data() {
    return {
      power_4_grid: Array.from(Array(7 * 7).fill('')),
      player: {
        id: localStorage.getItem("id_player"),
        color: ""
      }
    }
  },
  methods: {
    selected_slot(index) {
      console.log(index)
    }
  },
  mounted() {
    Call.post("player-ready", {
      id: this.player.id,
      game: "power_4"
    }).then(response => {
      this.player.color = response.data.color
    })
  }
}
</script>

<style scoped lang="scss">
#power-4-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  #power-4-container {
    width: 40vw;
    height: 50vw;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #select-slot {
      width: 100%;
      height: 10%;
      display: grid;
      justify-content: center;
      align-content: center;
      grid-column-gap: 20px;
      grid-template-columns: 10% 10% 10% 10% 10% 10% 10%;
      grid-template-rows: 80%;

      .slot-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border-radius: 50%;

        button {
          padding: 0;
          margin: 0;
          height: 100%;
          width: 100%;
          border-radius: 50%;
          border: none;
          background-color: transparent;
        }

        .red:hover {
          background-color: rgb(131, 26, 26);
        }

        .blue:hover {
          background-color: rgb(13, 39, 79);
        }
      }
    }

    #power-4-grid {
      width: 100%;
      height: 80%;
      background-color: blue;
      border-radius: 5px;
      display: grid;
      justify-content: center;
      align-content: center;
      grid-template-columns: 10% 10% 10% 10% 10% 10% 10%;
      grid-template-rows: 10% 10% 10% 10% 10% 10% 10%;
      grid-row-gap: 20px;
      grid-column-gap: 20px;


      .cell-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border-radius: 50%;

        .pawn {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          background-color: rgb(24, 26, 27);
        }
      }
    }
  }


}
</style>

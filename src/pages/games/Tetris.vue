<template>
  <div id="tetris-page">
    <div id="tetris">
      <div id="game-grid">
        <div :key="index" v-for="(block,index ) in tetris_grid" class="block" :style="{backgroundColor: block}"/>
      </div>
      <div id="game-info">
        <div id="next-piece">
          <div :key="row_index" v-for="(row,row_index ) in next_piece">
            <div :key="column_index" v-for="(column,column_index) in row" class="block"
                 :style="{backgroundColor: next_piece[column_index][row_index]}"/>
          </div>
        </div>
        <div id="scores">
          <h1>Score: {{ score }}</h1>
          <h1>Vie: {{ life }}</h1>
        </div>
        <button id="play-button" @click="start_game" v-if="!game_started">Jouer</button>
      </div>
    </div>
  </div>
</template>

<script>
import {Call} from "@/app/Call";

export default {
  name: "Tetris-Page",
  data() {
    return {
      life: 3,
      score: 0,
      game_started: false,
      next_piece: Array.from(Array(4).fill(Array(4).fill(""))),
      tetris_grid: Array.from(Array(20).fill(Array(10).fill("")))
    }
  }, methods: {
    start_game() {
      this.game_started = true
      Call.post("/start-tetris", {
        tetris_grid: this.tetris_grid,
        score: this.score,
        life: this.life,
        next_piece: this.next_piece
      }).then(response => {
        this.tetris_grid = response.data.tetris_grid
        this.score = response.data.score
        this.life = response.data.life
        this.next_piece = response.data.next_piece
      })
    }
  }
}
</script>

<style scoped lang="scss">

#tetris-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  #tetris {
    width: 60%;
    height: 80%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;


    .block {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }


    #game-grid {
      width: 70%;
      height: 90%;
      background-color: black;
      border: dimgrey ridge 20px;

      display: grid;
      grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
      grid-template-rows: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
    }


    #game-info {
      padding: 20px;
      background-color: gray;
      width: 25%;
      height: 90%;
      justify-content: space-around;
      display: flex;
      flex-direction: column;

      #next-piece {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto auto auto auto;
        background-color: black;
        height: 20%;
        width: 90%;
        border: dimgrey ridge 5px;
      }

      #scores {
        width: 100%;
        height: 50%;

        h1 {
          font-weight: bold;
          color: yellow;
        }
      }

      #play-button {
        width: 100%;
        height: 10%;
      }
    }
  }
}

</style>

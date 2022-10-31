<template>
  <div id="home-page">
    <aside id="players-container">
      <div id="player-pseudo-container" v-if="!player.is_connected">
        <input placeholder="Pseudo" v-bind:value="player.pseudo"
               @change="event => player.pseudo = event.target.value"/>
        <button v-on:click="set_player_connected" v-bind:disabled="player.pseudo.length === 0">
          <v-icon name="fc-approval"/>
        </button>
      </div>
      <div v-bind:key="index" class="player-container" v-for="(player,index) in players">
        <h3 v-bind:style=" {color : (player.is_connected ? 'green': 'red')}">{{ player.pseudo }}</h3>
      </div>
    </aside>
    <div id="games-container">
      <div v-bind:key="index" class="game-container" v-for="(game,index) in games">
        <router-link v-bind:to="game.url">
          <h3>{{ game.title }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {Call} from "@/app/Call";

export default {
  name: "Home-Pages",
  data() {
    return {
      games: [{
        title: "Puissance 4",
        url: "/power_4",
      }, {
        title: "Tetris",
        url: "/tetris",
      }, {
        title: "Qui est ce",
        url: "/who_is_this",
      }, {
        title: "Snake",
        url: "/snake",
      }, {
        title: "Bataille navale",
        url: "/battleship",
      }],
      players: [],
      player: {
        pseudo: "",
        is_connected: window.closed,
        id: Math.random().toString(36),
      }
    }
  },
  methods: {
    set_player_connected() {
      Call.post("set-player", {
        pseudo: this.player.pseudo,
        is_connected: !window.closed,
        id: this.player.id,
        game: ""
      }).then(() => {
        localStorage.setItem("id_player", this.player.id)
        this.player.is_connected = true
        Call.get("get-players-connected").then(response => {
          this.players = response.data
        })
      })
    }
  },
  mounted() {
    if (localStorage.getItem("id_player") && localStorage.getItem("id_player").length > 0) {
      this.player.id = localStorage.getItem("id_player")
      this.player.is_connected = true
      Call.post("set-player", {
        pseudo: this.player.pseudo,
        is_connected: !this.player.is_connected,
        id: this.player.id,
        game: ""
      }).then(() => {

      })
      Call.get("get-players-connected").then(response => {
        this.players = response.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
#home-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;


  #players-container {
    width: 25%;
    height: 50%;
    padding: 10px;
    display: flex;
    justify-content: center;
    background-color: dimgrey;
    border-radius: 10px;
    margin: 0 10px;

    #player-pseudo-container {
      width: 80%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        height: 100%;
        width: 20%;
        background-color: transparent;
        border: none;
      }

      button:active {
        transform: scale(1.2);
      }

      input {
        height: 100%;
        width: 80%;
        border-radius: 10px;
        padding: 1px;
        border: none;
      }
    }

    .player-container {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  #games-container {
    width: 60%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: dimgrey;
    border-radius: 10px;
    margin: 0 10px;

    .game-container {
      width: 80%;
    }
  }
}
</style>

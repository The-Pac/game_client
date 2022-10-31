<template>
  <router-view/>
</template>

<script>

export default {}
</script>

<style lang="scss">
body {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background: radial-gradient(circle at 18.7% 37.8%, #1b1d1e 0%, #1d2c33 90%);

  #app {
    height: 100%;
    width: 100%;
  }
}

body::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

body::-webkit-scrollbar-thumb {
  background: #cacaca;
  border-radius: 20px;
}

body::-webkit-scrollbar-thumb:hover {
  background: #ababab;
}

body::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 0;
  box-shadow: inset 0 0 0 0 #F0F0F0;
  margin: 5px 0;
}

.information-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: white 1px solid;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 90%;
}


@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('../assets/font/Roboto-Medium.ttf') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


.scrollbar-smooth::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.scrollbar-smooth::-webkit-scrollbar-thumb {
  background: #cacaca;
  border-radius: 20px;
}

.scrollbar-smooth::-webkit-scrollbar-thumb:hover {
  background: #ababab;
}

.scrollbar-smooth::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 0;
  box-shadow: inset 0 0 0 0 #F0F0F0;
  margin: 5px 0;
}

</style>

<template>
  <div id="arcade-box">
    <div id="arcade-border" style="left: 0"/>
    <div id="arcade-banner"/>
    <div id="screen-container">
      <div id="screen"/>
    </div>
    <div id="arcade-border" style="right: 0"/>
  </div>
</template>

<script>
export default {
  name: "Who-is-This-Page"
}
</script>

<style scoped lang="scss">
#arcade-box {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  #arcade-banner {
    width: 100%;
    height: 15%;
    position: absolute;
    top: 0;
    background-color: black;
    z-index: 2;
    border-top: #FFFFFF 10px solid;
    border-bottom: #FFFFFF 10px solid;
  }

  #screen-container {
    position: absolute;
    z-index: 1;

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    #screen {
      border: ridge 5mm  #f6f6f6;
      width: 70%;
      height: 60%;
      margin: 5%;
      background-color: black;
    }
  }

  #arcade-border {
    height: 100%;
    width: 2vw;
    position: absolute;
    background: linear-gradient(#FFFFFF 0%, #a19d94 100%);
    z-index: 3;
  }

}
</style>

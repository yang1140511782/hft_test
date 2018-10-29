<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>  

<style>
@import "./style/common.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: url("./assets/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 56.5rem;
  width: 100rem;
}
</style>

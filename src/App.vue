<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
#app{
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>

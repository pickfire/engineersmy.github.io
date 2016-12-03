<template>
  <div class='app-loading'>Loading...</div>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.app-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(black, .5);
  color: white;
  text-align: center;
  line-height: 100vh;
  font-size: 36px;
}
</style>

<template>
  <header class='app-header'>
    <router-link to='/' class='header-icon'><slot name='icon'></slot></router-link> 
    <h2 class='header-title'>Application Name</h2>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../styles/colors.scss';
header {
  background: black;
  color: white;
  height: 60px;
  line-height: 60px;
}
.header-icon,
.header-title {
  display: inline-block;
  vertical-align: middle;
}
.header-title {
  font-weight: bold;
}
</style>

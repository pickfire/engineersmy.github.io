<template>
  <header class='app-header'>
    <router-link to='/' class='header-icon'>
      <slot name='icon'></slot>
    </router-link> 
    <h2 class='header-title'>App Name</h2>
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
  background: #d0d0d0;
  color: #101010;
  height: 60px;
  line-height: 60px;
}
.header-icon {
  display: none;
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

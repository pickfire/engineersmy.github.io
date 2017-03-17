<template>
  <div class='app-navbar'>
    <router-link class='nav-item' v-for='route in routes' :to='route.path'>{{ route.name }}</router-link>
  </div>
</template>

<script>
import { routes } from '../../router/index'
const filteredRoutes = routes.filter((d) => {
  return d.name !== 'index'
})
export default {
  name: 'app-navbar',
  data () {
    return {
      routes: filteredRoutes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../styles/colors.scss';
.app-navbar {
  display: block;
  height: 30px;
  line-height: 30px;
  background: #F4F4F4;
}
.nav-item {
  text-transform: capitalize;
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
  color: #202020;
}
</style>

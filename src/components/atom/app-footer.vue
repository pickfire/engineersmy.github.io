<template>
  <footer class='app-footer'>
  Language: 
  <select v-on:change='selectLanguage'>
    <option class='footer-item' v-for='language in languages' :value='language.value'>{{language.label}}</option>
  </select>
  </footer>
</template>

<script>
import { languages } from '../../locale/locale'
export default {
  name: 'app-footer',
  props: ['bus'],
  data () {
    return {
      languages
    }
  },
  methods: {
    selectLanguage (evt) {
      this.bus.$emit('locale', {
        action: 'set',
        lng: evt.currentTarget.value
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../styles/colors.scss';
footer {
  height: 100px;
  background: silver;
}
.footer-item {
  display: inline-block;
  padding: 0 10px;
}
</style>

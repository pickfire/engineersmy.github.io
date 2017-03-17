<template>
  <footer class='app-footer'>
    Language:
    <select v-on:change='selectLanguage'>
      <option
        class='footer-item'
        v-for='language in languages'
        :value='language.id'
      >{{language.label}}</option>
    </select>
    <span>{{locale}}</span>
  </footer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'app-footer',
  computed: {
    ...mapGetters('locale', ['locale', 'languages'])
  },
  methods: {
    ...mapActions('locale', ['setLocale']),
    selectLanguage (evt) {
      this.setLocale(evt.currentTarget.value)
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

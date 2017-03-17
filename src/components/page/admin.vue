<template>
  <div class='page-admin'>
    {{ locale }}
    {{ $t('message.greet', locale) }}
    {{ $t('formatter.moment', { date: new Date(), format: 'YYYY MMM DD' }) }}
    <button v-on:click='toastNotification'>Show notification</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'page-admin',
  computed: {
    ...mapGetters('locale', [
      'locale'
    ])
  },
  methods: {
    ...mapActions('notification', {
      'showNotification': 'show'
    }),
    toastNotification () {
      this.showNotification({
        title: 'Hello World',
        description: 'This is an example notification'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

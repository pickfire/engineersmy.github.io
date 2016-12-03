<template>
  <div class='page-admin'>
    {{ locale('greet') }}
    {{ locale('formatDate', { date: new Date() }) }}

    <button v-on:click='showNotification'>Show notification</button>
  </div>
</template>

<script>
export default {
  name: 'page-admin',
  props: ['bus', 'locale'],
  mounted () {
    console.log(this.locale)
  },
  methods: {
    showNotification () {
      this.bus.$emit('notification', {
        action: 'show',
        title: 'Hello World',
        description: 'This is a new notification'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

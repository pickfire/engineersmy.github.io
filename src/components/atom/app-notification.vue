<template>
  <div>
    <div v-for='(model, index) in collection'>
      <div class='notification' v-on:mouseenter='onMouseEnter(index)' v-on:mouseleave='onMouseLeave(index)' v-on:click='onClick(index)' :style='{top: 10 + (index * 70) + "px"}'>
        <div class='notification-title h4'>{{model.title}} </div>
        <div class='notification-description h5'>{{model.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-notification',
  props: ['collection'],
  components: { },
  methods: {
    onMouseEnter (index) {
      this.$emit('mouseenter', index)
    },
    onMouseLeave (index) {
      this.$emit('mouseleave', index)
    },
    onClick (index) {
      this.$emit('press', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../styles/colors.scss';

.notification {
  position: fixed;
  top: 10px;
  right: 10px;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
  color: $cod-gray;
  width: 300px;
  border-radius: 7px;
  padding: 10px 20px;
  transform: translateX(100%);
  animation: toast .174s ease-out forwards;
  cursor: default;
  z-index: 2500;
  text-align: left;
}
.notification:hover {
  background: $silver;
}
.notification-title {
  font-weight: bold;
}
@keyframes toast {
  0% {
    transform: translateX(100%) scale(0.95);
    opacity: .05;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}
</style>

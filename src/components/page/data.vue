<template>
  <div class="page-data">
    <div class="col-12">
      <d3-chart namespace="d3-chart"></d3-chart>
    </div>
  </div>
</template>

<script>
// Bad, don't access the methods directly
// import draw from '../../module/chart.js'
import D3Chart from '../organism/d3-chart'
export default {
  name: 'page-data',
  components: {
    D3Chart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/theme.scss';
.page-data {
  text-align: center;
  padding: 0 $block-20;
}
.col-12 {
  display: block;
  margin: auto;
  text-align: left;
}
</style>

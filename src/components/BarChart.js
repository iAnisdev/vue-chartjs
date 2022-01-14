import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  props: ['data', 'options'],
  mounted () {
      console.log(this.data)
    this.renderChart(this.data, this.options)
  }
};
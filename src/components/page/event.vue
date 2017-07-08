<template>
  <div class="page-event">
    <div class="col-12">
      <break rows="3"></break>

      <h1>Events in Malaysia</h1>

      <br>

      <div class="section" v-for="section in sections">
        <div><b class="section-title">{{section.title}}</b></div>

        <br>

        <div v-for="(event, index) in section.events">
          <div 
            class="event"
            :class='{"is-expired": checkExpiry(event.datetime), "is-today": checkToday(event.datetime)}'>
            <span class="event-date"> {{parseDate(event.datetime)}} - </span><a class="event-link" :href="event.url">{{event.title}}</a>
          </div>
    
        </div>

        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import Break from '../atom/break.vue'
import moment from 'moment'
import githubParser from '../../module/github-event-parser.js'
export default {
  name: 'page-event',
  components: { Break },
  data () {
    return {
      sections: []
    }
  },
  mounted () {
    window.fetch('https://raw.githubusercontent.com/engineersmy/events/master/README.md').then((body) => {
      return body.text()
    }).then((data) => {
      const events = githubParser(data)
      this.sections = events.titles.map((title, index) => {
        const availableEvents = events.sections[index].filter((e) => {
          return !this.checkExpiry(e.datetime)
        })
        if (availableEvents.length) {
          return {
            title,
            events: availableEvents
          }
        }
        return null
      }).filter((x) => x)
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    parseDate (timestamp) {
      return moment(timestamp).format('Do')
    },
    checkExpiry (timestamp) {
      if (!timestamp) {
        return false
      }
      const today = Date.now()
      const current = new Date(timestamp).getTime()
      return current < today
    },
    checkToday (timestamp) {
      if (!timestamp) {
        return false
      }
      const today = new Date().setHours(0, 0, 0, 0)
      const current = new Date(timestamp).setHours(0, 0, 0, 0)
      return current === today
    },
    checkArray (array) {
      return Array.isArray(array)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/theme.scss';
.page-event {
  padding: 0 $block-20;
}
.col-12 {
  display: block;
  margin: auto;
  text-align: left;
}
.section-title {
  font-weight: bold;
}
.event {
  color: $tundora;
  line-height: 1.25em;
}
.event-type {
  font-weight: bold;
  margin: $block-20 0 $block-10;
  text-transform: uppercase;
  font-size: 12px;
  color: $dove-gray;
}
.event.is-expired:before {
  content: 'Past';
  color: white;
  background: $coral-red;
  font-size: 12px;
  padding: 0 5px;
  height: 16px;
  line-height: 16px;
  border-radius: 3px;
  display: inline-block;
}
.event.is-today:before {
  content: 'Today';
  color: white;
  background: $turquoise;
  font-size: 12px;
  padding: 0 5px;
  height: 16px;
  line-height: 16px;
  border-radius: 3px;
  display: inline-block;
}


.event-link {
  @extend %no-link;
}
.event-link:hover {
  color: $dodger-blue;
  text-decoration: underline;
}
.event-link:visited {
  color: $silver;
}

</style>

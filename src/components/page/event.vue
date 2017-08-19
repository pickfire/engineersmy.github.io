<template>
  <div class="page-event">
    <div class="col-12">
      <break rows="3"></break>

      <h1>Events in Malaysia</h1>

      <br>

      <div class="section" v-for="section in sections">
        <div><b class="section-title">{{section.title}}</b></div>

        <br>

        <div v-for="(groups, index) in section.events"
          class="event-group"
          :class='{"is-today": checkToday(groups[0].datetime)}'>
        
          <div v-for="(event, i) in groups">
            <div 
              class="event"
              :class='{"is-expired": checkExpiry(event.datetime), "is-today": checkToday(event.datetime)}'>
              <span class="event-date"><b :style="{ 'visibility': i === 0 ? 'visible' : 'hidden' }">{{ parseDate(event.datetime) }}</b>&nbsp;</span><a class="event-link" :href="event.url">{{event.title}}</a>
            </div>
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
          return !this.checkExpiry(e.datetime) // && !this.checkToday(e.datetime)
        })

        const eventsGroupedByDate = [...new Set(availableEvents.map((e) => e.datetime.getTime()))].reduce((arr, timestamp) => {
          arr.push(availableEvents.filter((e) => {
            return e.datetime.getTime() === timestamp
          }))
          return arr
        }, [])
        // const todayEvents = events.sections[index].filter((e) => {
        //   return this.checkToday(e.datetime)
        // })
        if (eventsGroupedByDate.length) {
          return {
            title,
            events: eventsGroupedByDate
            // todayEvents: todayEvents
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
      const today = new Date().setHours(0, 0, 0, 0)
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

.event-date {
  min-width: 40px;
}

.event-link:before {
  content: "○";
  display: inline-block;
  padding: 0 10px 0 0;
  font-weight: bold;
  color: $silver;
}

.event {
  @extend %flex;
  color: $tundora;
  line-height: 40px;
  vertical-align: middle;
  font-size: 14px;
}

.event-type {
  font-weight: bold;
  margin: $block-20 0 $block-10;
  text-transform: uppercase;
  font-size: 12px;
  color: $dove-gray;
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

.event-date b {
  font-weight: bold;
  margin-right: 12px;
  font-size: 12px;
  display: inline-block;
}

.event-group {
  border-bottom: 1px solid #EEEEEE;
}

.event-group.is-today {
  box-shadow: 0 2.5px 10px rgba(0, 0, 0, .2);
  border: none;
  padding: 0 $block-10;
  border-radius: $block-10;
  margin: 0 0 $block-10 0;
}

.event-group.is-today .event-date b {
  // border: 1px solid #DCDCDC;
  // width: 45px;
  // text-align: center;
  // border-radius: 5px;
  color: $dodger-blue;
}
</style>

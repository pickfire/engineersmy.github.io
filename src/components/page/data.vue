<template>
  <div class="page-data">
    <div class="col-12">

      <br>
      <br>

      <div>
        <input 
          class="github-search"
          @keyup="onSearch" 
          type="input" 
          placeholder="Enter your Github username to find similar users"
        />
        <div class="github-search-placeholder" v-if="message.length"> {{message}} </div>
      </div>

      <div>
        <br>
        <div class="match-title" v-if="matches.length">
          Hi {{username}}! We found {{matches.length}} users that are similar to you:
        </div>
        <br>
        <div v-for="match in matches"
          class="github-user"
          >
          <a class="github-user-link" :href="match.url"
            :title="match.username"
            target="_blank"
            >
            <div 
              class="github-photo"
              :style="{background: 'url(' + match.avatarUrl + ') no-repeat center center / cover'}"
            ></div>
            <span>{{ match.username }}</span>
          </a>
        </div>
      </div>

      <d3-chart namespace="d3-chart"></d3-chart>
    </div>
  </div>
</template>

<script>
// Bad, don't access the methods directly
// import draw from '../../module/chart.js'
import D3Chart from '../organism/d3-chart'
import recommendations from '../../data/recommendation.json'
export default {
  name: 'page-data',
  beforeMount () {
    this.matches = []
    this.message = ''
    this.username = ''
  },
  components: {
    D3Chart
  },
  methods: {
    onSearch (evt) {
      if (this.searchTimeout) {
        window.clearTimeout(this.searchTimeout)
      }
      const username = evt.currentTarget.value
      if (!username.trim().length) {
        this.matches = []
        this.message = ''
        this.username = ''
        return
      }

      this.searchTimeout = window.setTimeout(() => {
        const user = recommendations.find(u => u.username.toLowerCase() === username.toLowerCase())

        if (!user) {
          this.matches = []
          this.message = 'No results found. You probably do not have any matches or your location is not set to Malaysia.'
          this.username = ''
          return
        }
        this.matches = user.matches_info
        this.message = ''
        this.username = user.username
      }, 250)
    }
  },
  data () {
    return {
      matches: this.matches,
      message: this.message,
      username: this.username
    }
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

.github-search {
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  border-radius: 5px;
  padding: 0 5px;
  border: 2px solid $mercury;
}

.github-search-placeholder {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: $dove-gray;
  font-style: italic;
}

.github-user {
  line-height: 40px;
  height: 40px;
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  padding: 0 $block-10;
  border-radius: 7px;
}

.github-user:hover {
  background: rgba($dodger-blue, .1);
}

.github-user-link {
  @extend %no-link;
}

.github-photo {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  line-height: 30px;
  border: 1px solid $mercury;
}

.match-title {
  font-size: 14px;
  font-weight: 600;
  padding: 0 $block-10;
}
</style>

<template>
  <div class='app-jumbotron'>
    <div class='app-jumbotron-title'>
      <br>
        <div>
          <h1 class='app-jumbotron-heading'>Engineers.my</h1>
          
          <br>
          
          <p class='app-jumbotron-subheading'>An open source community for developers to share, collaborate and improve the tech community in Malaysia.</p>

          <br>
          <br>
          <br>

          <p class='slack-invite-heading'>Join engineers.my Slack Community</p>
          
          <br>

          <a 
            href='https://engineersmy.herokuapp.com/' 
            class='button-slack-wrapper'
            title='Join engineers.my slack group here'
          >
            <img class='button-slack' src="/static/slack.png" alt='slack.png'>
          </a>
        </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-jumbotron'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../styles/theme.scss';
.app-jumbotron {
  background: $dodger-blue;
  padding: 0 $block-20;
}
.app-jumbotron-title {
  @extend %flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: white;
  height: 320px;
}

.app-jumbotron-heading {
  font-weight: bold;
}

.app-jumbotron-subheading {
  color: rgba(white, .75);
  max-width: 480px;
  display: inline-block;
  line-height: 1.25em;
}

.slack-invite-heading {
  font-size: 12px;
  font-weight: bold;
}

.button-slack-wrapper {
  background: white;
  display: inline-block;
  padding: $block-10 $block-20;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(black, .25);
  vertical-align: middle;
}

.button-slack {
  height: 20px;
  width: auto;
}
</style>

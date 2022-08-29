<template>
  <div class="Launching" align="center">
    <div class="header">
      <img class="member no-select" src="../assets/intro_header.svg" alt="intro_image" width="400">
      <p class="member"><b>Distro Foundation</b> - a
        foundation for supporting the open source world, producing and
        monitoring projects
        beneficial to the development communities of the world. By creating new ideas and implementing different ideas
        and releasing them for free in the world, the distro has taken a step in the development of Iran's open source
        <br>
        communities,
        <ButtonVue />
      </p>
    </div>

    <div class="handle">
      <div class="teamIntroContent">
        <h4>Contact</h4>
      </div>
      <div class="teamIntro">
        <h4>Team Member</h4>
        <div class="content">
          <img src="https://avatars.githubusercontent.com/u/77109284?v=4" alt="Team Member">
          <p id="p">Developer</p>
          <p>Mehran</p>
        </div>
        <div class="content">
          <img src="https://avatars.githubusercontent.com/u/70762647?v=4" alt="Team Member">
          <p id="p">Developer</p>
          <p> Amirhossein </p>
        </div>
        <div class="content">
          <p id="next">Next Friend ...</p>
        </div>
      </div>
    </div>
    <div class="Status">
      <h4>Projects Development Status</h4>
    </div>
    <div class="Status">
      <h4>Telegram Shared Post</h4>
    </div>
  </div>
</template>

<script>
import ButtonVue from './Button.vue';


export default {
  name: 'TheLaunching',
  components: {
    ButtonVue
  }
}
</script>

<style scoped>
p {
  margin: 40px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.Launching {
  background-color: white;
  border: 3px solid white;
  border-radius: 20px;
  margin: 30px;
  display: flex;
  flex-direction: column;
}

.separetor {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 12px;
}

#intro {
  font-size: smaller;
}

.teamIntro {
  background-color: rgb(255, 223, 181);
  border: 3px solid rgb(255, 223, 181);
  border-radius: 20px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 200px;
}

.teamIntroContent {
  background-color: rgb(255, 223, 181);
  border: 3px solid rgb(255, 223, 181);
  border-radius: 20px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 200px;
}

.teamIntro img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 20px;
}

.header {
  background-color: rgb(255, 223, 181);
  border: 3px solid rgb(255, 223, 181);
  border-radius: 20px;
  margin: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

.header p {
  margin-top: 130px;
}

.Status {
  background-color: rgb(255, 223, 181);
  border: 3px solid rgb(255, 223, 181);
  border-radius: 20px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 200px;
}

.content {
  background-color: white;
  border: 3px solid white;
  border-radius: 20px;
  margin: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.content #p {
  font-size: smaller;
  background-color: bisque;
  padding: 10px;
  border-radius: 20px;
}

.content #next {
  margin: 40px;
}

.handle {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.member {
  flex: 1 1 200px;
}
</style>

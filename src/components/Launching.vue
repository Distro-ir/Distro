<template>
  <div class="Launching" align="center">
    <div class="header">
      <img class="member no-select introimg" src="../assets/intro_header.svg" alt="intro_image" height="300">
      <p id="begin" class="member"><b>Distro Foundation</b> - a
        foundation for supporting the open source world, producing and
        monitoring projects
        beneficial to the development communities of the world. By creating new ideas and implementing different ideas
        and releasing them for free in the world, the distro has taken a step in the development of Iran's open source
        communities,
        <ButtonVue />
      </p>
    </div>

    <div class="handle">
      <div class="teamIntroContent">
        <h4>Contact</h4>
        <div class="contact">
          <div class="jim">
            <img src="../assets/Icons/slack.svg" alt="Email" width="24">
            <p id="p">Mehraxxn@gmail.com</p>
          </div>
          <p id="copy">Copy!</p>
        </div>
        <div class="contact">
          <div class="jim">
            <img src="../assets/Icons/phone.svg" alt="Phone" width="24">
            <p id="p">+098921289</p>
          </div>
          <p id="copy">Copy!</p>
        </div>
        <h4>Status</h4>
        <div class="statusOfProject">
          <div class="contentMember">
            <img src="../assets/Icons/user-plus.svg" alt="" width="34">
            <p>+2</p>
          </div>
          <div class="contentMember">
            <img src="../assets/Icons/refresh-cw.svg" alt="" width="34">
            <p>+0</p>
          </div>
          <div class="contentMember">
            <img src="../assets/Icons/award.svg" alt="" width="34">
            <p>+0</p>
          </div>
        </div>
      </div>
      <div class="teamIntro">
        <h4>Team Member</h4>
        <div class="content">
          <img src="https://avatars.githubusercontent.com/u/77109284?v=4" alt="Team Member">
          <p id="p">Developer</p>
          <p id="name">Mehran</p>
        </div>
        <div class="content">
          <img src="https://avatars.githubusercontent.com/u/70762647?v=4" alt="Team Member">
          <p id="p">Developer</p>
          <p id="name"> Amir </p>
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

#begin {
  margin-bottom: 60px;
  margin-top: 60px;
}

.Launching {
  background-color: #395B64;
  border: 3px solid #395B64;
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
  background-color: #E7F6F2;
  border: 3px solid #E7F6F2;
  border-radius: 20px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 200px;
}

.teamIntroContent {
  background-color: #E7F6F2;
  border: 3px solid #E7F6F2;

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
  background-color: #E7F6F2;
  border: 3px solid #E7F6F2;
  border-radius: 20px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

.header p {
  margin-top: 130px;
}

.Status {
  background-color: #E7F6F2;
  border: 3px solid #E7F6F2;
  border-radius: 20px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 200px;
}

.content {
  background-color: #A5C9CA;
  border: 3px solid #A5C9CA;
  border-radius: 20px;
  margin: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.content #p {
  font-size: smaller;
  background-color: #395B64;
  padding: 10px;
  border-radius: 20px;
  color: #E7F6F2;
}

.content #name {
  padding-bottom: 0px;
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
  width: fit-content;
  text-align: left;
}

.introimg {
  margin-top: 40px;
  margin-bottom: 50px;
}

.contact {
  margin-left: 60px;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
}

.contact #copy {
  background-color: aqua;
  border-radius: 20px;
  padding: 9px;
  font-size: smaller;
}

.contact #p {
  font-size: smaller;
  font-style: italic;
  color: blue;
  border-bottom: 3px dotted black;
}

.jim {
  display: flex;
  justify-content: flex-start;
}

.statusOfProject {
  background-color: #A5C9CA;
  border: 3px solid #A5C9CA;
  border-radius: 20px;
  margin: 30px;
  display: flex;
  padding: 20px;
  padding-bottom: 0px;
  flex-direction: row;
  justify-content: space-between;
}

.statusOfProject .contentMember {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.statusOfProject .contentMember img{
  margin-left: 35px;
}
</style>

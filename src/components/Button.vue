<template>
    <div class="ButtonHandler">
        <a href="mailto:mehraxxn@gmail.com"><button>Membership Request</button></a>
        <a href="https://github.com/Distro-ir"><button id="organ">Organization</button></a>
    </div>
</template>
<script>
export default {
    name: "TheButtom",
    components: {}
}
</script>
<style scoped>
.ButtonHandler {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
}

.ButtonHandler button {
    border: 0;
    padding: 15px;
    border-radius: 18px;
    background-color: #A5C9CA;
    width: 200px;
}

.ButtonHandler button:hover {
    background-color: #E7F6F2;
}

#organ {
    border: 3px solid #A5C9CA;
    padding: 13px;
    border-radius: 18px;
    background-color: #E7F6F2; 
}

#organ:hover {
    background-color: #A5C9CA;
}
</style>
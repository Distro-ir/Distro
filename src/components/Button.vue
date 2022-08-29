<template>
    <div class="ButtonHandler">
        <a href="mailto:mehraxxn@gmail.com"><button>Membership Request</button></a>
        <a href="https://github.com/Distro-ir"><button>Organization</button></a>
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
    background-color: azure;
}

.ButtonHandler button:hover {
    background-color: rgb(255, 223, 181);
}
</style>
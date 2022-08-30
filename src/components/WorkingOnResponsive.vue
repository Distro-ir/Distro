<template>
    <div class="dlex">
        <p>
            This website is currently not accessible on devices with a length of less than 900 px.
        </p>
    </div>
</template>
<script>
export default {
    name: "theResponsive"
}
</script>
<style scoped>
.dlex {
    display: flex;
    justify-content: center;
}

.dlex p {
    color: #E7F6F2;
    margin: 50px;
    border-left: 5px solid #A5C9CA;
    padding-left: 20px;
}
</style>
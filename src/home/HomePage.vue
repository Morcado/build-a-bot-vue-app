<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" alt="" aria-hidden="true">
    </div>
    <div class="get-started">
      <router-link to="/build">Get started</router-link> building your first robot
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    console.log(process.env.VUE_APP_TEST);
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}

.robot {
  height: 300px;
}
</style>

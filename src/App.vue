<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  text-align: center;
}

.container {
  background: whitesmoke;
}
</style>

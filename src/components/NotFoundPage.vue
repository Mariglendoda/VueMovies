<template>
  <div class="not-found-page">
    <h1 class="title">404</h1>
    <p class="paragraph">Page not found :(</p>

    <router-link to="/">
      <button>Back to home</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.not-found-page {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;

  button {
    text-transform: capitalize;
    text-decoration: none;
    font-weight: bold;
    border: 0;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background: #aaaaaa;
    }
  }
}
</style>

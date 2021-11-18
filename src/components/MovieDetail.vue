<template>
  <div class="movie-detail">
    <router-link to="/"><i class="fas fa-arrow-left"></i></router-link>

    <img :src="movie.Poster" class="featured-img" />
    <div class="content">
      <h2 class="title">{{ movie.Title }}</h2>
      <p class="year">{{ movie.Year }}</p>
      <p class="detail">{{ movie.Plot }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "../env";

export default {
  setup() {
    const movie = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(
        `https://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`
      )
        .then((response) => response.json())
        .then((data) => {
          movie.value = data;
        });
    });

    return {
      movie,
    };
  },
};
</script>

<style lang="scss" scoped>
.movie-detail {
  position: relative;
  width: 80%;
  margin: auto;
  text-align: start;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 50px;
  align-items: center;
  height: 100vh;

  .featured-img {
    position: relative;
    border-radius: 10px;
  }

  .content {
    display: grid;
    gap: 10px;
    width: 700px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 2px 0px #ccc;
  }

  .fa-arrow-left {
    position: absolute;
    top: 110px;
    font-size: 21px;
    color: black;
  }
}
</style>

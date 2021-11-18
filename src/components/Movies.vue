<template>
  <div class="movies">
    <div class="header">
      <router-link to="/" class="title"><span>Vue</span>Movies</router-link>

      <form @submit.prevent="SearchMovies" class="search-box">
        <input type="text" placeholder="Search movies" v-model="search" />

        <button @click.prevent="SearchMovies" class="search-btn">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>

    <div class="movie-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="product-image">
            <img :src="movie.Poster" />
            <div class="type">{{ movie.Type }}</div>
          </div>
        </router-link>

        <div class="detail">
          <p class="year">{{ movie.Year }}</p>
          <h3 class="title">{{ movie.Title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import env from "../env";

export default {
  setup() {
    const search = ref("");
    const movies = ref([]);
    const SearchMovies = () => {
      if (search.value !== "") {
        fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.Search;
          });
      }
    };

    onMounted(() => {
      fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&s=all`)
        .then((response) => response.json())
        .then((data) => {
          movies.value = data.Search;
        });
    });

    return {
      search,
      movies,
      SearchMovies,
    };
  },
};
</script>

<style lang="scss" scoped>
.movies {
  display: grid;
  gap: 10px;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: darkblue;
    padding: 15px;
    z-index: 999;

    .title {
      color: white;
      text-decoration: none;
      font-size: 21px;
      font-weight: bold;

      span {
        color: #42b883;
      }
    }

    .search-box {
      display: flex;
      align-content: center;
      background: darkblue;
      border-radius: 8px;
      transition: 0.4s;
      overflow: hidden;
      border: 1px solid white;

      input {
        display: block;
        appearance: none;
        border: none;
        outline: none;
        background: none;
        width: 200px;
        padding: 10px;
        color: white;

        &::placeholder {
          color: white;
        }
      }

      .search-btn {
        cursor: pointer;
        background: white;
        outline: none;
        border: none;
        padding: 0 10px;
      }
    }
  }

  .movie-list {
    margin: 85px 0 20px 0;
    display: grid;
    grid-template-columns: repeat(3, 352px);
    justify-content: center;
    align-items: center;
    gap: 15px;

    .movie {
      border-radius: 10px;
      overflow: hidden;
      box-shadow: -1px 5px 7px 2px #ccc;

      .movie-link {
        .product-image {
          position: relative;
          width: 400px;
          height: 250px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .type {
            position: absolute;
            padding: 8px 16px;
            background-color: #42b883;
            color: white;
            bottom: 16px;
            left: 0;
            text-transform: capitalize;
          }
        }
      }

      .detail {
        padding: 10px;
        border-radius: 0 0 8px 8px;
        text-align: center;

        .year {
          color: #aaa;
          font-size: 14px;
          margin: 5px 0;
        }

        h3 {
          font-weight: 600;
          font-size: 18px;
        }
      }
    }
  }
}
</style>

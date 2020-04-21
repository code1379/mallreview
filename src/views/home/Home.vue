<template>
  <div class="home">
    <HomeTopBar/>
    this is home page</div>
</template>

<script>
// @ is an alias to /src
import HomeTopBar from './childComps/HomeTopBar'
export default {
  name: "Home",
  components: {
    HomeTopBar
  }
};
</script>

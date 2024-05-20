<template>
  <!-- Main Wrapper Start -->
  <div class="main-wrapper">
    <!-- Header Section Start -->
    <Header></Header>
    <!-- Header Section End -->
    <router-view></router-view>
    <!-- Footer Top Section Start -->
    <Footer></Footer>

    <!-- Footer Bottom Section End -->
  </div>
  <!-- Main Wrapper End -->
</template>
<script>
import Header from "../components/frontend/Header.vue";
import Footer from "../components/frontend/Footer.vue";
export default {
  components: { Header, Footer },
  name: "Master-Template",
};
</script>
<style></style>

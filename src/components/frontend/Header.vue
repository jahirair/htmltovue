<template>
  <div class="ht-header-section section">
    <!-- Header Top Start -->
    <div class="ht-header-top">
      <div class="container">
        <!-- Header Top Wrap Start -->
        <div class="ht-header-top-wrap row">
          <!-- Header Top Left Start -->
          <div class="ht-header-top-left col-md-6 col-12">
            <!-- Header Top Left Links Start -->
            <div class="ht-header-top-left-links">
              <a href="#"><i class="fa fa-phone"></i> +98 558 547 589</a>
              <a href="#"><i class="fa fa-envelope"></i> demo@example.com</a>
            </div>
            <!-- Header Top Left Links End -->
          </div>
          <!-- Header Top Left End -->

          <!-- Header Top Right Start -->
          <div class="ht-header-top-right col-md-6 col-12">
            <!-- Header Top Right Social Start -->
            <div class="ht-header-top-right-social">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
              <a href="#"><i class="fa fa-pinterest-p"></i></a>
            </div>
            <!-- Header Top Right Social End -->

            <!-- Header Top Right Language Start -->
            <div class="ht-header-top-right-language">
              <ul>
                <li>
                  <a href="#">English </a>
                </li>
              </ul>
            </div>
            <!-- Header Top Right Language End -->
          </div>
          <!-- Header Top Right End -->
        </div>
        <!-- Header Top Wrap End -->
      </div>
    </div>
    <!-- Header Top End -->

    <!-- Header Bottom One Start -->
    <div class="ht-header-bottom">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Header Bottom One Wrap Start -->
            <div class="ht-header-bottom-wrap">
              <a href="index.html" class="ht-logo float-start"
                ><img src="/frontend/assets/images/logo.png" alt="Logo"
              /></a>

              <!-- Main Menu One Start -->
              <div class="ht-main-menu float-end" id="menu">
                <nav>
                  <ul>
                    <li>
                      <router-link to="/">home</router-link>
                    </li>
                    <li>
                      <router-link to="/about">about</router-link>
                    </li>
                    <li>
                      <router-link to="/service">service</router-link>
                    </li>
                    <li>
                      <router-link to="/practice">practice area</router-link>
                    </li>
                    <li>
                      <router-link to="/blog">blog</router-link>
                    </li>
                    <li>
                      <router-link to="/contact">contact</router-link>
                    </li>
                  </ul>
                </nav>
              </div>
              <!-- Main Menu One End -->

              <div class="ht-mobile-menu"></div>
            </div>
            <!-- Header Bottom One Wrap End -->
          </div>
        </div>
      </div>
    </div>
    <!-- Header Bottom One End -->
  </div>
</template>

<script>
export default {
  name: "Header-Section",
};
</script>
<style scoped>
#menu .router-link-exact-active {
  color: #03a9f5;
}
</style>

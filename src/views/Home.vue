<template>
  <div class="home">
    <h1>Welcome to SportsMan</h1>
    <p>Your go-to resource for home practice and sharing practices!</p>

    <!-- Photo Gallery -->
    <div class="photo-gallery">
      <img src="@/assets/images/image1.png" alt="Croatian Dish 1" />
      <img src="@/assets/images/image2.png" alt="Croatian Dish 2" />
      <img src="@/assets/images/image3.png" alt="Croatian Dish 3" />
    </div>

    <!-- About Section -->
    <div class="about-section">
      <h2>About SportsMan</h2>
      <p>
        This site is dedicated to the art of practice. Here, you can explore, share, and discover
        new and fun practices. Join our community and dive into the rich and diverse world of
        sports!
      </p>
    </div>
  </div>
</template>

<script>
import './../assets/styles/home.css'

export default {
  name: 'Home'
}
</script>

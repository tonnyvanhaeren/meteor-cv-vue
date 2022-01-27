<template>
  <div>
    <div class="container">
      <TopNav />
    </div>
    <div class="container">
      <main class="mt-5">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import TopNav from './components/TopNavigationComponent.vue';

export default {
  components: {
    TopNav,
  },
};
</script>

<style></style>

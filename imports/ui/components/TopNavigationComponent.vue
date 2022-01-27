<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        Curriculum vitae
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }">
              <i class="bi bi-house"></i> Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'about' }">
              <i class="bi bi-person-bounding-box"></i> About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'admin' }">
              <i class="bi bi-person-plus"></i> Admin
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'login' }">
              <i class="bi bi-box-arrow-in-right"></i> Login
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'logout' }">
              <i class="bi bi-box-arrow-in-left"></i> Logout
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/', icon: 'home' },
        { title: 'About', path: '/about', icon: 'mdi-delete' },
        { title: 'Login', path: '/signin', icon: 'face' },
        { title: 'Logout', path: '/signout', icon: 'lock_open' },
      ],
    };
  },
};
</script>

<style scoped></style>

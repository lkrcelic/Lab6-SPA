<template>
  <div id="app">
    <!-- Header with Navigation Bar -->
    <header>
      <nav>
        <div class="app-title">SportsMan</div>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/practices">Practices</router-link>
          </li>
          <li>
            <router-link to="/practice/add">Add Practice</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Main Content Area -->
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<template>
  <header class="app-header">
    <div class="container header-inner">
      <router-link class="brand-mark" to="/"><span>+</span> عيادتي</router-link>
      <nav>
        <router-link to="/" exact-active-class="active">الأطباء</router-link>
        <router-link to="/bookings" exact-active-class="active"
          >حجوزاتي</router-link
        >
      </nav>
      <router-link class="header-cta" to="/"
        >احجز موعداً <span>←</span></router-link
      >
    </div>
  </header>
</template>

<style scoped>
.app-header {
  height: 76px;
  background: white;
  border-bottom: 1px solid #e6eef2;
}
.header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 52px;
}
nav {
  display: flex;
  align-self: stretch;
  gap: 30px;
}
nav a {
  position: relative;
  display: flex;
  align-items: center;
  color: #718698;
  font-size: 14px;
  font-weight: 600;
}
nav a.active {
  color: #1976d2;
}
nav a.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 3px;
  background: #1976d2;
  border-radius: 3px 3px 0 0;
}
.header-cta {
  margin-right: auto;
  padding: 9px 16px;
  border: 1px solid #b9d9ee;
  border-radius: 8px;
  color: #1976d2;
  font-size: 13px;
  font-weight: 700;
}
.header-cta span {
  margin-right: 6px;
  font-size: 16px;
}
@media (max-width: 600px) {
  .header-inner {
    gap: 20px;
  }
  .header-cta {
    display: none;
  }
  nav {
    margin-right: auto;
    gap: 18px;
  }
  .brand-mark {
    font-size: 20px;
  }
}
</style>

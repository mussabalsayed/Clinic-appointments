<template>
  <div id="app">
    <AppHeader />
    <div>
      <router-view />
    </div>
    <footer class="site-footer">
      <div class="container footer-content">
        <span class="brand-mark small"><span>+</span> عيادتي</span>
        <span>رعاية صحية أسهل، في كل وقت</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap");

:root {
  --navy: #102a43;
  --ink: #183b56;
  --muted: #6b8295;
  --blue: #1976d2;
  --teal: #13a8a8;
  --pale: #f4f8fb;
  --line: #dce7ee;
  --shadow: 0 12px 30px rgba(19, 61, 90, 0.08);
}

* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: var(--pale);
  color: var(--ink);
  font-family: "Cairo", Arial, sans-serif;
  direction: rtl;
}
button,
input,
select {
  font-family: inherit;
}
button {
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}
.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}
.site-footer {
  background: #e9f2f6;
  margin-top: 64px;
  color: var(--muted);
  font-size: 13px;
}
.footer-content {
  min-height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand-mark {
  font-size: 24px;
  font-weight: 800;
  color: var(--navy);
  letter-spacing: -1px;
}
.brand-mark span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  margin-left: 5px;
  color: white;
  background: var(--blue);
  border-radius: 8px;
  font-size: 21px;
  line-height: 1;
}
.brand-mark.small {
  font-size: 18px;
}
.brand-mark.small span {
  width: 20px;
  height: 20px;
  font-size: 17px;
  border-radius: 6px;
}
.section-title {
  margin: 0;
  color: var(--navy);
  font-size: 27px;
  line-height: 1.3;
}
.section-subtitle {
  margin: 7px 0 0;
  color: var(--muted);
  font-size: 14px;
}
.primary-btn,
.secondary-btn {
  border: 0;
  border-radius: 9px;
  padding: 11px 20px;
  font-size: 14px;
  font-weight: 700;
  transition: 0.2s ease;
}
.primary-btn {
  background: var(--blue);
  color: white;
  box-shadow: 0 7px 16px rgba(25, 118, 210, 0.18);
}
.primary-btn:hover {
  background: #1565b5;
  transform: translateY(-1px);
}
.secondary-btn {
  background: white;
  border: 1px solid var(--line);
  color: var(--ink);
}
.secondary-btn:hover {
  border-color: var(--blue);
  color: var(--blue);
}
.empty-state {
  padding: 45px 20px;
  text-align: center;
  background: white;
  border: 1px solid var(--line);
  border-radius: 14px;
  color: var(--muted);
}
@media (max-width: 600px) {
  .container {
    width: min(100% - 28px, 1120px);
  }
  .footer-content {
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }
}
</style>

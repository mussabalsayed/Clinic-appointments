<template>
  <article class="doctor-card">
    <div class="doctor-top">
      <div class="doctor-photo" :style="{ background: doctor.color }">
        <img :src="doctor.image" :alt="doctor.name" />
      </div>
      <div class="doctor-identity">
        <h3>{{ doctor.name }}</h3>
        <p>{{ doctor.specialty }}</p>
        <span class="experience">{{ doctor.experience }}</span>
      </div>
      <div class="rating">
        <b>★</b> {{ doctor.rating }} <small>({{ doctor.reviews }})</small>
      </div>
    </div>
    <div class="location">⌖ {{ doctor.location }}</div>
    <div class="card-footer">
      <router-link
        class="secondary-btn"
        :to="{ name: 'doctor', params: { id: doctor.id } }"
        >عرض الملف</router-link
      ><router-link
        class="primary-btn"
        :to="{ name: 'doctor', params: { id: doctor.id } }"
        >احجز موعداً</router-link
      >
    </div>
  </article>
</template>

<script setup>
/* global defineProps */
defineProps({
  doctor: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.doctor-card {
  padding: 20px;
  background: white;
  border: 1px solid #e0e9ee;
  border-radius: 12px;
  box-shadow: var(--shadow);
}
.doctor-top {
  display: flex;
  position: relative;
  min-height: 92px;
}
.doctor-photo {
  width: 78px;
  height: 78px;
  border-radius: 10px;
  overflow: hidden;
  flex: none;
}
.doctor-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.doctor-identity {
  padding: 3px 13px 0 0;
}
h3 {
  margin: 0 0 4px;
  font-size: 17px;
  color: var(--navy);
}
p {
  margin: 0 0 8px;
  font-size: 13px;
  color: var(--blue);
  font-weight: 700;
}
.experience {
  color: var(--muted);
  font-size: 11px;
}
.rating {
  margin-right: auto;
  direction: ltr;
  font-size: 13px;
  color: var(--ink);
}
.rating b {
  color: #f3b638;
  font-size: 16px;
}
.rating small {
  color: var(--muted);
  font-size: 10px;
}
.location {
  padding: 12px 0;
  border-bottom: 1px solid #edf1f3;
  color: var(--muted);
  font-size: 12px;
}
.card-footer {
  display: flex;
  gap: 9px;
  padding-top: 15px;
}
.card-footer a {
  flex: 1;
  text-align: center;
  padding: 9px 5px;
  font-size: 12px;
}
</style>

<template>
  <div>
    <section class="hero">
      <div class="container hero-content">
        <div>
          <span class="eyebrow">رعايتك تبدأ من هنا</span>
          <h1>احجز موعدك الطبي<br /><em>بكل سهولة واطمئنان</em></h1>
          <p>
            اكتشف أفضل الأطباء واحجز موعدك في الوقت الذي يناسبك،<br
              class="desktop"
            />
            أينما كنت.
          </p>
          <router-link class="primary-btn hero-btn" to="#doctors"
            >استكشف الأطباء <span>←</span></router-link
          >
        </div>
        <div class="hero-art">
          <div class="circle"></div>
          <div class="hero-card">
            <span>✓</span>
            <div><b>موعدك مؤكد</b><small>د. سارة منصور · 10:30 ص</small></div>
          </div>
          <div class="stat-card">
            <strong>+12k</strong><small>موعد تم حجزه</small>
          </div>
          <div class="person">👩🏻‍⚕️</div>
        </div>
      </div>
    </section>
    <section id="doctors" class="container doctors-section">
      <div class="section-heading">
        <div>
          <h2 class="section-title">الأطباء المتاحون</h2>
          <p class="section-subtitle">اختر الطبيب الأنسب لاحتياجاتك الصحية</p>
        </div>
        <span class="result-count">{{ filteredDoctors.length }} طبيب</span>
      </div>
      <div class="filters">
        <label class="search-box"
          >⌕<input
            v-model="query"
            placeholder="ابحث باسم الطبيب أو التخصص..." /></label
        ><select v-model="specialty">
          <option v-for="item in specialties" :key="item" :value="item">
            {{ item === "الكل" ? "كل الاختصاصات" : item }}
          </option>
        </select>
      </div>
      <div v-if="filteredDoctors.length" class="doctor-grid">
        <DoctorCard
          v-for="doctor in filteredDoctors"
          :key="doctor.id"
          :doctor="doctor"
        />
      </div>
      <div v-else class="empty-state">لم نجد طبيباً يطابق بحثك.</div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import DoctorCard from "@/components/DoctorCard.vue";
import { doctors, specialties } from "@/data";
const query = ref("");
const specialty = ref("الكل");
const filteredDoctors = computed(() => {
  const normalizedQuery = query.value.trim().toLowerCase();
  return doctors.filter(
    (doctor) =>
      (specialty.value === "الكل" || doctor.specialty === specialty.value) &&
      (!normalizedQuery ||
        `${doctor.name} ${doctor.specialty}`
          .toLowerCase()
          .includes(normalizedQuery))
  );
});
</script>

<style scoped>
.hero {
  background: white;
  border-bottom: 1px solid #e3edf2;
  overflow: hidden;
}
.hero-content {
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.eyebrow {
  color: var(--teal);
  font-size: 13px;
  font-weight: 700;
}
h1 {
  margin: 12px 0;
  color: var(--navy);
  font-size: 39px;
  line-height: 1.4;
  letter-spacing: -1px;
}
h1 em {
  color: var(--blue);
  font-style: normal;
}
.hero p {
  margin: 0 0 21px;
  color: var(--muted);
  font-size: 14px;
  line-height: 2;
}
.hero-btn {
  display: inline-flex;
  gap: 12px;
  align-items: center;
}
.hero-btn span {
  font-size: 19px;
}
.hero-art {
  position: relative;
  width: 395px;
  height: 290px;
}
.circle {
  position: absolute;
  width: 270px;
  height: 270px;
  top: 10px;
  right: 30px;
  background: #e5f4f8;
  border-radius: 50%;
}
.person {
  position: absolute;
  right: 104px;
  bottom: 25px;
  z-index: 1;
  width: 145px;
  height: 190px;
  background: #d4edf0;
  border-radius: 80px 80px 18px 18px;
  font-size: 90px;
  text-align: center;
  padding-top: 34px;
  overflow: hidden;
}
.hero-card,
.stat-card {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: white;
  border-radius: 9px;
  box-shadow: 0 8px 25px rgba(30, 70, 90, 0.15);
}
.hero-card {
  right: -5px;
  top: 49px;
}
.hero-card > span {
  color: white;
  background: #25bfa4;
  border-radius: 50%;
  padding: 2px 7px;
}
.hero-card b,
.hero-card small,
.stat-card small {
  display: block;
}
.hero-card b {
  font-size: 11px;
}
.hero-card small {
  color: var(--muted);
  font-size: 9px;
  margin-top: 2px;
}
.stat-card {
  left: 0;
  bottom: 35px;
  display: block;
}
.stat-card strong {
  color: var(--blue);
  font-size: 20px;
  display: block;
}
.stat-card small {
  color: var(--muted);
  font-size: 10px;
}
.doctors-section {
  padding-top: 42px;
}
.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 20px;
}
.result-count {
  color: var(--muted);
  font-size: 12px;
}
.filters {
  display: flex;
  gap: 12px;
  margin-bottom: 22px;
}
.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  padding: 0 13px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 8px;
  color: var(--muted);
  font-size: 23px;
}
.search-box input {
  width: 100%;
  padding: 12px 0;
  border: 0;
  outline: 0;
  font-size: 13px;
}
select {
  width: 190px;
  padding: 11px 12px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 8px;
  color: var(--ink);
  outline: none;
}
.doctor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
@media (max-width: 850px) {
  .hero-art {
    transform: scale(0.8);
    margin-left: -35px;
  }
  .doctor-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .hero-content {
    min-height: 425px;
    padding-top: 40px;
    align-items: flex-start;
  }
  h1 {
    font-size: 29px;
  }
  .hero p {
    font-size: 12px;
  }
  .hero-art {
    position: absolute;
    opacity: 0.45;
    left: -40px;
    top: 240px;
  }
  .desktop {
    display: none;
  }
  .filters {
    flex-direction: column;
  }
  select {
    width: 100%;
  }
  .doctor-grid {
    grid-template-columns: 1fr;
  }
  .section-heading {
    align-items: start;
  }
}
</style>

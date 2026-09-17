<template>
  <div class="container bookings-page">
    <div class="page-heading">
      <div>
        <h1 class="section-title">حجوزاتي</h1>
        <p class="section-subtitle">تابع مواعيدك القادمة وأدر حجوزاتك بسهولة</p>
      </div>
      <router-link class="primary-btn" to="/">حجز موعد جديد</router-link>
    </div>
    <div v-if="bookings.length" class="booking-list">
      <article
        v-for="booking in bookings"
        :key="booking.id"
        class="booking-item"
      >
        <div class="date-box">
          <b>{{ formattedDay(booking.date) }}</b
          ><small>{{ formattedMonth(booking.date) }}</small>
        </div>
        <div class="booking-details">
          <h2>{{ booking.doctorName }}</h2>
          <p>{{ booking.specialty }}</p>
          <span>▣ {{ booking.date }} · {{ booking.time }}</span
          ><small v-if="booking.patientName"
            >المريض: {{ booking.patientName }} · {{ booking.phone }}</small
          >
        </div>
        <div class="booking-status">
          <span>مؤكد</span
          ><button class="cancel-btn" @click="cancel(booking.id)">
            إلغاء الموعد
          </button>
          <router-link
            class="edit-btn"
            :to="{
              name: 'doctor',
              params: { id: booking.doctorId },
              query: { booking: booking.id },
            }"
          >
            تعديل الموعد
          </router-link>
        </div>
      </article>
    </div>
    <div v-else class="empty-state">
      <div class="empty-icon">□</div>
      <h3>لا توجد حجوزات بعد</h3>
      <p>ابدأ بحجز موعدك الأول مع أحد أطبائنا.</p>
      <router-link class="primary-btn" to="/">استعرض الأطباء</router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getBookings, removeBooking } from "@/storage";
const bookings = ref([]);
function refresh() {
  bookings.value = getBookings().sort((a, b) =>
    `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`)
  );
}
function cancel(id) {
  if (window.confirm("هل أنت متأكد من إلغاء هذا الموعد؟")) {
    removeBooking(id);
    refresh();
  }
}
function formattedDay(date) {
  return new Date(`${date}T12:00:00`).getDate();
}
function formattedMonth(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("ar-SA", {
    month: "short",
  });
}
onMounted(refresh);
</script>

<style scoped>
.bookings-page {
  padding-top: 42px;
  min-height: 500px;
}
.page-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 25px;
}
.booking-list {
  display: grid;
  gap: 13px;
}
.booking-item {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 12px;
  box-shadow: var(--shadow);
}
.date-box {
  width: 65px;
  height: 65px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #e9f4fb;
  border-radius: 9px;
  color: var(--blue);
}
.date-box b {
  font-size: 24px;
  line-height: 1;
}
.date-box small {
  font-size: 11px;
  margin-top: 4px;
}
.booking-details {
  flex: 1;
}
.booking-details h2 {
  margin: 0 0 3px;
  color: var(--navy);
  font-size: 16px;
}
.booking-details p {
  display: inline-block;
  margin: 0 10px 6px 0;
  color: var(--blue);
  font-size: 12px;
}
.booking-details span,
.booking-details > small {
  display: block;
  color: var(--muted);
  font-size: 11px;
}
.booking-details > small {
  margin-top: 4px;
}
.booking-status {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 14px;
}
.booking-status > span {
  padding: 4px 10px;
  color: #118e73;
  background: #e3f7f0;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
}
.cancel-btn {
  border: 0;
  background: transparent;
  color: #cf6868;
  font-size: 11px;
}
.empty-state h3 {
  margin: 12px 0 4px;
  color: var(--navy);
}
.empty-state p {
  margin: 0 0 18px;
  font-size: 13px;
}
.empty-icon {
  margin: auto;
  width: 50px;
  height: 50px;
  padding-top: 8px;
  border-radius: 50%;
  background: #e9f4fb;
  color: var(--blue);
  font-size: 25px;
}
@media (max-width: 600px) {
  .page-heading {
    align-items: start;
    gap: 15px;
    flex-direction: column;
  }
  .booking-item {
    align-items: start;
    flex-wrap: wrap;
  }
  .booking-status {
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding-right: 83px;
  }
}
</style>

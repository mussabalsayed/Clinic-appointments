<template>
  <div v-if="doctor" class="container doctor-page">
    <router-link class="back-link" to="/"
      >→ العودة إلى قائمة الأطباء</router-link
    >
    <div class="doctor-layout">
      <section class="profile-card">
        <div class="profile-head">
          <div class="profile-photo" :style="{ background: doctor.color }">
            <img :src="doctor.image" :alt="doctor.name" />
          </div>
          <div>
            <h1>{{ doctor.name }}</h1>
            <p class="specialty">{{ doctor.specialty }}</p>
            <span class="rating"
              >★ {{ doctor.rating }}
              <small>({{ doctor.reviews }} تقييم)</small></span
            >
          </div>
        </div>
        <div class="profile-stats">
          <span
            ><b>{{ doctor.experience.replace(" سنة خبرة", "") }}</b
            ><small>سنوات خبرة</small></span
          ><span
            ><b>{{ doctor.reviews }}+</b><small>تقييم إيجابي</small></span
          ><span><b>98%</b><small>رضا المرضى</small></span>
        </div>
        <h3>نبذة عن الطبيب</h3>
        <p class="bio">{{ doctor.bio }}</p>
        <div class="clinic-info">
          ⌖
          <span
            ><b>موقع العيادة</b><small>{{ doctor.location }}</small></span
          >
        </div>
      </section>
      <section class="booking-card">
        <div class="booking-title">
          <h2>{{ editingId ? "تعديل الموعد" : "احجز موعدك" }}</h2>
          <span>خطوة واحدة تفصلك عن راحتك</span>
        </div>
        <form @submit.prevent="submitBooking">
          <label>اختر التاريخ</label
          ><input
            v-model="form.date"
            type="date"
            :min="minDate"
            required
          /><label>اختر الوقت</label>
          <div class="time-grid">
            <template
              v-if="Array.isArray(doctor?.times) && doctor.times.length"
            >
              <button
                v-for="time in doctor.times"
                :key="time"
                type="button"
                :class="{
                  selected: form.time === time,
                  disabled: isTaken(time),
                }"
                :disabled="isTaken(time)"
                @click="form.time = time"
              >
                {{ time }}
              </button>
            </template>
            <template v-else>
              <button
                v-for="time in defaultTimes"
                :key="time"
                type="button"
                :class="{
                  selected: form.time === time,
                  disabled: isTaken(time),
                }"
                :disabled="isTaken(time)"
                @click="form.time = time"
              >
                {{ time }}
              </button>
            </template>
          </div>
          <p v-if="form.time && isTaken(form.time)" class="error">
            هذا الموعد محجوز، اختر وقتاً آخر.
          </p>
          <div class="divider"></div>
          <label>بيانات المريض</label
          ><input
            v-model="form.patientName"
            placeholder="الاسم الكامل"
            required
          /><input
            v-model="form.phone"
            type="tel"
            placeholder="رقم الجوال"
            required
          /><input v-model="form.notes" placeholder="ملاحظات (اختياري)" />
          <p
            v-if="message"
            :class="['form-message', success ? 'success' : 'error']"
          >
            {{ message }}
          </p>
          <button class="primary-btn confirm-btn" type="submit">
            {{ editingId ? "حفظ التعديل" : "تأكيد الحجز" }} <span>←</span>
          </button>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup>
/* global defineProps */
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { doctors } from "@/data";
import { addBooking, getBookings, updateBooking } from "@/storage";
const props = defineProps({ id: [String, Number] });
const route = useRoute();
const router = useRouter();
const defaultTimes = [
  "09:00 ص",
  "10:00 ص",
  "10:30 ص",
  "11:30 ص",
  "01:00 م",
  "02:30 م",
  "04:00 م",
  "05:30 م",
];
const form = reactive({
  date: "",
  time: "",
  patientName: "",
  phone: "",
  notes: "",
});
const message = ref("");
const success = ref(false);
const editingId = ref(null);
const doctor = computed(() =>
  doctors.find((item) => item.id === Number(props.id))
);
const minDate = computed(() => new Date().toISOString().split("T")[0]);
function isTaken(time) {
  return getBookings().some(
    (item) =>
      item.doctorId === doctor.value.id &&
      item.date === form.date &&
      item.time === time
  );
}
function submitBooking() {
  if (!form.time || isTaken(form.time)) {
    message.value = "يرجى اختيار وقت متاح.";
    success.value = false;
    return;
  }
  const booking = {
    doctorId: doctor.value.id,
    doctorName: doctor.value.name,
    specialty: doctor.value.specialty,
    ...form,
  };
  const result = editingId.value
    ? updateBooking({ ...booking, id: editingId.value })
    : addBooking(booking);
  if (!result) {
    message.value = "هذا الموعد محجوز، اختر وقتاً آخر.";
    success.value = false;
    return;
  }
  message.value = "تم تأكيد حجزك بنجاح!";
  success.value = true;
  editingId.value = null;
  Object.assign(form, {
    date: "",
    time: "",
    patientName: "",
    phone: "",
    notes: "",
  });
  if (route.query.booking) router.push("/bookings");
}
onMounted(() => {
  const existing = getBookings().find(
    (item) => String(item.id) === String(route.query.booking)
  );
  if (existing) {
    editingId.value = existing.id;
    Object.assign(form, existing);
  }
});
</script>

<style scoped>
.doctor-page {
  padding-top: 26px;
}
.back-link {
  color: var(--muted);
  font-size: 13px;
}
.doctor-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
  margin-top: 20px;
  align-items: start;
}
.profile-card,
.booking-card {
  padding: 27px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 13px;
  box-shadow: var(--shadow);
}
.profile-head {
  display: flex;
  align-items: center;
  gap: 18px;
}
.profile-photo {
  width: 110px;
  height: 110px;
  overflow: hidden;
  border-radius: 13px;
}
.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
h1 {
  margin: 0 0 6px;
  color: var(--navy);
  font-size: 24px;
}
.specialty {
  margin: 0 0 9px;
  color: var(--blue);
  font-weight: 700;
  font-size: 14px;
}
.rating {
  color: #e6a727;
  font-size: 14px;
}
.rating small {
  color: var(--muted);
  font-size: 11px;
}
.profile-stats {
  display: flex;
  gap: 45px;
  margin: 28px 0;
  padding: 17px 0;
  border-top: 1px solid #edf1f3;
  border-bottom: 1px solid #edf1f3;
}
.profile-stats b,
.profile-stats small {
  display: block;
}
.profile-stats b {
  color: var(--blue);
  font-size: 18px;
}
.profile-stats small {
  color: var(--muted);
  font-size: 10px;
}
h3 {
  color: var(--navy);
  font-size: 16px;
}
.bio {
  color: var(--muted);
  font-size: 13px;
  line-height: 2;
}
.clinic-info {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  padding: 14px;
  background: #f2f8fb;
  border-radius: 8px;
  color: var(--blue);
}
.clinic-info span b,
.clinic-info span small {
  display: block;
}
.clinic-info b {
  color: var(--ink);
  font-size: 12px;
}
.clinic-info small {
  color: var(--muted);
  font-size: 11px;
  margin-top: 3px;
}
.booking-title {
  padding-bottom: 18px;
  border-bottom: 1px solid #edf1f3;
}
.booking-title h2 {
  margin: 0 0 4px;
  color: var(--navy);
  font-size: 20px;
}
.booking-title span {
  color: var(--muted);
  font-size: 12px;
}
form {
  padding-top: 18px;
}
label {
  display: block;
  margin: 14px 0 7px;
  color: var(--ink);
  font-size: 12px;
  font-weight: 700;
}
form > input {
  width: 100%;
  padding: 11px;
  margin-bottom: 3px;
  border: 1px solid var(--line);
  border-radius: 7px;
  outline: none;
  font-size: 12px;
}
form > input:focus {
  border-color: var(--blue);
}
.time-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7px;
}
.time-grid button {
  padding: 8px 2px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 6px;
  color: var(--ink);
  font-size: 11px;
}
.time-grid button.selected {
  background: #e8f3fd;
  border-color: var(--blue);
  color: var(--blue);
  font-weight: 700;
}
.time-grid button.disabled {
  color: #b9c4ca;
  background: #f4f6f7;
  cursor: not-allowed;
  text-decoration: line-through;
}
.divider {
  margin: 21px 0 0;
  border-top: 1px solid #edf1f3;
}
.confirm-btn {
  width: 100%;
  margin-top: 18px;
}
.confirm-btn span {
  margin-right: 12px;
  font-size: 18px;
}
.form-message {
  margin: 10px 0 0;
  font-size: 12px;
}
.success {
  color: #159478;
}
.error {
  color: #dd5a5a;
}
@media (max-width: 750px) {
  .doctor-layout {
    grid-template-columns: 1fr;
  }
  .profile-stats {
    gap: 25px;
  }
}
</style>

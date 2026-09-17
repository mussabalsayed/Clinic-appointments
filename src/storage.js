const KEY = "clinic-bookings";

export function getBookings() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

export function saveBookings(bookings) {
  localStorage.setItem(KEY, JSON.stringify(bookings));
}

export function addBooking(booking) {
  const bookings = getBookings();
  if (
    bookings.some(
      (item) =>
        item.doctorId === booking.doctorId &&
        item.date === booking.date &&
        item.time === booking.time
    )
  ) {
    return false;
  }
  saveBookings([...bookings, { ...booking, id: Date.now() }]);
  return true;
}

export function updateBooking(updated) {
  const bookings = getBookings();
  if (
    bookings.some(
      (booking) =>
        booking.id !== updated.id &&
        booking.doctorId === updated.doctorId &&
        booking.date === updated.date &&
        booking.time === updated.time
    )
  ) {
    return false;
  }
  saveBookings(
    bookings.map((booking) => (booking.id === updated.id ? updated : booking))
  );
  return true;
}

export function removeBooking(id) {
  saveBookings(getBookings().filter((booking) => booking.id !== id));
}

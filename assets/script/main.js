document.addEventListener("DOMContentLoaded", (event) => {
  const arrivalDateInput = document.getElementById("arrivalDate");
  const today = new Date().toISOString().split("T")[0];
  arrivalDateInput.setAttribute("min", today);
});

document.addEventListener("DOMContentLoaded", function () {
  const guestType = document.getElementById("guestType");
  const guestNumber = document.getElementById("guestNumber");

  guestType.addEventListener("change", function () {
    if (guestType.value === "Solo travelers") {
      guestNumber.value = 1;
      guestNumber.disabled = true;
    } else {
      guestNumber.value = null;
      guestNumber.disabled = false;
    }
  });

  function submitReservation() {
    const form = document.getElementById("reservationForm");

    if (form.checkValidity()) {
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => (data[key] = value));

      alert(`Form Data Submitted:\n${JSON.stringify(data, null, 2)}`);

      const reservationModal = new bootstrap.Modal(
        document.getElementById("reservationModal")
      );
      reservationModal.hide();
    } else {
      form.reportValidity();
    }
  }

  window.submitReservation = submitReservation;
});

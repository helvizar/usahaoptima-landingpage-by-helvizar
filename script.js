function checkboxIsChecked() {
  const statusCheckbox = document.getElementById('status');
  return statusCheckbox.checked;
}

function isNumber(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function validateFormData(data) {
  if (!data) {
    return false;
  }

  if (data.name.trim() === '') {
    showToast('Nama harus diisi.');
    return false;
  }

  if (data.city.trim() === '') {
    showToast('Kota harus diisi.');
    return false;
  }

  if (data.email.trim() === '') {
    showToast('Email harus diisi.');
    return false;
  }

  if (!isNumber(data.zipCode)) {
    showToast('Kode Pos harus berisi angka.');
    return false;
  }

  if (!data.status) {
    showToast('Anda harus menyetujui pernyataan.');
    return false;
  }

  return true;
}

function handleGetFormData() {
  const nameInput = document.getElementById('name');
  const cityInput = document.getElementById('city');
  const emailInput = document.getElementById('email');
  const zipCodeInput = document.getElementById('zip-code');
  const warningDiv = document.getElementById('warning');

  const name = nameInput.value;
  const city = cityInput.value;
  const email = emailInput.value;
  const zipCode = zipCodeInput.value;

  const formData = {
    name,
    city,
    email,
    zipCode,
    status: checkboxIsChecked(),
  };

  if (!validateFormData(formData)) {
    return;
  }

  warningDiv.textContent = '';

  showToast('Formulir berhasil dikirim!');
}

function submit(event) {
  event.preventDefault();
  handleGetFormData();
}

const form = document.getElementById('register-form');
form.addEventListener('submit', submit);

document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('toast');
  toast.classList.add('hide');
});

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastContent = document.getElementById('toast-content');

  toastContent.textContent = message;

  toast.classList.remove('hide');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hide');
  }, 3000);
}

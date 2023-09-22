// Fungsi untuk memeriksa apakah checkbox dengan ID "status" dicentang
function checkboxIsChecked() {
  const statusCheckbox = document.getElementById('status');
  return statusCheckbox.checked;
}

// Fungsi untuk memeriksa apakah string berisi hanya angka
function isNumber(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

// Fungsi untuk memvalidasi data formulir
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

// Fungsi untuk mendapatkan data dari formulir
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

  // Validasi seluruh data formulir menggunakan fungsi validateFormData
  const formData = {
    name,
    city,
    email,
    zipCode,
    status: checkboxIsChecked(),
  };

  if (!validateFormData(formData)) {
    return; // Berhenti dan tidak mengirimkan formulir jika validasi gagal
  }

  // Bersihkan pesan peringatan jika sudah valid
  warningDiv.textContent = '';

  // Proses formulir (kirim atau simpan data, dll.) dilakukan di sini
  showToast('Formulir berhasil dikirim!'); // Menampilkan toast sukses
}

// Fungsi untuk menangani submit form
function submit(event) {
  event.preventDefault(); // Mencegah halaman refresh saat submit form
  handleGetFormData(); // Memanggil fungsi handleGetFormData
}

// Menghubungkan event submit form dengan fungsi submit
const form = document.getElementById('register-form');
form.addEventListener('submit', submit);

// Menambahkan class "hide" pada elemen toast saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('toast');
  toast.classList.add('hide');
});

// Fungsi untuk menampilkan toast
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastContent = document.getElementById('toast-content');

  // Set the message text
  toastContent.textContent = message;

  // Show the toast with animation
  toast.classList.remove('hide');
  toast.classList.add('show');

  // Hide the toast after a few seconds with animation
  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hide');
  }, 3000); // Adjust the duration (in milliseconds) as needed
}

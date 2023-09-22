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
  if (
    data &&
    isNumber(data.zipCode) &&
    data.status === true
  ) {
    return true;
  }
  return false;
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

  // Memeriksa apakah checkbox dicentang
  const isCheckboxChecked = checkboxIsChecked();

  // Validasi zip-code untuk memastikan hanya angka yang diterima
  if (!isNumber(zipCode)) {
    warningDiv.textContent = 'Kode Pos harus berisi angka.';
    return; // Berhenti dan tidak mengirimkan formulir jika kode pos tidak valid
  }

  // Validasi seluruh data formulir menggunakan fungsi validateFormData
  const formData = {
    name,
    city,
    email,
    zipCode,
    status: isCheckboxChecked,
  };

  if (!validateFormData(formData)) {
    warningDiv.textContent = 'Periksa form anda sekali lagi.';
    return; // Berhenti dan tidak mengirimkan formulir jika validasi gagal
  }

  // Bersihkan pesan peringatan jika sudah valid
  warningDiv.textContent = '';

  // Proses formulir (kirim atau simpan data, dll.) dilakukan di sini
}

// Fungsi untuk menangani submit form
function submit(event) {
  event.preventDefault(); // Mencegah halaman refresh saat submit form
  handleGetFormData(); // Memanggil fungsi handleGetFormData
}

// Menghubungkan event submit form dengan fungsi submit
const form = document.getElementById('register-form');
form.addEventListener('submit', submit);

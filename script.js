// frontend/script.js
//fetch('http://localhost:3000/api/user')
fetch('https://internportal-backend.onrender.com/')
  .then(res => res.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('referral').textContent = data.referralCode;
    document.getElementById('donations').textContent = data.totalDonations;
  });

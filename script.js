// frontend/script.js
//fetch('http://localhost:3000/api/user')
fetch('https://internportal-backend.onrender.com/api/user')
  .then(res => res.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('referral').textContent = data.referralCode;
    document.getElementById('donations').textContent = data.totalDonations;
  });
  fetch('https://internportal-backend.onrender.com/api/leaderboard')
  .then(res => res.json())
  .then(data => {
    const leaderboardContainer = document.getElementById('leaderboard');
    leaderboardContainer.innerHTML = ''; // Clear old entries
    data.forEach((user, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${user.name} - ${user.donations} points`;
      leaderboardContainer.appendChild(li);
    });
  });


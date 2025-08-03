// Fetch and display user info
fetch('https://internportal-backend.onrender.com/api/user')
  .then(res => res.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('referral').textContent = data.referralCode;
    document.getElementById('donations').textContent = data.totalDonations;
  })
  .catch(err => console.error('Error fetching user data:', err));

// Fetch and display leaderboard
fetch('https://internportal-backend.onrender.com/api/leaderboard')
  .then(res => res.json())
  .then(data => {
    const leaderboardContainer = document.getElementById('leaderboard') || document.getElementById('board');
    if (!leaderboardContainer) return;
    
    leaderboardContainer.innerHTML = ''; // Clear existing list

    data.forEach((user, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${user.name} - ₹${user.donations}`;
      leaderboardContainer.appendChild(li);
    });
  })
  .catch(err => console.error('Error fetching leaderboard:', err));

// BlogPage Onclick
document.getElementById('blog-btn').addEventListener('click', function () {
  window.location.href = './faq.html';
});

// Section Declear
const historySection = document.getElementById('history-section');
const donationSection = document.getElementById('donate-section');

// History Button
document
  .getElementById('history-section-btn')
  .addEventListener('click', function () {
    historySection.classList.remove('hidden');
    donationSection.classList.add('hidden');
  });

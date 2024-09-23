// BlogPage Onclick
document.getElementById('blog-btn').addEventListener('click', function () {
  window.location.href = './faq.html';
});

// Section Declear
const historySection = document.getElementById('history-section');
const donationSection = document.getElementById('donate-section');

// History Button
const historyButton = document.getElementById('history-section-btn');
historyButton.addEventListener('click', function () {
  historySection.classList.remove('hidden');
  donationSection.classList.add('hidden');
  historyButton.classList.add('bg-secondary');
  donationButton.classList.remove('bg-secondary');
});

// Donation Button

const donationButton = document.getElementById('donation-section-btn');
donationButton.addEventListener('click', function () {
  historySection.classList.add('hidden');
  donationSection.classList.remove('hidden');
  donationButton.classList.add('bg-secondary');
  historyButton.classList.remove('bg-secondary');
});

// Donate For Noakhali Floot
document
  .getElementById('noakhali-donate-btn')
  .addEventListener('click', function () {
    const myBalance = parseFloat(
      document.getElementById('my-balance').innerText
    );
    const noakhaliBalance = parseFloat(
      document.getElementById('noakhali-balance').innerText
    );

    const noakhaliInput = parseFloat(
      document.getElementById('noakhali-donate-input').value
    );
    const totalnoakhaliBalance = noakhaliBalance + noakhaliInput;

    const myNewBalance = myBalance - noakhaliInput;

    document.getElementById('my-balance').innerText = myNewBalance;
    document.getElementById('noakhali-balance').innerText =
      totalnoakhaliBalance;

    if (isNaN(noakhaliInput)) {
      alert('Input Must be A Number');
    } else if (noakhaliInput < 0) {
      alert('Input Must be A Positive Number');
    } else if (myBalance < noakhaliInput) {
      alert('Insufficient Balance');
    } else {
      alert('Succeed');
    }
  });

// Donate For Feni Float
document
  .getElementById('feni-donate-btn')
  .addEventListener('click', function () {
    console.log('feni-donate-btn clicked');
  });

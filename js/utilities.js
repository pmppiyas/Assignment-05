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

// modal
const modal = document.getElementById('my_modal');

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

    if (isNaN(noakhaliInput)) {
      alert('Input Must be A Number');
    } else if (noakhaliInput < 20) {
      alert('Input Minimum 20 Taka');
    } else if (myBalance < noakhaliInput) {
      alert('Insufficient Balance');
    } else {
      const totalnoakhaliBalance = noakhaliBalance + noakhaliInput;

      const myNewBalance = myBalance - noakhaliInput;

      document.getElementById('my-balance').innerText = myNewBalance;
      document.getElementById('noakhali-balance').innerText =
        totalnoakhaliBalance;

      const newDiv = document.createElement('div');
      newDiv.innerHTML = `<div class="p-4 border-1 shadow-md  bg-secondary flex flex-col items-center">
        <p class="text-xl md:text-2xl">${noakhaliInput} Taka is Donated for "Donate for Flood at Noakhali, Bangladesh"</p>
        <p class="text-xl md:text-2xl">${new Date().toLocaleString()}</p>
      </div>`;
      document.getElementById('history-section').appendChild(newDiv);
      document.getElementById('my_modal_1').showModal();
    }
  });

// Donate For Feni Float
document
  .getElementById('feni-donate-btn')
  .addEventListener('click', function () {
    const myBalance = parseFloat(
      document.getElementById('my-balance').innerText
    );
    const feniBalance = parseFloat(
      document.getElementById('feni-balance').innerText
    );

    const feniInput = parseFloat(
      document.getElementById('feni-donate-input').value
    );

    if (isNaN(feniInput)) {
      alert('Input Must be A Number');
    } else if (feniInput < 20) {
      alert('Input Minimum 20 Taka');
    } else if (myBalance < feniInput) {
      alert('Insufficient Balance');
    } else {
      const totalFeniBalance = feniBalance + feniInput;

      const myNewBalance = myBalance - feniInput;

      document.getElementById('my-balance').innerText = myNewBalance;
      document.getElementById('feni-balance').innerText = totalFeniBalance;

      const newDiv = document.createElement('div');
      newDiv.innerHTML = `<div class="p-4 border-1 shadow-md  bg-secondary flex flex-col items-center">
        <p class="text-xl md:text-2xl">${feniInput} Taka is Donated for "Donate for Flood Relief in Feni,Bangladesh"</p>
        <p class="text-xl md:text-2xl">${new Date().toLocaleString()}</p>
      </div>`;
      document.getElementById('history-section').appendChild(newDiv);
      document.getElementById('my_modal_1').showModal();
    }
  });

// Donate For Quata Protest
document
  .getElementById('quota-donate-btn')
  .addEventListener('click', function () {
    const myBalance = parseFloat(
      document.getElementById('my-balance').innerText
    );
    const quataBalance = parseFloat(
      document.getElementById('quata-balance').innerText
    );

    const quataInput = parseFloat(
      document.getElementById('quata-donate-input').value
    );

    if (isNaN(quataInput)) {
      alert('Input Must be A Number');
    } else if (quataInput < 20) {
      alert('Input Minimum 20 Taka');
    } else if (myBalance < quataInput) {
      alert('Insufficient Balance');
    } else {
      const totalQuataBalance = quataBalance + quataInput;

      const myNewBalance = myBalance - quataInput;

      document.getElementById('my-balance').innerText = myNewBalance;
      document.getElementById('quata-balance').innerText = totalQuataBalance;
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `<div class="p-4 border-1 shadow-md  bg-secondary flex flex-col items-center">
        <p class="text-xl md:text-2xl">${quataInput} Taka is Donated for "Aid for Injured in the Quota Movement"</p>
        <p class="text-xl md:text-2xl">${new Date().toLocaleString()}</p>
      </div>`;
      document.getElementById('history-section').appendChild(newDiv);
      document.getElementById('my_modal_1').showModal();
    }
  });

// Toggle Dark Mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const themeToggle = document.getElementById('themeToggle');
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Apply saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  document.getElementById('themeToggle').textContent = '☀️';
}

// Back to Top Button
window.onscroll = function () {
  const backToTopButton = document.getElementById('backToTop');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Slideshow
let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName('slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
showSlides();

// Tender Cost Calculator
function calculateTender() {
  const materialCost = parseFloat(document.getElementById('materialCost').value) || 0;
  const laborCost = parseFloat(document.getElementById('laborCost').value) || 0;
  const overhead = parseFloat(document.getElementById('overhead').value) || 0;
  const totalCost = materialCost + laborCost + overhead;
  document.getElementById('totalCost').textContent = `Total Cost: R${totalCost.toFixed(2)}`;
}

// Chatbot
function openChat() {
  document.getElementById('chatWindow').style.display = 'block';
}

function handleChatInput(event) {
  if (event.key === 'Enter') {
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    const userMessage = chatInput.value.trim();
    if (userMessage) {
      chatBody.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
      chatInput.value = '';
      // Simulate bot response
      setTimeout(() => {
        chatBody.innerHTML += `<p><strong>Bot:</strong> Thank you for your message. We will get back to you shortly.</p>`;
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000);
    }
  }
}

// Search Tenders
function searchTenders() {
  const query = document.getElementById('searchInput').value;
  alert(`Searching for: ${query}`);
}

// Filter Tenders
function filterTenders() {
  const category = document.getElementById('categoryFilter').value;
  const budget = document.getElementById('budgetFilter').value;
  alert(`Filtering by Category: ${category}, Max Budget: R${budget}`);
}

// Blockchain Integration
function viewBlockchain() {
  alert('Blockchain verification in progress...');
}

// Gamification
function claimTokens() {
  alert('Tokens claimed! Thank you for your contribution.');
}

// Interactive Map
const map = L.map('map').setView([-30.5595, 22.9375], 5); // Centered on South Africa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
}).addTo(map);

// Add markers for tender locations
const tenderLocations = [
  { name: 'Cape Town', coords: [-33.9249, 18.4241] },
  { name: 'Johannesburg', coords: [-26.2041, 28.0473] },
  { name: 'Durban', coords: [-29.8587, 31.0218] },
];

tenderLocations.forEach(location => {
  L.marker(location.coords).addTo(map)
    .bindPopup(`<b>${location.name}</b><br>Tender location.`);
});

// Real-Time News
const newsContainer = document.getElementById('newsContainer');
const newsData = [
  { title: 'New Tender Opportunities', description: 'Discover the latest tenders in construction and IT.' },
  { title: 'Government Efficiency Improves', description: 'New measures boost tender processing times.' },
];

newsData.forEach(news => {
  const newsCard = document.createElement('div');
  newsCard.className = 'news-card';
  newsCard.innerHTML = `
    <h3>${news.title}</h3>
    <p>${news.description}</p>
  `;
  newsContainer.appendChild(newsCard);
});

// Investment Opportunities
const investmentContainer = document.getElementById('investmentContainer');
const investmentData = [
  { title: 'Renewable Energy Projects', description: 'Invest in solar and wind energy projects.' },
  { title: 'Infrastructure Development', description: 'Opportunities in road and rail construction.' },
];

investmentData.forEach(investment => {
  const investmentCard = document.createElement('div');
  investmentCard.className = 'investment-card';
  investmentCard.innerHTML = `
    <h3>${investment.title}</h3>
    <p>${investment.description}</p>
  `;
  investmentContainer.appendChild(investmentCard);
});

// Government Efficiency Dashboard
document.getElementById('tendersAwarded').textContent = '120';
document.getElementById('projectsCompleted').textContent = '85';
document.getElementById('efficiencyScore').textContent = '92%';

// 🌐 Tab Switching Logic
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// 🌟 XP Progress Bar Filler
function updateXPBar(currentXP, maxXP) {
  const bar = document.querySelector('.xp-bar-fill');
  const percent = Math.min((currentXP / maxXP) * 100, 100);
  bar.style.width = percent + '%';
  bar.textContent = `${currentXP} / ${maxXP} XP`;
}

// 🚀 Load JSON Stats
async function loadCoreStatsFromJSON() {
  const res = await fetch("https://raw.githubusercontent.com/RobinV87/Neurovault/main/corestats.json");
  const data = await res.json();

  // Identity
  const identityList = document.getElementById("identity-data");
  identityList.innerHTML = Object.entries(data.identity)
    .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
    .join("");

  // Core Stats Table
  const statsTable = document.querySelector("#corestats-table tbody");
  statsTable.innerHTML = Object.entries(data.core_stats)
    .map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`)
    .join("");

  // Level & XP
  document.getElementById("level").textContent = data.level;
  updateXPBar(data.xp.current, data.xp.next);
}

document.addEventListener("DOMContentLoaded", () => {
  loadCoreStatsFromJSON();
});

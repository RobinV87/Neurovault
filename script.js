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
  const bar = document.querySelectorAll('.xp-bar-fill');
  const percent = Math.min((currentXP / maxXP) * 100, 100);
  bar.forEach(b => {
    b.style.width = percent + '%';
    b.textContent = `${currentXP} / ${maxXP} XP`;
  });
}

// 🧠 Load Core Stats + Identity
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
  document.getElementById("level-xp").textContent = data.level;
  updateXPBar(data.xp.current, data.xp.next);
}

// 🏅 Load Milestones + Specializations
async function loadSpecializations() {
  const res = await fetch("https://raw.githubusercontent.com/RobinV87/Neurovault/main/specializations.json");
  const data = await res.json();

  // Milestone List
  const milestoneList = document.getElementById("milestone-list");
  milestoneList.innerHTML = data.milestones
    .map(m => `<li><strong>Level ${m.Level}:</strong> ${m.Title} <em>(${m.Date})</em></li>`)
    .join("");

  // Specializations Table
  const specTable = document.querySelector("#specialization-table tbody");
  specTable.innerHTML = data.specializations
    .map(s => `<tr><td>${s.Discipline}</td><td>${s.Rank}</td><td>${s.Notes}</td></tr>`)
    .join("");

  // Focus
  document.getElementById("focus-specialization").textContent = data.focus;
}

// 🚀 Init All
document.addEvent

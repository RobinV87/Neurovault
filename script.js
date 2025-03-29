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

  const identityList = document.getElementById("identity-data");
  identityList.innerHTML = Object.entries(data.identity)
    .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
    .join("");

  const statsTable = document.querySelector("#corestats-table tbody");
  statsTable.innerHTML = Object.entries(data.core_stats)
    .map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`)
    .join("");

  document.getElementById("level-status").textContent = data.level;
  document.getElementById("level-xp").textContent = data.level;
  updateXPBar(data.xp.current, data.xp.next);
}

// 🏅 Load Milestones + Specializations
async function loadSpecializations() {
  const res = await fetch("https://raw.githubusercontent.com/RobinV87/Neurovault/main/specializations.json");
  const data = await res.json();

  const milestoneList = document.getElementById("milestone-list");
  milestoneList.innerHTML = data.milestones
    .map(m => `<li><strong>Level ${m.Level}:</strong> ${m.Title} <em>(${m.Date})</em></li>`)
    .join("");

  const specTable = document.querySelector("#specialization-table tbody");
  specTable.innerHTML = data.specializations
    .map(s => `<tr><td>${s.Discipline}</td><td>${s.Rank}</td><td>${s.Notes}</td></tr>`)
    .join("");

  document.getElementById("focus-specialization").textContent = data.focus;
}

async function loadLogs() {
  const indexURL = "https://raw.githubusercontent.com/RobinV87/Neurovault/main/Neurodump/Corelogs/log_index.json";
  const container = document.getElementById("studylog-list");

  try {
    const res = await fetch(indexURL);
    const logs = await res.json();

    container.innerHTML = logs.map(log => `
      <button class="log-button" onclick="loadLogFile('${log.path}')">${log.title}</button>
    `).join("");

  } catch (error) {
    container.innerHTML = "<p>Error loading log index.</p>";
  }
}

async function loadLogFile(path) {
  const url = `https://raw.githubusercontent.com/RobinV87/Neurovault/main/${path}`;
  const content = document.getElementById("studylog-content");

  try {
    const res = await fetch(url);
    const text = await res.text();
    content.innerHTML = renderMarkdown(text);
  } catch (error) {
    content.innerHTML = "<p>⚠️ Failed to load log file.</p>";
  }
}

function renderMarkdown(md) {
  return md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/\n$/gim, '<br />')
    .replace(/\n/gim, '<br />');
}



// 🚀 Init All
document.addEventListener("DOMContentLoaded", () => {
  loadCoreStatsFromJSON();
  loadSpecializations();
  loadLogs();
});

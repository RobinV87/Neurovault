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

// 🧬 Load Identity & Core Stats from Markdown
async function loadCoreStats() {
  const url = "https://raw.githubusercontent.com/RobinV87/Neurovault/Protocols/Cyber_Warrior_Character_Sheet.md";

  const res = await fetch(url);
  const text = await res.text();

  // Match based on headers WITHOUT emojis
  const identitySection = text.match(/## Identity[\s\S]*?(?=##|$)/);
  const coreStatsSection = text.match(/## Core Stats[\s\S]*?(?=##|$)/);

  const content = `
    <h3>🪪 Identity</h3>
    <pre>${identitySection ? identitySection[0].replace('## Identity', '').trim() : 'Not found'}</pre>

    <h3>🧱 Core Stats</h3>
    <pre>${coreStatsSection ? coreStatsSection[0].replace('## Core Stats', '').trim() : 'Not found'}</pre>
  `;

  document.getElementById("identity-corestats").innerHTML = content;
}

// 🔥 Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  updateXPBar(200, 400); // Replace with real values later
  loadCoreStats();
});

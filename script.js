// 🌐 Tab Switching Logic
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active classes
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    // Activate current tab
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Load core stats
async function loadCoreStats() {
  const url = "https://raw.githubusercontent.com/<your-username>/<your-repo>/main/Protocols/Cyber_Warrior_Character_Sheet.md";

  const res = await fetch(url);
  const text = await res.text();

  const identitySection = text.match(/## 🪪 Identity[\\s\\S]*?---/);
  const coreStatsSection = text.match(/## 🧱 Core Stats[\\s\\S]*?---/);

  const content = `
    <h3>🪪 Identity</h3>
    <pre>${identitySection ? identitySection[0].replace('## 🪪 Identity', '').replace('---', '').trim() : 'Not found'}</pre>

    <h3>🧱 Core Stats</h3>
    <pre>${coreStatsSection ? coreStatsSection[0].replace('## 🧱 Core Stats', '').replace('---', '').trim() : 'Not found'}</pre>
  `;

  document.getElementById("identity-corestats").innerHTML = content;
}

document.addEventListener("DOMContentLoaded", () => {
  updateXPBar(200, 400);
  loadCoreStats(); // 💡 Load the core stats into the dashboard
});


// 🌟 XP Progress Bar Filler (hook for dynamic use)
function updateXPBar(currentXP, maxXP) {
  const bar = document.querySelector('.xp-bar-fill');
  const percent = Math.min((currentXP / maxXP) * 100, 100);
  bar.style.width = percent + '%';
  bar.textContent = `${currentXP} / ${maxXP} XP`;
}

// 🔗 Markdown Fetch Hook (future feature)
async function loadMarkdownData(mdUrl) {
  const response = await fetch(mdUrl);
  const text = await response.text();
  // Placeholder: parsing logic to be added here
  console.log('Fetched Markdown:', text);
  // Use a Markdown parser (e.g., marked.js) to render or convert
}

document.addEventListener('DOMContentLoaded', () => {
  updateXPBar(200, 400); // Replace with dynamic values later
});


// 🔧 Example Usage
// updateXPBar(200, 400);
// loadMarkdownData('Cyber_Warrior_Character_Sheet.md');


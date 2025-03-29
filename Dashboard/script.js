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


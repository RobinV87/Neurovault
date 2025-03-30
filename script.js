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
  document.getElementById("level-xp").textContent = `${data.xp.current} / ${data.xp.next} XP`;
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

// 🌳 Load Cyber Skill Tree from JSON
async function loadSkillTree() {
  const url = "https://raw.githubusercontent.com/RobinV87/Neurovault/main/NodeTree.json";
  const container = document.getElementById("skill-tree-container");

  try {
    const res = await fetch(url);
    const nodes = await res.json();

    // Group nodes by path
    const grouped = {
      red: [],
      blue: [],
      purple: []
    };

    nodes.forEach(node => {
      grouped[node.type].push(node);
    });

    // Create tree structure
    container.innerHTML = `
      <div class="tree-column">
        <h3><span class="dot red"></span> Red Team Path</h3>
        <div class="tree-section" id="red-path"></div>
      </div>
      <div class="tree-column">
        <h3><span class="dot blue"></span> Blue Team Path</h3>
        <div class="tree-section" id="blue-path"></div>
      </div>
      <div class="tree-column">
        <h3><span class="dot purple"></span> Purple Team Path</h3>
        <div class="tree-section" id="purple-path"></div>
      </div>
    `;

    // Render skill cards
    Object.keys(grouped).forEach(path => {
      const section = document.getElementById(`${path}-path`);
      section.innerHTML = grouped[path].map(node => `
        <div class="skill-card ${node.unlocked ? "unlocked" : ""}">
          <h4>${node.label}</h4>
          <p><strong>XP:</strong> ${node.xp_cost}</p>
          <p><strong>Tier:</strong> ${node.tier}</p>
          ${node.certification ? `<p><strong>Cert:</strong> ${node.certification}</p>` : ""}
          <p><strong>Unlocks:</strong> ${node.unlocks.join(', ')}</p>
        </div>
      `).join("");
    });

  } catch (error) {
    container.innerHTML = "<p>⚠️ Failed to load skill tree.</p>";
    console.error("Skill tree load error:", error);
  }
}

// 🚀 Init All
document.addEventListener("DOMContentLoaded", () => {
  loadCoreStatsFromJSON();
  loadSpecializations();
  loadSkillTree();
});

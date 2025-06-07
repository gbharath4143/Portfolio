const workExperience = [
  {
    title: "Ericsson | Intern",
    description: "Worked as an Assistant Engineer Trainee in Intelligent Network (IN) focusing on telecom performance analysis and reporting."
  },
  {
    title: "TechnoLogics | Intern",
    description: "Worked on Embedded Systems projects involving Arduino UNO, Wi-Fi modules, and basic microcontroller interfacing."
  },
  {
    title: "RF and Microwave Lab | Research Student",
    description: "Contributed to RF circuit simulations and antenna measurements under the guidance of Prof. Shashi Kumar D at Christ University."
  }
];

const projects = [
  {
  title: "Hydroponic Farming using ML | Final Year Project 2024",
  description: "Developed a smart hydroponic farming system using machine learning models to optimize nutrient delivery and improve crop yield.",
  github_repo:"GitHub repo https://github.com/gbharath4143/HydroponicsFarmingUsingML"
},
  {
    title: "Smart Room Light System | ICETECH 2022",
    description: "Designed and built a smart energy-efficient lighting and air conditioning system using sensors and embedded controllers."
  }
];

const education = [
  {
    title: "Christ (Deemed to be University) | B.Tech",
    description: "Electronics and Communications Engineering | 2020-2024"
  }
];

const extracurricular = [
  {
    title: "National Human Rights Council of India | Volunteer 2023",
    description: "Created awareness campaigns on women's education and safety in rural areas near the university."
  },
  {
    title: "IIIC - Industry Institute Interaction Cell | Volunteer 2022-2023",
    description: "Designed event posters, managed IIIC's social media pages, and co-authored the first annual newsletter."
  },
  {
    title: "5K Marathon | Participant 2022",
    description: "Demonstrated personal wellness, endurance, and consistency through competitive running participation."
  },
  {
    title: "Lions Blood Center | Volunteer 2022",
    description: "Advocated blood donation and led initiatives for community health awareness."
  }
];

const skills = [
  {
    title: "Languages & Tools",
    description: "SystemVerilog, UVM, Verilog, VHDL, Python, C/C++, Shell Scripting"
  },
  {
    title: "EDA Tools",
    description: "Synopsys VCS, Cadence Xcelium, QuestaSim, Vivado, ModelSim"
  },
  {
    title: "Methodologies",
    description: "UVM, Constraint Random Testing, Functional Coverage, Assertions"
  },
  {
    title: "Soft Skills",
    description: "Analytical Thinking, Debugging, Teamwork, Communication, Documentation"
  }
];

// Generic render function
function renderSection(containerId, sectionTitle, entries) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `<h4 class="section-title">${sectionTitle}</h4>`;
  entries.forEach(({ title, description,github_repo}) => {
    const entryHTML = `
      <div class="entry">
        <h2 class="entry-title">${title}</h2>
        <p class="entry-description">${description}</p>
        <p class="entry-description">${github_repo}</p>
      </div>`;
    container.innerHTML += entryHTML;
  });
}

// Render all sections
document.addEventListener("DOMContentLoaded", () => {
  renderSection("work-experience", "WORK EXPERIENCE", workExperience);
  renderSection("projects", "PROJECTS", projects);
  renderSection("education", "EDUCATIONAL QUALIFICATIONS", education);
  renderSection("extracurricular", "EXTRA CURRICULAR ACTIVITIES", extracurricular);
  renderSection("skills", "SKILLS", skills);
});

/*
  Customize this file with your real details.
  Do not list a project as completed until it genuinely is.
*/
const portfolioData = {
  skills: [
    { title: "Networking Fundamentals", detail: "Learning protocols, addressing, ports, and how devices communicate." },
    { title: "Linux Fundamentals", detail: "Practicing the command line, file permissions, and system basics." },
    { title: "Web Application Security", detail: "Studying common web risks and secure application principles." },
    { title: "Ethical Hacking Fundamentals", detail: "Learning structured, permission-based security testing." },
    { title: "Vulnerability Assessment", detail: "Exploring how to identify, validate, and document potential weaknesses." },
    { title: "Python Programming", detail: "Building programming fundamentals for automation and problem-solving." },
    { title: "Cybersecurity Tools", detail: "Learning tools in safe labs and understanding their outputs." },
    { title: "Research & Documentation", detail: "Recording methods, evidence, findings, and remediation ideas clearly." }
  ],
  projects: [
    {
      number: "PROJECT / 01",
      title: "XENDRO",
      description: "A cybersecurity project concept focused on security learning, structured research, and responsible experimentation in authorized environments.",
      technologies: ["Research", "Security Learning", "Documentation"],
      status: "Planning",
      statusClass: "planning",
      github: "",
      demo: ""
    },
    {
      number: "PROJECT / 02",
      title: "BukBuk",
      description: "A personal product concept. This portfolio entry can be updated with its real purpose, implementation details, and security considerations as the project develops.",
      technologies: ["Product Concept", "Web UI", "Planning"],
      status: "Planning",
      statusClass: "planning",
      github: "",
      demo: ""
    },
    {
      number: "PROJECT / 03",
      title: "Security Lab",
      description: "A planned learning lab for practicing networking, Linux, and web security in isolated systems that I own or have explicit permission to test.",
      technologies: ["Linux", "Networking", "Web Security"],
      status: "Planning",
      statusClass: "planning",
      github: "",
      demo: ""
    }
  ],
  journey: [
    { title: "Build the fundamentals", detail: "Study networking, operating systems, Linux, programming, and core security concepts.", label: "Planned milestone" },
    { title: "Practice in a controlled lab", detail: "Set up isolated practice environments and learn to test safely, with clear permission and scope.", label: "Planned milestone" },
    { title: "Document practical projects", detail: "Publish reproducible notes, explain findings clearly, and include mitigation guidance where relevant.", label: "Planned milestone" },
    { title: "Develop responsible research habits", detail: "Learn disclosure principles, legal boundaries, and how to communicate security issues professionally.", label: "Long-term direction" }
  ],
  contact: {
    email: "", // Example: "manu@example.com"
    github: "", // Example: "https://github.com/your-username"
    linkedin: "", // Example: "https://www.linkedin.com/in/your-profile"
    social: "" // Optional professional profile URL
  }
};

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));

function safeExternalUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function renderSkills() {
  const target = document.querySelector("#skills-grid");
  target.innerHTML = portfolioData.skills.map((skill, index) => `
    <article class="skill-card reveal">
      <span class="skill-index">AREA / ${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHTML(skill.title)}</h3>
      <p>${escapeHTML(skill.detail)}</p>
    </article>`).join("");
}

function renderProjects() {
  const target = document.querySelector("#projects-grid");
  target.innerHTML = portfolioData.projects.map((project) => {
    const github = safeExternalUrl(project.github);
    const demo = safeExternalUrl(project.demo);
    return `<article class="project-card reveal">
      <div class="project-top"><span class="project-number">${escapeHTML(project.number)}</span><span class="status ${escapeHTML(project.statusClass || "")}">${escapeHTML(project.status)}</span></div>
      <h3>${escapeHTML(project.title)}</h3>
      <p>${escapeHTML(project.description)}</p>
      <div class="project-tech">${project.technologies.map((tech) => `<span>${escapeHTML(tech)}</span>`).join("")}</div>
      <div class="project-links">
        ${github ? `<a href="${escapeHTML(github)}" target="_blank" rel="noopener noreferrer">Source code ↗</a>` : `<span class="disabled">Repository not added</span>`}
        ${demo ? `<a href="${escapeHTML(demo)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>` : `<span class="disabled">No demo yet</span>`}
      </div>
    </article>`;
  }).join("");
}

function renderJourney() {
  document.querySelector("#timeline").innerHTML = portfolioData.journey.map((item) => `
    <article class="timeline-item reveal">
      <span class="timeline-marker" aria-hidden="true"></span>
      <div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.detail)}</p><span class="timeline-label">${escapeHTML(item.label)}</span></div>
    </article>`).join("");
}

function renderContact() {
  const c = portfolioData.contact;
  const items = [
    { label: "Email", value: c.email, href: c.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email) ? `mailto:${c.email}` : "" },
    { label: "GitHub", value: c.github, href: safeExternalUrl(c.github) },
    { label: "LinkedIn", value: c.linkedin, href: safeExternalUrl(c.linkedin) },
    { label: "Professional profile", value: c.social, href: safeExternalUrl(c.social) }
  ].filter((item) => item.href);
  document.querySelector("#contact-links").innerHTML = items.length
    ? items.map((item) => `<a class="contact-link" href="${escapeHTML(item.href)}" ${item.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${escapeHTML(item.label)} <span aria-hidden="true">↗</span></a>`).join("")
    : `<p class="contact-small">Contact links will appear here after you add your details in <code>script.js</code>.</p>`;
}

function setupNavigation() {
  const button = document.querySelector(".menu-toggle");
  const links = document.querySelector("#nav-links");
  const closeMenu = () => {
    links.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open navigation");
  };
  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    button.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    links.classList.toggle("open", !isOpen);
  });
  links.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll(".principle, .skill-card, .project-card, .timeline-item, .credential-panel");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  elements.forEach((element) => element.classList.add("reveal"));
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach((element) => observer.observe(element));
}

document.querySelector("#year").textContent = new Date().getFullYear();
renderSkills();
renderProjects();
renderJourney();
renderContact();
setupNavigation();
setupRevealAnimations();

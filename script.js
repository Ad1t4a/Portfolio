// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Chatbot
const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');
const chatToggle = document.getElementById('chat-toggle');
let isChatOpen = true;

const responses = {
    "what courses have you done": "In 2023, I completed courses like Introduction to Darkweb Operations, Vulnerability Management, Threat Hunting, Digital Forensics, Network Analysis, and Open-Source Intelligence. In 2024, I finished Practical Cybersecurity for Cyber Practitioners (NPTEL) and The Definitive GRC Analyst Master Class by TCM Security.",
    "what conferences have you attended": "I’ve attended offline events like Bangalore Tech Summit 2023, Vulncon 2024, and Null Community Meetup, plus online sessions including Cloud Security: Emerging Threats (Symbiosis), Hands-on Digital Forensics, SANS 2024 Top Attacks and Security Awareness Reports, and DFIR Summit 2024.",
    "what projects have you worked on": "My IoT projects include an IR-based line-following robot, a personal NAS on Raspberry Pi 4, basic radio modules, and sensor-based systems (soil moisture, gas, humidity) with Raspberry Pi Pico and Arduino Uno. In cybersecurity, I’ve set up secure virtual environments with VirtualBox, configured Ansible on Linux, installed vulnerable OS for testing, built VulnHub labs, and compiled a custom Arch Linux distribution.",
    "what is your background": "I’m an MSc Cybersecurity graduate with a strong foundation in network security, cryptography, and ethical hacking. I’m skilled with tools like VirtualBox, Ansible, and VulnHub, and I’m passionate about proactively securing systems with an analytical mindset.",
    "what skills do you have": "I’m proficient in network security, cryptography, ethical hacking, and using tools like VirtualBox, Ansible, and Raspberry Pi. I also have hands-on experience with IoT, vulnerability testing, and setting up secure configurations.",
    "default": "I can only answer questions about my resume. Try asking about my courses, conferences, projects, background, or skills!"
};

function sendMessage() {
    const userMessage = chatInput.value.toLowerCase().trim();
    if (!userMessage) return;

    const userDiv = document.createElement('div');
    userDiv.textContent = `You: ${userMessage}`;
    chatBody.appendChild(userDiv);

    const botDiv = document.createElement('div');
    botDiv.style.color = '#ff6f61';
    botDiv.textContent = `Bot: ${responses[userMessage] || responses["default"]}`;
    chatBody.appendChild(botDiv);

    chatInput.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
}

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

chatToggle.addEventListener('click', () => {
    const chatBot = document.getElementById('chatbot');
    isChatOpen = !isChatOpen;
    chatBot.style.height = isChatOpen ? 'auto' : '50px';
    chatToggle.innerHTML = isChatOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-comment"></i>';
});

// Profile Image Animation Trigger
const profileImg = document.getElementById('profile-img');
profileImg.addEventListener('mouseover', () => {
    profileImg.style.transform = 'rotate(360deg)';
});
profileImg.addEventListener('mouseout', () => {
    profileImg.style.transform = 'rotate(0deg)';
});

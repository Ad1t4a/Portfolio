// Chatbot
const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');
const chatToggle = document.getElementById('chat-toggle');
let isChatOpen = true;

const responses = {
    "what courses have you done": "In 2023, I completed Introduction to Darkweb Operations, Vulnerability Management, Threat Hunting, Digital Forensics, Network Analysis, and Open-Source Intelligence. In 2024, I finished Practical Cybersecurity (NPTEL) and The Definitive GRC Analyst Master Class by TCM Security.",
    "what conferences have you attended": "I’ve attended Bangalore Tech Summit 2023, Vulncon 2024, Null Community Meetup, and online events like Cloud Security: Emerging Threats (Symbiosis), Hands-on Digital Forensics, SANS 2024 Reports, and DFIR Summit 2024.",
    "what projects have you worked on": "IoT projects: IR-based line-following robot, personal NAS on Raspberry Pi 4, radio modules, and sensor systems (soil moisture, gas, humidity) with Raspberry Pi Pico and Arduino Uno. Cybersecurity: VirtualBox environments, Ansible on Linux, vulnerable OS testing, VulnHub labs, and a custom Arch Linux distro.",
    "what is your background": "I’m an MSc Cybersecurity graduate skilled in network security, cryptography, and ethical hacking, with hands-on experience using VirtualBox, Ansible, and VulnHub labs.",
    "what skills do you have": "I excel in network security, cryptography, ethical hacking, IoT, and tools like VirtualBox, Ansible, Raspberry Pi, and VulnHub. I’m also adept at vulnerability testing and secure configurations.",
    "default": "I can only answer resume-related questions. Ask about my courses, conferences, projects, background, or skills!"
};

function sendMessage() {
    const userMessage = chatInput.value.toLowerCase().trim();
    if (!userMessage) return;

    const userDiv = document.createElement('div');
    userDiv.textContent = `You: ${userMessage}`;
    chatBody.appendChild(userDiv);

    const botDiv = document.createElement('div');
    botDiv.style.color = '#fd7e14';
    botDiv.textContent = `Bot: ${responses[userMessage] || responses["default"]}`;
    chatBody.appendChild(botDiv);

    chatInput.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
}

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

chatToggle.addEventListener('click', () => {
    isChatOpen = !isChatOpen;
    const chatBot = document.getElementById('chatbot');
    chatBot.style.height = isChatOpen ? 'auto' : '60px';
    chatToggle.innerHTML = isChatOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-comment"></i>';
});

// Profile Image Animation
const profileImg = document.getElementById('profile-img');
profileImg.addEventListener('mouseover', () => {
    profileImg.style.transform = 'rotate(360deg)';
});
profileImg.addEventListener('mouseout', () => {
    profileImg.style.transform = 'rotate(0deg)';
});

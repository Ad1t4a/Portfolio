const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');

const responses = {
    "what courses have you done": "I've completed courses like Introduction to Darkweb Operations, Vulnerability Management, Threat Hunting, Digital Forensics, Network Analysis, and Open-Source Intelligence in 2023, plus Practical Cybersecurity (NPTEL) and GRC Analyst Master Class (TCM Security) in 2024.",
    "what conferences have you attended": "I've attended Bangalore Tech Summit 2023, Vulncon 2024, Null Community Meetup, and online events like SANS 2024 Reports and DFIR Summit 2024.",
    "what projects have you worked on": "I’ve worked on IoT projects like line-following robots and a personal NAS on Raspberry Pi, plus cybersecurity labs with VulnHub, virtual networks, and a custom Arch Linux distro.",
    "what is your background": "I’m an MSc Cybersecurity graduate with a strong foundation in network security, cryptography, and ethical hacking, backed by hands-on experience with security tools.",
    "default": "Sorry, I can only answer simple questions about my resume. Try asking about my courses, conferences, projects, or background!"
};

function sendMessage() {
    const userMessage = chatInput.value.toLowerCase().trim();
    if (!userMessage) return;

    // Display user message
    const userDiv = document.createElement('div');
    userDiv.textContent = `You: ${userMessage}`;
    chatBody.appendChild(userDiv);

    // Bot response
    const botDiv = document.createElement('div');
    botDiv.style.color = '#e94560';
    botDiv.textContent = `Bot: ${responses[userMessage] || responses["default"]}`;
    chatBody.appendChild(botDiv);

    // Clear input and scroll to bottom
    chatInput.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Press Enter to send message
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

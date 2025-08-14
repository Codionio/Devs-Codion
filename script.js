// --- ⚙️ TEAM DATA 
// The dimention of photo would be 300 * 300

const teamMembers = [
    {
        name: 'Sahil Sharma',
        role: 'AI & Machine Learning',
        bio: 'A B.Tech CSE-AIML student specializing in deep learning and NLP, building intelligent systems that solve real-world problems.',
        imageUrl: 'sahil_sharma_image.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/sahil-sharma-1a024b330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ', github: 'https://github.com/Sahil-coder-30', twitter: 'https://x.com/SahilSharma_30?t=6e0SJFuJZcF1tASjjwUgHg&s=09', instagram: 'https://www.instagram.com/sahil_sharma__30?igsh=MWVlNG9xYjZpY3hzYw==' }
    },
    {
        name: 'Meghanshu Saxena',
        role: 'Full-Stack Development',
        bio: 'B.Tech CSE Data Science student, I am Passionate about crafting seamless user experiences from front-end to back-end. Loves building scalable web applications.',
        imageUrl: 'sellf.jpeg',
        socials: { linkedin: 'https://www.linkedin.com/in/meghanshu-saxena-390b77233/', github: 'https://github.com/Web-Master-Meghu', twitter: '#', instagram: 'https://www.instagram.com/_meghanshusaxena_?utm_source=qr&igsh=eTV6M3AyZmtmeXVw ' }
    },
    {
        name: 'Raunak Bisht',
        role: 'Front-End Dev & Version Control',
        bio: 'Crafting intuitive, user-friendly interfaces with precision, while ensuring seamless collaboration and robust version control for efficient development workflows.',
        imageUrl: 'raunak_bisht_image.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/raunak-bisht-b7929232a/', github: 'https://github.com/RaunakSinghBisht', twitter: '#', instagram: 'https://www.instagram.com/raunakbisht980/' }
    },
    {
        name: 'Ayush Varshney',
        role: 'Cloud & DevOps',
        bio: 'Automating the cloud is my game. Specializing in CI/CD pipelines and building resilient, scalable cloud architectures.',
        imageUrl: 'ayush_varshney_image.jpg',
        socials: { linkedin: 'https://www.linkedin.com/in/ayush-varshney-33a492283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', github: 'https://github.com/Ayushvarshney1234', twitter: '#', instagram: 'https://www.instagram.com/ayushvarshney4545?igsh=MWYxaWI3NmY0M3Exeg==' }
    },
    {
        name: 'Love Varshney',
        role: 'Mobile Development',
        bio: 'Bringing ideas to life on iOS and Android with Flutter. A B.Tech student with a keen eye for detail and performance.',
        imageUrl: 'https://i.pravatar.cc/300?u=aditya',
        socials: { linkedin: '#', github: '#', twitter: '#', instagram: '#' }
    }
];

// --- CORE SCRIPT LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const content = document.getElementById('content');
    const container = document.getElementById('team-container');

    // --- 1. THEME TOGGLE LOGIC ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const applyTheme = (isDark) => {
        document.documentElement.classList.toggle('dark', isDark);
        document.getElementById('theme-toggle-light-icon').classList.toggle('hidden', isDark);
        document.getElementById('theme-toggle-dark-icon').classList.toggle('hidden', !isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };
    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
    themeToggleBtn.addEventListener('click', () => applyTheme(!document.documentElement.classList.contains('dark')));

    // --- 2. DYNAMIC CARD GENERATION ---
    let cardsHTML = '';
    teamMembers.forEach(member => {
        cardsHTML += `
        <div class="team-card w-full sm:w-2/5 lg:w-[calc(33.33%-2rem)]" style="transform-style: preserve-3d;">
            <div class="team-card-inner relative w-full h-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-6 text-center shadow-2xl shadow-gray-200/20 dark:shadow-black/20">
                <div class="relative z-10 flex flex-col items-center h-full">
                    <img class="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-gray-300 dark:border-gray-700 shadow-lg flex-shrink-0" src="${member.imageUrl}" alt="Profile image of ${member.name}">
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-2">${member.name}</h3>
                    <p class="text-gray-500 dark:text-gray-400 font-medium text-sm mt-1 tracking-wide">${member.role}</p>
                    <p class="text-gray-600 dark:text-gray-400 mt-4 text-sm leading-relaxed flex-grow">${member.bio}</p>
                    <div class="flex justify-center space-x-5 mt-6 pt-4 border-t border-gray-300/50 dark:border-gray-700/60 w-full flex-shrink-0">
                        <a href="${member.socials.linkedin}" target="_blank" class="social-icon text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                        <a href="${member.socials.github}" target="_blank" class="social-icon text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                        <a href="${member.socials.twitter}" target="_blank" class="social-icon text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.602.75z"/></svg></a>
                        <a href="${member.socials.instagram}" target="_blank" class="social-icon text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.444.01 10.172 0 8 0zm0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.598.92 2.5 2.5 0 0 1-.92.598c-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.598-.92c-.11-.282-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.232s.008-2.389.046-3.232c.035-.78.166-1.204.275-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm0 5.852a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4zM8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92z"/></svg></a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    container.innerHTML = cardsHTML;
    
    // --- 3. LOADING ANIMATION & CONTENT REVEAL ---
    const loadingScreen = document.getElementById('loading-screen');
    const loadingLogo = document.getElementById('loading-logo');
    
    // Subtle "breathing" animation for the logo while loading
    const breathingAnimation = gsap.to(loadingLogo, { scale: 8, opacity: 0.8, duration: 1.5, repeat: -1, yoyo: true, ease: "power1.inOut" });

    // Use a timeout for a guaranteed, fast loading experience
    setTimeout(() => {
        breathingAnimation.kill(); // Stop the breathing animation
        
        const tl = gsap.timeline({ onComplete: initializePageAnimations });
        tl.to(loadingScreen, { autoAlpha: 0, duration: 0.8, ease: 'power1.out' })
          .fromTo(content, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, "-=0.5");
    }, 1500); // Set a minimum load time of 1.5 seconds

    // --- 4. PAGE ANIMATIONS (Called after content is revealed) ---
    function initializePageAnimations() {
        // Background blob animation
        gsap.to(".blob1", { duration: 25, x: "70vw", y: "30vh", scale: 1.5, ease: "sine.inOut", repeat: -1, yoyo: true });
        gsap.to(".blob2", { duration: 30, x: "20vw", y: "60vh", scale: 1.2, ease: "sine.inOut", repeat: -1, yoyo: true });
        
        // Staggered card entrance animation
        gsap.from(".team-card", {
            scrollTrigger: { trigger: "#team-container", start: "top 85%" },
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
        });
        
        // Card 3D tilt hover effect
        document.querySelectorAll('.team-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotationY = -1 * ((x - rect.width / 2) / rect.width) * 10;
                const rotationX = ((y - rect.height / 2) / rect.height) * 10;
                
                // Update CSS variable for the glare effect
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
                
                gsap.to(card, { rotationX, rotationY, transformPerspective: 1000, ease: "power1.out", duration: 0.8 });
            });
            card.addEventListener('mouseenter', () => gsap.to(card, { scale: 1.03, duration: 0.3, ease: 'power2.out' }));
            card.addEventListener('mouseleave', () => gsap.to(card, { rotationX: 0, rotationY: 0, scale: 1, duration: 0.8, ease: "power2.out" }));
        });
    }

});

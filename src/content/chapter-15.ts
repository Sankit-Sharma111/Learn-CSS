export const chapter15 = {
  id: "ch15",
  title_en: "Chapter 15: Introduction to JavaScript (The Brain of the Web)",
  title_hi: "अध्याय 15: JavaScript का परिचय (वेबसाइट का दिमाग!)",
  topics: [
    {
      id: "t15-1",
      title_en: "What is JavaScript? (HTML = Bones, CSS = Skin, JS = Brain)",
      title_hi: "JavaScript क्या है? (HTML = हड्डियां, CSS = त्वचा, JS = दिमाग)",
      content_en: `### Bringing the Web to Life

Up until now, you have built websites using **HTML** (the structural bones) and **CSS** (the beautiful skin and clothing). But these sites have been static. They look nice, but they don't *do* anything. 

**JavaScript (JS)** is the programming language of the web. It acts as the **Brain and Muscles** of your website.

With JavaScript, you can:
* Make buttons actually do something when clicked!
* Show error messages if a user types the wrong password.
* Fetch live data from the internet (like current weather or stock prices).
* Build full 3D browser games and complex web applications (like YouTube or Netflix).

---

### Where Does JavaScript Live?

Just like CSS, JavaScript can be added to your webpage in different ways.

#### 1. The \`<script>\` Tag (Internal JS)
You can write JavaScript directly inside your HTML file by wrapping it in a \`<script>\` tag. It is best practice to place this tag at the very bottom of your \`<body>\` so it doesn't slow down the loading of your HTML layout.

\`\`\`html
<body>
  <h1>Welcome to my site!</h1>
  
  <!-- JavaScript goes at the bottom! -->
  <script>
    alert("Hello! I am a JavaScript popup!");
  </script>
</body>
\`\`\`

#### 2. External JS Files (The Professional Way)
Just like external \`.css\` files, professional developers write their JavaScript in separate \`.js\` files (e.g., \`script.js\`) and link them to the HTML file. This keeps code clean and organized.

\`\`\`html
<!-- Linking an external JavaScript file -->
<script src="script.js"></script>
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### वेबसाइट में जान डालना!

अब तक, आपने **HTML** (ढांचा/हड्डियां) और **CSS** (सुंदर त्वचा और कपड़े) का उपयोग करके वेबसाइटें बनाई हैं। लेकिन ये वेबसाइटें स्थिर (static) थीं। वे दिखती तो अच्छी हैं, लेकिन वे खुद से कुछ *करती* नहीं हैं।

**JavaScript (JS)** वेब की प्रोग्रामिंग भाषा (Programming Language) है। यह आपकी वेबसाइट के **दिमाग (Brain) और मांसपेशियों (Muscles)** के रूप में काम करती है।

JavaScript के साथ, आप यह सब कर सकते हैं:
* बटनों (buttons) पर क्लिक करने से असली काम करवा सकते हैं!
* यदि यूज़र गलत पासवर्ड टाइप करता है तो लाल रंग का एरर (error) मैसेज दिखा सकते हैं।
* इंटरनेट से लाइव डेटा (जैसे आज का मौसम या क्रिकेट का स्कोर) मंगाकर दिखा सकते हैं।
* पूरी तरह से काम करने वाले 3D वेब गेम्स और यूट्यूब/नेटफ्लिक्स जैसे कॉम्प्लेक्स एप्लिकेशन बना सकते हैं।

---

### JavaScript कहाँ लिखी जाती है?

CSS की तरह ही, JavaScript को भी आपके वेबपेज में अलग-अलग तरीकों से जोड़ा जा सकता है।

#### 1. \`<script>\` टैग (Internal JS)
आप अपने HTML फ़ाइल के अंदर \`<script>\` टैग लगाकर सीधे JavaScript लिख सकते हैं। सबसे बेहतरीन नियम यह है कि इस टैग को अपने \`<body>\` के एकदम आखिर (bottom) में रखा जाए, ताकि यह आपके HTML डिज़ाइन के लोड होने में रुकावट न डाले।

\`\`\`html
<body>
  <h1>मेरी वेबसाइट में आपका स्वागत है!</h1>
  
  <!-- JavaScript सबसे नीचे आती है! -->
  <script>
    alert("नमस्ते! मैं एक JavaScript पॉपअप हूँ!");
  </script>
</body>
\`\`\`

#### 2. एक्सटर्नल (External) JS फाइलें (प्रोफेशनल तरीका)
एक्सटर्नल \`.css\` फ़ाइलों की तरह ही, प्रोफेशनल डेवलपर्स अपना JavaScript कोड अलग \`.js\` फ़ाइलों (जैसे, \`script.js\`) में लिखते हैं और उन्हें HTML फ़ाइल से लिंक कर देते हैं। इससे कोड साफ और सुलझा हुआ रहता है।

\`\`\`html
<!-- एक्सटर्नल JavaScript फ़ाइल को लिंक करना -->
<script src="script.js"></script>
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="container">\n  <h2>HTML and CSS are loaded...</h2>\n  <button id="magicBtn" class="btn">Run JavaScript Brain!</button>\n  \n  <div id="outputBox" class="output hidden">\n    I am a hidden box. JavaScript will reveal me!\n  </div>\n</div>\n\n<!-- JAVASCRIPT LIVES HERE AT THE BOTTOM! -->\n<script>\n  // 1. Find the button and the hidden box in the HTML\n  const button = document.getElementById('magicBtn');\n  const box = document.getElementById('outputBox');\n\n  // 2. Add an 'Ear' (Event Listener) to the button to listen for clicks\n  button.addEventListener('click', function() {\n    // 3. The Brain (JS) removes the 'hidden' CSS class to reveal the box!\n    box.classList.remove('hidden');\n    button.innerText = "JavaScript Triggered!";\n    button.style.backgroundColor = "#2ed573";\n  });\n</script>`,
          css: `body { font-family: sans-serif; padding: 20px; background: #2f3542; color: white; text-align: center; }\n\n.btn {\n  background: #3742fa;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 15px 30px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.output {\n  margin-top: 25px;\n  background: #ff4757;\n  padding: 20px;\n  border-radius: 8px;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n/* The CSS rule that keeps the box invisible initially */\n.hidden {\n  display: none;\n}`
        }
      ]
    },
    {
      id: "t15-2",
      title_en: "Variables in JS (Storing Data with let and const)",
      title_hi: "JS में वेरिएबल्स (let और const के साथ डेटा को स्टोर/Save करना)",
      content_en: `### The Memory Boxes of JavaScript

In order for a brain to process information, it needs **memory**. In programming, we store information in memory boxes called **Variables**.

To create a variable in modern JavaScript, we use two primary keywords: **\`let\`** and **\`const\`**.

---

### 1. \`let\` (The Changeable Box)
Use \`let\` when you want to store a piece of data that **might change or be updated later** in your program (like a player's score in a game, or the contents of a shopping cart).

\`\`\`javascript
let playerScore = 0;   // Create a variable and store 0 in it
playerScore = 10;      // Update the score to 10! (Perfectly fine)
playerScore = 50;      // Update it again!
\`\`\`

---

### 2. \`const\` (The Locked Box / Constant)
Use \`const\` when you want to store a piece of data that **should NEVER change** once it is created (like a person's date of birth, or the value of Pi).

\`\`\`javascript
const birthYear = 1995;
birthYear = 2000; // ❌ ERROR! You cannot change a locked 'const' box!
\`\`\`

#### Industry Best Practice:
Modern professional developers use **\`const\`** by default for almost everything! They only switch to **\`let\`** if they are 100% sure the value will need to be re-assigned later. This prevents accidental bugs where you change data you didn't mean to!

---

### What about \`var\`?
If you read old tutorials (pre-2015), you will see the keyword \`var\` used everywhere. 
**Avoid using \`var\`!** It is an outdated, buggy way to declare variables and has been replaced entirely by \`let\` and \`const\` in modern web development.

[[SANDBOX_0]]`,
      content_hi: `### JavaScript के मेमोरी बॉक्स (Memory Boxes)

किसी भी दिमाग को जानकारी प्रोसेस करने के लिए **याददाश्त (Memory)** की आवश्यकता होती है। प्रोग्रामिंग में, हम जानकारी को जिन छोटे मेमोरी बॉक्स में स्टोर (Save) करते हैं, उन्हें **Variables (वेरिएबल्स)** कहते हैं।

मॉडर्न (Modern) JavaScript में वेरिएबल बनाने के लिए हम मुख्य रूप से दो शब्दों का उपयोग करते हैं: **\`let\`** और **\`const\`**।

---

### 1. \`let\` (बदलने वाला बॉक्स)
जब आप कोई ऐसा डेटा स्टोर करना चाहते हैं जो **बाद में बदल सकता है या अपडेट हो सकता है** (जैसे किसी गेम में खिलाड़ी का स्कोर, या यूज़र की उम्र), तो \`let\` का उपयोग करें।

\`\`\`javascript
let playerScore = 0;   // एक बॉक्स बनाया और उसमें 0 डाल दिया
playerScore = 10;      // स्कोर अपडेट करके 10 कर दिया! (यह बिल्कुल सही है)
playerScore = 50;      // इसे फिर से अपडेट कर दिया!
\`\`\`

---

### 2. \`const\` (लॉक किया हुआ बॉक्स / Constant)
जब आप कोई ऐसा डेटा स्टोर करना चाहते हैं जो बनने के बाद **कभी नहीं बदलना चाहिए** (जैसे किसी का जन्म का साल, या Pi (π) की वैल्यू), तो \`const\` का उपयोग करें।

\`\`\`javascript
const birthYear = 1995;
birthYear = 2000; // ❌ ERROR (त्रुटि)! आप लॉक किए गए 'const' बॉक्स को नहीं बदल सकते!
\`\`\`

#### टेक इंडस्ट्री का सबसे बड़ा नियम:
आजकल के प्रोफेशनल डेवलपर्स लगभग हर चीज़ के लिए डिफ़ॉल्ट रूप से **\`const\`** का उपयोग करते हैं! वे केवल तभी **\`let\`** का उपयोग करते हैं जब उन्हें 100% यकीन हो कि आगे चलकर कोड में इस वैल्यू को बदलना ही पड़ेगा। इससे उन गलतियों (bugs) से बचा जा सकता है जहाँ आप गलती से ऐसा डेटा बदल देते हैं जिसे नहीं बदलना चाहिए था!

---

### \`var\` का क्या हुआ?
अगर आप 2015 से पुराने ट्यूटोरियल पढ़ेंगे, तो आपको हर जगह \`var\` लिखा दिखेगा।
**अब \`var\` का इस्तेमाल बिल्कुल न करें!** यह वेरिएबल बनाने का एक पुराना और खराब तरीका है, जिसकी वजह से कोड में बहुत सारे बग्स आते थे। मॉडर्न वेब डेवलपमेंट में इसकी जगह पूरी तरह से \`let\` और \`const\` ने ले ली है।

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="board">\n  <h2>Game Score Tracker</h2>\n  <p>Player Name: <span id="nameDisplay" class="highlight">???</span></p>\n  <p>Current Score: <span id="scoreDisplay" class="score">0</span></p>\n  \n  <button id="addPointBtn" class="btn">Add 10 Points!</button>\n  <button id="resetBtn" class="btn btn-danger">Reset to 0</button>\n</div>\n\n<script>\n  // 1. CONST: The player's name won't change during the game!\n  const playerName = "NinjaCoder99";\n  document.getElementById('nameDisplay').innerText = playerName;\n\n  // 2. LET: The score WILL change often, so it must be 'let'!\n  let currentScore = 0;\n  const scoreElement = document.getElementById('scoreDisplay');\n\n  // Button to add points\n  document.getElementById('addPointBtn').addEventListener('click', function() {\n    // Reassigning a 'let' variable is safe and normal!\n    currentScore = currentScore + 10;\n    scoreElement.innerText = currentScore;\n  });\n\n  // Button to reset\n  document.getElementById('resetBtn').addEventListener('click', function() {\n    currentScore = 0;\n    scoreElement.innerText = currentScore;\n  });\n</script>`,
          css: `body { font-family: sans-serif; background: #ecf0f1; padding: 20px; }\n.board {\n  background: white;\n  padding: 30px;\n  border-radius: 12px;\n  max-width: 400px;\n  text-align: center;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.1);\n}\n.highlight { color: #8e44ad; font-weight: bold; font-size: 20px; }\n.score { color: #27ae60; font-size: 30px; font-weight: bold; display: block; margin: 10px 0; }\n\n.btn {\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-weight: bold;\n  cursor: pointer;\n  margin: 5px;\n}\n.btn-danger { background: #e74c3c; }`
        }
      ]
    },
    {
      id: "t15-3",
      title_en: "Data Types: Strings, Numbers, and Booleans",
      title_hi: "Data Types: स्ट्रिंग्स (Strings), नंबर्स (Numbers) और बूलियंस (Booleans)",
      content_en: `### The 3 Core Ingredients of Data

When you create a variable box, you must put something inside it. JavaScript handles different types of information differently. The three most fundamental data types are **Strings**, **Numbers**, and **Booleans**.

---

### 1. Strings (Text)
A string is just a line of text. To tell the JavaScript brain that you are writing a string (and not a piece of secret code), you **MUST** wrap the text in quotation marks (either single \`'\` or double \`"\`).

\`\`\`javascript
const greeting = "Hello World!"; // Double quotes
const jobTitle = 'Web Developer'; // Single quotes work exactly the same
const fakeNumber = "42"; // THIS IS A STRING (Text), NOT A NUMBER, because of quotes!
\`\`\`

---

### 2. Numbers (Math Ready!)
Numbers are written purely as digits, **without** any quotation marks. If you wrap a number in quotes, JS treats it as text, meaning you can't easily do math with it!

\`\`\`javascript
const myAge = 25;       // A whole number (Integer)
const price = 99.99;    // A decimal number (Float)
const total = myAge + 5; // JS can do math! Total becomes 30.
\`\`\`

---

### 3. Booleans (True or False)
A boolean can only have one of two possible values: **\`true\`** or **\`false\`**. 
They are the absolute foundation of logic in programming. They are like a light switch: On or Off. They are written without quotes.

\`\`\`javascript
const isGameOver = false; // The game is still running
const isUserLoggedIn = true; // The user has successfully logged in
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### डेटा के 3 मुख्य प्रकार (Data Types)

जब आप कोई वेरिएबल (मेमोरी बॉक्स) बनाते हैं, तो आपको उसके अंदर कुछ रखना होता है। JavaScript अलग-अलग तरह की जानकारी को अलग-अलग तरीके से हैंडल करता है। तीन सबसे बुनियादी डेटा टाइप हैं: **Strings (टेक्स्ट)**, **Numbers (गणित वाले नंबर)**, और **Booleans (सच या झूठ)**।

---

### 1. Strings (स्ट्रिंग्स - टेक्स्ट डेटा)
स्ट्रिंग का मतलब है सिंपल टेक्स्ट। JavaScript के दिमाग को यह बताने के लिए कि आप एक टेक्स्ट लिख रहे हैं (कोई प्रोग्रामिंग कोड नहीं), आपको टेक्स्ट को हमेशा कोटेशन मार्क्स (\`'\` या \`"\`) के अंदर बंद करना **अनिवार्य** है।

\`\`\`javascript
const greeting = "नमस्ते दुनिया!"; // डबल कोट्स
const jobTitle = 'वेब डेवलपर';    // सिंगल कोट्स भी बिल्कुल वैसे ही काम करते हैं
const fakeNumber = "42"; // 🚨 यह एक स्ट्रिंग (टेक्स्ट) है, नंबर नहीं! क्योंकि इस पर कोट्स लगे हैं!
\`\`\`

---

### 2. Numbers (नंबर्स - गणित के लिए तैयार!)
नंबर्स (संख्याओं) को शुद्ध रूप से अंकों के रूप में लिखा जाता है, **बिना किसी कोटेशन मार्क के**। यदि आप किसी नंबर को कोट्स के अंदर लपेट देते हैं, तो JS उसे टेक्स्ट मान लेगा, जिसका मतलब है कि आप उससे आसानी से गुणा-भाग नहीं कर पाएंगे!

\`\`\`javascript
const myAge = 25;       // एक पूरा नंबर (Integer)
const price = 99.99;    // दशमलव वाला नंबर (Float)
const total = myAge + 5; // JS गणित कर सकता है! Total की वैल्यू 30 हो जाएगी।
\`\`\`

---

### 3. Booleans (बूलियंस - सच या झूठ)
एक बूलियन की केवल दो ही वैल्यू हो सकती हैं: **\`true\` (सच)** या **\`false\` (झूठ)**।
ये प्रोग्रामिंग में लॉजिक (तर्क) की सबसे बड़ी नींव हैं। ये एक लाइट स्विच की तरह हैं: चालू या बंद (On/Off)। इन्हें बिना कोट्स के लिखा जाता है।

\`\`\`javascript
const isGameOver = false; // गेम अभी भी चल रहा है (खत्म होना झूठ है)
const isUserLoggedIn = true; // यूज़र सफलतापूर्वक लॉग इन हो चुका है (यह सच है)
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="console-box">\n  <h3>Data Types Playground</h3>\n  <button id="runBtn" class="btn">Process Data</button>\n  <div id="output" class="output"></div>\n</div>\n\n<script>\n  document.getElementById('runBtn').addEventListener('click', function() {\n    // 1. String\n    const playerName = "Alice"; \n    \n    // 2. Numbers\n    const level = 5;\n    const nextLevel = level + 1;\n\n    // 3. Boolean\n    const isVipMember = true;\n\n    // Building the output string to display!\n    let result = "Player: " + playerName + "<br>";\n    result += "Current Level: " + level + "<br>";\n    result += "Math result (Next Level): " + nextLevel + "<br>";\n    result += "Is VIP? " + isVipMember;\n\n    document.getElementById('output').innerHTML = result;\n  });\n</script>`,
          css: `body { font-family: monospace; background: #2d3436; color: white; padding: 20px; }\n.console-box {\n  background: #1e272e;\n  padding: 20px;\n  border-radius: 8px;\n  border: 1px solid #485460;\n}\n.btn {\n  background: #0be881;\n  color: #1e272e;\n  font-weight: bold;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.output {\n  margin-top: 20px;\n  padding: 15px;\n  background: black;\n  color: #00d8d6;\n  border-radius: 4px;\n  font-size: 16px;\n  line-height: 1.6;\n}`
        }
      ]
    },
    {
      id: "t15-4",
      title_en: "Functions: Reusable Blocks of Logic",
      title_hi: "फ़ंक्शंस (Functions): बार-बार काम आने वाले लॉजिक की मशीन",
      content_en: `### Automating Repetitive Tasks

Imagine you have a complex mathematical formula to calculate sales tax. Instead of typing that exact formula 50 times across your website, wouldn't it be better to build a "Tax Machine" once, and just throw numbers into it whenever you need an answer?

That is exactly what a **Function** is! A function is a block of reusable code designed to perform a specific task. It sits quietly in memory until you "call" (trigger) it.

---

### Step 1: Defining (Building) the Function

To build the machine, use the **\`function\`** keyword, give it a name, and put your logic inside curly braces \`{ }\`.

\`\`\`javascript
// Building a simple greeting machine
function sayHello() {
  alert("Hello there! Welcome to JavaScript!");
}
\`\`\`

---

### Step 2: Calling (Running) the Function

The function above will do **absolutely nothing** on its own. It is just a blueprint. To actually run the code inside, you must "Call" or "Invoke" it by writing its name followed by parentheses \`()\`.

\`\`\`javascript
sayHello(); // This triggers the function and shows the alert popup!
\`\`\`

---

### Functions with Arguments (Giving Inputs to the Machine)

The true power of functions is that they can accept inputs (called **arguments** or parameters), process them, and output a custom result!

\`\`\`javascript
// This machine accepts a 'name' input!
function greetUser(name) {
  alert("Welcome back, " + name + "!");
}

greetUser("John");   // Alerts: "Welcome back, John!"
greetUser("Sarah");  // Alerts: "Welcome back, Sarah!"
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### बार-बार होने वाले कामों को ऑटोमेट (Automate) करना

कल्पना करें कि आपके पास सेल्स टैक्स (Sales Tax) निकालने का एक जटिल गणितीय फॉर्मूला है। अपनी वेबसाइट पर 50 अलग-अलग जगह उस पूरे फॉर्मूले को टाइप करने के बजाय, क्या यह बेहतर नहीं होगा कि आप एक बार "टैक्स मशीन" बना लें, और जब भी जवाब चाहिए हो, बस उसमें नंबर डाल दें?

**फ़ंक्शन (Function)** बिल्कुल यही काम करता है! फ़ंक्शन बार-बार इस्तेमाल (Reusable) होने वाले कोड का एक ब्लॉक है जिसे कोई खास काम करने के लिए डिज़ाइन किया जाता है। यह मेमोरी में चुपचाप बैठा रहता है, जब तक कि आप उसे काम करने के लिए "कॉल (Call/बुलाते)" नहीं हैं।

---

### स्टेप 1: फ़ंक्शन को बनाना (Define)

मशीन बनाने के लिए, **\`function\`** कीवर्ड का उपयोग करें, उसे एक नाम दें, और अपने कोड (लॉजिक) को घुंघराले ब्रैकेट \`{ }\` (Curly braces) के अंदर रखें।

\`\`\`javascript
// एक सिंपल 'नमस्ते' बोलने वाली मशीन बनाना
function sayHello() {
  alert("नमस्ते! JavaScript में आपका स्वागत है!");
}
\`\`\`

---

### स्टेप 2: फ़ंक्शन को चलाना (Call / Invoke)

ऊपर दिया गया फ़ंक्शन अपने आप **कुछ भी नहीं करेगा**। वह सिर्फ एक ब्लूप्रिंट (नक्शा) है। उसके अंदर के कोड को असल में चलाने के लिए, आपको उसका नाम लिखकर उसके आगे गोल ब्रैकेट \`()\` लगाने होते हैं। इसे फ़ंक्शन को "Call" करना कहते हैं।

\`\`\`javascript
sayHello(); // यह कोड फ़ंक्शन को चालू कर देगा और स्क्रीन पर पॉपअप आ जाएगा!
\`\`\`

---

### आर्ग्यूमेंट्स वाले फ़ंक्शन (मशीन को इनपुट देना)

फ़ंक्शंस की असली ताकत यह है कि वे आपसे कुछ इनपुट ले सकते हैं (जिन्हें **arguments** या parameters कहा जाता है), उन्हें प्रोसेस कर सकते हैं, और आपको एक नया रिजल्ट (Result) दे सकते हैं!

\`\`\`javascript
// यह मशीन एक 'name' (नाम) इनपुट के रूप में लेती है!
function greetUser(name) {
  alert("वापसी पर स्वागत है, " + name + "!");
}

greetUser("राहुल");   // अलर्ट में आएगा: "वापसी पर स्वागत है, राहुल!"
greetUser("प्रिया");  // अलर्ट में आएगा: "वापसी पर स्वागत है, प्रिया!"
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="app-card">\n  <h2>Math Machine (Function Demo)</h2>\n  <p>Input a number below, and our JS Function will double it!</p>\n  \n  <input type="number" id="numInput" placeholder="Enter a number..." class="input-box">\n  <button id="calcBtn" class="btn">Double It!</button>\n  \n  <h1 id="resultBox" class="result">0</h1>\n</div>\n\n<script>\n  // 1. DEFINE THE FUNCTION (The Machine)\n  function doubleNumber(numberToDouble) {\n    // It takes an input, multiplies it by 2, and returns the new value!\n    return numberToDouble * 2;\n  }\n\n  // 2. TRIGGER IT WHEN BUTTON IS CLICKED\n  document.getElementById('calcBtn').addEventListener('click', function() {\n    // Get the value the user typed in the input box\n    const userValue = document.getElementById('numInput').value;\n    \n    // CALL THE FUNCTION, pass the user's value, and save the result\n    const finalAnswer = doubleNumber(userValue);\n    \n    // Show the result on the screen!\n    document.getElementById('resultBox').innerText = finalAnswer;\n  });\n</script>`,
          css: `body { font-family: sans-serif; background: #dfe6e9; padding: 20px; display: flex; justify-content: center; }\n.app-card {\n  background: white;\n  padding: 30px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 5px 15px rgba(0,0,0,0.1);\n  max-width: 350px;\n}\n.input-box {\n  padding: 10px;\n  font-size: 16px;\n  width: 80%;\n  margin-bottom: 15px;\n  border: 2px solid #b2bec3;\n  border-radius: 6px;\n}\n.btn {\n  background: #0984e3;\n  color: white;\n  font-weight: bold;\n  border: none;\n  padding: 10px 20px;\n  font-size: 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  width: 100%;\n}\n.result {\n  margin-top: 25px;\n  color: #d63031;\n  font-size: 40px;\n}`
        }
      ]
    }
  ]
};

export const chapter15Quiz = [
  {
    id: "q1",
    question_en: "If HTML forms the structure of a webpage and CSS forms the styling, what role does JavaScript play?",
    question_hi: "यदि HTML वेबपेज का ढांचा बनाता है और CSS सजावट करता है, तो JavaScript क्या भूमिका निभाता है?",
    options_en: [
      "It adds more structural tags to the HTML document.",
      "It acts as the brain and muscles, allowing the website to be interactive, handle logic, and respond to user actions.",
      "It compresses images so the website loads faster.",
      "It generates a permanent database for the server."
    ],
    options_hi: [
      "यह HTML डॉक्यूमेंट में और अधिक स्ट्रक्चरल (ढंचे वाले) टैग जोड़ता है।",
      "यह दिमाग और मांसपेशियों के रूप में काम करता है, जिससे वेबसाइट इंटरैक्टिव (interactive) बनती है, लॉजिक (logic) संभालती है, और यूज़र के क्लिक्स का जवाब देती है।",
      "यह इमेजेज को सिकोड़ देता है ताकि वेबसाइट तेज़ी से लोड हो।",
      "यह सर्वर के लिए एक स्थायी डेटाबेस बनाता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q2",
    question_en: "Where is the best-practice location to place a <script> tag containing JavaScript inside your HTML document?",
    question_hi: "अपने HTML डॉक्यूमेंट के अंदर JavaScript वाले <script> टैग को रखने की सबसे सही और बेहतरीन जगह (best-practice) कौन सी है?",
    options_en: [
      "At the very top, inside the <head> tag.",
      "In the exact middle of the <body> tag.",
      "At the very bottom of the <body> tag, just before the closing </body> tag.",
      "Completely outside of the <html> tags."
    ],
    options_hi: [
      "सबसे ऊपर, <head> टैग के अंदर।",
      "<body> टैग के बिल्कुल बीचों-बीच।",
      "<body> टैग के एकदम अंत में (bottom), क्लोजिंग </body> टैग से ठीक पहले।",
      "<html> टैग के पूरी तरह से बाहर।"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q3",
    question_en: "When creating a variable in modern JavaScript, which keyword should you use by default if the data should NEVER be reassigned or changed?",
    question_hi: "मॉडर्न JavaScript में वेरिएबल बनाते समय, यदि उस डेटा को बाद में कभी नहीं बदला जाना चाहिए (NEVER reassigned), तो आपको डिफ़ॉल्ट रूप से किस कीवर्ड का उपयोग करना चाहिए?",
    options_en: [
      "let",
      "var",
      "const",
      "static"
    ],
    options_hi: [
      "let",
      "var",
      "const",
      "static"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q4",
    question_en: "When should a developer choose to use the 'let' keyword instead of 'const'?",
    question_hi: "किसी डेवलपर को 'const' के बजाय 'let' कीवर्ड का उपयोग कब करना चाहिए?",
    options_en: [
      "When storing text instead of numbers.",
      "When they are 100% sure the value stored in the variable will need to be updated or reassigned later in the program (like a game score).",
      "When they want the variable to be available to other websites.",
      "They should never use 'let'; 'var' is the modern alternative."
    ],
    options_hi: [
      "नंबरों के बजाय टेक्स्ट को स्टोर करते समय।",
      "जब उन्हें 100% यकीन हो कि वेरिएबल में स्टोर की गई वैल्यू को बाद में बदलना या अपडेट करना पड़ेगा (जैसे गेम का स्कोर)।",
      "जब वे चाहते हों कि वेरिएबल दूसरी वेबसाइटों पर भी उपलब्ध हो।",
      "उन्हें 'let' का उपयोग कभी नहीं करना चाहिए; 'var' इसका आधुनिक विकल्प है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q5",
    question_en: "What is wrong with the following JavaScript code? const myAge = 25; myAge = 30;",
    question_hi: "इस JavaScript कोड में क्या गलती है? const myAge = 25; myAge = 30;",
    options_en: [
      "myAge is not wrapped in quotation marks.",
      "The semi-colons are placed incorrectly.",
      "You cannot reassign a new value (30) to a variable declared with 'const'. This will throw an error.",
      "You cannot use numbers in JavaScript; they must be text strings."
    ],
    options_hi: [
      "myAge कोटेशन मार्क्स के अंदर नहीं लिखा गया है।",
      "सेमीकोलन (;) गलत जगह पर लगाए गए हैं।",
      "आप 'const' के साथ बने वेरिएबल को नई वैल्यू (30) नहीं दे सकते (reassign नहीं कर सकते)। यह कोड एक एरर (Error) देगा।",
      "आप JavaScript में नंबरों का उपयोग नहीं कर सकते; वे टेक्स्ट स्ट्रिंग होने चाहिए।"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q6",
    question_en: "How does the JavaScript brain know that a piece of code is a String (Text) and not a variable name or a number?",
    question_hi: "JavaScript के दिमाग को कैसे पता चलता है कि कोड का कोई हिस्सा एक स्ट्रिंग (टेक्स्ट) है, न कि किसी वेरिएबल का नाम या नंबर?",
    options_en: [
      "It reads the font color.",
      "The text MUST be wrapped in single (') or double (\") quotation marks.",
      "It must be preceded by the word 'text'.",
      "All text in JavaScript is automatically converted to uppercase."
    ],
    options_hi: [
      "वह फ़ॉन्ट का रंग पढ़ता है।",
      "टेक्स्ट को हमेशा सिंगल (') या डबल (\") कोटेशन मार्क्स (Quotation marks) के अंदर लपेटा जाना चाहिए।",
      "इसके पहले 'text' शब्द लिखा होना चाहिए।",
      "JavaScript में सभी टेक्स्ट अपने आप बड़े अक्षरों (uppercase) में बदल जाते हैं।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q7",
    question_en: "Which data type only has two possible absolute values: true or false?",
    question_hi: "कौन सा डेटा टाइप ऐसा है जिसमें केवल दो ही संभावित वैल्यूज (values) होती हैं: true (सच) या false (झूठ)?",
    options_en: [
      "String",
      "Number",
      "Boolean",
      "Integer"
    ],
    options_hi: [
      "String",
      "Number",
      "Boolean",
      "Integer"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q8",
    question_en: "What is a Function in JavaScript?",
    question_hi: "JavaScript में फ़ंक्शन (Function) क्या होता है?",
    options_en: [
      "A bug that stops the website from working.",
      "A reusable block of logic/code designed to perform a specific task, which sits in memory until you call/trigger it.",
      "A CSS animation.",
      "A database that stores user passwords securely."
    ],
    options_hi: [
      "एक बग (bug) जो वेबसाइट को काम करने से रोकता है।",
      "लॉजिक/कोड का एक ऐसा ब्लॉक जिसे बार-बार उपयोग किया जा सकता है और किसी खास काम को करने के लिए बनाया जाता है, यह तब तक मेमोरी में रहता है जब तक आप इसे कॉल (Call) नहीं करते।",
      "एक प्रकार का CSS एनिमेशन।",
      "एक डेटाबेस जो यूज़र के पासवर्ड सुरक्षित रूप से स्टोर करता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q9",
    question_en: "After defining a function named 'calculateTax', what must you do to actually run the code inside it?",
    question_hi: "'calculateTax' नाम का एक फ़ंक्शन बनाने के बाद, उसके अंदर के कोड को असल में चलाने के लिए आपको क्या करना होगा?",
    options_en: [
      "You must 'Call' or 'Invoke' it by typing its name followed by parentheses: calculateTax();",
      "You must click on the function code with your mouse.",
      "You must write the word 'START calculateTax'.",
      "Functions run automatically instantly; you don't need to do anything."
    ],
    options_hi: [
      "आपको इसका नाम और उसके बाद गोल ब्रैकेट लिखकर इसे 'कॉल' (Call) करना होगा: calculateTax();",
      "आपको अपने माउस से फ़ंक्शन कोड पर क्लिक करना होगा।",
      "आपको 'START calculateTax' शब्द लिखना होगा।",
      "फ़ंक्शन अपने आप तुरंत चलते हैं; आपको कुछ करने की ज़रूरत नहीं है।"
    ],
    correctAnswerIndex: 0
  },
  {
    id: "q10",
    question_en: "What is the purpose of passing an 'argument' (or parameter) into a function? e.g., greetUser(\"John\");",
    question_hi: "किसी फ़ंक्शन में 'आर्ग्यूमेंट' (या पैरामीटर) पास करने (देने) का क्या उद्देश्य होता है? जैसे: greetUser(\"John\");",
    options_en: [
      "To delay the function from running.",
      "To give the function input data to process, allowing the same logic machine to output different customized results based on what is passed in.",
      "To stop the function completely.",
      "To convert a String into a Boolean."
    ],
    options_hi: [
      "फ़ंक्शन को चलने में देरी (delay) करने के लिए।",
      "फ़ंक्शन को प्रोसेस करने के लिए इनपुट डेटा देना, जिससे वही लॉजिक मशीन अलग-अलग इनपुट के आधार पर अलग-अलग कस्टमाइज़्ड रिजल्ट दे सके।",
      "फ़ंक्शन को पूरी तरह रोकने के लिए।",
      "किसी स्ट्रिंग को बूलियन में बदलने के लिए।"
    ],
    correctAnswerIndex: 1
  }
];

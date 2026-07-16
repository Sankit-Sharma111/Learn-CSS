export const chapter14 = {
  id: "ch14",
  title_en: "Chapter 14: CSS Variables, Best Practices & Clean Code",
  title_hi: "अध्याय 14: CSS Variables और बेहतरीन कोडिंग के नियम (Clean Code)",
  topics: [
    {
      id: "t14-1",
      title_en: "CSS Custom Properties (Variables) Explained",
      title_hi: "CSS Custom Properties (वेरिएबल्स) का परिचय और महत्व",
      content_en: `### The Problem with Hardcoded Values

Imagine building a large 50-page website. You use a specific brand color (\`#3498db\`, a beautiful blue) for buttons, links, borders, and headings. You type \`#3498db\` into your CSS file 300 different times.

Six months later, the client says: *"Actually, let's change our brand color to purple (\`#9b59b6\`)."*
Without CSS Variables, you would have to manually find and replace all 300 instances of that color across thousands of lines of code. It's a nightmare!

---

### The Solution: CSS Variables (Custom Properties)

**CSS Variables** allow you to store a value (like a color, a font size, or a padding amount) in ONE central location. Then, you reference that variable anywhere in your code. 

If you ever need to change the value, you update it in that **one central location**, and your entire website updates instantly!

---

### How to Create a CSS Variable

Variables are typically declared inside the **\`:root\`** pseudo-class. The \`:root\` represents the highest level of your HTML document (the \`<html>\` tag itself). Declaring variables here makes them "Global"—meaning every element on the page can access them.

1. **Syntax Rule**: A CSS variable name MUST start with two dashes (\`--\`).

\`\`\`css
/* 1. Declare the variables in the :root */
:root {
  --primary-color: #3498db;      /* A variable storing a color */
  --secondary-color: #e74c3c;
  --main-font-size: 16px;        /* A variable storing a size */
  --standard-padding: 20px 40px; /* A variable storing spacing */
}
\`\`\`

---

### How to Use a CSS Variable

To actually use the variable in your styling, you must wrap the variable name inside the **\`var()\`** function!

\`\`\`css
/* 2. Use the variables using the var() function! */
.brand-button {
  background-color: var(--primary-color);
  padding: var(--standard-padding);
  font-size: var(--main-font-size);
}

.brand-link {
  color: var(--primary-color);
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### हार्डकोडेड (Hardcoded) वैल्यूज की सबसे बड़ी समस्या

कल्पना करें कि आप 50 पेज की एक बड़ी वेबसाइट बना रहे हैं। आप बटनों, लिंक्स, बॉर्डर और हेडिंग्स के लिए अपनी ब्रांड का एक खास नीला रंग (\`#3498db\`) इस्तेमाल करते हैं। आप अपनी CSS फाइल में 300 अलग-अलग जगह \`#3498db\` टाइप करते हैं।

छह महीने बाद, आपका क्लाइंट कहता है: *"यार, हमारे ब्रांड का रंग नीले से बदलकर पर्पल (\`#9b59b6\`) कर दो।"*
अगर आपके पास CSS Variables नहीं हैं, तो आपको हज़ारों लाइनों के कोड में मैन्युअली जाकर उन सभी 300 जगहों पर रंग बदलना होगा। यह किसी बुरे सपने (Nightmare) से कम नहीं है!

---

### समाधान: CSS Variables (Custom Properties)

**CSS Variables** आपको किसी भी वैल्यू (जैसे रंग का नाम, फ़ॉन्ट साइज़, या पैडिंग) को सिर्फ एक केंद्रीय (central) जगह पर स्टोर (Save) करने की सुविधा देते हैं। इसके बाद, आप उस वेरिएबल का नाम अपने पूरे कोड में कहीं भी इस्तेमाल कर सकते हैं।

यदि आपको कभी भी उस रंग या साइज़ को बदलना हो, तो आप उसे सिर्फ **उस एक जगह** पर अपडेट करते हैं, और आपकी पूरी वेबसाइट का डिज़ाइन एक सेकंड में अपने आप अपडेट हो जाता है!

---

### CSS Variable कैसे बनाएं?

वेरिएबल्स को आमतौर पर **\`:root\`** स्यूडो-क्लास (pseudo-class) के अंदर बनाया जाता है। \`:root\` का मतलब है आपके HTML डॉक्यूमेंट का सबसे ऊपरी हिस्सा (खुद \`<html>\` टैग)। यहाँ वेरिएबल बनाने से वे "ग्लोबल (Global)" हो जाते हैं—यानी पेज का कोई भी एलिमेंट उनका इस्तेमाल कर सकता है।

1. **सिंटैक्स का कड़ा नियम**: CSS वेरिएबल का नाम हमेशा दो डैश (\`--\`) से शुरू होना चाहिए।

\`\`\`css
/* 1. :root के अंदर वेरिएबल्स बनाएं */
:root {
  --primary-color: #3498db;      /* रंग स्टोर करने वाला वेरिएबल */
  --secondary-color: #e74c3c;
  --main-font-size: 16px;        /* साइज़ स्टोर करने वाला वेरिएबल */
  --standard-padding: 20px 40px; /* स्पेसिंग स्टोर करने वाला वेरिएबल */
}
\`\`\`

---

### CSS Variable का उपयोग कैसे करें?

अपने स्टाइल्स में वेरिएबल का उपयोग करने के लिए, आपको वेरिएबल के नाम को **\`var()\`** फंक्शन के अंदर लिखना होता है!

\`\`\`css
/* 2. var() फंक्शन का उपयोग करके वेरिएबल्स को लागू करें! */
.brand-button {
  background-color: var(--primary-color); /* बैकग्राउंड नीला हो जाएगा */
  padding: var(--standard-padding);
  font-size: var(--main-font-size);
}

.brand-link {
  color: var(--primary-color); /* टेक्स्ट का रंग नीला हो जाएगा */
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="theme-wrapper">\n  <h2 class="title">Brand Guidelines</h2>\n  <p>Every color below is powered by a SINGLE variable inside the CSS :root!</p>\n  \n  <button class="btn btn-primary">Primary Action</button>\n  <button class="btn btn-secondary">Secondary Action</button>\n  \n  <div class="card">\n    <h3>Variable Powered Card</h3>\n    <p>Even the borders and background shades use variables.</p>\n  </div>\n</div>`,
          css: `/* 1. DECLARE GLOBAL VARIABLES */\n:root {\n  --brand-primary: #8e44ad;   /* Purple */\n  --brand-secondary: #f39c12; /* Orange */\n  --bg-light: #f1f2f6;\n  --text-dark: #2c3e50;\n  \n  --radius-sm: 4px;\n  --radius-lg: 12px;\n  --spacing-main: 20px;\n}\n\nbody {\n  font-family: sans-serif;\n  background-color: var(--bg-light);\n  color: var(--text-dark);\n  padding: var(--spacing-main);\n}\n\n.title {\n  /* Using the primary color! */\n  color: var(--brand-primary);\n  border-bottom: 3px solid var(--brand-primary);\n  padding-bottom: 10px;\n}\n\n.btn {\n  padding: 12px 24px;\n  border: none;\n  font-weight: bold;\n  color: white;\n  margin-right: 10px;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n}\n\n/* 2. USE THE VARIABLES */\n.btn-primary {\n  background-color: var(--brand-primary);\n}\n.btn-secondary {\n  background-color: var(--brand-secondary);\n}\n\n.card {\n  background: white;\n  padding: var(--spacing-main);\n  margin-top: var(--spacing-main);\n  border-radius: var(--radius-lg);\n  border-left: 6px solid var(--brand-secondary);\n  box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n}`
        }
      ]
    },
    {
      id: "t14-2",
      title_en: "Advanced Variables: Theming & Fallbacks",
      title_hi: "एडवांस वेरिएबल्स: डार्क मोड थीमिंग (Theming) और Fallbacks",
      content_en: `### Building a Dark Mode Toggle with Variables

Because CSS Variables are "live" properties inside the browser, you can dynamically change their values using pseudo-classes (like \`:hover\`) or by adding a specific class to the \`<body>\` tag. 

This is exactly how modern "Dark Mode" toggles are built!

\`\`\`css
/* 1. Light Mode (Default Variables) */
:root {
  --page-bg: #ffffff;
  --text-color: #333333;
}

/* 2. Dark Mode (Override the variables if the body has a 'dark-theme' class!) */
body.dark-theme {
  --page-bg: #1a1a1a;
  --text-color: #f1f1f1;
}

/* 3. The actual CSS rules never have to change! */
body {
  background-color: var(--page-bg);
  color: var(--text-color);
  transition: all 0.3s ease; /* Smooth transition between themes! */
}
\`\`\`
By simply using JavaScript to add or remove the \`dark-theme\` class on the \`<body>\` tag, the entire website's color scheme swaps instantly!

---

### Variable Fallbacks (The Backup Plan)

What happens if you accidentally try to use a variable that doesn't exist, or you misspelled its name? The CSS property will break.

To prevent this, the \`var()\` function allows you to provide a **Fallback Value**. If the variable is missing, the browser will use the fallback value instead.

\`\`\`css
/* Syntax: var(--variable-name, fallback-value) */
.alert-box {
  /* If --error-color isn't defined in :root, use red instead! */
  background-color: var(--error-color, red); 
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### वेरिएबल्स से डार्क मोड (Dark Mode) बनाना

चूंकि CSS Variables ब्राउज़र के अंदर "लाइव (live)" काम करते हैं, इसलिए आप \`:hover\` जैसे स्यूडो-क्लास या \`<body>\` टैग पर कोई नई क्लास (Class) जोड़कर उनकी वैल्यूज को चलते-फिरते बदल सकते हैं।

आजकल की मॉडर्न वेबसाइटों पर जो "डार्क मोड (Dark Mode)" टॉगल बटन होता है, वह बिल्कुल इसी तकनीक से काम करता है!

\`\`\`css
/* 1. लाइट मोड (डिफ़ॉल्ट वेरिएबल्स) */
:root {
  --page-bg: #ffffff;
  --text-color: #333333;
}

/* 2. डार्क मोड (अगर बॉडी पर 'dark-theme' क्लास लगी हो, तो वेरिएबल्स की वैल्यू बदल दो!) */
body.dark-theme {
  --page-bg: #1a1a1a;
  --text-color: #f1f1f1;
}

/* 3. असली CSS नियमों को कभी बदलने की ज़रूरत नहीं पड़ेगी! */
body {
  background-color: var(--page-bg);
  color: var(--text-color);
  transition: all 0.3s ease; /* थीम बदलने पर मखमली (smooth) एनिमेशन! */
}
\`\`\`
अब आपको बस JavaScript के जरिए \`<body>\` टैग पर \`dark-theme\` क्लास को जोड़ना या हटाना है, और पूरी वेबसाइट के रंग अपने आप बदल जाएंगे!

---

### वेरिएबल का बैकअप प्लान: Fallbacks (फालबैक)

क्या होगा यदि आप गलती से किसी ऐसे वेरिएबल का उपयोग करने की कोशिश करें जो \`:root\` में मौजूद ही नहीं है, या आपने उसकी स्पेलिंग गलत लिख दी है? वह CSS नियम काम करना बंद कर देगा।

इससे बचने के लिए, \`var()\` फंक्शन आपको एक **Fallback Value (बैकअप वैल्यू)** देने की सुविधा देता है। यदि ब्राउज़र को वेरिएबल नहीं मिलता है, तो वह बैकअप वैल्यू का उपयोग कर लेगा।

\`\`\`css
/* सिंटैक्स: var(--variable-name, fallback-value) */
.alert-box {
  /* अगर --error-color नाम का कोई वेरिएबल नहीं है, तो लाल (red) रंग का इस्तेमाल करो! */
  background-color: var(--error-color, red); 
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="app-container">\n  <h1>Live Theme Switching</h1>\n  <p>Hover over the button below. When the parent gets hovered, it overrides the CSS variables, instantly swapping the entire theme!</p>\n  \n  <div class="theme-switcher-box">\n    HOVER OVER ME TO ACTIVATE DARK MODE!\n    \n    <div class="inner-card">\n      <h3>I am a child card</h3>\n      <p>My colors change automatically because my parent changed the root variables!</p>\n    </div>\n  </div>\n  \n  <div class="fallback-demo">\n    This box uses a FALLBACK color because its variable is intentionally misspelled in the code!\n  </div>\n</div>`,
          css: `/* 1. Define Variables */\n:root {\n  --bg-color: #ffffff;\n  --text-color: #2d3436;\n  --card-bg: #dfe6e9;\n}\n\nbody { font-family: sans-serif; padding: 20px; }\n\n.theme-switcher-box {\n  /* Apply the variables! */\n  background-color: var(--bg-color);\n  color: var(--text-color);\n  padding: 30px;\n  border: 2px solid #b2bec3;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: bold;\n  transition: all 0.4s ease;\n  margin-bottom: 20px;\n}\n\n.inner-card {\n  background-color: var(--card-bg);\n  padding: 15px;\n  margin-top: 20px;\n  border-radius: 6px;\n  transition: all 0.4s ease;\n}\n\n/* 2. OVERRIDE VARIABLES ON HOVER (Simulating Dark Mode Toggle) */\n.theme-switcher-box:hover {\n  --bg-color: #2d3436;\n  --text-color: #00cec9;\n  --card-bg: #636e72;\n}\n\n/* 3. Fallback Demo */\n.fallback-demo {\n  padding: 15px;\n  color: white;\n  font-weight: bold;\n  border-radius: 6px;\n  /* --wrong-color does not exist, so it falls back to Purple (#8e44ad)! */\n  background-color: var(--wrong-color, #8e44ad); \n}`
        }
      ]
    },
    {
      id: "t14-3",
      title_en: "CSS Best Practices: The BEM Naming Convention",
      title_hi: "CSS के बेहतरीन नियम: BEM Naming Convention (प्रोफेशनल तरीका)",
      content_en: `### The Problem with Messy CSS Classes

As a beginner, you probably name your HTML classes things like \`.box\`, \`.title\`, or \`.btn\`. This is fine for small projects.

But in massive enterprise projects with 10 developers and 50,000 lines of CSS, generic names become a disaster! A developer might write \`.title { font-size: 40px; }\` for the homepage hero section, completely destroying the \`.title\` elements inside the sidebar cards!

---

### The Solution: BEM (Block, Element, Modifier)

**BEM** is the most popular CSS naming methodology in the professional tech industry. It establishes a strict, highly descriptive naming convention to ensure no CSS styles ever accidentally collide.

A BEM class name consists of 3 parts:
1. **Block**: The standalone parent component (e.g., \`card\`, \`navbar\`).
2. **Element**: A child part inside that block, separated by two underscores \`__\` (e.g., \`card__image\`, \`card__title\`).
3. **Modifier**: A variation of the block or element, separated by two dashes \`--\` (e.g., \`card--featured\`, \`card__btn--red\`).

---

### Writing BEM Code

Instead of nesting CSS selectors (which slows down browser rendering), BEM flattens your CSS into highly specific, single-class selectors.

#### HTML Structure:
\`\`\`html
<!-- The Block (The Component itself) -->
<article class="product-card product-card--sale">
  <!-- The Elements (Children inside the block) -->
  <img class="product-card__image" src="..." />
  <h2 class="product-card__title">Laptop</h2>
  
  <!-- An element with a modifier (variation) -->
  <button class="product-card__btn product-card__btn--primary">Buy</button>
</article>
\`\`\`

#### CSS Structure:
\`\`\`css
/* Clean, specific, and conflict-free CSS! */
.product-card { background: white; border-radius: 8px; }
.product-card--sale { border: 2px solid red; } /* Modifier variation */

.product-card__image { width: 100%; }
.product-card__title { font-size: 20px; }

.product-card__btn { padding: 10px; }
.product-card__btn--primary { background: blue; color: white; }
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### बेकार और गंदे क्लास नामों (Class Names) की समस्या

एक शुरुआती डेवलपर के रूप में, आप शायद अपनी HTML क्लास का नाम \`.box\`, \`.title\`, या \`.btn\` रखते होंगे। छोटे प्रोजेक्ट्स के लिए यह ठीक है।

लेकिन 10 डेवलपर्स और 50,000 CSS लाइनों वाले किसी विशाल एंटरप्राइज़ प्रोजेक्ट (Enterprise Project) में, ऐसे सामान्य नाम एक बड़ी तबाही ला सकते हैं! एक डेवलपर होमपेज के बड़े बैनर के लिए \`.title { font-size: 40px; }\` लिख सकता है, और अनजाने में वह साइडबार कार्ड के अंदर मौजूद छोटी \`.title\` को भी विशाल और बदसूरत बना सकता है!

---

### समाधान: BEM (Block, Element, Modifier) पद्धति

**BEM** दुनिया की टेक इंडस्ट्री (Tech Industry) में सबसे ज़्यादा इस्तेमाल होने वाली CSS नामकरण (naming) पद्धति है। यह नाम रखने का एक ऐसा सख्त नियम बनाती है जिससे कभी भी दो CSS स्टाइल्स आपस में नहीं टकराते (No collisions)।

एक BEM क्लास के नाम के 3 हिस्से होते हैं:
1. **Block (ब्लॉक)**: मुख्य पैरेंट कंपोनेंट (जैसे \`card\`, \`navbar\`)।
2. **Element (एलिमेंट)**: उस ब्लॉक के अंदर का कोई बच्चा (child) हिस्सा। इसे दो अंडरस्कोर \`__\` लगाकर जोड़ा जाता है (जैसे \`card__image\`, \`card__title\`)।
3. **Modifier (मॉडिफायर)**: ब्लॉक या एलिमेंट का कोई बदला हुआ रूप (Variation/Theme)। इसे दो डैश \`--\` लगाकर जोड़ा जाता है (जैसे \`card--featured\`, \`card__btn--red\`)।

---

### BEM कोड लिखना सीखें

CSS सिलेक्टर्स को एक के अंदर एक (nesting) लिखने के बजाय (जिससे ब्राउज़र धीमा होता है), BEM आपके CSS को सिंगल-क्लास सिलेक्टर्स में चपटा (flatten) कर देता है।

#### HTML का ढांचा:
\`\`\`html
<!-- Block (मुख्य कंपोनेंट) + Modifier (सेल वाला लाल कार्ड) -->
<article class="product-card product-card--sale">
  
  <!-- Elements (ब्लॉक के अंदर के बच्चे) -->
  <img class="product-card__image" src="..." />
  <h2 class="product-card__title">Laptop</h2>
  
  <!-- एक एलिमेंट जिस पर Modifier (primary रंग) लगा है -->
  <button class="product-card__btn product-card__btn--primary">Buy</button>
</article>
\`\`\`

#### CSS का ढांचा:
\`\`\`css
/* एकदम साफ, सुरक्षित और कॉन्फ्लिक्ट-फ्री CSS! */
.product-card { background: white; border-radius: 8px; }
.product-card--sale { border: 2px solid red; } /* मॉडिफायर थीम */

.product-card__image { width: 100%; }
.product-card__title { font-size: 20px; }

.product-card__btn { padding: 10px; }
.product-card__btn--primary { background: blue; color: white; }
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="container">\n  <h3>BEM Naming Convention in Action!</h3>\n  \n  <!-- Block 1: Standard Profile Card -->\n  <div class="profile-card">\n    <img class="profile-card__avatar" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar">\n    <div class="profile-card__info">\n      <h4 class="profile-card__name">Standard User</h4>\n      <button class="profile-card__btn">Message</button>\n    </div>\n  </div>\n\n  <!-- Block 2: Profile Card with a Modifier (--vip) -->\n  <div class="profile-card profile-card--vip">\n    <img class="profile-card__avatar" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="Avatar">\n    <div class="profile-card__info">\n      <h4 class="profile-card__name">VIP Premium User</h4>\n      <!-- Element with Modifier (--gold) -->\n      <button class="profile-card__btn profile-card__btn--gold">Send Gift</button>\n    </div>\n  </div>\n</div>`,
          css: `body { font-family: sans-serif; background: #ecf0f1; padding: 20px; }\n.container { display: flex; flex-direction: column; gap: 20px; max-width: 400px; }\n\n/* ==========================================\n   BEM BLOCK: .profile-card\n========================================== */\n.profile-card {\n  display: flex;\n  align-items: center;\n  background: white;\n  padding: 15px;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n}\n\n/* BLOCK MODIFIER: .profile-card--vip (Changes the outer border/bg) */\n.profile-card--vip {\n  border: 2px solid #f1c40f;\n  background: #fffdf0;\n}\n\n/* ==========================================\n   BEM ELEMENTS (Children inside the block)\n========================================== */\n.profile-card__avatar {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #e0e0e0;\n  margin-right: 15px;\n}\n\n.profile-card__name {\n  margin: 0 0 8px 0;\n  color: #2c3e50;\n}\n\n.profile-card__btn {\n  padding: 8px 16px;\n  background: #3498db;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n/* ELEMENT MODIFIER: .profile-card__btn--gold (Changes specific button color) */\n.profile-card__btn--gold {\n  background: #f1c40f;\n  color: #2d3436;\n  font-weight: bold;\n}`
        }
      ]
    }
  ]
};

export const chapter14Quiz = [
  {
    id: "q1",
    question_en: "What is the primary advantage of using CSS Variables (Custom Properties) for things like brand colors and font sizes?",
    question_hi: "ब्रांड के रंगों और फ़ॉन्ट साइज़ जैसी चीजों के लिए CSS Variables (Custom Properties) का उपयोग करने का सबसे बड़ा और मुख्य फायदा क्या है?",
    options_en: [
      "They allow you to write CSS code in JavaScript instead.",
      "They store values in one central location, allowing you to update a value once and have it instantly apply across the entire massive website.",
      "They compress the CSS file making it download 5x faster.",
      "They automatically generate dark mode without writing any extra code."
    ],
    options_hi: [
      "वे आपको JavaScript में CSS कोड लिखने की अनुमति देते हैं।",
      "वे वैल्यूज को एक केंद्रीय जगह पर स्टोर करते हैं, जिससे आप एक बार वैल्यू अपडेट करते हैं और वह तुरंत पूरी विशाल वेबसाइट पर लागू हो जाती है।",
      "वे CSS फ़ाइल को सिकोड़ (compress) देते हैं जिससे वह 5 गुना तेज़ी से डाउनलोड होती है।",
      "वे बिना कोई अतिरिक्त कोड लिखे अपने आप डार्क मोड बना देते हैं।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q2",
    question_en: "What is the mandatory syntax rule for naming a CSS variable?",
    question_hi: "CSS वेरिएबल का नाम रखने के लिए कौन सा सिंटैक्स नियम पूरी तरह अनिवार्य (mandatory) है?",
    options_en: [
      "It must start with a dollar sign ($)",
      "It must start with an at symbol (@)",
      "It must start with two dashes (--)",
      "It must start with the word 'var-'"
    ],
    options_hi: [
      "यह डॉलर के निशान ($) से शुरू होना चाहिए।",
      "यह @ के निशान (at symbol) से शुरू होना चाहिए।",
      "यह दो डैश (--) से शुरू होना चाहिए।",
      "यह 'var-' शब्द से शुरू होना चाहिए।"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q3",
    question_en: "In which pseudo-class are global CSS variables most commonly declared so that every HTML element on the page can access them?",
    question_hi: "ग्लोबल CSS वेरिएबल्स आमतौर पर किस स्यूडो-क्लास (pseudo-class) में घोषित किए जाते हैं ताकि पेज का हर HTML एलिमेंट उनका उपयोग कर सके?",
    options_en: [
      ":global",
      ":body",
      ":root",
      ":all"
    ],
    options_hi: [
      ":global",
      ":body",
      ":root",
      ":all"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q4",
    question_en: "How do you correctly APPLY a CSS variable to a property like background-color?",
    question_hi: "background-color जैसी प्रॉपर्टी पर CSS वेरिएबल को सही तरीके से लागू (apply) कैसे किया जाता है?",
    options_en: [
      "background-color: --my-color;",
      "background-color: var(--my-color);",
      "background-color: get(--my-color);",
      "background-color: $(--my-color);"
    ],
    options_hi: [
      "background-color: --my-color;",
      "background-color: var(--my-color);",
      "background-color: get(--my-color);",
      "background-color: $(--my-color);"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q5",
    question_en: "What does the second argument in the function 'var(--main-bg, #ffffff)' do?",
    question_hi: "'var(--main-bg, #ffffff)' फंक्शन में दूसरा आर्ग्यूमेंट (#ffffff) क्या काम करता है?",
    options_en: [
      "It creates a gradient mixing the variable with white.",
      "It acts as a fallback/backup value; if '--main-bg' is missing or invalid, the browser will use '#ffffff' instead.",
      "It assigns the color white to the variable permanently.",
      "It changes the text color to white if the background fails."
    ],
    options_hi: [
      "यह वेरिएबल और सफेद रंग को मिलाकर एक ग्रेडिएंट (gradient) बनाता है।",
      "यह फालबैक/बैकअप वैल्यू के रूप में काम करता है; यदि '--main-bg' मौजूद नहीं है या अमान्य है, तो ब्राउज़र इसके बजाय '#ffffff' का उपयोग करेगा।",
      "यह वेरिएबल को स्थायी रूप से सफेद रंग सौंप देता है।",
      "बैकग्राउंड फेल होने पर यह टेक्स्ट का रंग सफेद कर देता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q6",
    question_en: "What problem does the BEM (Block, Element, Modifier) naming convention solve in large CSS projects?",
    question_hi: "बड़े CSS प्रोजेक्ट्स में BEM (Block, Element, Modifier) नामकरण पद्धति किस मुख्य समस्या को हल करती है?",
    options_en: [
      "It makes CSS files download faster by shortening class names.",
      "It prevents messy, colliding CSS rules by establishing strict, highly specific, and conflict-free class names.",
      "It completely replaces the need for CSS Flexbox and Grid.",
      "It automatically converts CSS code into JavaScript logic."
    ],
    options_hi: [
      "यह क्लास नामों को छोटा करके CSS फ़ाइलों को तेज़ी से डाउनलोड करवाती है।",
      "यह सख्त, बेहद विशिष्ट और सुरक्षित (conflict-free) क्लास नाम बनाकर गंदे और आपस में टकराने (colliding) वाले CSS नियमों को रोकती है।",
      "यह CSS Flexbox और Grid की आवश्यकता को पूरी तरह खत्म कर देती है।",
      "यह अपने आप CSS कोड को JavaScript लॉजिक में बदल देती है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q7",
    question_en: "In the BEM methodology, what does the double underscore (__) indicate?",
    question_hi: "BEM पद्धति में, डबल अंडरस्कोर (__) क्या दर्शाता है?",
    options_en: [
      "It indicates a Modifier (a variation or theme of a block).",
      "It indicates an Element (a specific child piece inside a parent block).",
      "It indicates a pseudo-class like :hover.",
      "It indicates a global CSS variable."
    ],
    options_hi: [
      "यह एक Modifier (किसी ब्लॉक का अलग रूप या थीम) दर्शाता है।",
      "यह एक Element (पैरेंट ब्लॉक के अंदर का एक खास बच्चा/हिस्सा) दर्शाता है।",
      "यह :hover जैसे स्यूडो-क्लास को दर्शाता है।",
      "यह एक ग्लोबल CSS वेरिएबल को दर्शाता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q8",
    question_en: "In the BEM class name 'navbar__link--active', what role does '--active' play?",
    question_hi: "BEM क्लास नाम 'navbar__link--active' में, '--active' क्या भूमिका निभाता है?",
    options_en: [
      "It is the main Block component.",
      "It is a child Element.",
      "It is a Modifier indicating a specific variation or state (like a currently selected link).",
      "It is a JavaScript function."
    ],
    options_hi: [
      "यह मुख्य Block कंपोनेंट है।",
      "यह एक बच्चा (child) Element है।",
      "यह एक Modifier है जो किसी विशिष्ट रूप या अवस्था (जैसे वर्तमान में चुना गया सक्रिय लिंक) को दर्शाता है।",
      "यह एक JavaScript फंक्शन है।"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q9",
    question_en: "Why is nesting heavy CSS selectors (like '.header .nav ul li a') considered bad practice compared to flattened BEM classes (like '.nav__link')?",
    question_hi: "चपटे (flattened) BEM क्लासेस (जैसे '.nav__link') की तुलना में भारी और नेस्टेड CSS सिलेक्टर्स (जैसे '.header .nav ul li a') का उपयोग करना खराब नियम क्यों माना जाता है?",
    options_en: [
      "Deeply nested selectors are harder to override, prone to bugs, and slow down browser rendering performance.",
      "Nested selectors are impossible to write in modern code editors.",
      "BEM classes automatically compress image sizes.",
      "There is no difference; nesting is actually preferred by professionals."
    ],
    options_hi: [
      "गहरे नेस्टेड (nested) सिलेक्टर्स को ओवरराइड (बदलना) मुश्किल होता है, उनमें बग (bugs) आने का खतरा होता है, और वे ब्राउज़र के रेंडरिंग परफॉर्मेंस को धीमा कर देते हैं।",
      "आधुनिक कोड एडिटर्स में नेस्टेड सिलेक्टर्स लिखना असंभव है।",
      "BEM क्लासेस अपने आप इमेज साइज़ को सिकोड़ देती हैं।",
      "कोई अंतर नहीं है; वास्तव में प्रोफेशनल लोग नेस्टिंग को ही पसंद करते हैं।"
    ],
    correctAnswerIndex: 0
  },
  {
    id: "q10",
    question_en: "Can CSS Variables be dynamically updated at runtime (e.g., when a user clicks a button to trigger Dark Mode)?",
    question_hi: "क्या CSS Variables को रनटाइम (runtime) पर चलते-फिरते अपडेट किया जा सकता है (जैसे, जब कोई यूज़र डार्क मोड चालू करने के लिए बटन पर क्लिक करता है)?",
    options_en: [
      "No, CSS variables are permanently compiled when the page loads and can never change.",
      "Yes! Because they are 'live' in the browser, swapping a class on the body can override variables and instantly re-theme the entire app.",
      "Only if you refresh the browser page entirely.",
      "Yes, but only in Google Chrome."
    ],
    options_hi: [
      "नहीं, पेज लोड होने पर CSS वेरिएबल्स स्थायी रूप से लॉक हो जाते हैं और कभी नहीं बदल सकते।",
      "हाँ! चूँकि वे ब्राउज़र में 'लाइव' होते हैं, इसलिए body पर क्लास बदलने से वेरिएबल्स ओवरराइड हो जाते हैं और पूरी ऐप की थीम तुरंत (instantly) बदल जाती है।",
      "केवल तभी जब आप ब्राउज़र पेज को पूरी तरह से रिफ्रेश करें।",
      "हाँ, लेकिन केवल Google Chrome ब्राउज़र में।"
    ],
    correctAnswerIndex: 1
  }
];

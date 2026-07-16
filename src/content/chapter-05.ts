export const chapter05 = {
  id: "ch5",
  title_en: "Chapter 5: CSS Units & Math Functions",
  title_hi: "अध्याय 5: CSS इकाइयाँ (Units) और गणितीय फ़ंक्शंस",
  topics: [
    {
      id: "t5-1",
      title_en: "Absolute vs. Relative Units (px, em, rem)",
      title_hi: "निरपेक्ष (Absolute) बनाम सापेक्ष (Relative) इकाइयाँ (px, em, rem)",
      content_en: `### Sizing Things Up in CSS

Whenever you set a \`width\`, \`height\`, \`font-size\`, or \`padding\`, you need to give the browser a unit of measurement. CSS units are broadly divided into two categories: **Absolute** and **Relative**.

---

### 1. Absolute Units
Absolute units are fixed and do not change based on screen size or other elements.
* **\`px\` (Pixels):** The most common absolute unit. 1px corresponds to a single dot on a computer screen. It is great for small details (like a \`1px solid black\` border) but bad for responsive design because a 500px box might look fine on a laptop but will overflow on a small mobile phone.

### 2. Relative Units
Relative units scale dynamically based on something else (like the parent element, the root element, or the screen size).

* **\`%\` (Percentage):** Relative to the parent container. If a parent \`<div>\` is 400px wide, a child with \`width: 50%\` will be 200px wide.
* **\`em\`:** Relative to the font-size of its **direct parent**. If the parent's font-size is 16px, \`2em\` equals 32px. *Warning: \`em\` units can cascade and multiply unexpectedly if nested deeply!*
* **\`rem\` (Root em):** **The Modern Standard!** It is relative only to the **root \`<html>\` element's** font size (which is 16px by default in all browsers). 
    * \`1rem\` = 16px
    * \`2rem\` = 32px
    * \`0.5rem\` = 8px
    * *Why use rem?* It ensures consistent sizing across your entire app and respects the user's browser accessibility settings if they choose to increase their default text size!

[[SANDBOX_0]]`,
      content_hi: `### CSS में आकार (Sizing) तय करना

जब भी आप किसी एलिमेंट की \`width\` (चौड़ाई), \`height\` (ऊँचाई), \`font-size\` या \`padding\` सेट करते हैं, तो आपको ब्राउज़र को माप की एक इकाई (unit) बतानी होती है। CSS इकाइयों को मुख्य रूप से दो श्रेणियों में बांटा गया है: **Absolute (निरपेक्ष)** और **Relative (सापेक्ष)**।

---

### 1. निरपेक्ष इकाइयाँ (Absolute Units)
ये इकाइयाँ निश्चित होती हैं और स्क्रीन के आकार या अन्य एलिमेंट के आधार पर नहीं बदलती हैं।
* **\`px\` (Pixels):** यह सबसे आम इकाई है। 1px कंप्यूटर स्क्रीन पर एक बिंदु के बराबर होता है। यह छोटी चीज़ों (जैसे \`1px solid black\` बॉर्डर) के लिए तो बहुत अच्छा है, लेकिन रिस्पॉन्सिव डिज़ाइन के लिए खराब है क्योंकि एक 500px का बॉक्स लैपटॉप पर ठीक लग सकता है लेकिन छोटे मोबाइल फोन पर स्क्रीन से बाहर निकल जाएगा।

### 2. सापेक्ष इकाइयाँ (Relative Units)
ये इकाइयाँ किसी अन्य चीज़ (जैसे पैरेंट एलिमेंट, रूट एलिमेंट, या स्क्रीन के आकार) के आधार पर अपने आप कम-ज्यादा (Scale) होती हैं।

* **\`%\` (Percentage / प्रतिशत):** यह अपने पैरेंट (Parent) कंटेनर के सापेक्ष होता है। यदि पैरेंट \`<div>\` की चौड़ाई 400px है, तो \`width: 50%\` वाले चाइल्ड की चौड़ाई 200px होगी।
* **\`em\`:** यह अपने **सीधे पैरेंट** के फ़ॉन्ट-साइज़ के सापेक्ष होता है। यदि पैरेंट का फ़ॉन्ट-साइज़ 16px है, तो \`2em\` का अर्थ 32px होगा। *चेतावनी: यदि एलिमेंट एक के अंदर एक (nested) हैं, तो \`em\` इकाइयाँ आपस में गुणा होकर अनपेक्षित परिणाम दे सकती हैं!*
* **\`rem\` (Root em):** **आधुनिक स्टैंडर्ड!** यह केवल **रूट \`<html>\` एलिमेंट** के फ़ॉन्ट-साइज़ (जो सभी ब्राउज़रों में डिफ़ॉल्ट रूप से 16px होता है) के सापेक्ष होता है।
    * \`1rem\` = 16px
    * \`2rem\` = 32px
    * \`0.5rem\` = 8px
    * *rem का उपयोग क्यों करें?* यह पूरे ऐप में एक समान आकार सुनिश्चित करता है और यदि उपयोगकर्ता ब्राउज़र की एक्सेसिबिलिटी सेटिंग्स में अपना डिफ़ॉल्ट टेक्स्ट आकार बढ़ाता है, तो यह उसका भी सम्मान करता है!

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="parent-box">\n  Parent Box (Font size: 20px)\n  <div class="em-box">I am 2em (40px) because my parent is 20px.</div>\n  <div class="rem-box">I am 2rem (32px) because the root (html) is 16px!</div>\n</div>\n\n<div class="percent-box">I am 80% width of the screen!</div>`,
          css: `.parent-box {\n  font-size: 20px;\n  background: #ecf0f1;\n  padding: 15px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n\n.em-box {\n  font-size: 2em; /* 2 * 20px = 40px */\n  color: #c0392b;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.rem-box {\n  font-size: 2rem; /* 2 * 16px (default root) = 32px */\n  color: #2980b9;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.percent-box {\n  width: 80%; /* Takes up 80% of available horizontal space */\n  background: #27ae60;\n  color: white;\n  padding: 10px;\n  text-align: center;\n  border-radius: 4px;\n}`
        }
      ]
    },
    {
      id: "t5-2",
      title_en: "Viewport Units (vw, vh, vmin, vmax)",
      title_hi: "व्यूपोर्ट इकाइयाँ (vw, vh, vmin, vmax)",
      content_en: `### Designing for the Screen Size

Sometimes percentages (\`%\`) are frustrating because they require the parent element to have a defined height or width. What if you want a background banner to *always* cover exactly 100% of the user's visible screen, regardless of where it is placed in the HTML?

Enter **Viewport Units**! The "Viewport" is the visible area of the web page in the browser window.

---

### 1. \`vw\` (Viewport Width)
* \`1vw\` is equal to **1% of the width** of the viewport.
* If the browser window is 1000px wide, \`1vw\` equals 10px.
* \`100vw\` means "take up the entire width of the screen."

### 2. \`vh\` (Viewport Height)
* \`1vh\` is equal to **1% of the height** of the viewport.
* If you want a hero section (like a landing page banner) to fill the exact height of the user's phone or laptop screen, you set its height to \`100vh\`.

### 3. \`vmin\` and \`vmax\`
These are incredibly useful for responsive mobile design (like portrait vs landscape modes).
* **\`vmin\`:** 1% of the viewport's *smaller* dimension (either width or height, whichever is currently smaller).
* **\`vmax\`:** 1% of the viewport's *larger* dimension.

[[SANDBOX_0]]`,
      content_hi: `### स्क्रीन साइज़ के अनुसार डिज़ाइन करना

कभी-कभी प्रतिशत (\`%\`) का उपयोग करना निराशाजनक होता है क्योंकि इसके लिए पैरेंट एलिमेंट की ऊँचाई या चौड़ाई पहले से तय होनी चाहिए। क्या होगा यदि आप चाहते हैं कि कोई बैकग्राउंड बैनर *हमेशा* उपयोगकर्ता की दृश्यमान स्क्रीन (visible screen) को ठीक 100% कवर करे, चाहे उसे HTML में कहीं भी रखा गया हो?

यहीं काम आती हैं **Viewport Units (व्यूपोर्ट इकाइयाँ)**! "व्यूपोर्ट" ब्राउज़र विंडो में वेब पेज का वह हिस्सा है जो दिखाई देता है।

---

### 1. \`vw\` (Viewport Width / व्यूपोर्ट की चौड़ाई)
* \`1vw\`, व्यूपोर्ट की **चौड़ाई के 1%** के बराबर होता है।
* यदि ब्राउज़र विंडो की चौड़ाई 1000px है, तो \`1vw\` 10px के बराबर होगा।
* \`100vw\` का अर्थ है "स्क्रीन की पूरी चौड़ाई ले लो।"

### 2. \`vh\` (Viewport Height / व्यूपोर्ट की ऊँचाई)
* \`1vh\`, व्यूपोर्ट की **ऊँचाई के 1%** के बराबर होता है।
* यदि आप चाहते हैं कि कोई हीरो सेक्शन (जैसे लैंडिंग पेज का बैनर) उपयोगकर्ता के फोन या लैपटॉप स्क्रीन की पूरी ऊँचाई को भर दे, तो आप उसकी ऊँचाई \`100vh\` सेट करते हैं।

### 3. \`vmin\` और \`vmax\`
ये रिस्पॉन्सिव मोबाइल डिज़ाइन (जैसे पोर्ट्रेट बनाम लैंडस्केप मोड) के लिए अविश्वसनीय रूप से उपयोगी हैं।
* **\`vmin\`:** व्यूपोर्ट के *छोटे* आयाम (चौड़ाई या ऊँचाई में से जो भी उस समय छोटा हो) का 1%।
* **\`vmax\`:** व्यूपोर्ट के *बड़े* आयाम का 1%।

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="hero-section">\n  <h2>Full Height Banner</h2>\n  <p>This box takes up exactly 50% of the screen height using 50vh!</p>\n</div>`,
          css: `.hero-section {\n  /* Takes exactly 50% of the viewport's height! */\n  height: 50vh; \n  \n  /* Takes 100% of the viewport's width */\n  width: 100vw; \n  \n  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  margin: 0;\n  padding: 20px;\n  box-sizing: border-box;\n}`
        }
      ]
    },
    {
      id: "t5-3",
      title_en: "The Magic of Math: calc()",
      title_hi: "गणित का जादू: calc() फ़ंक्शन",
      content_en: `### Mixing Units Dynamically

In traditional CSS, you couldn't mix different types of units. If you wanted a box to be 100% wide *minus* 50 pixels, you were stuck. But modern CSS introduced the **\`calc()\`** function, which lets the browser do math dynamically in real-time!

---

### How \`calc()\` Works
You can perform basic arithmetic: Addition (\`+\`), Subtraction (\`-\`), Multiplication (\`*\`), and Division (\`/\`).

#### Syntax Example:
\`\`\`css
.sidebar {
  width: calc(100% - 250px);
}
\`\`\`
In the example above, if the screen is 1000px wide, the sidebar will be 750px. If the user resizes the window to 800px, the sidebar instantly recalculates to 550px!

### ⚠️ The Golden Rule of \`calc()\`
When using addition (\`+\`) or subtraction (\`-\`), **you MUST include a blank space on both sides of the operator**.
* ❌ \`calc(100%-50px)\` **(Will NOT work!)**
* ❌ \`calc(100% -50px)\` **(Will NOT work!)**
* ✅ \`calc(100% - 50px)\` **(Perfect!)**

### Use Cases for \`calc()\`
1. **Centering elements:** \`margin-left: calc(50% - 100px);\`
2. **Fixed Headers:** Making a content area fill the screen minus a fixed 60px header: \`height: calc(100vh - 60px);\`
3. **Grid Gaps:** Calculating custom widths while subtracting gaps between items.

[[SANDBOX_0]]`,
      content_hi: `### इकाइयों को डायनामिक तरीके से मिलाना

पारंपरिक CSS में, आप विभिन्न प्रकार की इकाइयों को आपस में मिला नहीं सकते थे। यदि आप चाहते थे कि कोई बॉक्स 100% चौड़ा हो लेकिन उसमें से 50 पिक्सल कम हों (100% - 50px), तो यह संभव नहीं था। लेकिन आधुनिक CSS में **\`calc()\`** फ़ंक्शन पेश किया गया है, जो ब्राउज़र को रीयल-टाइम में गणितीय गणना (Math) करने की सुविधा देता है!

---

### \`calc()\` कैसे काम करता है
आप बुनियादी गणित कर सकते हैं: जोड़ (\`+\`), घटाव (\`-\`), गुणा (\`*\`), और भाग (\`/\`)।

#### सिंटैक्स का उदाहरण:
\`\`\`css
.sidebar {
  width: calc(100% - 250px);
}
\`\`\`
ऊपर दिए गए उदाहरण में, यदि स्क्रीन 1000px चौड़ी है, तो साइडबार 750px का होगा। यदि उपयोगकर्ता विंडो का आकार घटाकर 800px कर देता है, तो साइडबार तुरंत फिर से गणना करके 550px का हो जाएगा!

### ⚠️ \`calc()\` का सुनहरा नियम (Golden Rule)
जोड़ (\`+\`) या घटाव (\`-\`) का उपयोग करते समय, **आपको ऑपरेटर (चिह्न) के दोनों ओर एक खाली स्थान (Space) देना अनिवार्य है**।
* ❌ \`calc(100%-50px)\` **(यह काम नहीं करेगा!)**
* ❌ \`calc(100% -50px)\` **(यह काम नहीं करेगा!)**
* ✅ \`calc(100% - 50px)\` **(बिल्कुल सही!)**

### \`calc()\` के उपयोग (Use Cases)
1. **एलिमेंट्स को सेंटर करना:** \`margin-left: calc(50% - 100px);\`
2. **फिक्स्ड हेडर (Fixed Headers):** कंटेंट एरिया को 60px के हेडर को छोड़कर पूरी स्क्रीन पर भरना: \`height: calc(100vh - 60px);\`
3. **ग्रिड गैप्स (Grid Gaps):** आइटम्स के बीच के गैप को घटाते हुए कस्टम चौड़ाई की गणना करना।

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="container">\n  <div class="fixed-sidebar">Fixed 200px</div>\n  <div class="fluid-content">Dynamic calc(100% - 200px)</div>\n</div>`,
          css: `.container {\n  display: flex;\n  background: #bdc3c7;\n  padding: 10px;\n  border-radius: 6px;\n}\n\n.fixed-sidebar {\n  width: 200px;\n  background: #34495e;\n  color: white;\n  padding: 20px;\n  text-align: center;\n}\n\n.fluid-content {\n  /* The magic! It takes all remaining space exactly */\n  width: calc(100% - 200px);\n  background: #2ecc71;\n  color: white;\n  padding: 20px;\n  text-align: center;\n  font-weight: bold;\n}`
        }
      ]
    },
    {
      id: "t5-4",
      title_en: "Fluid Design: min(), max(), and clamp()",
      title_hi: "फ़्लूइड डिज़ाइन (Fluid Design): min(), max(), और clamp()",
      content_en: `### Advanced Math Functions

In modern CSS, we don't want to write dozens of Media Queries for every single device (iPhone, iPad, Desktop). Instead, we use advanced math functions to make fonts and sizes scale smoothly—like rubber!

---

### 1. \`min()\`
Takes a comma-separated list of values and applies the **smallest** one.
* \`width: min(100%, 800px);\`
* **Meaning:** "Be 100% wide on phones, but never grow larger than 800px on big monitors."

### 2. \`max()\`
Takes a comma-separated list of values and applies the **largest** one.
* \`height: max(50vh, 300px);\`
* **Meaning:** "Take up 50% of the screen height, but if the screen is super tiny, don't shrink below 300px."

---

### 3. The King of Fluidity: \`clamp()\`
\`clamp()\` is a game-changer for responsive typography. It takes exactly three values:
1. **Minimum value**
2. **Preferred/Ideal value** (Usually a dynamic unit like \`vw\`)
3. **Maximum value**

#### Syntax:
\`\`\`css
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
\`\`\`
#### What does this do?
* On small phones, the font size will never go below \`1.5rem\` (so it stays readable).
* On huge desktop screens, it will never exceed \`3rem\` (so it doesn't look ridiculously gigantic).
* Everywhere in between, it scales dynamically according to \`4vw\` (4% of the screen width).
* **Result:** Perfect fluid typography with just ONE line of code. No media queries needed!

[[SANDBOX_0]]`,
      content_hi: `### एडवांस्ड मैथ फ़ंक्शंस

आधुनिक CSS में, हम हर छोटे-बड़े डिवाइस (iPhone, iPad, Desktop) के लिए दर्जनों मीडिया क्वेरीज़ (Media Queries) नहीं लिखना चाहते। इसके बजाय, हम फ़ॉन्ट्स और आकार को रबर की तरह सुगमता से बदलने के लिए एडवांस्ड गणितीय फ़ंक्शंस का उपयोग करते हैं!

---

### 1. \`min()\`
यह अल्पविराम से अलग किए गए मानों (values) की एक सूची लेता है और उनमें से **सबसे छोटे (smallest)** मान को लागू करता है।
* \`width: min(100%, 800px);\`
* **अर्थ:** "फोन पर 100% चौड़े रहें, लेकिन बड़े मॉनिटर पर कभी भी 800px से बड़े न हों।"

### 2. \`max()\`
यह अल्पविराम से अलग किए गए मानों की एक सूची लेता है और उनमें से **सबसे बड़े (largest)** मान को लागू करता है।
* \`height: max(50vh, 300px);\`
* **अर्थ:** "स्क्रीन की 50% ऊँचाई लें, लेकिन यदि स्क्रीन बहुत छोटी है, तो 300px से नीचे न सिकुड़ें।"

---

### 3. फ़्लूइडिटी का राजा: \`clamp()\`
\`clamp()\` रिस्पॉन्सिव टाइपोग्राफी के लिए एक गेम-चेंजर है। यह ठीक तीन मान (values) लेता है:
1. **Minimum (न्यूनतम मान)**
2. **Preferred/Ideal (पसंदीदा/आदर्श मान)** (आमतौर पर \`vw\` जैसी डायनामिक इकाई)
3. **Maximum (अधिकतम मान)**

#### सिंटैक्स (Syntax):
\`\`\`css
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
\`\`\`
#### यह क्या करता है?
* छोटे फोन पर, फ़ॉन्ट साइज़ कभी भी \`1.5rem\` से नीचे नहीं जाएगा (ताकि वह पढ़ा जा सके)।
* बड़ी डेस्कटॉप स्क्रीन पर, यह कभी भी \`3rem\` से बड़ा नहीं होगा (ताकि वह अजीब सा विशाल न लगे)।
* इनके बीच के हर डिवाइस पर, यह \`4vw\` (स्क्रीन की चौड़ाई का 4%) के अनुसार अपने आप बदलेगा (Scale होगा)।
* **परिणाम:** कोड की सिर्फ एक लाइन से परफेक्ट रिस्पॉन्सिव (Fluid) टाइपोग्राफी बन गई। किसी मीडिया क्वेरी की आवश्यकता नहीं!

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="responsive-box">\n  <h1 class="fluid-text">Resize the window!</h1>\n  <p>My font size uses clamp(). I smoothly grow and shrink, but I have strict minimum and maximum limits!</p>\n</div>`,
          css: `.responsive-box {\n  /* Uses min() so it never touches screen edges on mobile, but stops at 600px on desktop */\n  width: min(90%, 600px);\n  background: #8e44ad;\n  color: white;\n  margin: 20px auto;\n  padding: 30px;\n  border-radius: 12px;\n  text-align: center;\n}\n\n.fluid-text {\n  /* \n    Min size: 1.5rem (24px)\n    Ideal size: 5vw (scales with screen)\n    Max size: 3rem (48px)\n  */\n  font-size: clamp(1.5rem, 5vw, 3rem);\n  margin: 0 0 15px 0;\n  text-transform: uppercase;\n  text-shadow: 2px 2px 0px rgba(0,0,0,0.2);\n}`
        }
      ]
    }
  ]
};

export const chapter05Quiz = [
  {
    id: "q1",
    question_en: "Which of the following is considered an 'Absolute' CSS unit?",
    question_hi: "निम्नलिखित में से किसे 'Absolute (निरपेक्ष)' CSS इकाई माना जाता है?",
    options_en: [
      "rem",
      "vw",
      "%",
      "px (Pixels)"
    ],
    options_hi: [
      "rem",
      "vw",
      "%",
      "px (पिक्सेल)"
    ],
    correctAnswerIndex: 3
  },
  {
    id: "q2",
    question_en: "The 'rem' unit is relative to the font-size of which element?",
    question_hi: "'rem' इकाई किस एलिमेंट के फ़ॉन्ट-साइज़ के सापेक्ष (relative) होती है?",
    options_en: [
      "The direct parent element",
      "The root <html> element",
      "The viewport width",
      "The <body> element"
    ],
    options_hi: [
      "सीधे पैरेंट एलिमेंट के",
      "रूट <html> एलिमेंट के",
      "व्यूपोर्ट की चौड़ाई के",
      "<body> एलिमेंट के"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q3",
    question_en: "If the root HTML font-size is 16px, what does '2.5rem' equal in pixels?",
    question_hi: "यदि रूट HTML का फ़ॉन्ट-साइज़ 16px है, तो पिक्सल में '2.5rem' किसके बराबर होगा?",
    options_en: [
      "16px",
      "25px",
      "32px",
      "40px"
    ],
    options_hi: [
      "16px",
      "25px",
      "32px",
      "40px"
    ],
    correctAnswerIndex: 3
  },
  {
    id: "q4",
    question_en: "What does '100vh' represent?",
    question_hi: "'100vh' क्या दर्शाता है?",
    options_en: [
      "100 pixels horizontally",
      "100% of the viewport's height",
      "100% of the parent's height",
      "A Very High resolution image"
    ],
    options_hi: [
      "क्षैतिज रूप से 100 पिक्सेल",
      "व्यूपोर्ट की ऊँचाई का 100%",
      "पैरेंट की ऊँचाई का 100%",
      "एक बहुत उच्च (Very High) रिज़ॉल्यूशन वाली इमेज"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q5",
    question_en: "Why is 'calc(100%-50px)' invalid in CSS?",
    question_hi: "CSS में 'calc(100%-50px)' अमान्य (invalid) क्यों है?",
    options_en: [
      "You cannot mix % and px.",
      "The calc function only supports addition.",
      "There must be blank spaces around the minus (-) operator.",
      "You must use calc() only inside a media query."
    ],
    options_hi: [
      "आप % और px को एक साथ नहीं मिला सकते।",
      "calc फ़ंक्शन केवल जोड़ (addition) का समर्थन करता है।",
      "माइनस (-) ऑपरेटर के दोनों ओर खाली स्थान (spaces) होने चाहिए।",
      "आपको calc() का उपयोग केवल मीडिया क्वेरी के अंदर करना चाहिए।"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q6",
    question_en: "Which unit represents 1% of the viewport's SMALLEST dimension (width or height)?",
    question_hi: "कौन सी इकाई व्यूपोर्ट के सबसे छोटे आयाम (चौड़ाई या ऊँचाई) का 1% दर्शाती है?",
    options_en: [
      "vw",
      "vmin",
      "vmax",
      "vh"
    ],
    options_hi: [
      "vw",
      "vmin",
      "vmax",
      "vh"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q7",
    question_en: "What does the clamp() function take as its THREE arguments in correct order?",
    question_hi: "clamp() फ़ंक्शन सही क्रम में कौन से तीन आर्गुमेंट्स (arguments) लेता है?",
    options_en: [
      "Minimum, Preferred, Maximum",
      "Maximum, Preferred, Minimum",
      "Preferred, Minimum, Maximum",
      "Width, Height, Depth"
    ],
    options_hi: [
      "Minimum (न्यूनतम), Preferred (पसंदीदा), Maximum (अधिकतम)",
      "Maximum (अधिकतम), Preferred (पसंदीदा), Minimum (न्यूनतम)",
      "Preferred (पसंदीदा), Minimum (न्यूनतम), Maximum (अधिकतम)",
      "Width (चौड़ाई), Height (ऊँचाई), Depth (गहराई)"
    ],
    correctAnswerIndex: 0
  },
  {
    id: "q8",
    question_en: "If you apply 'width: min(100%, 500px);' to a div, and the screen is 400px wide, what will the div's width be?",
    question_hi: "यदि आप किसी div पर 'width: min(100%, 500px);' लगाते हैं, और स्क्रीन की चौड़ाई 400px है, तो div की चौड़ाई क्या होगी?",
    options_en: [
      "500px",
      "400px (because 100% of 400px is smaller than 500px)",
      "100px",
      "0px"
    ],
    options_hi: [
      "500px",
      "400px (क्योंकि 400px का 100%, 500px से छोटा होता है)",
      "100px",
      "0px"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q9",
    question_en: "Which relative unit is based on the font-size of its DIRECT PARENT, and can cause scaling issues if nested too deeply?",
  question_hi: "कौन सी सापेक्ष (relative) इकाई अपने 'सीधे पैरेंट (Direct Parent)' के फ़ॉन्ट-साइज़ पर आधारित होती है, और बहुत गहराई तक नेस्ट (nest) किए जाने पर आकार की समस्या पैदा कर सकती है?",
    options_en: [
      "rem",
      "px",
      "em",
      "vh"
    ],
    options_hi: [
      "rem",
      "px",
      "em",
      "vh"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q10",
    question_en: "Why is clamp() widely used for modern web typography?",
    question_hi: "आधुनिक वेब टाइपोग्राफी के लिए clamp() का व्यापक रूप से उपयोग क्यों किया जाता है?",
    options_en: [
      "It changes text color based on screen size.",
      "It allows font sizes to scale smoothly between a minimum and maximum limit without writing multiple media queries.",
      "It forces all text to uppercase.",
      "It makes the text bold on mobile devices."
    ],
    options_hi: [
      "यह स्क्रीन साइज़ के आधार पर टेक्स्ट का रंग बदलता है।",
      "यह बिना कई मीडिया क्वेरीज़ लिखे फ़ॉन्ट साइज़ को न्यूनतम और अधिकतम सीमा के बीच सुगमता से स्केल (बदलने) करने की अनुमति देता है।",
      "यह सभी टेक्स्ट को ज़बरदस्ती बड़े अक्षरों (uppercase) में कर देता है।",
      "यह मोबाइल डिवाइस पर टेक्स्ट को बोल्ड बनाता है।"
    ],
    correctAnswerIndex: 1
  }
];

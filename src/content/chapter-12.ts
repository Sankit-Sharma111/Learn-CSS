export const chapter12 = {
  id: "ch12",
  title_en: "Chapter 12: Responsive Web Design & Media Queries",
  title_hi: "अध्याय 12: रेस्पॉन्सिव वेब डिज़ाइन और मीडिया क्वेरीज (हर स्क्रीन पर परफेक्ट वेबसाइट)",
  topics: [
    {
      id: "t12-1",
      title_en: "The Foundation: What is Responsive Design & The Viewport Meta Tag",
      title_hi: "बुनियाद: रेस्पॉन्सिव डिज़ाइन क्या है और Viewport Meta Tag का महत्व",
      content_en: `### The Problem with Fixed-Width Web Designs

In the early days of the internet, developers built websites with fixed pixel widths (like \`width: 960px;\`). When smartphones arrived, these desktop-sized pages looked terrible on small screens! Users had to pinch, zoom, and horizontally scroll just to read a simple paragraph.

**Responsive Web Design (RWD)** is an approach where CSS automatically adjusts the layout, font sizes, and image dimensions to fit perfectly on any device—from a tiny 320px mobile screen to a massive 4K desktop monitor.

---

### The Magic Switch: The Viewport Meta Tag

You can write the greatest responsive CSS in the world, but **it will not work on mobile phones** unless you include one critical line of HTML inside the \`<head>\` of your document:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

#### Why is this tag mandatory?
Without this tag, mobile browsers will assume your site is an old desktop-only website. They will render the page at a standard desktop width (around 980px) and shrink it down to fit the phone screen, making text unreadably tiny!
* **\`width=device-width\`**: Instructs the browser to match the screen's width in device-independent pixels.
* **\`initial-scale=1.0\`**: Sets the initial zoom level to 100% when the page first loads.

---

### The First Rule of Responsive CSS: Fluid Widths

To prevent horizontal scrollbars, never use fixed \`width: 1000px;\` on large container boxes. Instead, use **\`max-width\`** combined with percentages:

\`\`\`css
/* BAD: Breaks on screens smaller than 800px! */
.container { width: 800px; }

/* GOOD: Shorter than 800px? It smoothly shrinks to fit 100% of the screen! */
.container { max-width: 800px; width: 100%; }
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### फिक्स्ड-चौड़ाई (Fixed-Width) वाली वेबसाइटों की समस्या

इंटरनेट के शुरुआती दिनों में, डेवलपर्स वेबसाइटों को एक तय चौड़ाई (जैसे \`width: 960px;\`) में बनाते थे। जब स्मार्टफोन आए, तो ये बड़े डेस्कटॉप पेज मोबाइल की छोटी स्क्रीन पर बहुत ही खराब दिखने लगे! यूज़र्स को एक छोटा सा पैराग्राफ पढ़ने के लिए भी ज़ूम-इन, ज़ूम-आउट और दाएं-बाएं स्क्रॉल (Horizontal scroll) करना पड़ता था।

**Responsive Web Design (RWD)** एक ऐसी तकनीक जहाँ CSS आपके लेआउट, फ़ॉन्ट के आकार और इमेज की चौड़ाई को किसी भी स्क्रीन (चाहे वह 320px का छोटा मोबाइल हो या 4K मॉनिटर) के हिसाब से अपने आप एडजस्ट कर देता है।

---

### सबसे जादुई स्विच: Viewport Meta Tag

आप दुनिया की सबसे बेहतरीन रेस्पॉन्सिव CSS लिख सकते हैं, लेकिन **वह मोबाइल फोन पर बिल्कुल काम नहीं करेगी** जब तक आप अपने HTML डॉक्यूमेंट के \`<head>\` सेक्शन में यह एक ज़रूरी लाइन नहीं लिखते:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

#### यह टैग इतना ज़रूरी क्यों है?
इस टैग के बिना, मोबाइल ब्राउज़र यह मान लेते हैं कि आपकी वेबसाइट एक पुरानी डेस्कटॉप वेबसाइट है। वे पेज को लगभग 980px की बड़ी चौड़ाई में रेंडर करते हैं और फिर उसे सिकोड़कर मोबाइल स्क्रीन में फिट कर देते हैं, जिससे अक्षर इतने छोटे हो जाते हैं कि उन्हें पढ़ा नहीं जा सकता!
* **\`width=device-width\`**: ब्राउज़र को निर्देश देता है कि पेज की चौड़ाई डिवाइस की स्क्रीन की चौड़ाई के बराबर होनी चाहिए।
* **\`initial-scale=1.0\`**: जब पेज पहली बार लोड हो, तो ज़ूम लेवल को 100% पर सेट करता है।

---

### रेस्पॉन्सिव CSS का पहला नियम: फ्लुइड चौड़ाई (Fluid Widths)

हॉरिजॉन्टल स्क्रॉल बार से बचने के लिए, कभी भी बड़े कंटेनर पर फिक्स्ड \`width: 1000px;\` न लगाएं। इसके बजाय, प्रतिशत (%) के साथ **\`max-width\`** का उपयोग करें:

\`\`\`css
/* गलत तरीका: 800px से छोटी स्क्रीन पर लेआउट टूट जाएगा! */
.container { width: 800px; }

/* सही तरीका: 800px से छोटी स्क्रीन पर यह अपने आप सिकोड़कर 100% फिट हो जाएगा! */
.container { max-width: 800px; width: 100%; }
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="wrapper">\n  <p>1. Fixed Width Box (width: 500px) - Will cause overflow/scrollbar on small phones!</p>\n  <div class="box fixed-box">I am strictly 500px wide! Resize your browser window to make it smaller than me!</div>\n\n  <p>2. Responsive Fluid Box (max-width: 500px; width: 100%) - Safe & Responsive!</p>\n  <div class="box fluid-box">I am 500px wide on desktop, but I automatically shrink to fit mobile screens smoothly!</div>\n</div>`,
          css: `body { font-family: sans-serif; padding: 15px; background: #f8f9fa; }\n.wrapper p { font-weight: bold; color: #2d3436; margin-top: 20px; }\n\n.box {\n  padding: 20px;\n  color: white;\n  font-weight: bold;\n  border-radius: 8px;\n  margin-bottom: 15px;\n  box-sizing: border-box;\n}\n\n/* 1. Rigid Fixed Box */\n.fixed-box {\n  width: 500px;\n  background: #d63031;\n}\n\n/* 2. Modern Fluid Responsive Box */\n.fluid-box {\n  max-width: 500px;\n  width: 100%;\n  background: #00b894;\n}`
        }
      ]
    },
    {
      id: "t12-2",
      title_en: "Media Queries Syntax (@media) & Industry Breakpoints",
      title_hi: "मीडिया क्वेरीज का सिंटैक्स (@media) और इंडस्ट्री के मानक Breakpoints",
      content_en: `### How Media Queries Work

A **Media Query** is like an conditional \`if-statement\` inside your CSS. It tells the browser: *"IF the user's screen meets certain conditions (like being smaller than 600px wide), THEN apply these special CSS rules!"*

The fundamental syntax uses the **\`@media\`** rule:

\`\`\`css
/* Standard styles applied to all devices by default */
.navbar {
  background-color: blue;
  flex-direction: row;
}

/* MEDIA QUERY: Only applies if viewport width is 600px OR LESS */
@media (max-width: 600px) {
  .navbar {
    background-color: red; /* Turns red on small mobile screens! */
    flex-direction: column; /* Stacks items vertically on mobile! */
  }
}
\`\`\`

---

### What is a "Breakpoint"?

A **Breakpoint** is simply the exact screen width (in pixels) where your website's layout changes or rearranges itself to provide a better user experience.

While there are thousands of different devices, standard industry practice simplifies responsive design into these core breakpoints:

* **\`320px - 480px\`**: Mobile phones (Portrait).
* **\`481px - 768px\`**: Tablets & large mobile phones (Landscape).
* **\`769px - 1024px\`**: Small laptops & tablet landscape mode.
* **\`1025px and up\`**: Desktop monitors and large screens.

---

### Combining Conditions with \`and\`

You can chain multiple conditions together using the **\`and\`** keyword if you want to target a very specific screen range (like iPads between 600px and 900px):

\`\`\`css
@media (min-width: 600px) and (max-width: 900px) {
  .sidebar { display: none; } /* Hide sidebar only on mid-sized tablets */
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### मीडिया क्वेरीज (Media Queries) कैसे काम करती हैं?

**Media Query** आपके CSS कोड में एक जादुई शर्त (\`if-statement\`) की तरह होती है। यह ब्राउज़र से कहती है: *"अगर यूज़र की स्क्रीन एक तय शर्त को पूरा करती है (जैसे स्क्रीन की चौड़ाई 600px से कम है), तो सिर्फ तभी यह खास CSS नियम लागू करो!"*

इसका मूल सिंटैक्स **\`@media\`** नियम से शुरू होता है:

\`\`\`css
/* डिफ़ॉल्ट नियम जो सभी डिवाइसेस पर लागू होते हैं */
.navbar {
  background-color: blue;
  flex-direction: row;
}

/* मीडिया क्वेरी: केवल तब लागू होगी जब स्क्रीन 600px या उससे छोटी हो */
@media (max-width: 600px) {
  .navbar {
    background-color: red; /* छोटी मोबाइल स्क्रीन पर रंग लाल हो जाएगा! */
    flex-direction: column; /* मोबाइल पर आइटम्स एक के नीचे एक स्टैक हो जाएंगे! */
  }
}
\`\`\`

---

### "Breakpoint" क्या होता है?

**Breakpoint (ब्रेकप्वाइंट)** पिक्सेल में नापी गई वह खास चौड़ाई होती है जहाँ आपकी वेबसाइट का लेआउट खुद को बदलता है ताकि यूज़र को पढ़ने और इस्तेमाल करने में परेशानी न हो।

हालाँकि बाज़ार में हज़ारों अलग-अलग स्क्रीन साइज के फोन और लैपटॉप हैं, लेकिन वेब डेवलपमेंट इंडस्ट्री में इन मानक ब्रेकप्वाइंट्स का उपयोग किया जाता है:

* **\`320px - 480px\`**: मोबाइल फोन (Portrait मोड)।
* **\`481px - 768px\`**: टैबलेट और बड़े मोबाइल फोन (Landscape मोड)।
* **\`769px - 1024px\`**: छोटे लैपटॉप और टैबलेट।
* **\`1025px और उससे ज़्यादा\`**: बड़े डेस्कटॉप मॉनिटर।

---

### \`and\` के साथ कई शर्तें जोड़ना

अगर आप किसी खास स्क्रीन रेंज (जैसे 600px से 900px के बीच वाले टैबलेट) को टारगेट करना चाहते हैं, तो आप **\`and\`** कीवर्ड लगाकर कई शर्तों को एक साथ जोड़ सकते हैं:

\`\`\`css
@media (min-width: 600px) and (max-width: 900px) {
  .sidebar { display: none; } /* सिर्फ मीडियम टैबलेट्स पर साइडबार छिपा दो */
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="responsive-box">\n  <h2 class="title">I Am A Responsive Box!</h2>\n  <p class="desc">Resize your preview window/browser to see my color and layout change dynamically!</p>\n  <div class="stats">Current Status: Checking Screen Width...</div>\n</div>`,
          css: `body { font-family: sans-serif; padding: 15px; margin: 0; }\n\n/* DEFAULT DESKTOP STYLES (> 768px) */\n.responsive-box {\n  background-color: #6c5ce7;\n  color: white;\n  padding: 40px;\n  border-radius: 12px;\n  text-align: center;\n  transition: all 0.3s ease; /* Smooth animation when colors change */\n}\n\n.stats::before {\n  content: "🖥️ Desktop Mode (Width > 768px)";\n  font-weight: bold;\n  font-size: 18px;\n  background: rgba(0,0,0,0.2);\n  padding: 10px 20px;\n  border-radius: 20px;\n  display: inline-block;\n  margin-top: 15px;\n}\n\n/* TABLET BREAKPOINT (<= 768px) */\n@media (max-width: 768px) {\n  .responsive-box {\n    background-color: #00b894; /* Changes to Teal */\n    padding: 25px;\n  }\n  .stats::before {\n    content: "📱 Tablet Mode (Width <= 768px)";\n  }\n}\n\n/* MOBILE PHONE BREAKPOINT (<= 480px) */\n@media (max-width: 480px) {\n  .responsive-box {\n    background-color: #ff7675; /* Changes to Coral Red */\n    padding: 15px;\n  }\n  .title { font-size: 20px; }\n  .stats::before {\n    content: "📲 Small Mobile Mode (Width <= 480px)";\n  }\n}`
        }
      ]
    },
    {
      id: "t12-3",
      title_en: "Mobile-First vs Desktop-First Architecture",
      title_hi: "Mobile-First बनाम Desktop-First आर्किटेक्चर (सही रणनीति क्या है?)",
      content_en: `### Two Philosophies of Writing Responsive CSS

When building responsive layouts, there are two opposing methodologies. Understanding the difference will make your CSS cleaner and much easier to maintain!

---

### 1. Desktop-First Approach (The Old Way: \`max-width\`)
In this approach, you write your default CSS for huge desktop monitors first. Then, you use **\`max-width\`** media queries to *shrink, hide, or override* styles as the screen gets smaller and smaller down to mobile.

\`\`\`css
/* 1. Default style built for massive Desktop monitors */
.nav-menu { display: flex; flex-direction: row; font-size: 18px; }

/* 2. Override for Tablet */
@media (max-width: 768px) {
  .nav-menu { font-size: 16px; }
}

/* 3. Override again for Mobile */
@media (max-width: 480px) {
  .nav-menu { flex-direction: column; font-size: 14px; }
}
\`\`\`

---

### 2. Mobile-First Approach (The Modern Standard: \`min-width\`)
In modern professional web development, **Mobile-First is the gold standard**. Here, you write your default CSS for a tiny smartphone first! Then, you use **\`min-width\`** media queries to *add complexity, expand grids, and enhance* the layout as screen size increases.

\`\`\`css
/* 1. Default style built for clean, simple Mobile phones */
.nav-menu { display: flex; flex-direction: column; font-size: 14px; }

/* 2. Enhance for Tablet and larger screens */
@media (min-width: 768px) {
  .nav-menu { flex-direction: row; font-size: 16px; }
}

/* 3. Enhance for Desktop monitors */
@media (min-width: 1024px) {
  .nav-menu { font-size: 18px; }
}
\`\`\`

#### Why is Mobile-First Better?
1. **Performance**: Mobile devices have weaker processors and slower internet. Writing clean mobile styles first means mobile phones don't have to download and override heavy desktop rules!
2. **Simplicity**: It is much easier to start simple (a single mobile column) and add columns as space grows, rather than starting complex and trying to cram desktop layouts into a tiny phone screen.

[[SANDBOX_0]]`,
      content_hi: `### रेस्पॉन्सिव CSS लिखने के दो अलग-अलग नज़रिए

रेस्पॉन्सिव लेआउट बनाते समय दो विपरीत तरीके अपनाए जाते हैं। इनमें अंतर समझने से आपका CSS कोड बहुत साफ और प्रोफेशनल हो जाएगा!

---

### 1. Desktop-First दृष्टिकोण (पुराना तरीका: \`max-width\`)
इस तरीके में, आप सबसे पहले बड़े डेस्कटॉप मॉनिटरों के लिए डिफ़ॉल्ट CSS लिखते हैं। फिर जैसे-जैसे स्क्रीन छोटी होती जाती है, आप **\`max-width\`** मीडिया क्वेरीज का उपयोग करके डिज़ाइनों को छोटा करते हैं या छिपाते हैं।

\`\`\`css
/* 1. बड़े डेस्कटॉप मॉनिटर के लिए डिफ़ॉल्ट स्टाइल */
.nav-menu { display: flex; flex-direction: row; font-size: 18px; }

/* 2. टैबलेट के लिए बदलाव */
@media (max-width: 768px) {
  .nav-menu { font-size: 16px; }
}

/* 3. मोबाइल के लिए फिर से बदलाव */
@media (max-width: 480px) {
  .nav-menu { flex-direction: column; font-size: 14px; }
}
\`\`\`

---

### 2. Mobile-First दृष्टिकोण (मॉडर्न इंडस्ट्री स्टैंडर्ड: \`min-width\`)
आज के प्रोफेशनल वेब डेवलपमेंट में, **Mobile-First सबसे बेहतरीन नियम माना जाता है**। इसमें आप सबसे पहले एक छोटे स्मार्टफोन के लिए डिफ़ॉल्ट CSS लिखते हैं! फिर जैसे-जैसे स्क्रीन बड़ी होती है, आप **\`min-width\`** मीडिया क्वेरीज का उपयोग करके ग्रिड को बड़ा करते हैं और नए फीचर्स जोड़ते हैं।

\`\`\`css
/* 1. छोटे मोबाइल फोन के लिए साफ और सिंपल डिफ़ॉल्ट स्टाइल */
.nav-menu { display: flex; flex-direction: column; font-size: 14px; }

/* 2. टैबलेट और उससे बड़ी स्क्रीन के लिए अपग्रेड */
@media (min-width: 768px) {
  .nav-menu { flex-direction: row; font-size: 16px; }
}

/* 3. बड़े डेस्कटॉप मॉनिटर के लिए अपग्रेड */
@media (min-width: 1024px) {
  .nav-menu { font-size: 18px; }
}
\`\`\`

#### Mobile-First तरीका बेहतर क्यों है?
1. **परफॉर्मेंस**: मोबाइल फोन में कमज़ोर प्रोसेसर और धीमा इंटरनेट होता है। मोबाइल के लिए पहले कोड लिखने से फोन को भारी-भरकम डेस्कटॉप स्टाइल्स को लोड और ओवरराइड नहीं करना पड़ता!
2. **आसानी**: एक सरल लेआउट (सिंगल मोबाइल कॉलम) से शुरुआत करके स्क्रीन बड़ी होने पर कॉलम जोड़ना बहुत आसान होता है, बनिस्बत इसके कि आप एक जटिल डेस्कटॉप डिज़ाइन को ज़बरदस्ती छोटी फोन स्क्रीन में ठूंसने की कोशिश करें।

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<nav class="mobile-first-nav">\n  <div class="logo">🚀 BrandLogo</div>\n  <ul class="nav-links">\n    <li><a href="#">Home</a></li>\n    <li><a href="#">About</a></li>\n    <li><a href="#">Services</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n</nav>\n<div class="content">\n  <h3>Mobile-First Navigation Demo</h3>\n  <p>By default, the navigation links stack vertically (Mobile View). Resize the window above 600px to see them expand into a horizontal desktop bar!</p>\n</div>`,
          css: `body { font-family: sans-serif; margin: 0; padding: 0; background: #ea8685; }\n\n/* 1. DEFAULT MOBILE-FIRST STYLES (Applies to smallest screens first!) */\n.mobile-first-nav {\n  background-color: #2c3e50;\n  padding: 15px;\n  display: flex;\n  flex-direction: column; /* Stacks logo and links vertically */\n  align-items: center;\n  gap: 15px;\n}\n\n.logo { color: #f1c40f; font-size: 20px; font-weight: bold; }\n\n.nav-links {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column; /* Links stacked vertically on mobile */\n  width: 100%;\n  text-align: center;\n  gap: 10px;\n}\n\n.nav-links a {\n  color: white;\n  text-decoration: none;\n  background: rgba(255,255,255,0.1);\n  padding: 10px;\n  display: block;\n  border-radius: 4px;\n}\n\n.content { padding: 20px; color: white; }\n\n/* 2. DESKTOP ENHANCEMENT (Triggers when screen is at least 600px wide!) */\n@media (min-width: 600px) {\n  .mobile-first-nav {\n    flex-direction: row; /* Horizontal navbar! */\n    justify-content: space-between;\n    padding: 15px 30px;\n  }\n  .nav-links {\n    flex-direction: row; /* Links sit side-by-side! */\n    width: auto;\n  }\n  .nav-links a {\n    background: transparent;\n    padding: 5px 15px;\n  }\n}`
        }
      ]
    },
    {
      id: "t12-4",
      title_en: "Responsive Relative Units (rem, em, vw, vh) & clamp()",
      title_hi: "रेस्पॉन्सिव रिलेटिव यूनिट्स (rem, em, vw, vh) और जादुई clamp() फंक्शन",
      content_en: `### Stop Relying Only on Pixels (\`px\`)!

Pixels (\`px\`) are absolute units. If you set \`font-size: 24px;\`, that text will remain strictly 24px whether it is on a 4-inch iPhone or a 50-inch TV. To build truly fluid interfaces, you should master **Relative CSS Units**:

---

### 1. The Root Ems: \`rem\` (The Best Choice for Typography)
One **\`rem\`** equals the font size of the root \`<html>\` element (which is 16px by default in all browsers).
* **\`1rem\`** = \`16px\`
* **\`2rem\`** = \`32px\`
* **\`0.5rem\`** = \`8px\`

**Why use rem?** If a visually impaired user increases their browser's default font size from 16px to 24px for readability, all sizes measured in \`rem\` will automatically scale up proportionally! Using \`px\` ignores accessibility preferences.

---

### 2. Viewport Percentage Units: \`vw\` and \`vh\`
Viewport units measure elements relative to the total size of the browser window (the viewport):
* **\`1vw\`** = 1% of the total viewport **width**. (e.g., \`50vw\` is exactly half the screen width).
* **\`1vh\`** = 1% of the total viewport **height**.
* **\`100vh\`** = The full height of the visible screen! Perfect for full-screen hero landing sections.

---

### 3. The Ultimate Responsive Superpower: \`clamp()\`

What if you want a heading to be fluid and grow with the screen size, but **never shrink smaller than 1.5rem** on phones, and **never grow larger than 3.5rem** on huge desktop monitors?

Instead of writing complex media queries for font sizes, modern CSS gives us the **\`clamp()\`** function!

\`\`\`css
/* Syntax: clamp(MINIMUM, PREFERRED_FLUID_VALUE, MAXIMUM) */
h1 {
  font-size: clamp(1.5rem, 5vw, 3.5rem);
}
\`\`\`

#### How Does clamp() Work?
1. The browser checks the preferred fluid value (\`5vw\`, which grows dynamically as you resize the screen).
2. If \`5vw\` drops below \`1.5rem\` on a phone, it stops shrinking and locks strictly at **\`1.5rem\`**.
3. If \`5vw\` exceeds \`3.5rem\` on a large monitor, it stops growing and locks strictly at **\`3.5rem\`**.

[[SANDBOX_0]]`,
      content_hi: `### सिर्फ पिक्सेल (\`px\`) पर निर्भर रहना बंद करें!

पिक्सेल (\`px\`) एक फिक्स्ड (Absolute) यूनिट है। अगर आप \`font-size: 24px;\` सेट करते हैं, तो वह अक्षर 4-इंच के iPhone पर भी 24px रहेगा और 50-इंच के टीवी पर भी। एक शानदार फ्लुइड इंटरफेस बनाने के लिए, आपको **Relative CSS Units (सापेक्ष इकाइयों)** का ज्ञान होना चाहिए:

---

### 1. Root Ems: \`rem\` (फ़ॉन्ट साइज़ के लिए सबसे बेहतरीन विकल्प)
एक **\`rem\`** की वैल्यू आपके मुख्य \`<html>\` टैग के फ़ॉन्ट साइज़ के बराबर होती है (जो सभी ब्राउज़रों में डिफ़ॉल्ट रूप से 16px होता है)।
* **\`1rem\`** = \`16px\`
* **\`2rem\`** = \`32px\`
* **\`0.5rem\`** = \`8px\`

**rem का उपयोग क्यों करें?** अगर कोई कमज़ोर दृष्टि वाला यूज़र अपने ब्राउज़र की सेटिंग्स में डिफ़ॉल्ट फ़ॉन्ट साइज़ को 16px से बढ़ाकर 24px कर लेता है, तो \`rem\` में दी गई सभी साइज अपने आप अनुपातिक रूप से बड़ी हो जाएंगी! \`px\` का उपयोग करने से यूज़र की इन सेटिंग्स का कोई असर नहीं होता।

---

### 2. व्यूपोर्ट इकाइयाँ: \`vw\` और \`vh\`
व्यूपोर्ट इकाइयाँ किसी एलिमेंट को ब्राउज़र स्क्रीन (Viewport) के कुल आकार के प्रतिशत के रूप में नापती हैं:
* **\`1vw\`** = कुल व्यूपोर्ट **चौड़ाई (Width)** का 1%। (जैसे \`50vw\` स्क्रीन की ठीक आधी चौड़ाई होती है)।
* **\`1vh\`** = कुल व्यूपोर्ट **ऊंचाई (Height)** का 1%।
* **\`100vh\`** = स्क्रीन की पूरी 100% ऊंचाई! फुल-स्क्रीन बैनर बनाने के लिए यह सबसे परफेक्ट है।

---

### 3. रेस्पॉन्सिव डिज़ाइन की सबसे बड़ी ताकत: \`clamp()\`

सोचिए अगर आप चाहते हैं कि एक हेडिंग स्क्रीन के हिसाब से छोटी-बड़ी हो, लेकिन वह फोन पर कभी भी **1.5rem से छोटी न हो**, और बड़े डेस्कटॉप मॉनिटर पर कभी भी **3.5rem से बड़ी न हो**?

फ़ॉन्ट साइज़ के लिए बार-बार मीडिया क्वेरीज लिखने के बजाय, मॉडर्न CSS हमें जादुई **\`clamp()\`** फंक्शन देता है!

\`\`\`css
/* सिंटैक्स: clamp(न्यूनतम सीमा, पसंदीदा फ्लुइड वैल्यू, अधिकतम सीमा) */
h1 {
  font-size: clamp(1.5rem, 5vw, 3.5rem);
}
\`\`\`

#### clamp() कैसे काम करता है?
1. ब्राउज़र आपकी पसंदीदा फ्लुइड वैल्यू (\`5vw\`) को चेक करता है जो स्क्रीन बदलने पर लगातार बदलती है।
2. अगर फोन पर \`5vw\` सिकुड़ते हुए \`1.5rem\` से नीचे जाने लगता है, तो ब्राउज़र उसे वहीं रोक देता है और लॉक करके **\`1.5rem\`** ही रखता है।
3. अगर बड़ी स्क्रीन पर \`5vw\` फैलते हुए \`3.5rem\` से ऊपर जाने लगता है, तो वह वहीं लॉक होकर **\`3.5rem\`** पर रुक जाता है।

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="hero-section">\n  <h1 class="fluid-title">Fluid Typography with clamp()!</h1>\n  <p class="fluid-desc">This heading dynamically scales based on screen width (using 5vw), but is strictly locked between 1.5rem (minimum) and 3.5rem (maximum)!</p>\n  <div class="vw-box">I am exactly 80vw (80% of viewport width) wide!</div>\n</div>`,
          css: `body { font-family: sans-serif; margin: 0; padding: 0; background: #1e272e; color: white; }\n\n.hero-section {\n  /* Minimum height of 80% of screen height! */\n  min-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 20px;\n  box-sizing: border-box;\n}\n\n/* THE CLAMP MAGIC: NO MEDIA QUERIES NEEDED! */\n.fluid-title {\n  font-size: clamp(1.5rem, 5vw, 3.5rem);\n  color: #00d8d6;\n  margin-bottom: 10px;\n  line-height: 1.2;\n}\n\n.fluid-desc {\n  font-size: clamp(1rem, 2vw, 1.25rem);\n  max-width: 600px;\n  color: #d2dae2;\n  margin-bottom: 30px;\n}\n\n.vw-box {\n  width: 80vw; /* 80% of browser window width */\n  background: #ff3f34;\n  padding: 15px;\n  border-radius: 8px;\n  font-weight: bold;\n}`
        }
      ]
    }
  ]
};

export const chapter12Quiz = [
  {
    id: "q1",
    question_en: "Why is the '<meta name=\"viewport\" ...>' tag absolutely mandatory in modern web development?",
    question_hi: "मॉडर्न वेब डेवलपमेंट में '<meta name=\"viewport\" ...>' टैग लगाना पूरी तरह से अनिवार्य क्यों है?",
    options_en: [
      "It makes CSS animations run at 60 frames per second.",
      "Without it, mobile browsers will assume the site is designed for desktop and shrink the entire page down to make text unreadably small.",
      "It automatically converts CSS Flexbox layouts into CSS Grid.",
      "It changes the browser's background color to white."
    ],
    options_hi: [
      "यह CSS एनिमेशन को 60 फ्रेम प्रति सेकंड की गति से चलाता है।",
      "इसके बिना, मोबाइल ब्राउज़र यह मान लेते हैं कि साइट डेस्कटॉप के लिए बनी है और पूरे पेज को सिकोड़ देते हैं जिससे अक्षर पढ़ने लायक नहीं रहते।",
      "यह अपने आप CSS Flexbox लेआउट को CSS Grid में बदल देता है।",
      "यह ब्राउज़र के बैकग्राउंड कलर को सफेद कर देता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q2",
    question_en: "What does the media query rule '@media (max-width: 768px)' mean?",
    question_hi: "मीडिया क्वेरी नियम '@media (max-width: 768px)' का क्या अर्थ है?",
    options_en: [
      "The CSS rules inside will only apply if the screen width is exactly 768px.",
      "The CSS rules inside will apply to all screens that are 768px wide OR SMALLER.",
      "The CSS rules inside will apply to all screens that are 768px wide OR LARGER.",
      "The website's maximum height is locked at 768px."
    ],
    options_hi: [
      "इसके अंदर के CSS नियम केवल तभी लागू होंगे जब स्क्रीन की चौड़ाई ठीक 768px होगी।",
      "इसके अंदर के CSS नियम उन सभी स्क्रीन पर लागू होंगे जिनकी चौड़ाई 768px या उससे कम (smaller) होगी।",
      "इसके अंदर के CSS नियम उन सभी स्क्रीन पर लागू होंगे जिनकी चौड़ाई 768px या उससे अधिक (larger) होगी।",
      "वेबसाइट की अधिकतम ऊंचाई 768px पर लॉक हो जाएगी।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q3",
    question_en: "What is the core difference between 'Mobile-First' and 'Desktop-First' responsive architecture?",
    question_hi: "'Mobile-First' और 'Desktop-First' रेस्पॉन्सिव आर्किटेक्चर के बीच मुख्य अंतर क्या है?",
    options_en: [
      "Mobile-First uses 'min-width' queries to scale up from small screens, while Desktop-First uses 'max-width' queries to shrink down from large screens.",
      "Mobile-First sites do not work on desktop computers.",
      "Desktop-First sites load faster on mobile phones than Mobile-First sites.",
      "Mobile-First requires JavaScript, whereas Desktop-First uses pure CSS."
    ],
    options_hi: [
      "Mobile-First छोटी स्क्रीन से शुरुआत करके बड़ी स्क्रीन के लिए 'min-width' का उपयोग करता है, जबकि Desktop-First बड़ी स्क्रीन से शुरुआत करके 'max-width' का उपयोग करता है।",
      "Mobile-First वेबसाइटें डेस्कटॉप कंप्यूटर पर काम नहीं करती हैं।",
      "Desktop-First वेबसाइटें मोबाइल पर Mobile-First वेबसाइटों की तुलना में तेज़ लोड होती हैं।",
      "Mobile-First के लिए JavaScript चाहिए, जबकि Desktop-First में केवल CSS लगता है।"
    ],
    correctAnswerIndex: 0
  },
  {
    id: "q4",
    question_en: "If the root <html> font-size is set to the browser default of 16px, how many pixels does '2.5rem' represent?",
    question_hi: "यदि मुख्य <html> फ़ॉन्ट साइज़ ब्राउज़र के डिफ़ॉल्ट 16px पर सेट है, तो '2.5rem' कितने पिक्सेल (px) के बराबर होगा?",
    options_en: [
      "25px",
      "32px",
      "40px",
      "48px"
    ],
    options_hi: [
      "25px",
      "32px",
      "40px (16px * 2.5 = 40px)",
      "48px"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q5",
    question_en: "What does the unit '1vw' represent in CSS?",
    question_hi: "CSS में '1vw' यूनिट का क्या मतलब होता है?",
    options_en: [
      "1% of the total Viewport Width",
      "1% of the total Viewport Height",
      "1 pixel on vertical widescreen monitors",
      "1 times the width of the parent container"
    ],
    options_hi: [
      "कुल व्यूपोर्ट चौड़ाई (Viewport Width) का 1%",
      "कुल व्यूपोर्ट ऊंचाई (Viewport Height) का 1%",
      "वर्टिकल वाइडस्क्रीन मॉनिटर पर 1 पिक्सेल",
      "पैरेंट कंटेनर की चौड़ाई का 1 गुना"
    ],
    correctAnswerIndex: 0
  },
  {
    id: "q6",
    question_en: "Why is using 'max-width: 100%; height: auto;' considered a best practice for responsive images?",
    question_hi: "रेस्पॉन्सिव इमेज के लिए 'max-width: 100%; height: auto;' का उपयोग करना सबसे बेहतरीन नियम क्यों माना जाता है?",
    options_en: [
      "It makes the image download 10 times faster.",
      "It ensures the image shrinks proportionally to fit inside smaller containers without ever stretching or overflowing.",
      "It converts JPEG images into modern WebP format automatically.",
      "It adds a border around the image on mobile devices."
    ],
    options_hi: [
      "यह इमेज को 10 गुना तेज़ी से डाउनलोड करवाता है।",
      "यह सुनिश्चित करता है कि इमेज बिना फटे या स्क्रीन से बाहर निकले (overflow), छोटे कंटेनर में फिट होने के लिए अनुपातिक रूप से सिकुड़ जाए।",
      "यह अपने आप JPEG इमेज को मॉडर्न WebP फॉर्मेट में बदल देता है।",
      "यह मोबाइल उपकरणों पर इमेज के चारों ओर एक बॉर्डर जोड़ देता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q7",
    question_en: "What are the three mandatory arguments required by the modern CSS 'clamp()' function?",
    question_hi: "मॉडर्न CSS 'clamp()' फंक्शन में किन तीन अनिवार्य वैल्यूज (arguments) का होना ज़रूरी होता है?",
    options_en: [
      "clamp(color, size, weight)",
      "clamp(minimum_value, preferred_fluid_value, maximum_value)",
      "clamp(mobile_width, tablet_width, desktop_width)",
      "clamp(start_position, middle_position, end_position)"
    ],
    options_hi: [
      "clamp(color, size, weight)",
      "clamp(न्यूनतम वैल्यू, पसंदीदा फ्लुइड वैल्यू, अधिकतम वैल्यू)",
      "clamp(mobile_width, tablet_width, desktop_width)",
      "clamp(start_position, middle_position, end_position)"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q8",
    question_en: "Which CSS unit is measured relative to the font-size of the element's direct PARENT container, rather than the root <html> tag?",
    question_hi: "कौन सी CSS यूनिट मुख्य <html> टैग के बजाय एलिमेंट के सीधे पैरेंट (Parent) कंटेनर के फ़ॉन्ट साइज़ के सापेक्ष नापी जाती है?",
    options_en: [
      "rem",
      "em",
      "vw",
      "vh"
    ],
    options_hi: [
      "rem",
      "em (क्योंकि em अपने पैरेंट पर निर्भर करता है, जबकि rem हमेशा root <html> पर)",
      "vw",
      "vh"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q9",
    question_en: "What is a 'Breakpoint' in the context of Responsive Web Design?",
    question_hi: "रेस्पॉन्सिव वेब डिज़ाइन के संदर्भ में 'Breakpoint (ब्रेकप्वाइंट)' क्या होता है?",
    options_en: [
      "A JavaScript bug that crashes the browser.",
      "The exact screen pixel width at which a media query triggers and reorganizes the website's layout.",
      "A CSS rule that deletes old code.",
      "The point where an internet connection slows down."
    ],
    options_hi: [
      "एक JavaScript बग जो ब्राउज़र को क्रैश कर देता है।",
      "स्क्रीन की वह निश्चित चौड़ाई (pixels में) जहाँ मीडिया क्वेरी एक्टिवेट होती है और वेबसाइट के लेआउट को बदल देती है।",
      "एक CSS नियम जो पुराने कोड को डिलीट कर देता है।",
      "वह बिंदु जहाँ इंटरनेट कनेक्शन धीमा हो जाता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q10",
    question_en: "How can you apply a media query only when a mobile phone or tablet is rotated into landscape mode?",
    question_hi: "जब किसी मोबाइल फोन या टैबलेट को घुमाकर landscape (चौड़े) मोड में किया जाए, तो केवल तभी मीडिया क्वेरी लागू करने के लिए किस सिंटैक्स का उपयोग किया जाता है?",
    options_en: [
      "@media (view: landscape)",
      "@media (orientation: landscape)",
      "@media (rotate: 90deg)",
      "@media (screen-mode: wide)"
    ],
    options_hi: [
      "@media (view: landscape)",
      "@media (orientation: landscape)",
      "@media (rotate: 90deg)",
      "@media (screen-mode: wide)"
    ],
    correctAnswerIndex: 1
  }
];

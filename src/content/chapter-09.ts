export const chapter09 = {
  id: "ch9",
  title_en: "Chapter 9: Display, Positioning & z-index",
  title_hi: "अध्याय 9: डिस्प्ले, पोजिशनिंग और z-index (लेआउट के मूल नियम)",
  topics: [
    {
      id: "t9-1",
      title_en: "The Display Property (Block, Inline & Inline-Block)",
      title_hi: "डिस्प्ले प्रॉपर्टी (Block, Inline और Inline-Block का अंतर)",
      content_en: `### Controlling How Elements Behave in the Document Flow

Every HTML element has a default **\`display\`** property value depending on what type of element it is. The \`display\` property is the most fundamental layout property in CSS—it dictates how an element sits on the page and how it interacts with its siblings.

---

### The 4 Main Display Values

#### 1. \`display: block;\` (The Stacking Boxes)
Block-level elements always start on a **new line** and stretch out to take up the **full width** available to them (like a brick wall). You can easily set their \`width\` and \`height\`.
* *Common Block Elements:* \`<div>\`, \`<h1>\` to \`<h6>\`, \`<p>\`, \`<section>\`, \`<header>\`

#### 2. \`display: inline;\` (The Flowing Words)
Inline elements do not start on a new line. They only take up as much width as their actual content requires, sitting side-by-side like words in a sentence.
* **Important Limitation:** You **cannot** set \`width\` or \`height\` on an inline element! Top and bottom margins/paddings also won't push surrounding elements away properly.
* *Common Inline Elements:* \`<span>\`, \`<a>\`, \`<strong>\`, \`<em>\`

#### 3. \`display: inline-block;\` (The Best of Both Worlds)
This is a hybrid superpower! The element sits side-by-side in the same line like an \`inline\` element, BUT it respects your \`width\`, \`height\`, \`padding\`, and \`margin\` exactly like a \`block\` element!
* *Perfect for:* Navigation buttons, badges, card grids.

#### 4. \`display: none;\` vs \`visibility: hidden;\`
* **\`display: none;\`**: Completely removes the element from the page. It takes up **zero space** (as if it was deleted from HTML).
* **\`visibility: hidden;\`**: Makes the element invisible, but it **still occupies its original physical space** on the page (like an invisible ghost).

[[SANDBOX_0]]`,
      content_hi: `### एलिमेंट्स वेबपेज पर कैसे बैठेंगे, यह तय करें!

हर HTML एलिमेंट की अपनी एक डिफ़ॉल्ट **\`display\`** प्रॉपर्टी होती है। CSS में लेआउट बनाने के लिए यह सबसे महत्वपूर्ण प्रॉपर्टी है—यही तय करती है कि कोई एलिमेंट स्क्रीन पर पूरी जगह घेरेगा, या सिर्फ अपनी जरूरत भर की जगह लेकर दूसरों के साथ एक ही लाइन में चिपक कर बैठेगा।

---

### डिस्प्ले की 4 मुख्य वैल्यूज (सबसे महत्वपूर्ण अंतर)

#### 1. \`display: block;\` (पूरी लाइन घेरने वाले बॉक्स)
ब्लॉक एलिमेंट्स हमेशा एक **नई लाइन (New Line)** से शुरू होते हैं और स्क्रीन पर जितनी चौड़ाई (width) मिलती है, उसे **पूरा 100% घेर लेते हैं**। आप इनकी चौड़ाई (\`width\`) और ऊंचाई (\`height\`) अपनी मर्जी से सेट कर सकते हैं।
* *उदाहरण:* \`<div>\`, \`<h1>\` से \`<h6>\`, \`<p>\`, \`<section>\`

#### 2. \`display: inline;\` (टेक्स्ट की तरह बहने वाले)
इनलाइन एलिमेंट्स नई लाइन से शुरू नहीं होते। वे सिर्फ उतनी ही चौड़ाई लेते हैं जितना उनके अंदर लिखा हुआ टेक्स्ट होता है।
* **सबसे बड़ी सीमा (Limitation):** आप किसी इनलाइन एलिमेंट पर \`width\` या \`height\` सेट **नहीं कर सकते**! इस पर ऊपर और नीचे का मार्जिन/पैडिंग भी ठीक से काम नहीं करता।
* *उदाहरण:* \`<span>\`, \`<a>\`, \`<strong>\`

#### 3. \`display: inline-block;\` (दोनों का जादुई संगम)
यह सबसे काम की हाइब्रिड प्रॉपर्टी है! यह एलिमेंट स्क्रीन पर \`inline\` की तरह एक ही लाइन में अगल-बगल बैठता है, **लेकिन** \`block\` की तरह आपकी दी हुई \`width\`, \`height\` और पैडिंग/मार्जिन को 100% मानता है!
* *कहाँ काम आता है:* नेविगेशन बार के बटन, बैज (badges), या एक लाइन में 3-4 कार्ड्स दिखाने के लिए।

#### 4. \`display: none;\` बनाम \`visibility: hidden;\` (गायब करने के दो तरीके)
* **\`display: none;\`**: यह एलिमेंट को पेज से **पूरी तरह खत्म (remove)** कर देता है। वह स्क्रीन पर **जीरो स्पेस (0 space)** लेता है, मानो HTML से डिलीट ही कर दिया गया हो।
* **\`visibility: hidden;\`**: यह एलिमेंट को सिर्फ आंखों से ओझल (invisible) करता है, लेकिन वह पेज पर अपनी **पूरी जगह घेर कर रखता है** (एक अदृश्य भूत की तरह)!

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="container">\n  <div class="box block-box">1. I am display: BLOCK (I take full width & start on a new line)</div>\n  \n  <span class="box inline-box">2. I am INLINE</span>\n  <span class="box inline-box">I sit next to my neighbor!</span>\n  \n  <div class="space-break"></div>\n\n  <div class="box ib-box">3. INLINE-BLOCK (Box A)</div>\n  <div class="box ib-box">INLINE-BLOCK (Box B)</div>\n  <div class="box ib-box">INLINE-BLOCK (Box C)</div>\n</div>`,
          css: `body { font-family: sans-serif; background: #f4f6f9; padding: 15px; }\n.box { padding: 12px; margin: 6px 0; font-weight: bold; color: white; border-radius: 6px; text-align: center; }\n\n/* 1. Block takes full width */\n.block-box {\n  display: block;\n  background-color: #e74c3c;\n}\n\n/* 2. Inline only takes content width, ignores height! */\n.inline-box {\n  display: inline;\n  background-color: #3498db;\n  /* Try changing width below - notice it will be ignored! */\n  width: 300px;\n}\n\n.space-break { margin-top: 25px; }\n\n/* 3. Inline-block sits side-by-side AND respects custom width/height */\n.ib-box {\n  display: inline-block;\n  background-color: #27ae60;\n  width: 150px;\n  height: 60px;\n  line-height: 35px;\n  margin-right: 10px;\n}`
        }
      ]
    },
    {
      id: "t9-2",
      title_en: "CSS Positioning (Static, Relative & Absolute)",
      title_hi: "CSS पोजिशनिंग (Static, Relative और Absolute का रहस्य)",
      content_en: `### Breaking Out of the Normal Document Flow

By default, the browser places elements one after another from top to bottom, left to right. This is called the **Normal Document Flow**. But what if you want to place a badge exactly on the top-right corner of a card? Or overlay text on top of an image?

We use the **\`position\`** property along with coordinate properties (**\`top\`**, **\`right\`**, **\`bottom\`**, **\`left\`**) to place elements exactly where we want them!

---

### 1. \`position: static;\` (The Default)
Every element is \`static\` by default. It means the element follows the normal flow of the page. *Important: Coordinate properties (\`top\`, \`left\`, etc.) and \`z-index\` have zero effect on static elements!*

---

### 2. \`position: relative;\` (Relative to Itself)
The element remains in the normal document flow, BUT you can now nudge it around using \`top\`, \`right\`, \`bottom\`, or \`left\`. 
* **The Magic:** When you nudge a relative element, it moves, but **it leaves behind an empty space** where it originally used to sit. Other elements will not fill that empty gap!

---

### 3. \`position: absolute;\` (The Free Spirit)
When an element is made \`absolute\`, two major things happen:
1. It is completely **removed from the normal document flow**. It leaves no empty space behind—other elements act as if it doesn't exist!
2. It can be positioned anywhere using coordinates.

#### The Golden Rule of Absolute Positioning:
An \`absolute\` element positions itself relative to its **nearest positioned ancestor** (any parent that has \`position: relative\`, \`absolute\`, or \`fixed\`). 

If it cannot find any positioned parent, it will position itself relative to the entire webpage (\`<html>\` / viewport)!

\`\`\`css
/* THE GOLDEN PARENT-CHILD PATTERN IN INDUSTRY */
.card-container {
  position: relative; /* 1. Make the parent Relative */
}

.discount-badge {
  position: absolute; /* 2. Make the child Absolute */
  top: 10px;          /* 3. Place exactly 10px from top-right corner of the card */
  right: 10px;
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### नॉर्मल डॉक्यूमेंट फ्लो से बाहर निकलें और मर्जी से जगह चुनें!

डिफ़ॉल्ट रूप से ब्राउज़र सभी एलिमेंट्स को एक के बाद एक ऊपर से नीचे और बाएं से दाएं सजाता है। इसे **Normal Document Flow** कहते हैं। लेकिन सोचिए, अगर आपको किसी फोटो के ठीक ऊपर एक छोटा सा "NEW" बैज चिपकाना हो, या किसी कार्ड के कोने में डिस्काउंट टैग लगाना हो, तो क्या करेंगे?

इसके लिए हम **\`position\`** प्रॉपर्टी के साथ कोऑर्डिनेट्स (**\`top\`**, **\`right\`**, **\`bottom\`**, **\`left\`**) का उपयोग करके एलिमेंट को स्क्रीन पर अपनी मर्जी से कहीं भी बैठाते हैं!

---

### 1. \`position: static;\` (डिफ़ॉल्ट स्थिति)
पेज का हर एलिमेंट डिफ़ॉल्ट रूप से \`static\` होता है। इसका मतलब है कि वह ब्राउज़र के सामान्य नियम से ही चलेगा। *ध्यान दें: static एलिमेंट्स पर \`top\`, \`left\` या \`z-index\` जैसी प्रॉपर्टीज का कोई असर नहीं होता!*

---

### 2. \`position: relative;\` (अपनी ही पुरानी जगह से खिसकना)
यह एलिमेंट पेज के नॉर्मल फ्लो में ही रहता है, **लेकिन** अब आप इसे \`top\`, \`left\` आदि देकर अपनी असली जगह से थोड़ा खिसका सकते हैं।
* **सबसे खास बात:** जब आप relative एलिमेंट को खिसकाते हैं, तो वह खिसक तो जाता है, लेकिन अपनी **पुरानी जगह पर एक खाली स्पेस (gap) छोड़ देता है**। दूसरे एलिमेंट्स उस खाली जगह को नहीं भरते!

---

### 3. \`position: absolute;\` (पूरी तरह आज़ाद परिंदा)
जब आप किसी एलिमेंट को \`absolute\` बनाते हैं, तो दो बड़े बदलाव होते हैं:
1. वह नॉर्मल फ्लो से **पूरी तरह बाहर निकल जाता है**। वह अपनी पुरानी जगह पर कोई खाली स्पेस नहीं छोड़ता—बाकी एलिमेंट्स ऐसा व्यवहार करते हैं जैसे वह गायब हो गया हो!
2. अब आप इसे स्क्रीन पर कहीं भी उड़ाकर रख सकते हैं।

#### Absolute Positioning का गोल्डन नियम (इंडस्ट्री का सबसे जरूरी सीक्रेट):
एक \`absolute\` एलिमेंट हमेशा अपने उस **पैरेंट (पिता/कंटेनर)** के हिसाब से अपनी जगह तय करता है जिस पर \`position: relative\` लगा हो! 

अगर उसे कोई ऐसा पैरेंट नहीं मिलता, तो वह सीधे पूरे वेबपेज (\`<html>\`) के कोने को अपना बेस मानकर बैठ जाता है!

\`\`\`css
/* इंडस्ट्री में सबसे ज़्यादा इस्तेमाल होने वाला गोल्डन पैटर्न */
.card-container {
  position: relative; /* 1. पैरेंट को हमेशा Relative बनाएं */
}

.discount-badge {
  position: absolute; /* 2. बच्चे को Absolute बनाएं */
  top: 10px;          /* 3. अब यह बैज कार्ड के कोने से 10px नीचे और बाएं चिपकेगा */
  right: 10px;
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="card-parent">\n  <h3>Shopping Product Card</h3>\n  <p>Notice the red badge inside the top-right corner of this card! It is positioned absolutely relative to this parent box.</p>\n  \n  <div class="badge-child">50% OFF</div>\n</div>\n\n<div class="relative-demo">I am position: RELATIVE (Nudged down by 15px without breaking others)</div>`,
          css: `body { font-family: sans-serif; padding: 20px; }\n\n/* GOLDEN RULE: Parent is Relative */\n.card-parent {\n  position: relative;\n  background: #fff;\n  border: 2px solid #2f3542;\n  padding: 30px;\n  border-radius: 10px;\n  max-width: 400px;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.1);\n}\n\n/* GOLDEN RULE: Child is Absolute */\n.badge-child {\n  position: absolute;\n  top: -12px;  /* Slightly overlapping the top border */\n  right: 15px; /* Exactly 15px from the right edge */\n  background: #ff4757;\n  color: white;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-weight: bold;\n  font-size: 14px;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.2);\n}\n\n.relative-demo {\n  position: relative;\n  top: 25px; /* Nudged down from its original location */\n  background: #ffa502;\n  color: white;\n  padding: 15px;\n  margin-top: 20px;\n  font-weight: bold;\n  border-radius: 6px;\n}`
        }
      ]
    },
    {
      id: "t9-3",
      title_en: "Fixed & Sticky Positioning + Layering with z-index",
      title_hi: "Fixed और Sticky पोजिशनिंग + z-index से लेयरिंग (3D गहराई)",
      content_en: `### Creating Sticky Navbars & Floating Buttons

We have two special modern positioning values that respond directly to the user scrolling the webpage:

#### 1. \`position: fixed;\` (Locked to the Screen)
A fixed element is removed from the document flow and locks itself to the **Viewport (the browser screen itself)**. Even if you scroll down a 10,000-pixel page, a fixed element will never move an inch!
* *Perfect for:* Floating WhatsApp chat buttons on the bottom-right, or permanent header navigation bars.

#### 2. \`position: sticky;\` (The Hybrid Chameleon)
This is an amazing modern CSS feature! An element with \`position: sticky\` acts like a normal \`relative\` element until you scroll past it. The exact moment its specified coordinate (e.g., \`top: 0px\`) touches the edge of your screen during scrolling, it instantly transforms into a \`fixed\` element and sticks to the top!
* *Perfect for:* Alphabetical table headers or sub-navigation bars.

---

### Managing Depth in 3D Space: The \`z-index\` Property

When you start using positioning, elements will inevitably overlap each other. By default, whichever element appears later in the HTML code sits on top of earlier elements.

To control which element stays in the foreground and which stays in the background, we use **\`z-index\`**. Think of it as controlling the **Z-axis (depth)**:

* Higher numbers (\`z-index: 10\`, \`100\`, \`999\`) bring the element **forward to the top**.
* Lower or negative numbers (\`z-index: -1\`) push the element **backward behind others**.

#### 🚨 THE MOST COMMON Z-INDEX BUG IN CSS:
**\`z-index\` ONLY works on elements that have a positioning property set (\`relative\`, \`absolute\`, \`fixed\`, or \`sticky\`, or flex/grid children)!** If your element is still \`position: static\` (default), adding \`z-index: 9999\` will do absolutely nothing!

\`\`\`css
/* Bring a modal overlay to the very top layer */
.modal-overlay {
  position: fixed; /* 1. Must be positioned! */
  top: 0;
  left: 0;
  z-index: 1000;   /* 2. Higher value guarantees it sits above normal content */
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### स्क्रीन पर चिपकने वाले नेविगेशन बार और फ्लोटिंग बटन बनाएं!

हमारे पास दो ऐसी आधुनिक पोजिशनिंग प्रॉपर्टीज हैं जो यूजर के पेज स्क्रॉल करने पर अपना कमाल दिखाती हैं:

#### 1. \`position: fixed;\` (स्क्रीन पर लॉक हो जाना)
फिक्स्ड एलिमेंट नॉर्मल फ्लो से बाहर निकलकर सीधे आपकी **ब्राउज़र स्क्रीन (Viewport)** पर फेविकोल की तरह चिपक जाता है! चाहे आप पेज को कितना भी नीचे स्क्रॉल (scroll) कर लें, यह एलिमेंट अपनी जगह से एक इंच भी नहीं हिलेगा।
* *कहाँ काम आता है:* स्क्रीन के नीचे कोने में दिखने वाला WhatsApp चैट बटन या हमेशा ऊपर दिखने वाला हेडर बार।

#### 2. \`position: sticky;\` (स्मार्ट हाइब्रिड तरीका)
यह CSS का एक बेहतरीन मॉडर्न फीचर है! जब तक आप पेज स्क्रॉल नहीं करते, तब तक यह एक नॉर्मल \`relative\` एलिमेंट की तरह शांति से अपनी जगह बैठा रहता है। लेकिन जैसे ही आप स्क्रॉल करते हुए उस तक पहुंचते हैं और वह स्क्रीन के टॉप (\`top: 0px\`) से टकराता है, वह तुरंत \`fixed\` बनकर स्क्रीन के ऊपरी हिस्से पर चिपक जाता है!
* *कहाँ काम आता है:* टेबल के हेडर या वेबसाइट के सब-मेन्यू बार में।

---

### एलिमेंट्स को एक के ऊपर एक सजाना: \`z-index\` का जादू!

जब आप पोजिशनिंग का इस्तेमाल करते हैं, तो अक्सर दो एलिमेंट्स आपस में एक-दूसरे के ऊपर चढ़ जाते हैं (overlap होते हैं)। डिफ़ॉल्ट रूप से जो एलिमेंट HTML कोड में नीचे लिखा होता है, वह ऊपर दिखाई देता है।

कौन सा एलिमेंट ऊपर (foreground) दिखेगा और कौन सा नीचे (background) दब जाएगा, यह कंट्रोल करने के लिए हम **\`z-index\`** का उपयोग करते हैं:

* बड़ा नंबर (\`z-index: 10\`, \`100\`, \`999\`) एलिमेंट को **सबसे ऊपर (सामने)** ले आता है।
* छोटा या नेगेटिव नंबर (\`z-index: -1\`) एलिमेंट को **पीछे (background)** धकेल देता है।

#### 🚨 CSS में डेवलपर्स से होने वाली सबसे बड़ी गलती:
**\`z-index\` केवल उन्हीं एलिमेंट्स पर काम करता है जिन पर कोई पोजिशनिंग सेट हो (\`relative\`, \`absolute\`, \`fixed\`, या \`sticky\`)!** अगर आपका एलिमेंट डिफ़ॉल्ट \`position: static\` पर है, तो उस पर \`z-index: 9999\` लगाने का भी कोई फायदा नहीं होगा!

\`\`\`css
/* किसी पॉपअप मॉडल को स्क्रीन के सबसे ऊपर दिखाने के लिए */
.modal-overlay {
  position: fixed; /* 1. पोजिशनिंग होना अनिवार्य है! */
  top: 0;
  left: 0;
  z-index: 1000;   /* 2. बड़ा नंबर यह तय करता है कि यह सबसे ऊपर दिखेगा */
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="sticky-bar">I am position: STICKY (Scroll down inside this box to see me stick to the top!)</div>\n\n<div class="scroll-content">\n  <p>Keep scrolling down...</p>\n  \n  \n  <div class="z-container">\n    <div class="card box-back">z-index: 1 (Back Layer)</div>\n    <div class="card box-middle">z-index: 5 (Middle Layer)</div>\n    <div class="card box-top">z-index: 10 (Top Layer)</div>\n  </div>\n\n  <p style="margin-top: 150px;">More scrolling content below to make the page scrollable...</p>\n  <p>Notice how the sticky bar at the top never leaves the screen once you scroll past it?</p>\n</div>`,
          css: `/* Making sandbox scrollable to demonstrate Sticky */\nbody { font-family: sans-serif; height: 400px; margin: 0; padding: 10px; }\n\n/* 1. Sticky Bar */\n.sticky-bar {\n  position: sticky;\n  top: 0; /* Sticks exactly at top edge of viewport when scrolled to */\n  background: #2c3e50;\n  color: #f1c40f;\n  padding: 12px;\n  font-weight: bold;\n  text-align: center;\n  border-radius: 4px;\n  z-index: 100; /* Stays above cards while scrolling */\n  box-shadow: 0 4px 6px rgba(0,0,0,0.15);\n}\n\n.scroll-content { padding: 20px; }\n\n/* 2. Z-Index Layering Demo */\n.z-container {\n  position: relative;\n  height: 200px;\n  margin-top: 20px;\n}\n\n.card {\n  position: absolute; /* REQUIRED for z-index to work! */\n  width: 200px;\n  height: 80px;\n  padding: 15px;\n  color: white;\n  font-weight: bold;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.box-back {\n  background: #95a5a6;\n  top: 10px;\n  left: 10px;\n  z-index: 1; /* Lowest value = bottom layer */\n}\n\n.box-middle {\n  background: #e67e22;\n  top: 40px;\n  left: 50px;\n  z-index: 5;\n}\n\n.box-top {\n  background: #8e44ad;\n  top: 70px;\n  left: 90px;\n  z-index: 10; /* Highest value = top layer */\n}`
        }
      ]
    }
  ]
};

export const chapter09Quiz = [
  {
    id: "q1",
    question_en: "Which display property value allows an element to sit side-by-side in the same line with other elements, while also allowing you to set custom width and height?",
    question_hi: "कौन सी डिस्प्ले प्रॉपर्टी वैल्यू किसी एलिमेंट को दूसरों के साथ एक ही लाइन में अगल-बगल बैठने की अनुमति देती है, और साथ ही आपको उस पर चौड़ाई (width) और ऊंचाई (height) सेट करने की भी सुविधा देती है?",
    options_en: [
      "display: block;",
      "display: inline;",
      "display: inline-block;",
      "display: flex;"
    ],
    options_hi: [
      "display: block;",
      "display: inline;",
      "display: inline-block;",
      "display: flex;"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q2",
    question_en: "What is the primary difference between 'display: none;' and 'visibility: hidden;'?",
    question_hi: "'display: none;' और 'visibility: hidden;' के बीच सबसे बड़ा और मुख्य अंतर क्या है?",
    options_en: [
      "display: none makes text bold, visibility: hidden changes colors.",
      "display: none removes the element and frees up its space; visibility: hidden makes it invisible but preserves its empty space.",
      "visibility: hidden removes the element completely from the document flow.",
      "There is no difference; both delete the element from HTML."
    ],
    options_hi: [
      "display: none टेक्स्ट को बोल्ड करता है, visibility: hidden रंग बदलता है।",
      "display: none एलिमेंट को पूरी तरह हटा देता है और उसकी जगह खाली कर देता है; visibility: hidden उसे अदृश्य करता है लेकिन उसकी खाली जगह को घेरे रखता है।",
      "visibility: hidden एलिमेंट को डॉक्यूमेंट फ्लो से पूरी तरह हटा देता है।",
      "कोई अंतर नहीं है; दोनों एलिमेंट को HTML से डिलीट कर देते हैं।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q3",
    question_en: "What is the default positioning property value for every standard HTML element created on a webpage?",
    question_hi: "वेबपेज पर बनने वाले हर सामान्य HTML एलिमेंट के लिए डिफ़ॉल्ट पोजिशनिंग (position) प्रॉपर्टी वैल्यू क्या होती है?",
    options_en: [
      "position: relative;",
      "position: absolute;",
      "position: static;",
      "position: fixed;"
    ],
    options_hi: [
      "position: relative;",
      "position: absolute;",
      "position: static;",
      "position: fixed;"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q4",
    question_en: "According to the industry golden rule, an element with 'position: absolute;' positions itself relative to what?",
    question_hi: "इंडस्ट्री के गोल्डन नियम के अनुसार, 'position: absolute;' वाला एलिमेंट किसके आधार पर (relative to what) अपनी जगह तय करता है?",
    options_en: [
      "The absolute previous sibling tag in HTML.",
      "Its nearest positioned ancestor (any parent with position: relative, absolute, fixed, or sticky).",
      "Always the bottom-right corner of the webpage.",
      "Only the <body> tag, regardless of any parent styling."
    ],
    options_hi: [
      "HTML में लिखे ठीक पहले वाले पड़ोसी (sibling) टैग के आधार पर।",
      "अपने सबसे करीबी पोजिशन वाले पैरेंट (कोई भी पैरेंट जिस पर relative, absolute, fixed या sticky लगा हो) के आधार पर।",
      "हमेशा वेबपेज के निचले-दाएं कोने के आधार पर।",
      "केवल <body> टैग के आधार पर, चाहे पैरेंट पर कोई भी स्टाइल क्यों न हो।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q5",
    question_en: "Which positioning value removes an element from the document flow and permanently locks it to the browser screen (viewport), so it never moves when scrolling?",
    question_hi: "कौन सी पोजिशनिंग वैल्यू किसी एलिमेंट को डॉक्यूमेंट फ्लो से बाहर निकालकर हमेशा के लिए ब्राउज़र स्क्रीन (viewport) पर लॉक कर देती है, ताकि स्क्रॉल करने पर भी वह कभी न हिले?",
    options_en: [
      "position: sticky;",
      "position: static;",
      "position: fixed;",
      "position: relative;"
    ],
    options_hi: [
      "position: sticky;",
      "position: static;",
      "position: fixed;",
      "position: relative;"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q6",
    question_en: "Why would setting 'z-index: 9999;' on a div completely fail to push it to the top layer above overlapping elements?",
    question_hi: "किसी div पर 'z-index: 9999;' सेट करने के बावजूद वह ओवरलैप होने वाले एलिमेंट्स के ऊपर (top layer) क्यों नहीं आता? इस नाकामी की सबसे आम वजह क्या है?",
    options_en: [
      "Because 9999 is too large of a number for browsers to process.",
      "Because z-index ONLY works on elements that have a positioning property applied (non-static elements).",
      "Because z-index only works on images, not divs.",
      "Because you must write 'z-index: top;' instead of numbers."
    ],
    options_hi: [
      "क्योंकि 9999 इतना बड़ा नंबर है कि ब्राउज़र इसे प्रोसेस नहीं कर सकता।",
      "क्योंकि z-index केवल उन्हीं एलिमेंट्स पर काम करता है जिन पर कोई पोजिशनिंग (non-static) प्रॉपर्टी सेट की गई हो।",
      "क्योंकि z-index केवल इमेज पर काम करता है, divs पर नहीं।",
      "क्योंकि आपको नंबरों के बजाय 'z-index: top;' लिखना होता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q7",
    question_en: "If you move an element using 'position: relative;' and 'top: 20px;', what happens to the original space it used to occupy?",
    question_hi: "यदि आप किसी एलिमेंट को 'position: relative;' और 'top: 20px;' देकर अपनी जगह से खिसकाते हैं, तो उसकी पुरानी खाली जगह (original space) का क्या होता है?",
    options_en: [
      "The empty space is completely removed and surrounding elements slide up to fill the gap.",
      "The original space is preserved and left empty; other elements will not slide into its old spot.",
      "The browser generates an automatic border around the empty space.",
      "The element gets duplicated into two boxes."
    ],
    options_hi: [
      "खाली जगह पूरी तरह खत्म हो जाती है और आस-पास के एलिमेंट्स ऊपर खिसक कर गैप भर देते हैं।",
      "पुरानी जगह सुरक्षित (empty gap) रहती है; दूसरे एलिमेंट्स उसकी पुरानी जगह पर नहीं खिसकते।",
      "ब्राउज़र खाली जगह के चारों ओर अपने आप एक बॉर्डर बना देता है।",
      "एलिमेंट दो बॉक्स में डुप्लीकेट (duplicate) हो जाता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q8",
    question_en: "How does 'position: sticky;' behave when a user scrolls down a webpage?",
    question_hi: "जब कोई यूजर वेबपेज को नीचे स्क्रॉल करता है, तो 'position: sticky;' कैसा व्यवहार करता है?",
    options_en: [
      "It acts like a normal relative element until it reaches a specified scroll coordinate (like top: 0), then acts like a fixed element and sticks to the screen.",
      "It makes the mouse cursor stick to the element.",
      "It scrolls much faster than the rest of the page.",
      "It immediately hides itself when scrolling starts."
    ],
    options_hi: [
      "यह तब तक एक सामान्य relative एलिमेंट की तरह रहता है जब तक कि यह तय की गई स्क्रॉल सीमा (जैसे top: 0) तक नहीं पहुंच जाता, फिर यह fixed बन कर स्क्रीन से चिपक जाता है।",
      "यह माउस कर्सर को एलिमेंट से चिपका देता है।",
      "यह बाकी पेज की तुलना में बहुत तेजी से स्क्रॉल होता है।",
      "स्क्रॉल शुरू होते ही यह तुरंत खुद को छिपा लेता है।"
    ],
    correctAnswerIndex: 0
  },
  {
    id: "q9",
    question_en: "Can you apply standard 'width' and 'height' properties to a pure 'display: inline;' element like a <span> or <a>?",
    question_hi: "क्या आप एक शुद्ध 'display: inline;' एलिमेंट जैसे <span> या <a> पर सामान्य 'width' (चौड़ाई) और 'height' (ऊंचाई) प्रॉपर्टीज लागू कर सकते हैं?",
    options_en: [
      "Yes, absolutely without any restrictions.",
      "No, inline elements ignore custom width and height properties completely.",
      "Only if you also add a background color.",
      "Yes, but only in Google Chrome."
    ],
    options_hi: [
      "हाँ, बिना किसी रुकावट के बिल्कुल कर सकते हैं।",
      "नहीं, इनलाइन एलिमेंट्स चौड़ाई (width) और ऊंचाई (height) प्रॉपर्टीज को पूरी तरह नज़रअंदाज़ कर देते हैं।",
      "केवल तभी जब आप कोई बैकग्राउंड कलर भी जोड़ें।",
      "हाँ, लेकिन केवल Google Chrome ब्राउज़र में।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q10",
    question_en: "If two overlapping absolutely positioned cards both have 'z-index' applied, Card A has 'z-index: 2;' and Card B has 'z-index: 10;', which card will be visible on top in the foreground?",
    question_hi: "यदि दो ओवरलैप होने वाले absolute कार्ड्स पर 'z-index' लगाया गया है, कार्ड A का 'z-index: 2;' है और कार्ड B का 'z-index: 10;' है, तो कौन सा कार्ड सबसे ऊपर (सामने) दिखाई देगा?",
    options_en: [
      "Card A, because smaller numbers are prioritized in CSS.",
      "Card B, because a higher z-index value brings the element forward on the Z-axis depth scale.",
      "They will blend together in transparency.",
      "Neither, the browser will throw an overlapping error."
    ],
    options_hi: [
      "कार्ड A, क्योंकि CSS में छोटे नंबरों को प्राथमिकता दी जाती है।",
      "कार्ड B, क्योंकि बड़ी z-index वैल्यू एलिमेंट को Z-एक्सिस (गहराई) में सबसे आगे/ऊपर ले आती है।",
      "वे ट्रांसपेरेंसी में आपस में मिल जाएंगे।",
      "कोई भी नहीं, ब्राउज़र ओवरलैप का एरर (error) दिखाएगा।"
    ],
    correctAnswerIndex: 1
  }
];

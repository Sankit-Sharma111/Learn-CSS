export const chapter11 = {
  id: "ch11",
  title_en: "Chapter 11: CSS Grid Layout (The 2D Grid System)",
  title_hi: "अध्याय 11: CSS ग्रिड लेआउट (2D ग्रिड सिस्टम का पूरा ज्ञान)",
  topics: [
    {
      id: "t11-1",
      title_en: "Introduction to CSS Grid vs Flexbox (1D vs 2D)",
      title_hi: "CSS Grid का परिचय: Flexbox (1D) बनाम Grid (2D) का अंतर",
      content_en: `### Why Do We Need CSS Grid When We Have Flexbox?

While Flexbox is incredible, it has a core limitation: it is a **1-Dimensional (1D) layout system**. This means Flexbox is designed to align items along *either* a horizontal row *or* a vertical column at one time—not both simultaneously.

**CSS Grid Layout** is the web's first true **2-Dimensional (2D) layout system**. It allows you to control both rows **and** columns at the exact same time! 

* **Use Flexbox for:** Components, navigation bars, alignment inside cards, or linear lists (1D).
* **Use CSS Grid for:** Overall page layouts, complex photo galleries, dashboards, and magazine-style structures (2D).

---

### Activating the Grid & Creating Tracks

Like Flexbox, you activate CSS Grid by applying **\`display: grid;\`** to a parent container. Once activated, you must define the structure of your columns and rows using two essential properties:
* **\`grid-template-columns\`**: Defines the number and width of vertical columns.
* **\`grid-template-rows\`**: Defines the number and height of horizontal rows.

---

### The Secret Superpower: The \`fr\` (Fractional) Unit

When building grids, fixed pixel widths (\`px\`) can cause overflow issues on smaller screens. CSS Grid introduces a brand new unit: the **\`fr\` (fractional unit)**. 

One \`fr\` represents **1 fraction of the available free space** inside the grid container!
* \`grid-template-columns: 1fr 1fr 1fr;\` -> Creates 3 columns of **exactly equal width** (each gets 1/3 of the screen).
* \`grid-template-columns: 2fr 1fr 1fr;\` -> The first column will be twice as wide as the other two!

---

### The \`repeat()\` Function Shorthand

Writing \`1fr 1fr 1fr 1fr 1fr\` for a 5-column grid is tedious. You can use the built-in **\`repeat()\`** function to make your CSS cleaner:

\`\`\`css
/* Old way */
.grid-container {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

/* Modern clean way using repeat() */
.grid-container {
  grid-template-columns: repeat(4, 1fr); /* Creates 4 equal columns */
  gap: 15px; /* Adds 15px space between all rows and columns! */
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### जब Flexbox हमारे पास है, तो CSS Grid की जरूरत क्यों?

Flexbox एक शानदार लेआउट सिस्टम है, लेकिन इसकी एक बड़ी सीमा (limitation) है: यह एक **1-Dimensional (1D) लेआउट सिस्टम** है। इसका मतलब है कि Flexbox एक समय में या तो सिर्फ हॉरिजॉन्टल रो (Row) पर काम करता है या फिर वर्टिकल कॉलम (Column) पर—दोनों पर एक साथ नहीं!

**CSS Grid Layout** वेब डेवलपमेंट का पहला असली **2-Dimensional (2D) लेआउट सिस्टम** है। यह आपको एक ही समय में रो (Rows) **और** कॉलम (Columns) दोनों को पूरी तरह कंट्रोल करने की ताकत देता है!

* **Flexbox का उपयोग करें:** छोटे कंपोनेंट्स, नेविगेशन बार, कार्ड के अंदर बटन अलाइन करने, या सीधी लिस्ट के लिए (1D)।
* **CSS Grid का उपयोग करें:** पूरी वेबसाइट का मुख्य ढांचा (Page Layout), फोटो गैलरी, डैशबोर्ड, या मैगजीन जैसे जटिल डिज़ाइन्स के लिए (2D)।

---

### ग्रिड एक्टिवेट करना और ट्रैक्स (Columns/Rows) बनाना

Flexbox की तरह ही, आप किसी पैरेंट कंटेनर पर **\`display: grid;\`** लगाकर ग्रिड को एक्टिवेट करते हैं। एक्टिवेट करने के बाद, आपको बताना होता है कि ग्रिड में कितने कॉलम और कितनी रो होंगी:
* **\`grid-template-columns\`**: वर्टिकल (खड़े) कॉलम की संख्या और चौड़ाई तय करता है।
* **\`grid-template-rows\`**: हॉरिजॉन्टल (पड़े) रो की संख्या और ऊंचाई तय करता है।

---

### ग्रिड की सबसे बड़ी सुपरपावर: \`fr\` (Fractional Unit)

ग्रिड बनाते समय अगर आप पिक्सल (\`px\`) का इस्तेमाल करेंगे, तो छोटी स्क्रीन पर डिजाइन टूट सकता है। इसलिए CSS Grid एक बिल्कुल नया यूनिट लेकर आया: **\`fr\` (Fractional Unit)**।

एक \`fr\` का मतलब होता है—कंटेनर के अंदर बची हुई खाली जगह का **1 हिस्सा (fraction)**!
* \`grid-template-columns: 1fr 1fr 1fr;\` -> यह स्क्रीन को **3 बिल्कुल बराबर हिस्सों** में बाँट देगा (हर कॉलम को 1/3 जगह मिलेगी)।
* \`grid-template-columns: 2fr 1fr 1fr;\` -> पहला कॉलम बाकी दोनों कॉलम से दोगुना (2x) चौड़ा होगा!

---

### \`repeat()\` फंक्शन से कोड छोटा करें

अगर आपको 5 कॉलम का ग्रिड बनाना हो, तो \`1fr 1fr 1fr 1fr 1fr\` लिखना थोड़ा उबाऊ है। आप इसे छोटा और साफ करने के लिए **\`repeat()\`** फंक्शन का उपयोग कर सकते हैं:

\`\`\`css
/* पुराना लंबा तरीका */
.grid-container {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

/* मॉडर्न और स्मार्ट तरीका repeat() के साथ */
.grid-container {
  grid-template-columns: repeat(4, 1fr); /* 4 बराबर चौड़ाई वाले कॉलम बनाएगा */
  gap: 15px; /* सभी कॉलम्स और रो के बीच 15px की दूरी (space) बना देगा! */
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="wrapper">\n  <h3>1. Equal 3-Column Grid using repeat(3, 1fr)</h3>\n  <div class="grid equal-grid">\n    <div class="box">Item 1</div>\n    <div class="box">Item 2</div>\n    <div class="box">Item 3</div>\n    <div class="box">Item 4</div>\n    <div class="box">Item 5</div>\n    <div class="box">Item 6</div>\n  </div>\n\n  <h3>2. Asymmetrical Grid (2fr 1fr 1fr) - First column is twice as wide!</h3>\n  <div class="grid asym-grid">\n    <div class="box hero-box">Wide Box (2fr)</div>\n    <div class="box">Normal (1fr)</div>\n    <div class="box">Normal (1fr)</div>\n  </div>\n</div>`,
          css: `body { font-family: sans-serif; padding: 15px; background: #f1f2f6; }\n\n/* Common Grid Container Styles */\n.grid {\n  display: grid; /* ACTIVATES CSS GRID! */\n  gap: 15px;     /* Modern spacing between all grid cells */\n  background: #2f3542;\n  padding: 15px;\n  border-radius: 8px;\n  margin-bottom: 25px;\n}\n\n/* 1. 3 Equal Columns */\n.equal-grid {\n  grid-template-columns: repeat(3, 1fr);\n}\n\n/* 2. Asymmetrical Columns (2fr 1fr 1fr) */\n.asym-grid {\n  grid-template-columns: 2fr 1fr 1fr;\n}\n\n/* Grid Items */\n.box {\n  background: #3742fa;\n  color: white;\n  padding: 20px;\n  font-weight: bold;\n  border-radius: 6px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hero-box {\n  background: #ff4757;\n}`
        }
      ]
    },
    {
      id: "t11-2",
      title_en: "Positioning Items Across Cells using Grid Lines",
      title_hi: "ग्रिड लाइन्स (Grid Lines) के जरिए आइटम्स को कई कॉलम्स में फैलाना",
      content_en: `### Understanding Grid Lines (Not Columns!)

To place an item exactly where you want it, or to make a card span across multiple columns (like a wide banner), you must understand how CSS Grid counts positions.

Grid does not count the boxes themselves—it counts the **dividing lines between boxes**!
* If you create a **3-column grid**, there are **4 vertical grid lines**:
  * Line 1: Far left edge of the grid.
  * Line 2: Between Column 1 and Column 2.
  * Line 3: Between Column 2 and Column 3.
  * Line 4: Far right edge of the grid.

---

### Spanning Across Columns: \`grid-column\`

You can command any child item to stretch across multiple lines using **\`grid-column-start\`** and **\`grid-column-end\`** (or the clean shorthand **\`grid-column\`**):

\`\`\`css
/* Spanning from line 1 all the way to line 3 (covers 2 columns!) */
.banner-card {
  grid-column: 1 / 3; 
}

/* Alternative syntax using the 'span' keyword */
.banner-card {
  grid-column: span 2; /* Simply says: cover 2 columns from wherever you start! */
}

/* Stretch across the ENTIRE 3-column width (from line 1 to line 4) */
.full-width-footer {
  grid-column: 1 / -1; /* The -1 trick always targets the very last line! */
}
\`\`\`

---

### Spanning Across Rows: \`grid-row\`

In the exact same way, you can make a tall sidebar item stretch vertically down across multiple rows using **\`grid-row\`**:

\`\`\`css
/* Make a sidebar stretch vertically across 2 rows */
.sidebar-item {
  grid-row: 1 / span 2; 
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### ग्रिड लाइन्स (Grid Lines) का गणित समझें!

किसी आइटम को स्क्रीन पर अपनी मनचाही जगह पर रखने के लिए, या किसी कार्ड को कई कॉलम्स पर फैलाने (जैसे चौड़ा बैनर या लंबा साइडबार बनाने) के लिए, आपको यह समझना होगा कि CSS Grid अपनी गिनती कैसे करता है।

Grid अंदर के बॉक्स को नहीं गिनता—वह बॉक्स के बीच की **विभाजन रेखाओं (Dividing Lines)** को गिनता है!
* यदि आप **3-कॉलम का ग्रिड** बनाते हैं, तो उसमें **4 वर्टिकल ग्रिड लाइन्स** होंगी:
  * लाइन 1: ग्रिड का एकदम बायां (Left) किनारा।
  * लाइन 2: कॉलम 1 और कॉलम 2 के बीच की रेखा।
  * लाइन 3: कॉलम 2 और कॉलम 3 के बीच की रेखा।
  * लाइन 4: ग्रिड का एकदम दायां (Right) किनारा।

---

### कॉलम में फैलाना: \`grid-column\`

आप किसी भी बच्चे (item) को निर्देश दे सकते हैं कि वह कई लाइनों तक खिंच जाए। इसके लिए हम **\`grid-column-start\`** और **\`grid-column-end\`** (या इसके आसान शॉर्टहैंड **\`grid-column\`**) का उपयोग करते हैं:

\`\`\`css
/* लाइन 1 से शुरू होकर लाइन 3 तक जाना (यानी 2 कॉलम को कवर करना!) */
.banner-card {
  grid-column: 1 / 3; 
}

/* 'span' कीवर्ड का उपयोग करके दूसरा आसान तरीका */
.banner-card {
  grid-column: span 2; /* इसका मतलब है: जहाँ से भी शुरू हो, 2 कॉलम तक फैल जाओ! */
}

/* पूरे 3-कॉलम ग्रिड (लाइन 1 से लाइन 4 तक) में पूरी चौड़ाई में फैलाना */
.full-width-footer {
  grid-column: 1 / -1; /* '-1' का मतलब हमेशा ग्रिड की एकदम आखिरी लाइन होता है! */
}
\`\`\`

---

### रो (Rows) में वर्टिकली फैलाना: \`grid-row\`

बिल्कुल इसी तरह, आप किसी लंबे साइडबार को ऊपर से नीचे कई रो (rows) तक खींचने के लिए **\`grid-row\`** का उपयोग कर सकते हैं:

\`\`\`css
/* किसी साइडबार को वर्टिकली 2 रो (rows) तक नीचे खींचना */
.sidebar-item {
  grid-row: 1 / span 2; 
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="grid layout-grid">\n  \n  <div class="box header">Header Banner (grid-column: span 2)</div>\n  \n  \n  <div class="box sidebar">Tall Sidebar (grid-row: span 2)</div>\n  \n  <div class="box content1">Content Box 1</div>\n  <div class="box content2">Content Box 2</div>\n  \n  \n  <div class="box footer">Full Width Footer (grid-column: 1 / -1)</div>\n</div>`,
          css: `body { font-family: sans-serif; padding: 15px; }\n\n.layout-grid {\n  display: grid;\n  /* 3 Columns of equal size */\n  grid-template-columns: repeat(3, 1fr);\n  /* Auto rows with 80px minimum height */\n  grid-auto-rows: 80px;\n  gap: 15px;\n  background: #dfe6e9;\n  padding: 15px;\n  border-radius: 8px;\n}\n\n.box {\n  color: white;\n  font-weight: bold;\n  padding: 15px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n/* 1. Header covers first 2 columns */\n.header {\n  background: #6c5ce7;\n  grid-column: span 2;\n}\n\n/* 2. Sidebar covers 1 column wide, but 2 rows tall! */\n.sidebar {\n  background: #00b894;\n  grid-row: span 2;\n}\n\n.content1 { background: #0984e3; }\n.content2 { background: #e84393; }\n\n/* 3. Footer stretches from line 1 to the very end (-1) */\n.footer {\n  background: #2d3436;\n  grid-column: 1 / -1;\n}`
        }
      ]
    },
    {
      id: "t11-3",
      title_en: "Grid Areas & Responsive Magic (auto-fit + minmax)",
      title_hi: "ग्रिड एरियाज (Grid Areas) और बिना Media Query के रेस्पॉन्सिव जादू",
      content_en: `### The Visual Art of \`grid-template-areas\`

One of the coolest features of CSS Grid is the ability to map out your entire webpage layout using text strings that look like visual ASCII art!

Instead of memorizing line numbers, you give custom names to areas and arrange them visually on the parent container:

\`\`\`css
/* 1. Visually draw your layout on the Parent Container */
.page-layout {
  display: grid;
  grid-template-columns: 200px 1fr; /* Sidebar is 200px, Main takes remaining space */
  grid-template-areas:
    "header  header"
    "sidebar content"
    "footer  footer";
  gap: 15px;
}

/* 2. Assign child items to those named areas! */
.my-header  { grid-area: header; }
.my-sidebar { grid-area: sidebar; }
.my-content { grid-area: content; }
.my-footer  { grid-area: footer; }
\`\`\`

---

### The Holy Grail of Responsive Grids: \`auto-fit\` + \`minmax()\`

How can you create a responsive multi-column card grid that adjusts from 4 columns on desktop down to 1 column on mobile phones **without writing a single CSS Media Query**?

This is accomplished using the most famous CSS Grid one-liner formula in modern web development:

\`\`\`css
.responsive-card-grid {
  display: grid;
  /* THE MAGIC FORMULA: */
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
\`\`\`

#### How Does This Magic Formula Work?
1. **\`minmax(220px, 1fr)\`**: Dictates that every card must be **at least 220px wide**, but if there is leftover empty space, it can stretch up to **1fr** to fill the gap.
2. **\`auto-fit\`**: Tells the browser: *"Fit as many 220px columns into the row as physically possible! If the screen gets smaller and a card can't fit at 220px anymore, automatically drop it down onto a new row!"*

[[SANDBOX_0]]`,
      content_hi: `### \`grid-template-areas\` की विज़ुअल कला (ASCII Art Layout)

CSS Grid का एक सबसे मजेदार और शानदार फीचर यह है कि आप शब्दों के जरिए अपनी पूरी वेबसाइट का नक्शा (layout) एक ड्राइंग की तरह कोड में बना सकते हैं!

लाइन नंबर याद रखने के बजाय, आप अपने बॉक्स को नाम देते हैं और उन्हें पैरेंट कंटेनर पर विज़ुअल रूप से सजा देते हैं:

\`\`\`css
/* 1. पैरेंट कंटेनर पर अपनी वेबसाइट का नक्शा बनाएं */
.page-layout {
  display: grid;
  grid-template-columns: 200px 1fr; /* साइडबार 200px रहेगा, मेन कंटेंट बाकी सारी जगह लेगा */
  grid-template-areas:
    "header  header"
    "sidebar content"
    "footer  footer";
  gap: 15px;
}

/* 2. अब बच्चों (items) को उन नामों से जोड़ दें! */
.my-header  { grid-area: header; }
.my-sidebar { grid-area: sidebar; }
.my-content { grid-area: content; }
.my-footer  { grid-area: footer; }
\`\`\`

---

### रेस्पॉन्सिव ग्रिड का सबसे बड़ा जादुई फॉर्मूला: \`auto-fit\` + \`minmax()\`

आप बिना कोई **CSS Media Query** लिखे एक ऐसा ग्रिड कैसे बना सकते हैं जो डेस्कटॉप पर 4 कॉलम दिखाए, टैबलेट पर 2 कॉलम, और मोबाइल फोन पर अपने आप 1 कॉलम (सिंगल लाइन) में बदल जाए?

यह काम वेब डेवलपमेंट के सबसे मशहूर CSS Grid फॉर्मूले से किया जाता है:

\`\`\`css
.responsive-card-grid {
  display: grid;
  /* रेस्पॉन्सिव ग्रिड का जादुई फॉर्मूला: */
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
\`\`\`

#### यह जादुई फॉर्मूला कैसे काम करता है?
1. **\`minmax(220px, 1fr)\`**: यह नियम तय करता है कि हर कार्ड कम से कम **220px चौड़ा** होना ही चाहिए, लेकिन अगर स्क्रीन पर जगह खाली बचती है, तो वह फैलकर **1fr** तक बड़ी हो सकती है।
2. **\`auto-fit\`**: यह ब्राउज़र से कहता है: *"स्क्रीन की चौड़ाई में जितने भी 220px के कार्ड फिट हो सकते हैं, उन्हें एक रो में फिट कर दो! जैसे ही स्क्रीन छोटी हो और 220px की जगह न बचे, कार्ड को अपने आप नीचे की नई लाइन में गिरा दो!"*

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="demo-section">\n  <h3>1. Visual ASCII Layout (grid-template-areas)</h3>\n  <div class="page-layout">\n    <div class="box my-header">HEADER AREA</div>\n    <div class="box my-sidebar">SIDEBAR</div>\n    <div class="box my-content">MAIN CONTENT AREA</div>\n    <div class="box my-footer">FOOTER AREA</div>\n  </div>\n\n  <h3>2. Responsive Magic Grid (Resize browser or open on mobile!)</h3>\n  <p>Notice how cards automatically drop to new rows without media queries!</p>\n  <div class="magic-grid">\n    <div class="card">Product 1</div>\n    <div class="card">Product 2</div>\n    <div class="card">Product 3</div>\n    <div class="card">Product 4</div>\n    <div class="card">Product 5</div>\n    <div class="card">Product 6</div>\n  </div>\n</div>`,
          css: `body { font-family: sans-serif; padding: 15px; }\n.demo-section h3 { margin-top: 25px; color: #2c3e50; }\n\n/* 1. Grid Areas Demo */\n.page-layout {\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  grid-template-areas:\n    "header  header"\n    "sidebar content"\n    "footer  footer";\n  gap: 10px;\n  background: #636e72;\n  padding: 10px;\n  border-radius: 8px;\n}\n\n.my-header  { grid-area: header;  background: #00cec9; height: 50px; }\n.my-sidebar { grid-area: sidebar; background: #ffeaa7; color: #2d3436; height: 120px; }\n.my-content { grid-area: content; background: #74b9ff; height: 120px; }\n.my-footer  { grid-area: footer;  background: #d63031; height: 50px; }\n\n.box {\n  color: white;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n}\n\n/* 2. THE MAGICAL RESPONSIVE ONE-LINER GRID */\n.magic-grid {\n  display: grid;\n  /* Auto fit as many 140px cards as possible, stretch leftover space! */\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 15px;\n  background: #2d3436;\n  padding: 15px;\n  border-radius: 8px;\n}\n\n.card {\n  background: #55efc4;\n  color: #2d3436;\n  font-weight: bold;\n  padding: 30px 15px;\n  text-align: center;\n  border-radius: 6px;\n  box-shadow: 0 4px 6px rgba(0,0,0,0.2);\n}`
        }
      ]
    }
  ]
};

export const chapter11Quiz = [
  {
    id: "q1",
    question_en: "What is the primary architectural difference between CSS Flexbox and CSS Grid?",
    question_hi: "CSS Flexbox और CSS Grid के बीच सबसे मुख्य और बुनियादी अंतर क्या है?",
    options_en: [
      "Flexbox is for mobile devices, Grid is only for desktop computers.",
      "Flexbox is a 1-Dimensional layout system (rows OR columns), while Grid is a 2-Dimensional layout system (rows AND columns simultaneously).",
      "Flexbox does not support alignment properties like justify-content.",
      "Grid is deprecated and replaced by modern Flexbox."
    ],
    options_hi: [
      "Flexbox मोबाइल उपकरणों के लिए है, Grid केवल डेस्कटॉप कंप्यूटरों के लिए है।",
      "Flexbox एक 1-Dimensional लेआउट सिस्टम है (या तो रो या कॉलम), जबकि Grid एक 2-Dimensional सिस्टम है (एक ही समय में रो और कॉलम दोनों)।",
      "Flexbox में justify-content जैसी अलाइनमेंट प्रॉपर्टीज काम नहीं करती हैं।",
      "Grid अब पुराना हो चुका है और उसकी जगह मॉडर्न Flexbox ने ले ली है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q2",
    question_en: "What does the 'fr' unit stand for in CSS Grid Layout?",
    question_hi: "CSS Grid Layout में 'fr' यूनिट का क्या मतलब होता है?",
    options_en: [
      "Fixed ratio",
      "Fraction of available free space",
      "Frame rate",
      "Floating row"
    ],
    options_hi: [
      "Fixed ratio (निश्चित अनुपात)",
      "Fraction of available free space (बची हुई खाली जगह का हिस्सा)",
      "Frame rate (फ्रेम रेट)",
      "Floating row (तैरती हुई रो)"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q3",
    question_en: "How would you write the shorthand CSS syntax to create a grid with 4 equal-width columns using the repeat() function?",
    question_hi: "repeat() फंक्शन का उपयोग करके 4 बराबर चौड़ाई वाले कॉलम (columns) बनाने के लिए सही CSS सिंटैक्स क्या होगा?",
    options_en: [
      "grid-template-columns: repeat(4, 1fr);",
      "grid-template-columns: 4 * 1fr;",
      "grid-columns: repeat(1fr, 4);",
      "display: grid(4, 1fr);"
    ],
    options_hi: [
      "grid-template-columns: repeat(4, 1fr);",
      "grid-template-columns: 4 * 1fr;",
      "grid-columns: repeat(1fr, 4);",
      "display: grid(4, 1fr);"
    ],
    correctAnswerIndex: 0
  },
  {
    id: "q4",
    question_en: "In a CSS Grid container with 3 columns, how many vertical grid dividing lines exist?",
    question_hi: "3 कॉलम (columns) वाले एक CSS Grid कंटेनर में कितनी वर्टिकल ग्रिड विभाजन रेखाएं (dividing lines) होती हैं?",
    options_en: [
      "2 lines",
      "3 lines",
      "4 lines",
      "6 lines"
    ],
    options_hi: [
      "2 रेखाएं",
      "3 रेखाएं",
      "4 रेखाएं (शुरुआती किनारे से लेकर आखिरी किनारे तक)",
      "6 रेखाएं"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q5",
    question_en: "What is the meaning of the property 'grid-column: 1 / -1;' when applied to a child grid item?",
    question_hi: "किसी ग्रिड आइटम पर 'grid-column: 1 / -1;' लगाने का क्या मतलब होता है?",
    options_en: [
  "It deletes the item from column 1.",
      "It forces the item to stretch across the entire width of the grid, from the very first line to the very last line.",
      "It moves the item backwards by one column.",
      "It creates an infinite loop of columns."
    ],
    options_hi: [
      "यह आइटम को कॉलम 1 से डिलीट कर देता है।",
      "यह आइटम को ग्रिड की पहली लाइन से लेकर एकदम आखिरी लाइन (-1) तक पूरी चौड़ाई में फैला देता है।",
      "यह आइटम को एक कॉलम पीछे खिसका देता है।",
      "यह कॉलम्स का एक अनंत (infinite) लूप बना देता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q6",
    question_en: "Which CSS syntax is exactly identical in behavior to 'grid-column: 1 / 3;'?",
    question_hi: "कौन सा CSS सिंटैक्स काम करने के तरीके में बिल्कुल 'grid-column: 1 / 3;' के समान है?",
    options_en: [
      "grid-column: span 1;",
      "grid-column: span 2;",
      "grid-column: 3 / 1;",
      "grid-column-width: 3px;"
    ],
    options_hi: [
      "grid-column: span 1;",
      "grid-column: span 2; (क्योंकि यह लाइन 1 से शुरू होकर 2 कॉलम को कवर करता है)",
      "grid-column: 3 / 1;",
      "grid-column-width: 3px;"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q7",
    question_en: "When using 'grid-template-areas' on a parent container, which property do you use on a child item to assign it to a specific named region?",
    question_hi: "पैरेंट कंटेनर पर 'grid-template-areas' का उपयोग करते समय, किसी बच्चे (child item) को उस तय किए गए नाम के क्षेत्र से जोड़ने के लिए किस प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: [
      "grid-name",
      "grid-region",
      "grid-area",
      "grid-assign"
    ],
    options_hi: [
      "grid-name",
      "grid-region",
      "grid-area",
      "grid-assign"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q8",
    question_en: "In the function 'minmax(200px, 1fr)', what does this rule instruct the browser to do?",
    question_hi: "'minmax(200px, 1fr)' फंक्शन में, यह नियम ब्राउज़र को क्या निर्देश देता है?",
    options_en: [
      "Make the column exactly 200px wide always.",
      "Ensure the column is never smaller than 200px, but allow it to stretch up to 1fr if extra space is available.",
      "Create 200 columns that are each 1fr wide.",
      "Shrink the column from 200px down to 1px on mobile phones."
    ],
    options_hi: [
      "कॉलम को हमेशा ठीक 200px चौड़ा बनाए रखो।",
      "यह सुनिश्चित करो कि कॉलम कभी 200px से छोटा न हो, लेकिन खाली जगह उपलब्ध होने पर उसे 1fr तक फैलने की अनुमति दो।",
      "200 कॉलम बनाओ जो प्रत्येक 1fr चौड़े हों।",
      "मोबाइल फोन पर कॉलम को 200px से घटाकर 1px कर दो।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q9",
    question_en: "Which keyword used inside repeat() automatically wraps grid items onto new lines as the screen shrinks, enabling responsive multi-column layouts without media queries?",
    question_hi: "repeat() के अंदर उपयोग किया जाने वाला कौन सा कीवर्ड स्क्रीन छोटी होने पर आइटम्स को अपने आप नई लाइन में भेज देता है, जिससे बिना media query के रेस्पॉन्सिव ग्रिड बन जाता है?",
    options_en: [
      "auto-wrap",
      "responsive-fit",
      "auto-fit",
      "flex-wrap"
    ],
    options_hi: [
      "auto-wrap",
      "responsive-fit",
      "auto-fit",
      "flex-wrap"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q10",
    question_en: "Can you combine and use both CSS Grid and Flexbox together inside the same webpage or project?",
    question_hi: "क्या आप एक ही वेबपेज या प्रोजेक्ट के अंदर CSS Grid और Flexbox दोनों का एक साथ उपयोग कर सकते हैं?",
    options_en: [
      "No, browsers force you to choose only one layout system per webpage.",
      "Yes, absolutely! It is standard industry practice to use CSS Grid for the overall page structure and Flexbox for aligning items inside components.",
      "Only if you install an external JavaScript library.",
      "Yes, but only if you disable z-index layering."
    ],
    options_hi: [
      "नहीं, ब्राउज़र आपको एक वेबपेज पर केवल एक ही लेआउट सिस्टम चुनने के लिए मजबूर करते हैं।",
      "हाँ, बिल्कुल! पूरी वेबसाइट के मुख्य ढांचे (Page layout) के लिए CSS Grid और कार्ड/कंपोनेंट के अंदर के आइटम्स सजाने के लिए Flexbox का उपयोग करना इंडस्ट्री का सबसे बेहतरीन नियम है।",
      "केवल तभी जब आप कोई बाहरी JavaScript लाइब्रेरी इंस्टॉल करें।",
      "हाँ, लेकिन केवल तब जब आप z-index लेयरिंग को बंद कर दें।"
    ],
    correctAnswerIndex: 1
  }
];

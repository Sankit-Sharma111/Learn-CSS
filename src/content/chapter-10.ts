export const chapter10 = {
  id: "ch10",
  title_en: "Chapter 10: Flexbox Layout (CSS Flexible Box)",
  title_hi: "अध्याय 10: फ्लेक्सबॉक्स लेआउट (CSS Flexbox का पूरा जादू)",
  topics: [
    {
      id: "t10-1",
      title_en: "Introduction to Flexbox & The Flex Container",
      title_hi: "फ्लेक्सबॉक्स का परिचय और फ्लेक्स कंटेनर (Main vs Cross Axis)",
      content_en: `### Why Flexbox? Say Goodbye to Layout Nightmares

Before Flexbox existed, building complex responsive layouts required messy hacks using \`float\`, tables, or inline-blocks. Aligning a simple box vertically in the center of a page was surprisingly difficult!

The **CSS Flexible Box Layout (Flexbox)** was created specifically to solve these layout headaches. It gives container elements the superpower to alter the width, height, and order of their children to best fill the available space on any screen size.

---

### Activating the Superpower: \`display: flex;\`

To use Flexbox, you don't apply it to the items themselves—you apply it to their **Parent Container**. As soon as you set **\`display: flex;\`** on a container, two magical things happen:
1. The container becomes a **Flex Container**.
2. All of its direct children instantly transform into **Flex Items** and sit side-by-side in a row by default!

---

### The Two Axes of Flexbox (Crucial Concept!)

To master Flexbox, you must understand how it views directions. It doesn't think in terms of "left/right" or "top/bottom". It thinks in terms of two intersecting axes:

1. **The Main Axis**: The primary direction along which flex items are placed. By default, this runs **horizontally from left to right**.
2. **The Cross Axis**: The direction perpendicular (at a 90-degree angle) to the Main Axis. By default, this runs **vertically from top to bottom**.

---

### Changing the Direction: \`flex-direction\`

You can completely flip the axes using the **\`flex-direction\`** property on the container:
* **\`row\`** (Default): Items sit horizontally from left to right.
* **\`column\`**: Items stack vertically from top to bottom (Main Axis becomes vertical!).
* **\`row-reverse\`**: Items sit horizontally from right to left.
* **\`column-reverse\`**: Items stack vertically from bottom to top.

[[SANDBOX_0]]`,
      content_hi: `### फ्लेक्सबॉक्स क्यों? लेआउट की पुरानी परेशानियों का अंत!

Flexbox आने से पहले, एक अच्छी रेस्पॉन्सिव वेबसाइट बनाने के लिए डेवलपर्स को \`float\`, tables, या \`inline-block\` जैसी जुगाड़ू तकनीकों का सहारा लेना पड़ता था। किसी एक छोटे से बॉक्स को पेज के बिल्कुल बीचों-बीच (Vertically Center) लाना भी उस समय एक बड़ा सिरदर्द हुआ करता था!

**CSS Flexible Box Layout (Flexbox)** को खास तौर पर इन लेआउट समस्याओं को खत्म करने के लिए बनाया गया था। यह कंटेनर (पैरेंट) को यह जादुई ताकत देता है कि वह अपनी स्क्रीन के आकार के हिसाब से अपने बच्चों (items) की लंबाई, चौड़ाई और क्रम को खुद-ब-खुद एडजस्ट कर सके।

---

### जादू एक्टिवेट करें: \`display: flex;\`

Flexbox का उपयोग करने का सबसे पहला नियम है: आप इसे अंदर के बॉक्स पर नहीं, बल्कि उनके **पैरेंट कंटेनर (घर)** पर लगाते हैं। जैसे ही आप किसी कंटेनर पर **\`display: flex;\`** लिखते हैं, दो बड़े बदलाव होते हैं:
1. वह कंटेनर एक **Flex Container** बन जाता है।
2. उसके अंदर के सभी डायरेक्ट बच्चे तुरंत **Flex Items** बन जाते हैं और डिफ़ॉल्ट रूप से एक ही लाइन में अगल-बगल आकर बैठ जाते हैं!

---

### फ्लेक्सबॉक्स की दो दिशाएं (Main Axis और Cross Axis - सबसे ज़रूरी नियम!)

Flexbox को समझने के लिए आपको इसकी "दिशाओं" (Axes) को समझना होगा। यह "बाएं-दाएं" या "ऊपर-नीचे" नहीं सोचता, बल्कि यह दो मुख्य रेखाओं पर काम करता है:

1. **Main Axis (मुख्य रेखा)**: वह मुख्य दिशा जिसमें फ्लेक्स आइटम्स रखे जाते हैं। डिफ़ॉल्ट रूप से यह **बाएं से दाएं (हॉरिजॉन्टल)** चलती है।
2. **Cross Axis (क्रॉस रेखा)**: वह दिशा जो Main Axis को 90-डिग्री पर काटती है। डिफ़ॉल्ट रूप से यह **ऊपर से नीचे (वर्टिकल)** चलती है।

---

### दिशा बदलना: \`flex-direction\`

आप कंटेनर पर **\`flex-direction\`** प्रॉपर्टी लगाकर आइटम्स की दिशा को पूरी तरह बदल सकते हैं:
* **\`row\`** (डिफ़ॉल्ट): आइटम्स बाएं से दाएं एक सीधी लाइन में बैठते हैं।
* **\`column\`**: आइटम्स एक के नीचे एक (ऊपर से नीचे) स्टैक होते हैं (यहाँ Main Axis वर्टिकल बन जाता है!)।
* **\`row-reverse\`**: आइटम्स दाएं से बाएं उल्टी दिशा में बैठते हैं।
* **\`column-reverse\`**: आइटम्स नीचे से ऊपर की तरफ स्टैक होते हैं।

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="demo-wrapper">\n  <h3>1. flex-direction: row (Default)</h3>\n  <div class="flex-container row-demo">\n    <div class="item">Item 1</div>\n    <div class="item">Item 2</div>\n    <div class="item">Item 3</div>\n  </div>\n\n  <h3>2. flex-direction: column</h3>\n  <div class="flex-container col-demo">\n    <div class="item">Item 1</div>\n    <div class="item">Item 2</div>\n    <div class="item">Item 3</div>\n  </div>\n</div>`,
          css: `body { font-family: sans-serif; padding: 15px; background: #f8f9fa; }\n\n/* The Parent Container */\n.flex-container {\n  display: flex; /* ACTIVATES FLEXBOX! */\n  background-color: #2c3e50;\n  padding: 15px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n\n/* 1. Row Direction (Horizontal) */\n.row-demo {\n  flex-direction: row;\n}\n\n/* 2. Column Direction (Vertical) */\n.col-demo {\n  flex-direction: column;\n}\n\n/* The Children (Flex Items) */\n.item {\n  background-color: #3498db;\n  color: white;\n  padding: 15px 25px;\n  margin: 5px;\n  font-weight: bold;\n  border-radius: 6px;\n  text-align: center;\n}`
        }
      ]
    },
    {
      id: "t10-2",
      title_en: "Aligning Items: justify-content & align-items",
      title_hi: "आइटम्स को सजाना: justify-content और align-items",
      content_en: `### The Core Alignment Powers

Once your container is display: flex, you unlock two of the most frequently used alignment properties in all of web development: **\`justify-content\`** and **\`align-items\`**.

---

### 1. \`justify-content\` (Aligning along the Main Axis)
This property controls how extra space is distributed between and around flex items along the **Main Axis** (horizontally by default).

* **\`flex-start\`** (Default): Items are packed toward the start of the line (left).
* **\`flex-end\`**: Items are packed toward the end of the line (right).
* **\`center\`**: Items are grouped together in the exact horizontal center!
* **\`space-between\`**: The first item is pushed to the far left edge, the last item to the far right edge, and all remaining space is distributed equally *between* the middle items.
* **\`space-around\`**: Every item gets an equal amount of empty space *around* it (on both left and right sides).
* **\`space-evenly\`**: All empty spaces (between items and at the screen edges) are 100% equal!

---

### 2. \`align-items\` (Aligning along the Cross Axis)
This property controls how items align along the **Cross Axis** (vertically by default). It determines whether items stretch to fill container height or sit at the top/middle/bottom.

* **\`stretch\`** (Default): If items have no set height, they stretch vertically from top to bottom to fill the entire container height!
* **\`flex-start\`**: Items align at the top edge of the container.
* **\`flex-end\`**: Items align at the bottom edge of the container.
* **\`center\`**: Items are placed in the exact vertical middle!

---

### 🌟 THE ULTIMATE CSS TRICK: Perfect Center in 3 Lines!
For decades, centering a box both horizontally and vertically was famous for being annoying. With Flexbox, it takes just **3 lines of CSS** on the parent container:

\`\`\`css
.perfect-center-box {
  display: flex;
  justify-content: center; /* Centers horizontally (Main Axis) */
  align-items: center;     /* Centers vertically (Cross Axis) */
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### अलाइनमेंट के दो सबसे बड़े हथियार!

जैसे ही आप किसी कंटेनर पर \`display: flex\` लगाते हैं, आपको वेब डिज़ाइन की दुनिया की दो सबसे ज़्यादा इस्तेमाल होने वाली प्रॉपर्टीज मिल जाती हैं: **\`justify-content\`** और **\`align-items\`**।

---

### 1. \`justify-content\` (Main Axis पर आइटम्स को सजाना)
यह प्रॉपर्टी तय करती है कि **Main Axis** (डिफ़ॉल्ट रूप से बाएं से दाएं) पर आइटम्स के बीच और उनके आस-पास खाली जगह (space) कैसे बांटी जाएगी।

* **\`flex-start\`** (डिफ़ॉल्ट): सभी आइटम्स बाईं तरफ (शुरुआत में) सटकर बैठते हैं।
* **\`flex-end\`**: सभी आइटम्स दाईं तरफ (आखिर में) चले जाते हैं।
* **\`center\`**: सभी आइटम्स बिल्कुल बीचों-बीच (Center) आ जाते हैं!
* **\`space-between\`**: पहला आइटम एकदम बाएं कोने में, आखिरी आइटम एकदम दाएं कोने में, और बीच के सभी आइटम्स के बीच बराबर खाली जगह बंट जाती है।
* **\`space-around\`**: हर आइटम के दोनों तरफ (बाएं और दाएं) बराबर खाली जगह दी जाती है।
* **\`space-evenly\`**: स्क्रीन के किनारों से लेकर हर आइटम के बीच तक की सारी खाली जगह बिल्कुल 100% बराबर होती है!

---

### 2. \`align-items\` (Cross Axis पर आइटम्स को सजाना)
यह प्रॉपर्टी तय करती है कि **Cross Axis** (डिफ़ॉल्ट रूप से ऊपर से नीचे) पर आइटम्स कैसे बैठेंगे। क्या वे कंटेनर की पूरी ऊंचाई तक खींचेंगे (stretch) या ऊपर/बीच/नीचे रहेंगे।

* **\`stretch\`** (डिफ़ॉल्ट): अगर आइटम्स की कोई तय ऊंचाई (height) नहीं दी गई है, तो वे कंटेनर की पूरी ऊंचाई तक ऊपर से नीचे तक खिंच (stretch) जाते हैं!
* **\`flex-start\`**: सभी आइटम्स कंटेनर के ऊपरी किनारे (top edge) पर चिपकते हैं।
* **\`flex-end\`**: सभी आइटम्स कंटेनर के निचले किनारे (bottom edge) पर आ जाते हैं।
* **\`center\`**: सभी आइटम्स वर्टिकली बिल्कुल बीचों-बीच आ जाते हैं!

---

### 🌟 CSS का सबसे बड़ा जादुई सीक्रेट: सिर्फ 3 लाइनों में परफेक्ट सेंटर!
दशकों तक किसी बॉक्स को स्क्रीन के बिल्कुल बीचों-बीच (Horizontally + Vertically center) लाना बहुत मुश्किल काम माना जाता था। Flexbox के साथ, पैरेंट कंटेनर पर बस **ये 3 लाइनें** लिख दें और जादू देखें:

\`\`\`css
.perfect-center-box {
  display: flex;
  justify-content: center; /* हॉरिजॉन्टल सेंटर (Main Axis) */
  align-items: center;     /* वर्टिकल सेंटर (Cross Axis) */
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="section">\n  <p>1. justify-content: space-between (Horizontal Spacing)</p>\n  <div class="flex-box jc-between">\n    <div class="box">A</div>\n    <div class="box">B</div>\n    <div class="box">C</div>\n  </div>\n\n  <p>2. align-items: center (Vertical Center inside a tall box)</p>\n  <div class="flex-box ai-center">\n    <div class="box">1</div>\n    <div class="box tall">2</div>\n    <div class="box">3</div>\n  </div>\n\n  <p>3. THE PERFECT 3D CENTER (Both axes centered!)</p>\n  <div class="flex-box perfect-center">\n    <div class="box hero">I AM CENTERED IN BOTH DIRECTIONS!</div>\n  </div>\n</div>`,
          css: `body { font-family: sans-serif; padding: 10px; }\n.section p { font-weight: bold; margin-bottom: 5px; color: #2c3e50; }\n\n.flex-box {\n  display: flex;\n  background-color: #dfe6e9;\n  border: 2px dashed #636e72;\n  padding: 10px;\n  margin-bottom: 20px;\n  border-radius: 8px;\n}\n\n.box {\n  background-color: #00cec9;\n  color: white;\n  font-weight: bold;\n  padding: 15px 20px;\n  border-radius: 6px;\n}\n\n/* 1. Space Between */\n.jc-between {\n  justify-content: space-between;\n}\n\n/* 2. Align Items Center in a tall container */\n.ai-center {\n  height: 120px;\n  align-items: center; /* Vertically centered! */\n  gap: 10px;\n}\n.tall { padding-top: 30px; padding-bottom: 30px; background-color: #e84393; }\n\n/* 3. The Perfect Center */\n.perfect-center {\n  height: 150px;\n  justify-content: center; /* Horizontally */\n  align-items: center;     /* Vertically */\n  background-color: #2d3436;\n}\n.hero { background-color: #fdcb6e; color: #2d3436; font-size: 16px; }`
        }
      ]
    },
    {
      id: "t10-3",
      title_en: "Flex Wrapping & The Gap Property",
      title_hi: "फ्लेक्स रैपिंग (flex-wrap) और गैप (gap) प्रॉपर्टी",
      content_en: `### What Happens When You Run Out of Space?

By default, Flexbox will try to force **all items onto a single single line**, even if that means shrinking them until they look terrible or overflowing off the right side of the screen!

To prevent this squishing behavior and create responsive multi-line card grids, we use the **\`flex-wrap\`** property on the parent container:

* **\`nowrap\`** (Default): All items are forced into one single line, shrinking if necessary to fit.
* **\`wrap\`**: If items run out of space on the current line, they will automatically drop down onto a **new line** below!
* **\`wrap-reverse\`**: Items wrap onto a new line, but in reverse (upwards instead of downwards).

---

### Managing Spacing: The Modern \`gap\` Property

In older CSS days, developers had to use awkward left/right margins on every individual child item to create space between flex boxes. Today, we have the incredible **\`gap\`** property!

You apply **\`gap\`** directly on the **Flex Container**, and it automatically injects empty spacing *only between* the flex items (not around the outer edges of the container!).

\`\`\`css
.card-grid {
  display: flex;
  flex-wrap: wrap; /* Allows cards to drop to line 2 on small screens */
  gap: 20px;       /* Puts exactly 20px of space between all cards horizontally & vertically */
}
\`\`\`

---

### \`align-content\` (Aligning Multiple Wrapped Lines)

If your flex container has \`flex-wrap: wrap\` and contains **multiple lines of items**, you can use **\`align-content\`** to control how those entire wrapped lines are spaced along the Cross Axis (e.g., \`align-content: space-between\`, \`center\`, \`flex-start\`). 

*Note: \`align-content\` has NO effect if your flex container only has one single line of items!*

[[SANDBOX_0]]`,
      content_hi: `### जब स्क्रीन पर जगह खत्म हो जाए तो क्या होता है?

डिफ़ॉल्ट रूप से, Flexbox इतनी ज़िद करता है कि वह **सभी आइटम्स को एक ही लाइन में** रखने की कोशिश करता है! इसके लिए चाहे उसे आइटम्स को सिकोड़कर बदसूरत बनाना पड़े, या उन्हें स्क्रीन के बाहर (Overflow) फेंकना पड़े।

इस सिकुड़ने वाली समस्या को रोकने के लिए और कार्ड्स को सुंदर ग्रिड में बदलने के लिए, हम पैरेंट कंटेनर पर **\`flex-wrap\`** प्रॉपर्टी का उपयोग करते हैं:

* **\`nowrap\`** (डिफ़ॉल्ट): सभी आइटम्स एक ही लाइन में जबरदस्ती फिट किए जाते हैं।
* **\`wrap\`**: जैसे ही पहली लाइन में जगह खत्म होती है, आगे के आइटम्स अपने आप **नीचे एक नई लाइन (Line 2)** में चले जाते हैं!
* **\`wrap-reverse\`**: आइटम्स नई लाइन में जाते तो हैं, लेकिन नीचे जाने के बजाय उल्टी दिशा में (ऊपर) स्टैक होते हैं।

---

### आइटम्स के बीच दूरी बनाना: मॉडर्न \`gap\` प्रॉपर्टी

पुराने समय में, दो बॉक्स के बीच जगह बनाने के लिए डेवलपर्स को हर बच्चे पर अलग से \`margin\` लगाना पड़ता था। आज हमारे पास एक शानदार मॉडर्न प्रॉपर्टी है—**\`gap\`**!

आप इसे सीधे **Flex Container** पर लगाते हैं, और यह अपने आप सभी फ्लेक्स आइटम्स के *बीच में* (किनारों पर नहीं!) बराबर खाली जगह (space) बना देता है।

\`\`\`css
.card-grid {
  display: flex;
  flex-wrap: wrap; /* मोबाइल स्क्रीन पर कार्ड्स को नीचे की लाइन में जाने की अनुमति देता है */
  gap: 20px;       /* सभी कार्ड्स के बीच (ऊपर-नीचे और दाएं-बाएं) 20px की दूरी बना देगा */
}
\`\`\`

---

### \`align-content\` (कई लाइनों को एक साथ सजाना)

अगर आपके कंटेनर में \`flex-wrap: wrap\` लगा है और उसमें **एक से ज़्यादा लाइनें बन गई हैं**, तो आप उन सभी लाइनों के बीच Cross Axis पर दूरी कंट्रोल करने के लिए **\`align-content\`** का इस्तेमाल कर सकते हैं (जैसे \`align-content: space-between\` या \`center\`)।

*नोट: अगर आपके कंटेनर में सिर्फ एक ही लाइन है, तो \`align-content\` का कोई असर नहीं होगा!*

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="demo-area">\n  <p>1. flex-wrap: nowrap (Items squished/overflowing)</p>\n  <div class="flex-box no-wrap-demo">\n    <div class="card">Card 1</div>\n    <div class="card">Card 2</div>\n    <div class="card">Card 3</div>\n    <div class="card">Card 4</div>\n    <div class="card">Card 5</div>\n  </div>\n\n  <p>2. flex-wrap: wrap + gap: 15px (Responsive Grid!)</p>\n  <div class="flex-box wrap-demo">\n    <div class="card">Card 1</div>\n    <div class="card">Card 2</div>\n    <div class="card">Card 3</div>\n    <div class="card">Card 4</div>\n    <div class="card">Card 5</div>\n  </div>\n</div>`,
          css: `body { font-family: sans-serif; padding: 10px; }\n.demo-area p { font-weight: bold; margin-top: 15px; color: #333; }\n\n.flex-box {\n  display: flex;\n  background-color: #2f3542;\n  padding: 15px;\n  border-radius: 8px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.card {\n  background-color: #ff4757;\n  color: white;\n  font-weight: bold;\n  padding: 20px;\n  width: 110px; /* Want each card to be at least 110px wide */\n  text-align: center;\n  border-radius: 6px;\n}\n\n/* 1. Nowrap forces items to shrink or overflow */\n.no-wrap-demo {\n  flex-wrap: nowrap;\n  overflow-x: auto; /* Adds scrollbar if they overflow */\n}\n.no-wrap-demo .card { margin-right: 8px; }\n\n/* 2. Wrap drops them to the next line smoothly + gap manages spacing */\n.wrap-demo {\n  flex-wrap: wrap;\n  gap: 15px; /* Modern spacing in all directions! */\n}`
        }
      ]
    },
    {
      id: "t10-4",
      title_en: "Flex Item Superpowers: flex-grow, shrink & align-self",
      title_hi: "फ्लेक्स आइटम्स की अपनी ताकतें: flex-grow, shrink और align-self",
      content_en: `### Controlling Individual Children

So far, we have applied styles to the **Parent Container** to control all items together. But what if you want *one specific child* to behave differently from its siblings?

Flexbox provides three special superpower properties that you apply directly to **individual Flex Items (the children)**:

---

### 1. \`flex-grow\` (The Greedy Expanding Item)
By default, flex items only take up as much width as their content needs (\`flex-grow: 0\`). 

If you set **\`flex-grow: 1;\`** on a child, it will greedily expand to eat up all the **remaining empty space** inside the container! 
* If all items have \`flex-grow: 1\`, they will all expand equally to share the empty space.
* If one item has \`flex-grow: 2\` and others have \`1\`, the item with \`2\` will try to take twice as much leftover space!

---

### 2. \`flex-shrink\` (The Responsive Shrinking Item)
When the container is too small, items shrink to fit. By default, all items have **\`flex-shrink: 1;\`**, meaning they all shrink equally.
* If you set **\`flex-shrink: 0;\`** on a specific item (like an icon or avatar photo), it will become **stubborn and refuse to shrink**, forcing other items to shrink around it instead!

---

### 3. \`align-self\` (Breaking the Container's Rules)
What if the parent container has \`align-items: center\`, but you want *one specific card* to stretch to the bottom or stick to the top?

You use **\`align-self\`** on that specific child item! It overrides the container's \`align-items\` setting for that single element only.
* Values: \`auto\` (Default), \`flex-start\`, \`flex-end\`, \`center\`, \`stretch\`.

\`\`\`css
/* A typical modern navigation bar layout */
.nav-item.search-bar {
  flex-grow: 1; /* Makes search input stretch across all remaining empty width! */
}
.nav-item.profile-pic {
  flex-shrink: 0; /* Prevents avatar image from squishing on mobile phones! */
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### किसी एक खास बच्चे (Flex Item) को अलग से कंट्रोल करना

अब तक हमने **पैरेंट कंटेनर** पर कोड लगाकर सभी बच्चों को एक साथ सजाना सीखा। लेकिन सोचिए, अगर आप चाहते हैं कि कोई *एक खास बॉक्स* बाकी बॉक्स से अलग व्यवहार करे? 

Flexbox हमें तीन ऐसी सुपरपावर प्रॉपर्टीज देता है जिन्हें हम सीधे **अंदर के फ्लेक्स आइटम्स (बच्चों)** पर लगाते हैं:

---

### 1. \`flex-grow\` (खाली जगह को हड़पने वाली ताकत)
डिफ़ॉल्ट रूप से, फ्लेक्स आइटम्स सिर्फ उतनी ही जगह लेते हैं जितना उनका टेक्स्ट होता है (\`flex-grow: 0\`)।

अगर आप किसी एक बच्चे पर **\`flex-grow: 1;\`** लगा देते हैं, तो वह कंटेनर में बची हुई **सारी खाली जगह (empty space)** को अकेले खींचकर भर लेता है!
* अगर सभी बच्चों पर \`flex-grow: 1\` लगा दें, तो सभी बच्चे खाली जगह को आपस में बराबर बाँट लेंगे।
* अगर किसी एक पर \`flex-grow: 2\` है और बाकी पर \`1\`, तो \`2\` वाला आइटम बाकी से दोगुनी खाली जगह लेगा!

---

### 2. \`flex-shrink\` (सिकुड़ने की दर कंट्रोल करना)
जब स्क्रीन छोटी होती है, तो फ्लेक्स आइटम्स डिफ़ॉल्ट रूप से सिकुड़ते हैं (\`flex-shrink: 1\`)।
* अगर आप किसी आइटम (जैसे वेबसाइट के लोगो या यूजर अवतार फोटो) पर **\`flex-shrink: 0;\`** लगा देते हैं, तो वह **जिद्दी बन जाएगा और बिल्कुल नहीं सिकुड़ेगा!** उसके बदले में आस-पास के दूसरे बॉक्स सिकुड़ जाएंगे।

---

### 3. \`align-self\` (पैरेंट के नियम को तोड़ना)
मान लीजिए कि पैरेंट कंटेनर पर \`align-items: center\` लगा है, लेकिन आप चाहते हैं कि *सिर्फ एक खास कार्ड* ऊपर किनारे पर चिपके या नीचे तक खींचे।

इसके लिए हम उस खास बच्चे पर **\`align-self\`** लगाते हैं! यह सिर्फ उसी एक आइटम के लिए पैरेंट के \`align-items\` नियम को ओवरराइड (रद्द) कर देता है।
* वैल्यूज: \`auto\`, \`flex-start\`, \`flex-end\`, \`center\`, \`stretch\`।

\`\`\`css
/* एक मॉडर्न नेविगेशन बार का परफेक्ट उदाहरण */
.nav-item.search-bar {
  flex-grow: 1; /* सर्च बॉक्स को बची हुई सारी खाली चौड़ाई में फैला देगा! */
}
.nav-item.profile-pic {
  flex-shrink: 0; /* मोबाइल स्क्रीन पर प्रोफाइल फोटो को पिचकने से रोकेगा! */
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="container">\n  <p>1. flex-grow: The middle item expands to fill leftover space</p>\n  <div class="flex-box">\n    <div class="item">Home</div>\n    <div class="item expand-me">Search Bar (flex-grow: 1)</div>\n    <div class="item">Login</div>\n  </div>\n\n  <p>2. align-self: One child breaks the align-items: center rule</p>\n  <div class="flex-box ai-center-demo">\n    <div class="item">Center</div>\n    <div class="item self-top">I am align-self: flex-start</div>\n    <div class="item self-bottom">I am align-self: flex-end</div>\n  </div>\n</div>`,
          css: `body { font-family: sans-serif; padding: 15px; }\np { font-weight: bold; color: #2c3e50; margin-top: 20px; }\n\n.flex-box {\n  display: flex;\n  background-color: #ea8685;\n  padding: 15px;\n  border-radius: 8px;\n  gap: 10px;\n}\n\n.item {\n  background-color: #2c3e50;\n  color: white;\n  font-weight: bold;\n  padding: 15px 20px;\n  border-radius: 6px;\n}\n\n/* 1. Middle item eats up all remaining horizontal space */\n.expand-me {\n  flex-grow: 1;\n  background-color: #f1c40f;\n  color: #2c3e50;\n  text-align: center;\n}\n\n/* 2. Align Self Demo in a tall parent */\n.ai-center-demo {\n  height: 140px;\n  align-items: center; /* Parent centers everyone vertically by default */\n  background-color: #596275;\n}\n\n.self-top {\n  align-self: flex-start; /* Breaks rule: Moves to top! */\n  background-color: #00d2d3;\n}\n\n.self-bottom {\n  align-self: flex-end;   /* Breaks rule: Moves to bottom! */\n  background-color: #ff9f43;\n}`
        }
      ]
    }
  ]
};

export const chapter10Quiz = [
  {
    id: "q1",
    question_en: "To start using Flexbox layout, on which element MUST you apply the property 'display: flex;'?",
    question_hi: "फ्लेक्सबॉक्स लेआउट का उपयोग शुरू करने के लिए, आपको किस एलिमेंट पर 'display: flex;' प्रॉपर्टी लगानी होगी?",
    options_en: [
      "On every individual child element you want to align.",
      "On the parent container element that wraps the items.",
      "Only on the <body> tag of the webpage.",
      "On the <head> section of the HTML document."
    ],
    options_hi: [
      "हर एक अंदरूनी बच्चे (child element) पर जिसे आप सजाना चाहते हैं।",
      "उन आइटम्स को लपेटने वाले पैरेंट कंटेनर (parent container) एलिमेंट पर।",
      "केवल वेबपेज के <body> टैग पर।",
      "HTML डॉक्यूमेंट के <head> सेक्शन पर।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q2",
    question_en: "What is the default value of the 'flex-direction' property when you create a new flex container?",
    question_hi: "जब आप कोई नया फ्लेक्स कंटेनर बनाते हैं, तो 'flex-direction' प्रॉपर्टी की डिफ़ॉल्ट (default) वैल्यू क्या होती है?",
    options_en: [
      "column",
      "row-reverse",
      "row",
      "center"
    ],
    options_hi: [
      "column (ऊपर से नीचे)",
      "row-reverse (दाएं से बाएं)",
      "row (बाएं से दाएं)",
      "center (बीच में)"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q3",
    question_en: "Which Flexbox property is used to align and distribute empty space between items along the MAIN AXIS?",
    question_hi: "MAIN AXIS (मुख्य रेखा) पर आइटम्स को अलाइन करने और उनके बीच खाली जगह बांटने के लिए किस प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: [
      "align-items",
      "justify-content",
      "flex-wrap",
      "align-self"
    ],
    options_hi: [
      "align-items",
      "justify-content",
      "flex-wrap",
      "align-self"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q4",
    question_en: "Which Flexbox property aligns items along the CROSS AXIS (perpendicular to the main axis)?",
    question_hi: "CROSS AXIS (Main Axis के 90-डिग्री लंबवत दिशा) पर आइटम्स को सजाने के लिए किस प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: [
      "justify-content",
      "flex-direction",
      "align-items",
      "gap"
    ],
    options_hi: [
      "justify-content",
      "flex-direction",
      "align-items",
      "gap"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q5",
    question_en: "What does setting 'justify-content: space-between;' achieve on a horizontal flex container?",
    question_hi: "एक हॉरिजॉन्टल फ्लेक्स कंटेनर पर 'justify-content: space-between;' सेट करने से क्या होता है?",
    options_en: [
      "All items are pushed to the absolute center with no space between them.",
      "The first item sits flush on the far left edge, the last item flush on the far right edge, and remaining space is divided equally between middle items.",
      "Every item gets an equal amount of empty margin around both its left and right sides.",
      "Items are stacked vertically from top to bottom."
    ],
    options_hi: [
      "सभी आइटम्स बिना किसी खाली जगह के बिल्कुल बीचों-बीच आ जाते हैं।",
      "पहला आइटम एकदम बाएं कोने में, आखिरी आइटम एकदम दाएं कोने में सट जाता है, और बीच के आइटम्स के बीच खाली जगह बराबर बंट जाती है।",
      "हर आइटम के बाएं और दाएं दोनों तरफ बराबर खाली जगह मिल जाती है।",
      "आइटम्स ऊपर से नीचे वर्टिकली स्टैक हो जाते हैं।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q6",
    question_en: "What happens by default if you have 10 large flex items inside a small flex container without specifying 'flex-wrap'?",
    question_hi: "यदि आप बिना 'flex-wrap' लगाए एक छोटे फ्लेक्स कंटेनर में 10 बड़े फ्लेक्स आइटम्स रख देते हैं, तो डिफ़ॉल्ट रूप से क्या होगा?",
    options_en: [
      "The items will automatically drop down onto 2 or 3 new lines.",
      "Flexbox will force all 10 items to stay on one single line, shrinking them to fit or overflowing off the screen.",
      "The browser will hide items 5 through 10.",
      "The container will automatically convert into a CSS Grid."
    ],
    options_hi: [
      "आइटम्स अपने आप 2 या 3 नई लाइनों में नीचे चले जाएंगे।",
      "Flexbox जबरदस्ती सभी 10 आइटम्स को एक ही लाइन में रखेगा, जिसके लिए वह उन्हें सिकोड़ देगा या वे स्क्रीन से बाहर निकल जाएंगे।",
      "ब्राउज़र 5 से 10 नंबर के आइटम्स को छिपा देगा।",
      "कंटेनर अपने आप CSS Grid में बदल जाएगा।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q7",
    question_en: "Which modern CSS property applied to a Flex Container sets consistent empty space strictly BETWEEN flex items without adding space to the outer edges?",
    question_hi: "फ्लेक्स कंटेनर पर लगाई जाने वाली कौन सी मॉडर्न CSS प्रॉपर्टी केवल आइटम्स के बीच (outer edges पर नहीं) एक समान खाली जगह (space) बनाती है?",
    options_en: [
      "margin-between",
      "padding-inner",
      "gap",
      "space-around"
    ],
    options_hi: [
      "margin-between",
      "padding-inner",
      "gap",
      "space-around"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q8",
    question_en: "If you want one specific child item to stretch or align differently along the cross axis, overriding the parent's 'align-items' setting, which property should you apply directly to that child?",
    question_hi: "यदि आप चाहते हैं कि कोई एक खास बच्चा (item) पैरेंट के 'align-items' नियम को तोड़कर cross axis पर अलग तरह से अलाइन हो, तो आपको उस बच्चे पर सीधे कौन सी प्रॉपर्टी लगानी चाहिए?",
    options_en: [
      "justify-self",
      "align-self",
      "flex-override",
      "item-align"
    ],
    options_hi: [
      "justify-self",
      "align-self",
      "flex-override",
      "item-align"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q9",
    question_en: "Why is 'flex-shrink: 0;' commonly applied to elements like avatar images or brand logos inside a flex navigation bar?",
    question_hi: "फ्लेक्स नेविगेशन बार के अंदर अवतार इमेज या ब्रांड लोगो जैसे एलिमेंट्स पर अक्सर 'flex-shrink: 0;' क्यों लगाया जाता है?",
    options_en: [
      "To make the logo expand and fill the entire width of the screen.",
      "To prevent the logo or image from being squished and distorted when the screen size gets smaller.",
      "To turn the square logo into a perfect circle.",
      "To hide the logo on mobile devices automatically."
    ],
    options_hi: [
      "ताकि लोगो फैलकर स्क्रीन की पूरी चौड़ाई घेर ले।",
      "ताकि स्क्रीन छोटी होने पर लोगो या इमेज पिचकने (squish) और खराब दिखने से बच सके।",
      "चौकोर लोगो को परफेक्ट गोल बनाने के लिए।",
      "मोबाइल उपकरणों पर लोगो को अपने आप छिपाने के लिए।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q10",
    question_en: "What is the key functional difference between 'align-items' and 'align-content'?",
    question_hi: "'align-items' और 'align-content' के बीच मुख्य तकनीकी अंतर क्या है?",
    options_en: [
      "align-items works on text only, while align-content works on images.",
      "align-items aligns items along a single row, whereas align-content controls the spacing of MULTIPLE wrapped lines along the cross axis.",
      "align-items is for the Main Axis, align-content is for the Cross Axis.",
      "There is no difference; they are exact synonyms in modern CSS."
    ],
    options_hi: [
      "align-items केवल टेक्स्ट पर काम करता है, जबकि align-content इमेज पर काम करता है।",
      "align-items एक ही लाइन के आइटम्स को सजाता है, जबकि align-content कई रैप (wrapped) हुई लाइनों के बीच की दूरी को Cross Axis पर कंट्रोल करता है।",
      "align-items Main Axis के लिए होता है, align-content Cross Axis के लिए होता है।",
      "कोई अंतर नहीं है; मॉडर्न CSS में दोनों का मतलब बिल्कुल एक ही है।"
    ],
    correctAnswerIndex: 1
  }
];

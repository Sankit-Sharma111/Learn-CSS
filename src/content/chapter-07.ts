export const chapter07 = {
  id: "ch7",
  title_en: "Chapter 7: Styling Borders and Shadows",
  title_hi: "अध्याय 7: बॉर्डर्स और शैडो (Borders, Border-Radius & Shadows)",
  topics: [
    {
      id: "t7-1",
      title_en: "The Art of Borders (Width, Style, Color)",
      title_hi: "बॉर्डर का जादू (Width, Style और Color)",
      content_en: `### More Than Just a Simple Line

In CSS, a **Border** is the outline or frame that sits right between an element's padding and its external margin. A well-designed border doesn't just separate elements; it adds structure, emphasis, and polish to your webpage.

To create a border, you need three essential ingredients:
1. **\`border-width\`**: The thickness of the line (e.g., \`1px\`, \`4px\`).
2. **\`border-style\`**: The visual pattern of the line (e.g., \`solid\`, \`dashed\`, \`dotted\`, \`double\`). *Without a style, the border will remain completely invisible!*
3. **\`border-color\`**: The color of the line (e.g., \`red\`, \`#3498db\`).

---

### The Powerful Border Shorthand

Writing three separate lines of code for a single border is tedious. Professional developers use the **border shorthand** to define everything in one clean line. The standard order is **Width -> Style -> Color**:

\`\`\`css
/* Shorthand Syntax: width | style | color */
.card {
  border: 2px solid #2c3e50;
}
\`\`\`

---

### Targeting Specific Sides

You don't always have to wrap a border around all four sides. Often, modern UI designs only use a bottom border for navigation links or a left border for blockquotes:

\`\`\`css
/* Applying a border to one side only */
.quote-box {
  border-left: 4px solid #e74c3c;
  padding-left: 15px;
}

.nav-item {
  border-bottom: 2px dashed #95a5a6;
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### सिर्फ एक साधारण लाइन नहीं!

CSS में, **Border (बॉर्डर)** वह बाहरी रेखा या फ्रेम है जो किसी एलिमेंट की पैडिंग (padding) और बाहरी मार्जिन (margin) के ठीक बीच में बैठता है। एक अच्छा बॉर्डर, सिर्फ दो चीजों को अलग नहीं करता, बल्कि यह आपकी वेबसाइट के डिज़ाइन को एक साफ़-सुथरा लुक और प्रोफेसनल फील देता है।

किसी भी एलिमेंट पर बॉर्डर लगाने के लिए हमें तीन मुख्य चीज़ों की आवश्यकता होती है:
1. **\`border-width\` (मोटाई)**: लाइन कितनी मोटी होगी (जैसे, \`1px\`, \`4px\`)।
2. **\`border-style\` (डिज़ाइन/स्टाइल)**: लाइन दिखने में कैसी होगी (जैसे, \`solid\` यानी सीधी लाइन, \`dashed\` यानी छोटी-छोटी लाइनें, \`dotted\` यानी बिंदु, या \`double\` यानी दोहरी लाइन)। *ध्यान रहे: अगर आप style नहीं बताएंगे, तो बॉर्डर कभी दिखाई ही नहीं देगा!*
3. **\`border-color\` (रंग)**: बॉर्डर का रंग क्या होगा (जैसे, \`red\`, \`#3498db\`)।

---

### बॉर्डर शॉर्टहैंड (सबसे स्मार्ट तरीका)

एक ही बॉर्डर के लिए तीन अलग-अलग लाइनें लिखना टाइम वेस्ट है। दुनिया भर के डेवलपर्स **बॉर्डर शॉर्टहैंड (Shorthand)** का उपयोग करके एक ही लाइन में सारा काम निपटाते हैं। इसका सही क्रम है: **मोटाई -> स्टाइल -> रंग (Width -> Style -> Color)**:

\`\`\`css
/* शॉर्टहैंड लिखने का तरीका: width | style | color */
.card {
  border: 2px solid #2c3e50;
}
\`\`\`

---

### किसी एक खास तरफ (Side) बॉर्डर लगाना

यह ज़रूरी नहीं है कि आप हमेशा चारों तरफ ही बॉर्डर लगाएं। मॉडर्न वेबसाइट डिज़ाइन्स में अक्सर सिर्फ नीचे की तरफ (bottom) या सिर्फ बाईं तरफ (left) बॉर्डर लगाकर बहुत ही स्टाइलिश इफेक्ट्स बनाए जाते हैं:

\`\`\`css
/* सिर्फ एक तरफ बॉर्डर लगाने का तरीका */
.quote-box {
  border-left: 4px solid #e74c3c; /* सिर्फ बाईं तरफ लाल मोटी लाइन */
  padding-left: 15px;
}

.nav-item {
  border-bottom: 2px dashed #95a5a6; /* सिर्फ नीचे डैश वाली लाइन */
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="box solid">Solid Border</div>\n<div class="box dashed">Dashed Border</div>\n<div class="box dotted">Dotted Border</div>\n<div class="box side-only">Left Border Only (Quote Style)</div>`,
          css: `.box {\n  padding: 15px;\n  margin-bottom: 12px;\n  font-family: sans-serif;\n  font-weight: bold;\n  background-color: #f8f9fa;\n  color: #333;\n}\n\n.solid {\n  border: 3px solid #3498db;\n}\n\n.dashed {\n  border: 3px dashed #e67e22;\n}\n\n.dotted {\n  border: 4px dotted #9b59b6;\n}\n\n.side-only {\n  border-left: 6px solid #27ae60;\n  background-color: #eafaf1;\n}`
        }
      ]
    },
    {
      id: "t7-2",
      title_en: "Border Radius (Rounding Corners & Making Circles)",
      title_hi: "बॉर्डर रेडियस (कोनों को गोल और गोलाकार बनाना)",
      content_en: `### Say Goodbye to Sharp Edges

By default, every HTML box has sharp 90-degree corners. While sharp corners are fine, slightly rounded edges make a UI look much friendlier, modern, and softer on the eyes. We achieve this using the **\`border-radius\`** property.

You can use pixels (\`px\`) for subtle rounding, or percentages (\`%\`) for dramatic shapes:

\`\`\`css
/* Subtle rounded corners for buttons or cards */
.button {
  border-radius: 8px;
}
\`\`\`

---

### The Secret to Perfect Circles (50%)

One of the most famous CSS tricks is turning a square element (like a user profile image or an avatar badge) into a **perfect circle**. 

To do this, simply ensure the element has the **same width and height**, and then set **\`border-radius: 50%;\`**.

\`\`\`css
.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%; /* Transforms square into a perfect circle */
}
\`\`\`

---

### Targeting Individual Corners

Just like borders, you don't have to round every corner equally! You can create unique tab or tag shapes by specifying individual corners:

\`\`\`css
/* Rounding only the top-left and top-right corners (like a folder tab) */
.tab {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

/* Shorthand order: Top-Left | Top-Right | Bottom-Right | Bottom-Left */
.custom-shape {
  border-radius: 20px 0px 20px 0px;
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### नुकीले कोनों (Sharp Edges) को कहें अलविदा!

डिफ़ॉल्ट रूप से, हर HTML बॉक्स के कोने एकदम 90-डिग्री के सीधे और नुकीले होते हैं। आज के मॉडर्न वेब डिज़ाइन में, कोनों को थोड़ा सा गोल (round) कर दिया जाता है ताकि वेबसाइट देखने में सुंदर, फ्रेंडली और आंखों को सुकून देने वाली लगे। इसके लिए हम **\`border-radius\`** प्रॉपर्टी का इस्तेमाल करते हैं।

थोड़े बहुत गोल कोनों के लिए हम पिक्सल्स (\`px\`) का उपयोग करते हैं:

\`\`\`css
/* बटनों या कार्ड्स के किनारों को हल्का गोल करना */
.button {
  border-radius: 8px;
}
\`\`\`

---

### चौकोर बॉक्स को एकदम गोल (Circle) बनाने का सीक्रेट!

CSS की दुनिया में सबसे ज़्यादा इस्तेमाल होने वाली ट्रिक है—किसी चौकोर फोटो (जैसे यूज़र की प्रोफाइल फोटो या अवतार) को एकदम गोल (Circle) बना देना।

ऐसा करने का एक सिंपल गोल्डन नियम है: बॉक्स की **चौड़ाई (width) और ऊंचाई (height) बिल्कुल बराबर** रखें, और फिर **\`border-radius: 50%;\`** लगा दें!

\`\`\`css
.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%; /* चौकोर फोटो को तुरंत परफेक्ट गोल बना देगा */
}
\`\`\`

---

### किसी एक खास कोने को गोल करना

यह ज़रूरी नहीं है कि आप चारों कोनों को एक जैसा गोल करें! आप अपनी मर्जी से किसी एक या दो कोनों को गोल करके बहुत ही यूनिक डिज़ाइन (जैसे फ़ोल्डर का टैब या मैसेजिंग बबल) बना सकते हैं:

\`\`\`css
/* सिर्फ ऊपर के दोनों कोनों को गोल करना */
.tab {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

/* शॉर्टहैंड क्रम: ऊपर-बायां | ऊपर-दायां | नीचे-दायां | नीचे-बायां */
.custom-shape {
  border-radius: 20px 0px 20px 0px; /* एक तरफ गोल, एक तरफ नुकीला */
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="wrapper">\n  <div class="card rounded-sm">Subtle Curve (8px)</div>\n  <div class="card rounded-lg">Smooth Pill (30px)</div>\n  <div class="card circle">50%</div>\n  <div class="card leaf">Custom Corners</div>\n</div>`,
          css: `.wrapper {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n  font-family: sans-serif;\n  text-align: center;\n}\n\n.card {\n  width: 110px;\n  height: 110px;\n  background-color: #3498db;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  padding: 10px;\n}\n\n.rounded-sm { border-radius: 8px; }\n.rounded-lg { border-radius: 30px; }\n.circle { border-radius: 50%; background-color: #e74c3c; }\n.leaf { border-radius: 30px 0px 30px 0px; background-color: #27ae60; }`
        }
      ]
    },
    {
      id: "t7-3",
      title_en: "Box Shadow (Adding Depth & 3D Realism)",
      title_hi: "बॉक्स शैडो (डिज़ाइन में 3D गहराई और उभार लाना)",
      content_en: `### From Flat to Realistic 3D

In the real world, objects cast shadows when light hits them. By adding subtle shadows to web elements, we create an illusion of **elevation and depth**—making interactive elements like cards, buttons, and modals look like they are floating above the page!

We use the **\`box-shadow\`** property for this. It takes up to 5 values in a specific order:

\`\`\`css
/* Syntax: X-offset | Y-offset | Blur | Spread | Color */
.card {
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
}
\`\`\`

#### Breaking Down the Shadow Values:
1. **X-offset (\`0px\`)**: Moves the shadow horizontally (positive = right, negative = left).
2. **Y-offset (\`4px\`)**: Moves the shadow vertically (positive = down, negative = up).
3. **Blur Radius (\`12px\`)**: How blurry or soft the shadow looks. Higher value = softer, larger shadow.
4. **Spread Radius (\`0px\`)**: Optional. How much the shadow grows or shrinks in size.
5. **Color (\`rgba(0,0,0,0.1)\`)**: The shadow's color. *Pro tip: Always use \`rgba\` with low transparency (0.1 to 0.2) for realistic, professional shadows instead of pure harsh black!*

---

### Inset Shadows (Sunken Effect)

Want an element to look like it has been pressed *into* the screen or carved out? Just add the keyword **\`inset\`** at the very beginning of the values!

\`\`\`css
.search-input {
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.2);
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### साधारण फ्लैट डिज़ाइन को दें 3D लुक!

असली दुनिया में जब किसी चीज़ पर रोशनी पड़ती है, तो उसकी परछाई (shadow) बनती है। वेबसाइट के डिज़ाइन में भी जब हम कार्ड्स, बटनों या पॉपअप पर हल्की सी शैडो लगाते हैं, तो ऐसा लगता है जैसे वे स्क्रीन से ऊपर उठकर तैर (floating) रहे हैं! इससे वेबसाइट बहुत ही प्रीमियम और आधुनिक (Modern UI) लगती है।

इसके लिए हम **\`box-shadow\`** प्रॉपर्टी का इस्तेमाल करते हैं। इसमें हम 5 वैल्यूज को एक तय क्रम में लिखते हैं:

\`\`\`css
/* सिंटैक्स: X-दूरी | Y-दूरी | ब्लर (धुंधलापन) | फैलाव (Spread) | रंग */
.card {
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
}
\`\`\`

#### शैडो की इन 5 वैल्यूज को समझें:
1. **X-offset (\`0px\`)**: शैडो को बाएं या दाएं खिसकाने के लिए (पॉजिटिव वैल्यू = दाएं, नेगेटिव वैल्यू = बाएं)।
2. **Y-offset (\`4px\`)**: शैडो को ऊपर या नीचे खिसकाने के लिए (पॉजिटिव वैल्यू = नीचे, नेगेटिव वैल्यू = ऊपर)।
3. **Blur Radius (\`12px\`)**: शैडो कितनी धुंधली या सॉफ्ट होगी। जितनी ज़्यादा वैल्यू होगी, शैडो उतनी ही नैचुरल और सॉफ्ट दिखेगी।
4. **Spread Radius (\`0px\`)**: (ऑप्शनल) शैडो का आकार कितना बड़ा या छोटा फैलाना है।
5. **Color (\`rgba(0,0,0,0.1)\`)**: शैडो का रंग। *प्रो टिप: कभी भी गाढ़ा काला (pure black) रंग इस्तेमाल न करें! हमेशा \`rgba\` का इस्तेमाल करके हल्की ट्रांसपेरेंसी (0.1 से 0.2) रखें ताकि शैडो असली और प्रोफेशनल लगे।*

---

### इनसेट शैडो (अंदर की तरफ गड्ढे वाला इफेक्ट)

क्या आप चाहते हैं कि कोई एलिमेंट स्क्रीन के ऊपर उठने के बजाय ऐसा लगे जैसे वह स्क्रीन के *अंदर धंसा हुआ* (pressed/carved) है? इसके लिए अपनी शैडो वैल्यू के सबसे आगे बस **\`inset\`** कीवर्ड लिख दें!

\`\`\`css
.search-input {
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.2);
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="shadow-container">\n  <div class="box flat">No Shadow (Flat)</div>\n  <div class="box soft">Soft Floating Card</div>\n  <div class="box hard">Hard Retro Shadow</div>\n  <div class="box sunken">Sunken (Inset)</div>\n</div>`,
          css: `.shadow-container {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  padding: 20px;\n  background-color: #f1f2f6;\n  font-family: sans-serif;\n  text-align: center;\n}\n\n.box {\n  width: 130px;\n  height: 90px;\n  background-color: white;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  color: #2f3542;\n  padding: 10px;\n}\n\n/* 1. Flat */\n.flat { border: 1px solid #ccc; }\n\n/* 2. Modern UI Soft Shadow */\n.soft { box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08); }\n\n/* 3. Hard Retro Shadow */\n.hard { box-shadow: 6px 6px 0px #ff4757; border: 2px solid #2f3542; }\n\n/* 4. Inset (Sunken inside) */\n.sunken { box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.15); background-color: #e4e7eb; }`
        }
      ]
    },
    {
      id: "t7-4",
      title_en: "Text Shadow (Styling Typography)",
      title_hi: "टेक्स्ट शैडो (टेक्स्ट में शैडो इफेक्ट लगाना)",
      content_en: `### Giving Text Extra Punch

Just like boxes, you can apply shadows directly to typography using the **\`text-shadow\`** property. This is extremely useful for making headings readable over busy background images, or for creating dramatic glow and neon effects!

The syntax is almost identical to \`box-shadow\`, except **there is NO spread radius**:

\`\`\`css
/* Syntax: X-offset | Y-offset | Blur | Color */
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
\`\`\`

---

### Creating Glowing Neon Text

To create a futuristic glowing or neon effect, set both the X and Y offsets to **\`0px\`**, increase the blur radius, and use a bright, vibrant color:

\`\`\`css
.neon-text {
  color: #fff;
  text-shadow: 0px 0px 10px #00ffcc, 0px 0px 20px #00ffcc;
}
\`\`\`
*(Notice how you can combine multiple shadows by separating them with a comma!)*

[[SANDBOX_0]]`,
      content_hi: `### टेक्स्ट को दें एक दमदार और उभरा हुआ लुक!

जिस तरह हम बॉक्स पर शैडो लगाते हैं, बिल्कुल उसी तरह हम अपने टेक्स्ट (लिखावट) पर भी सीधे शैडो लगा सकते हैं। इसके लिए हम **\`text-shadow\`** प्रॉपर्टी का उपयोग करते हैं। 

यह तब बहुत काम आता है जब आपकी बैकग्राउंड इमेज बहुत रंग-बिरंगी हो और टेक्स्ट पढ़ने में दिक्कत आ रही हो, या फिर जब आपको टेक्स्ट में चमकता हुआ नियॉन (Neon Glow) इफेक्ट बनाना हो!

इसका लिखने का तरीका बिल्कुल \`box-shadow\` जैसा ही है, बस इसमें **फैलाव (Spread radius) नहीं होता**:

\`\`\`css
/* सिंटैक्स: X-दूरी | Y-दूरी | ब्लर (धुंधलापन) | रंग */
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
\`\`\`

---

### चमकता हुआ नियॉन (Neon Glow) टेक्स्ट बनाना

अगर आप चाहते हैं कि आपका टेक्स्ट किसी साइबरपंक गेम या नियॉन साइन बोर्ड की तरह चमके, तो X और Y दूरी दोनों को **\`0px\`** कर दें, ब्लर (Blur) को बढ़ा दें, और कोई चमकदार रंग लगा दें:

\`\`\`css
.neon-text {
  color: #fff;
  /* आप कॉमा (,) लगाकर एक साथ कई शैडो जोड़ सकते हैं! */
  text-shadow: 0px 0px 10px #00ffcc, 0px 0px 20px #00ffcc;
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="text-demo">\n  <h2 class="subtle">Subtle Typography Elevation</h2>\n  <h2 class="retro">3D RETRO GAMING</h2>\n  <div class="dark-bg">\n    <h2 class="neon">NEON GLOW</h2>\n  </div>\n</div>`,
          css: `.text-demo {\n  font-family: 'Arial Black', sans-serif;\n  text-align: center;\n}\n\n.subtle {\n  color: #2c3e50;\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);\n}\n\n.retro {\n  color: #f1c40f;\n  text-shadow: 3px 3px 0px #e67e22, 6px 6px 0px #d35400;\n  font-size: 28px;\n}\n\n.dark-bg {\n  background-color: #111;\n  padding: 15px;\n  border-radius: 8px;\n  margin-top: 15px;\n}\n\n.neon {\n  color: #fff;\n  text-shadow: 0px 0px 8px #ff00ff, 0px 0px 15px #ff00ff, 0px 0px 25px #ff00ff;\n  letter-spacing: 2px;\n}`
        }
      ]
    }
  ]
};

export const chapter07Quiz = [
  {
    id: "q1",
    question_en: "What happens if you define 'border-width' and 'border-color', but forget to include 'border-style'?",
    question_hi: "यदि आप 'border-width' और 'border-color' तो सेट कर देते हैं, लेकिन 'border-style' लिखना भूल जाते हैं, तो क्या होगा?",
    options_en: [
      "The border will default to a solid black line.",
      "The browser will crash.",
      "The border will not be visible at all.",
      "The border will automatically become dashed."
    ],
    options_hi: [
      "बॉर्डर डिफ़ॉल्ट रूप से एक सीधी काली लाइन (solid black) बन जाएगा।",
      "ब्राउज़र क्रैश हो जाएगा।",
      "बॉर्डर बिल्कुल भी दिखाई नहीं देगा।",
      "बॉर्डर अपने आप डैश (dashed) वाली लाइन बन जाएगा।"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q2",
    question_en: "What is the standard, correct order of values when using the 'border' shorthand property?",
    question_hi: "जब हम 'border' शॉर्टहैंड प्रॉपर्टी का उपयोग करते हैं, तो वैल्यूज लिखने का सही और मानक क्रम क्या होता है?",
    options_en: [
      "color | style | width",
      "width | style | color",
      "style | width | color",
      "radius | width | style"
    ],
    options_hi: [
      "रंग | स्टाइल | मोटाई (color | style | width)",
      "मोटाई | स्टाइल | रंग (width | style | color)",
      "स्टाइल | मोटाई | रंग (style | width | color)",
      "रेडियस | मोटाई | स्टाइल (radius | width | style)"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q3",
    question_en: "Which CSS property is used to round the sharp corners of an HTML element?",
    question_hi: "किसी HTML एलिमेंट के नुकीले कोनों को गोल (round) करने के लिए किस CSS प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: [
      "border-round",
      "corner-style",
      "border-radius",
      "box-curve"
    ],
    options_hi: [
      "border-round",
      "corner-style",
      "border-radius",
      "box-curve"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q4",
    question_en: "What is the industry-standard CSS trick to transform a square element (with equal width and height) into a perfect circle?",
    question_hi: "किसी चौकोर एलिमेंट (जिसकी चौड़ाई और ऊंचाई बराबर हो) को एक परफेक्ट गोला (Circle) बनाने के लिए किस CSS ट्रिक का इस्तेमाल किया जाता है?",
    options_en: [
      "border-radius: 100px;",
      "border-style: circle;",
      "border-radius: 50%;",
      "box-shape: round;"
    ],
    options_hi: [
      "border-radius: 100px;",
      "border-style: circle;",
      "border-radius: 50%;",
      "box-shape: round;"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q5",
    question_en: "In the property rule 'box-shadow: 0px 4px 10px rgba(0,0,0,0.1);', what does the third value ('10px') represent?",
    question_hi: "प्रॉपर्टी नियम 'box-shadow: 0px 4px 10px rgba(0,0,0,0.1);' में, तीसरी वैल्यू ('10px') क्या दर्शाती है?",
    options_en: [
      "Horizontal X-offset",
      "Vertical Y-offset",
      "Spread Radius",
      "Blur Radius"
    ],
    options_hi: [
      "क्षैतिज X-दूरी (Horizontal X-offset)",
      "ऊर्ध्वाधर Y-दूरी (Vertical Y-offset)",
      "फैलाव (Spread Radius)",
      "धुंधलापन (Blur Radius)"
    ],
    correctAnswerIndex: 3
  },
  {
    id: "q6",
    question_en: "Which keyword do you add inside 'box-shadow' to make the shadow look sunken into the element rather than floating above it?",
    question_hi: "शैडो को एलिमेंट के ऊपर तैरने के बजाय अंदर की तरफ धंसा हुआ (गड्ढे जैसा) दिखाने के लिए 'box-shadow' में किस कीवर्ड का इस्तेमाल किया जाता है?",
    options_en: [
      "inside",
      "inset",
      "internal",
      "sunken"
    ],
    options_hi: [
      "inside",
      "inset",
      "internal",
      "sunken"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q7",
    question_en: "Why do professional web developers prefer using 'rgba()' colors with low transparency for box shadows instead of solid pure black ('#000000')?",
    question_hi: "प्रोफेशनल वेब डेवलपर्स बॉक्स शैडो के लिए गाढ़े काले रंग ('#000000') के बजाय हल्की ट्रांसपेरेंसी वाले 'rgba()' रंगों का उपयोग करना क्यों पसंद करते हैं?",
    options_en: [
      "Because pure black takes longer to load on browsers.",
      "Because rgba() shadows blend naturally with the background color, creating a realistic, softer look.",
      "Because solid black is forbidden in modern HTML5.",
      "Because rgba() automatically increases the website's SEO ranking."
    ],
    options_hi: [
      "क्योंकि गाढ़ा काला रंग ब्राउज़र में लोड होने में ज़्यादा समय लेता है।",
      "क्योंकि rgba() शैडो बैकग्राउंड रंग के साथ स्वाभाविक रूप से घुल-मिल जाती है, जिससे डिज़ाइन असली और सॉफ्ट लगता है।",
      "क्योंकि आधुनिक HTML5 में गाढ़े काले रंग का उपयोग प्रतिबंधित है।",
      "क्योंकि rgba() स्वचालित रूप से वेबसाइट की SEO रैंकिंग बढ़ा देता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q8",
    question_en: "What is one major difference between the syntax of 'box-shadow' and 'text-shadow'?",
    question_hi: "'box-shadow' और 'text-shadow' को लिखने के तरीके (syntax) में एक सबसे बड़ा अंतर क्या है?",
    options_en: [
      "text-shadow does not support Blur radius.",
      "text-shadow does not support Spread radius.",
      "box-shadow cannot use rgba() colors.",
      "text-shadow can only be applied to <p> tags."
    ],
    options_hi: [
      "text-shadow में ब्लर (Blur) का सपोर्ट नहीं होता।",
      "text-shadow में फैलाव (Spread radius) का सपोर्ट नहीं होता।",
      "box-shadow में rgba() रंगों का उपयोग नहीं किया जा सकता।",
      "text-shadow केवल <p> टैग पर ही लगाया जा सकता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q9",
    question_en: "How can you apply multiple shadows (like creating a layered glowing neon effect) to a single text element?",
    question_hi: "आप किसी एक ही टेक्स्ट एलिमेंट पर एक साथ कई शैडो (जैसे लेयर वाला चमकता नियॉन इफेक्ट बनाने के लिए) कैसे लगा सकते हैं?",
    options_en: [
      "Write the text-shadow property multiple times on new lines.",
      "Combine the shadows in a single line separated by a comma (,).",
      "Combine the shadows using the plus (+) symbol.",
      "It is strictly impossible to have more than one shadow in CSS."
    ],
    options_hi: [
      "text-shadow प्रॉपर्टी को अलग-अलग लाइनों में बार-बार लिखकर।",
      "सभी शैडो को एक ही लाइन में कॉमा (,) लगाकर जोड़कर।",
      "प्लस (+) के निशान का उपयोग करके शैडो को जोड़कर।",
      "CSS में एक से ज़्यादा शैडो लगाना पूरी तरह से असंभव है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q10",
    question_en: "If you write 'border-radius: 20px 0px;', how will the browser interpret and apply this to the four corners?",
    question_hi: "यदि आप 'border-radius: 20px 0px;' लिखते हैं, तो ब्राउज़र इसे चारों कोनों पर किस तरह से लागू करेगा?",
    options_en: [
      "Top-Left and Top-Right will be 20px; Bottom-Right and Bottom-Left will be 0px.",
      "Top-Left and Bottom-Right will be 20px; Top-Right and Bottom-Left will be 0px (diagonal symmetry).",
      "Only the Top-Left corner will be 20px; all other three will be 0px.",
      "The CSS is invalid and will be completely ignored."
    ],
    options_hi: [
      "ऊपर-बायां और ऊपर-दायां 20px होगा; नीचे-दायां और नीचे-बायां 0px होगा।",
      "ऊपर-बायां और नीचे-दायां 20px होगा; ऊपर-दायां और नीचे-बायां 0px होगा (डायगोनल डिज़ाइन)।",
      "केवल ऊपर-बायां कोना 20px होगा; बाकी तीनों 0px होंगे।",
      "यह CSS अमान्य (invalid) है और इसे पूरी तरह से नज़रअंदाज़ कर दिया जाएगा।"
    ],
    correctAnswerIndex: 1
  }
];

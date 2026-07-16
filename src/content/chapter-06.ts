export const chapter06 = {
  id: "ch6",
  title_en: "Chapter 6: The Box Model - Spacing & Dimensions",
  title_hi: "अध्याय 6: द बॉक्स मॉडल - स्पेसिंग और डाइमेंशन्स",
  topics: [
    {
      id: "t6-1",
      title_en: "What is the Box Model?",
      title_hi: "द बॉक्स मॉडल क्या है? (What is the Box Model?)",
      content_en: `### Every Element is a Box

In CSS, you must understand one golden rule: **Every single HTML element on a webpage is essentially a rectangular box.** It doesn't matter if an element looks like a perfect circle, a pill-shaped button, or just a single piece of text—to the browser's layout engine, it is always a rectangle.

The **CSS Box Model** is the core foundation of web design. It is a set of rules that determines how much space an element takes up on the screen and how it interacts with other neighboring elements.

---

### The 4 Layers of the Box Model

To understand the Box Model, imagine it like a framed painting or a physical shipping box wrapped in layers. From the absolute inside to the outside, the layers are:

1. **Content Area:** This is the core inner layer where the actual text, images, or child elements live. Its size is controlled by \`width\` and \`height\`.
2. **Padding (Inside Space):** This is the clear, transparent space that wraps around the content, sitting *inside* the border. It acts like bubble wrap, pushing the border away from your content.
3. **Border:** This is the frame or line that wraps directly around the padding and content. It can be thin, thick, colored, dashed, or completely invisible.
4. **Margin (Outside Space):** This is the transparent space *outside* the border. It is used to push other neighboring HTML elements away, creating breathing room between different boxes.

[[SANDBOX_0]]`,
      content_hi: `### हर एक एलिमेंट एक बॉक्स है!

CSS सीखते समय आपको एक सुनहरा नियम हमेशा याद रखना होगा: **वेबपेज पर दिखने वाला हर एक HTML एलिमेंट असल में एक रेक्टेंगुलर (आयताकार) बॉक्स होता है।** चाहे कोई एलिमेंट गोल (circle) दिखे, कैप्सूल जैसा बटन हो, या सिर्फ एक छोटा सा टेक्स्ट हो—ब्राउज़र उसे हमेशा एक चौकोर बॉक्स की तरह ही देखता है।

**CSS Box Model** वेब डिज़ाइन की सबसे मजबूत बुनियाद है। यह नियमों का एक ऐसा सेट है जो यह तय करता है कि कोई एलिमेंट स्क्रीन पर कितनी जगह घेरेगा और अपने आस-पास के दूसरे एलिमेंट्स से कितनी दूरी बनाएगा।

---

### बॉक्स मॉडल की 4 परतें (Layers)

बॉक्स मॉडल को आसानी से समझने के लिए, कल्पना कीजिए कि आप बाज़ार से कोई कीमती सामान (कांच का बर्तन) कूरियर से भेज रहे हैं। अंदर से बाहर की तरफ इसमें ये 4 परतें होती हैं:

1. **कंटेंट एरिया (Content Area):** यह सबसे अंदर का हिस्सा है जहाँ आपका असली टेक्स्ट, इमेज या वीडियो रहता है। इसकी चौड़ाई और लंबाई को हम \`width\` और \`height\` से कंट्रोल करते हैं।
2. **पैडिंग (Padding - अंदर की जगह):** यह कंटेंट के चारों तरफ की खाली जगह है जो बॉर्डर के *अंदर* होती है। यह कूरियर बॉक्स में लगे बबल-रैप (bubble wrap) की तरह काम करती है, जो आपके सामान को बाहरी दीवार (border) से टकराने से बचाती है।
3. **बॉर्डर (Border - दीवार):** यह वह फ्रेम या रेखा है जो पैडिंग और कंटेंट को चारों तरफ से घेरती है। इसे आप मोटा, पतला, रंगीन या अपनी मर्जी से गायब भी कर सकते हैं।
4. **मार्जिन (Margin - बाहर की जगह):** यह बॉर्डर के *बाहर* की खाली जगह होती है। इसका इस्तेमाल दूसरे एलिमेंट्स को खुद से दूर धकेलने (push करने) के लिए किया जाता है, ताकि दो बॉक्स आपस में चिपक न जाएं।

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="box-model-container">\n  <div class="custom-box">Content Area</div>\n</div>`,
          css: `/* Container to center everything nicely */\n.box-model-container {\n  padding: 40px;\n  background-color: #f9f9f9;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n/* The core box demonstrating the Box Model */\n.custom-box {\n  width: 200px;\n  height: 60px;\n  background-color: #3498db; /* Content background */\n  color: white;\n  text-align: center;\n  line-height: 60px;\n  font-weight: bold;\n  \n  /* Box Model Layers */\n  padding: 30px;            /* Inner Space */\n  border: 10px solid #2c3e50; /* The Frame */\n  margin: 40px;             /* Outer Space */\n  \n  box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n}`
        }
      ]
    },
    {
      id: "t6-2",
      title_en: "Padding vs Margin: The Spacing Secrets",
      title_hi: "पैडिंग बनाम मार्जिन: स्पेसिंग का असली खेल",
      content_en: `### The Core Difference

New developers often get confused about when to use \`padding\` and when to use \`margin\`. The easiest way to remember is:
- **Padding lives inside the house (border).** It expands the element's clickable and background area.
- **Margin lives outside the house (border).** It creates distance between different houses.

---

### How to Write Spacing Properties

CSS gives you incredible control over spacing. You can target individual sides or use a powerful shorthand method.

#### 1. Individual Sides Method
If you only want to add space to specific sides, use the side-specific properties:
\`\`\`css
margin-top: 20px;
padding-right: 15px;
margin-bottom: 10px;
padding-left: 5px;
\`\`\`

#### 2. The Clockwise Shorthand Method
Instead of writing four lines of code, you can combine them into a single line. The browser reads these values in a **Clockwise direction** starting from the top: **Top -> Right -> Bottom -> Left**.

\`\`\`css
/* Shorthand Order: Top Right Bottom Left */
padding: 10px 20px 15px 5px;
\`\`\`

#### 3. Two-Value & One-Value Shortcuts
- **Two Values:** The first value controls **Top/Bottom** (Vertical), and the second controls **Left/Right** (Horizontal).
  \`\`\`css
  /* 10px Top/Bottom, 20px Left/Right */
  margin: 10px 20px; 
  \`\`\`
- **One Value:** Applies the exact same spacing to all four sides equally.
  \`\`\`css
  /* 15px on all 4 sides */
  padding: 15px; 
  \`\`\`

[[SANDBOX_0]]`,
      content_hi: `### दोनों के बीच का मुख्य अंतर

शुरुआत में लोग अक्सर कन्फ्यूज हो जाते हैं कि कब \`padding\` लगानी है और कब \`margin\`। इसे याद रखने का सबसे आसान देसी तरीका:
- **पैडिंग घर (border) के अंदर रहती है।** यह एलिमेंट के अंदर का स्पेस बढ़ाती है, जिससे उसका बैकग्राउंड कलर एरिया भी बड़ा हो जाता है।
- **मार्जिन घर (border) के बाहर रहता है।** यह दो अलग-अलग घरों या एलिमेंट्स के बीच दूरी (फासला) बनाने का काम करता है।

---

### स्पेसिंग लिखने के तरीके (Syntax)

CSS आपको स्पेसिंग पर पूरा कंट्रोल देता है। आप चाहें तो किसी एक साइड का स्पेस बदल सकते हैं या एक छोटे शॉर्टहैंड (Shorthand) कोड से चारों साइड्स को एक बार में कंट्रोल कर सकते हैं।

#### 1. इंडिविजुअल साइड्स तरीका (Individual Sides)
अगर आपको केवल किसी एक विशेष दिशा में जगह छोड़नी है:
\`\`\`css
margin-top: 20px;    /* ऊपर की तरफ मार्जिन */
padding-right: 15px; /* दाईं तरफ पैडिंग */
margin-bottom: 10px; /* नीचे की तरफ मार्जिन */
padding-left: 5px;   /* बाईं तरफ पैडिंग */
\`\`\`

#### 2. क्लॉकवाइज शॉर्टहैंड तरीका (Clockwise Shorthand)
चार अलग-अलग लाइनें लिखने के बजाय आप उन्हें एक ही लाइन में समेट सकते हैं। ब्राउज़र इन वैल्यूज को घड़ी की सुई की दिशा (**Clockwise**) में पढ़ता है: **Top -> Right -> Bottom -> Left** (ऊपर, दायां, नीचे, बायां)।

\`\`\`css
/* क्रम: ऊपर | दायां | नीचे | बायां */
padding: 10px 20px 15px 5px;
\`\`\`

#### 3. दो-वैल्यू और एक-वैल्यू वाले शॉर्टकट्स
- **दो वैल्यूज (Two Values):** पहली वैल्यू **ऊपर/नीचे (Vertical)** को कंट्रोल करती है और दूसरी वैल्यू **बाएं/दाएं (Horizontal)** को।
  \`\`\`css
  /* 10px ऊपर-नीचे, 20px दाएं-बाएं */
  margin: 10px 20px;
  \`\`\`
- **एक वैल्यू (One Value):** यह चारों दिशाओं में एक बराबर स्पेस लागू कर देती है।
  \`\`\`css
  /* चारों तरफ एक बराबर 15px का स्पेस */
  padding: 15px;
  \`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="container-demo">\n  <div class="pad-box">I have Padding (Inside Space)</div>\n  <div class="mar-box">I have Margin (Outside Space)</div>\n</div>`,
          css: `.container-demo {\n  font-family: sans-serif;\n  background: #f1f2f6;\n  padding: 20px;\n}\n\n/* Padding makes the inside bigger and expands the orange background */\n.pad-box {\n  background-color: #e67e22;\n  color: white;\n  padding: 40px;\n  text-align: center;\n  margin-bottom: 20px;\n  font-weight: bold;\n}\n\n/* Margin keeps the box standard size, but pushes it down by 50px */\n.mar-box {\n  background-color: #27ae60;\n  color: white;\n  padding: 15px;\n  margin-top: 50px; /* Pushes away from the top box */\n  text-align: center;\n  font-weight: bold;\n}`
        }
      ]
    },
    {
      id: "t6-3",
      title_en: "Dimensions & The Box-Sizing Fix",
      title_hi: "डाइमेंशन्स और बॉक्स-साइजिंग की जादुई ट्रिक",
      content_en: `### Controlling Dimensions (\`width\` & \`height\`)

To define the exact sizes of your elements, CSS provides width and height properties. You can set them using absolute units like pixels (\`px\`) or responsive units like percentages (\`%\`).

---

### The Hidden CSS Problem: Default Math

By default, the browser uses a property called \`box-sizing: content-box;\`. Under this default rule, if you set an element's size to \`width: 200px\`, and then add a \`padding: 20px\` and a \`border: 5px\`, the browser does this calculation:

* **Actual Visual Width** = Content Width + Left Padding + Right Padding + Left Border + Right Border
* **Your calculation:** 200px
* **Browser's calculation:** 200 + 20 + 20 + 5 + 5 = **250px!**

This hidden math breaks layouts completely because your elements become wider than you intended, ruining your grid and design lines!

---

### The Modern Industry Solution: \`border-box\`

To save yourself from doing complex math every time you add padding, you can change the box calculation rules using **\`box-sizing: border-box;\`**.

This magical property tells the browser: *"Whatever width and height I set, that must be the final total size. If I add padding or borders, shrink the inner content area automatically to fit inside that width."*

With \`border-box\`, if you ask for 200px width, it stays exactly 200px wide!

#### The Global CSS Reset
Professional web developers apply this fix to every single element on the page at the very top of their CSS file using the universal selector (\`*\`):

\`\`\`css
/* The Universal Reset for stress-free layouts */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### एलिमेंट्स का साइज कंट्रोल करना (\`width\` & \`height\`)

किसी भी एलिमेंट को कितना बड़ा या छोटा दिखाना है, यह तय करने के लिए हम \`width\` (चौड़ाई) और \`height\` (ऊंचाई) का उपयोग करते हैं। इसे आप पिक्सल्स (\`px\`) या रिस्पॉन्सिव बनाने के लिए परसेंटेज (\`%\`) में लिख सकते हैं।

---

### CSS की छिपी हुई समस्या: डिफ़ॉल्ट गणित (The Math Trap)

डिफ़ॉल्ट रूप से, ब्राउज़र एक नियम का पालन करता है जिसे \`box-sizing: content-box;\` कहते हैं। इस नियम के मुताबिक, अगर आप किसी बॉक्स की \`width: 200px\` सेट करते हैं, और फिर उसमें \`padding: 20px\` और \`border: 5px\` जोड़ते हैं, तो ब्राउज़र का गणित ऐसा होता है:

* **कुल दिखने वाली चौड़ाई** = मुख्य चौड़ाई + बाईं पैडिंग + दाईं पैडिंग + बायां बॉर्डर + दायां बॉर्डर
* **आपका सोचना था:** 200px
* **ब्राउज़र का असली साइज:** 200 + 20 + 20 + 5 + 5 = **250px!**

इस अजीब गणित की वजह से अक्सर डिज़ाइन टूट (break) जाता है, क्योंकि एलिमेंट आपकी सोची हुई जगह से ज़्यादा बड़े हो जाते हैं और नीचे की लाइन में खिसक जाते हैं।

---

### मॉडर्न इंडस्ट्री का उपाय: \`border-box\`

इस सिरदर्द और गणित से बचने के लिए मॉडर्न वेब डेवलपमेंट में एक बेहतरीन प्रॉपर्टी का इस्तेमाल किया जाता है: **\`box-sizing: border-box;\`**।

यह जादुई प्रॉपर्टी ब्राउज़र को साफ निर्देश देती है: *"मैं जो चौड़ाई (width) सेट करूँ, बॉक्स का फाइनल साइज वही होना चाहिए। अगर मैं अंदर पैडिंग या बॉर्डर बढ़ाऊँ, तो तुम अंदर के कंटेंट को छोटा कर लो, लेकिन टोटल साइज को टस से मस मत होने देना।"*

अगर अब आप \`width: 200px\` सेट करेंगे, तो पैडिंग जोड़ने के बाद भी डिज़ाइन पूरे 200px का ही रहेगा!

#### ग्लोबल CSS रिसेट (The Global Reset)
दुनिया के सभी प्रोफेशनल वेब डेवलपर्स अपने काम को आसान बनाने के लिए अपनी CSS फ़ाइल की शुरुआत में ही यूनिवर्सल सिलेक्टर (\`*\`) लगाकर इस फिक्स को पूरी वेबसाइट पर लागू कर देते हैं:

\`\`\`css
/* बिना किसी टेंशन के लेआउट बनाने के लिए यूनिवर्सल रिसेट */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="bad-math">Default Math (Breaks Layout)</div>\n<div class="good-math">Border-Box Math (Perfect layout)</div>`,
          css: `/* Shared basic styling */\n.bad-math, .good-math {\n  width: 250px;\n  padding: 40px;\n  border: 10px solid #2c3e50;\n  color: white;\n  font-family: sans-serif;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n/* This box grows to 250 + 40 + 40 + 10 + 10 = 350px width! */\n.bad-math {\n  background-color: #e74c3c;\n}\n\n/* This box stays EXACTLY 250px wide because of border-box */\n.good-math {\n  box-sizing: border-box;\n  background-color: #2ecc71;\n}`
        }
      ]
    }
  ]
};

export const chapter06Quiz = [
  {
    id: "q1",
    question_en: "According to the CSS Box Model, which layer sits directly between the Content Area and the Border?",
    question_hi: "CSS बॉक्स मॉडल के अनुसार, कौन सी परत (layer) सीधे कंटेंट एरिया और बॉर्डर के बीच में बैठती है?",
    options_en: ["Margin", "Padding", "Outline", "Width"],
    options_hi: ["मार्जिन (Margin)", "पैडिंग (Padding)", "आउटलाइन (Outline)", "चौड़ाई (Width)"],
    correctAnswerIndex: 1
  },
  {
    id: "q2",
    question_en: "Which CSS property is used to create completely transparent space OUTSIDE an element's border to push other elements away?",
    question_hi: "दूसरे एलिमेंट्स को खुद से दूर धकेलने के लिए, एलिमेंट के बॉर्डर के बाहर (OUTSIDE) पूरी तरह से पारदर्शी जगह बनाने के लिए किस CSS प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["padding", "border-width", "margin", "box-sizing"],
    options_hi: ["padding", "border-width", "margin", "box-sizing"],
    correctAnswerIndex: 2
  },
  {
    id: "q3",
    question_en: "What is the primary visual difference between Padding and Margin?",
    question_hi: "पैडिंग (Padding) और मार्जिन (Margin) के बीच मुख्य दृश्य (visual) अंतर क्या है?",
    options_en: [
      "Padding adds space outside the border, Margin adds space inside.",
      "Padding affects text fonts, while Margin only affects images.",
      "Padding adds space inside the border and shows background color, while Margin is outside the border and always transparent.",
      "There is no difference; they are alternative names for the same property."
    ],
    options_hi: [
      "पैडिंग बॉर्डर के बाहर स्पेस जोड़ती है, मार्जिन अंदर स्पेस जोड़ता है।",
      "पैडिंग टेक्स्ट फ़ॉन्ट को प्रभावित करती है, जबकि मार्जिन केवल इमेज को प्रभावित करता है।",
      "पैडिंग बॉर्डर के अंदर स्पेस जोड़ती है और बैकग्राउंड कलर दिखाती है, जबकि मार्जिन बॉर्डर के बाहर होता है और हमेशा पारदर्शी होता है।",
      "कोई अंतर नहीं है; वे एक ही प्रॉपर्टी के दो अलग-अलग नाम हैं।"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q4",
    question_en: "If you use the shorthand 'margin: 10px 20px 30px 40px;', which side receives the 40px value?",
    question_hi: "यदि आप शॉर्टहैंड 'margin: 10px 20px 30px 40px;' का उपयोग करते हैं, तो 40px वैल्यू किस साइड (दिशा) पर लागू होगी?",
    options_en: ["Top", "Right", "Bottom", "Left"],
    options_hi: ["टॉप (Top)", "राइट (Right)", "बॉटम (Bottom)", "लेफ्ट (Left)"],
    correctAnswerIndex: 3
  },
  {
    id: "q5",
    question_en: "By default, if an element has 'width: 200px', 'padding: 20px' on all sides, and 'border: 5px', what is its total visual width in the browser?",
    question_hi: "डिफ़ॉल्ट रूप से (content-box में), यदि किसी एलिमेंट की 'width: 200px' है, चारों तरफ 'padding: 20px' है, और 'border: 5px' है, तो ब्राउज़र में इसकी कुल चौड़ाई क्या होगी?",
    options_en: ["200px", "225px", "240px", "250px"],
    options_hi: ["200px", "225px", "240px", "250px"],
    correctAnswerIndex: 3
  },
  {
    id: "q6",
    question_en: "Which property and value force the browser to include padding and borders within the defined width and height of an element?",
    question_hi: "कौन सी प्रॉपर्टी और वैल्यू ब्राउज़र को एलिमेंट की निर्धारित चौड़ाई और ऊंचाई के अंदर ही पैडिंग और बॉर्डर को शामिल करने के लिए मजबूर करती है?",
    options_en: [
      "box-sizing: content-box;",
      "box-sizing: border-box;",
      "display: block;",
      "margin: auto;"
    ],
    options_hi: [
      "box-sizing: content-box;",
      "box-sizing: border-box;",
      "display: block;",
      "margin: auto;"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q7",
    question_en: "In the shorthand property rule 'padding: 10px 40px;', what does the 40px value represent?",
    question_hi: "शॉर्टहैंड प्रॉपर्टी नियम 'padding: 10px 40px;' में, 40px वैल्यू क्या दर्शाती है?",
    options_en: [
      "Padding for the Top and Bottom sides.",
      "Padding for the Left and Right sides.",
      "Padding for the Right side only.",
      "Padding applied to all four sides equally."
    ],
    options_hi: [
      "ऊपर और नीचे (Top and Bottom) दोनों साइड्स की पैडिंग।",
      "बाएं और दाएं (Left and Right) दोनों साइड्स की पैडिंग।",
      "केवल दाईं (Right) साइड की पैडिंग।",
      "चारों तरफ समान रूप से लागू होने वाली पैडिंग।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q8",
    question_en: "What is the purpose of adding '* { box-sizing: border-box; }' at the very top of a professional CSS file?",
    question_hi: "एक प्रोफेशनल CSS फ़ाइल के सबसे ऊपर '* { box-sizing: border-box; }' जोड़ने का उद्देश्य क्या है?",
    options_en: [
      "To automatically choose nice background colors for elements.",
      "To increase the website loading speed.",
      "To reset the entire page so layout sizing math remains predictable and easy to manage.",
      "To make all text bold by default."
    ],
    options_hi: [
      "एलिमेंट्स के लिए स्वचालित रूप से अच्छे बैकग्राउंड रंग चुनना।",
      "वेबसाइट लोडिंग स्पीड को बढ़ाना।",
      "पूरे पेज को रीसेट करना ताकि लेआउट का गणित आसान और अनुमान लगाने योग्य बना रहे।",
      "डिफ़ॉल्ट रूप से सभी टेक्स्ट को बोल्ड बनाना।"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q9",
    question_en: "True or False: An element's background color or background image will also stretch and display beneath its Padding layer.",
    question_hi: "सही या गलत: किसी एलिमेंट का बैकग्राउंड कलर या बैकग्राउंड इमेज उसकी पैडिंग (Padding) परत के नीचे भी फैलती और दिखाई देती है।",
    options_en: [
      "True, padding includes the background of the element.",
      "False, padding is always completely white and hides background colors."
    ],
    options_hi: [
      "सही (True), पैडिंग में एलिमेंट का बैकग्राउंड शामिल होता है।",
      "गलत (False), पैडिंग हमेशा पूरी तरह से सफेद होती है और बैकग्राउंड रंगों को छुपाती है।"
    ],
    correctAnswerIndex: 0
  },
  {
    id: "q10",
    question_en: "If you set 'margin: 0;', what are you instructing the browser to do?",
    question_hi: "यदि आप अपने कोड में 'margin: 0;' सेट करते हैं, तो आप ब्राउज़र को क्या निर्देश दे रहे हैं?",
    options_en: [
      "Hide the element from the webpage.",
      "Remove all external space around the element on all four sides.",
      "Set the element's inner content text to zero width.",
      "Make the border lines transparent."
    ],
    options_hi: [
      "एलिमेंट को वेबपेज से छिपाना।",
      "एलिमेंट के चारों तरफ के बाहरी स्पेस (मार्जिन) को पूरी तरह से हटाकर शून्य करना।",
      "एलिमेंट के अंदरूनी टेक्स्ट की चौड़ाई को शून्य करना।",
      "बॉर्डर लाइनों को पारदर्शी (transparent) बनाना।"
    ],
    correctAnswerIndex: 1
  }
];

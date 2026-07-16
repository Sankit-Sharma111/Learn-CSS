export const chapter01 = {
  id: "ch1",
  title_en: "Chapter 1: Introduction to CSS & Syntax",
  title_hi: "अध्याय 1: CSS का परिचय और सिंटैक्स",
  topics: [
    {
      id: "t1-1",
      title_en: "What is CSS & Basic Syntax",
      title_hi: "CSS क्या है और मूल सिंटैक्स?",
      content_en: `### Introduction to CSS

**CSS** stands for **Cascading Style Sheets**. It is the language used to design and style the visual layout of web pages.

If a website were a building, **HTML** would be the raw concrete walls and pillars (the structure), while **CSS** would be the paint, the lighting, the furniture, and the interior design. It dictates exactly how elements look, where they sit on the screen, and how they adapt to different devices.

![Example of CSS](https://ik.imagekit.io/Sankit/example_css.png)

### CSS Prerequisites

- Basic knowledge of working with files or **file management.**
- Basic understanding of HTML. In order to start learning CSS you have to have a basic understanding of HTML first. If you are new to HTML you can install this app [Learn HTML](https://mfirstweb.netlify.app/).

### What Exactly Does CSS Do?

Without CSS, every webpage would look like a plain text document with black text, blue links, and raw images stacked vertically. CSS gives you control over:

- **Typography:** Choosing fonts, sizing text, and adjusting spacing between lines or letters.
- **Colors & Backgrounds:** Applying text colors, gradients, background images, and transparency.
- **The Layout:** Positioning elements, alignment, and adding padding or margins.
- **Responsiveness:** Making sure a website looks clean and readable whether it is viewed on a massive monitor or a small smartphone screen.

### How It Works: The Basic Syntax

CSS works by targeting an HTML element and declaring how it should change. A simple code snippet consists of a **selector** (what you want to style) and a **declaration block** containing properties and values.

\`\`\`css
.example-class {
  property-name: value;
}
\`\`\`

- \`.example-class\` ➔ This is the selector. It tells the browser *where* to apply the style.
- \`property-name\` ➔ The specific aspect we want to change (e.g., color, font-size).
- \`value\` ➔ The exact setting we are applying (e.g., red, 20px).

Here is a simple example of how it works:

[[SANDBOX_0]]

:::tip
**Did you know?** CSS was first proposed by Håkon Wium Lie on October 10, 1994. Before CSS, nearly all presentation attributes were contained within the HTML markup.
:::

### Why Is It Called Cascading?

The word Cascading means that rules fall down from one level to another. If you apply a style to the entire body of a web page, all the elements inside it will automatically inherit that style unless you specifically override it with a more targeted rule later. It allows you to write clean, reusable code without having to style every single line of text individually.`,
      content_hi: `### CSS का परिचय

**CSS** का पूरा नाम **Cascading Style Sheets** है। यह वह भाषा है जिसका उपयोग वेब पेजों के दृश्य लेआउट (Visual Layout) को डिज़ाइन और स्टाइल करने के लिए किया जाता है।

यदि किसी वेबसाइट को एक भवन माना जाए, तो **HTML** उसकी कच्ची दीवारें और खंभे (Structure) होगा, जबकि **CSS** उसका रंग-रोगन, प्रकाश व्यवस्था, फर्नीचर और आंतरिक सजावट होगा। CSS यह निर्धारित करता है कि किसी वेब पेज के तत्व कैसे दिखेंगे, स्क्रीन पर कहाँ दिखाई देंगे, और विभिन्न उपकरणों के अनुसार कैसे अनुकूलित होंगे।

![Example of CSS](https://ik.imagekit.io/Sankit/example_css.png)

### CSS सीखने के लिए आवश्यक पूर्वज्ञान

- फ़ाइलों के साथ काम करने या **फ़ाइल प्रबंधन (File Management)** की मूल जानकारी।
- HTML की बुनियादी समझ। CSS सीखना शुरू करने के लिए HTML का आधारभूत ज्ञान आवश्यक है। यदि आप HTML में नए हैं, तो आप यह ऐप इंस्टॉल कर सकते हैं: [Learn HTML](https://mfirstweb.netlify.app/).

### CSS वास्तव में क्या करता है?

CSS के बिना प्रत्येक वेब पेज एक साधारण टेक्स्ट दस्तावेज़ जैसा दिखाई देगा, जिसमें काला टेक्स्ट, नीले लिंक और एक के नीचे एक रखी हुई सामान्य छवियाँ होंगी। CSS आपको निम्नलिखित चीज़ों पर नियंत्रण देता है:

- **टाइपोग्राफी (Typography):** फ़ॉन्ट चुनना, टेक्स्ट का आकार निर्धारित करना तथा पंक्तियों और अक्षरों के बीच की दूरी नियंत्रित करना।
- **रंग और पृष्ठभूमि (Colors & Backgrounds):** टेक्स्ट के रंग, ग्रेडिएंट, पृष्ठभूमि छवियाँ और पारदर्शिता लागू करना।
- **लेआउट (Layout):** तत्वों को व्यवस्थित करना, संरेखण (Alignment) करना तथा Padding और Margin जोड़ना।
- **रिस्पॉन्सिव डिज़ाइन (Responsiveness):** यह सुनिश्चित करना कि वेबसाइट बड़े मॉनिटर से लेकर छोटे स्मार्टफ़ोन तक सभी उपकरणों पर साफ़ और पढ़ने योग्य दिखाई दे।

### यह कैसे काम करता है: मूल सिंटैक्स (Syntax)

CSS किसी HTML तत्व को लक्ष्य बनाकर उस पर स्टाइल लागू करता है। एक साधारण CSS कोड में एक **Selector** (जिससे स्टाइल करना है) और एक **Declaration Block** (जिसमें Properties और Values होती हैं) शामिल होता है:

\`\`\`css
.example-class {
  property-name: value;
}
\`\`\`

- \`.example-class\` ➔ यह Selector है। यह ब्राउज़र को बताता है कि स्टाइल **कहाँ** लागू करनी है।
- \`property-name\` ➔ वह विशेष गुण जिसे हम बदलना चाहते हैं (जैसे color, font-size आदि)।
- \`value\` ➔ वह मान जो हम उस गुण पर लागू कर रहे हैं (जैसे red, 20px आदि)।

यहाँ एक सरल उदाहरण दिया गया है कि यह कैसे कार्य करता है:

[[SANDBOX_0]]

:::tip
**क्या आप जानते हैं?** CSS का प्रस्ताव सबसे पहले Håkon Wium Lie द्वारा 10 अक्टूबर 1994 को रखा गया था। CSS के आने से पहले लगभग सभी प्रस्तुति संबंधी गुण (Presentation Attributes) सीधे HTML मार्कअप में लिखे जाते थे।
:::

### इसे Cascading क्यों कहा जाता है?

"Cascading" का अर्थ है कि स्टाइल नियम एक स्तर से दूसरे स्तर तक प्रवाहित होते हैं। यदि आप किसी वेब पेज के पूरे body पर कोई स्टाइल लागू करते हैं, तो उसके अंदर मौजूद सभी एलिमेंट्स स्वतः उस स्टाइल को अपनाएँगे, जब तक कि आप बाद में किसी अन्य नियम द्वारा उसे बदल न दें। यह सुविधा आपको साफ़, व्यवस्थित और पुनः उपयोग योग्य (Reusable) कोड लिखने में मदद करती है।`,
      sandboxes: [
        {
          html: `<h1 class="title">Hello World</h1>\n<p>Welcome to learning CSS!</p>`,
          css: `h1 {\n  color: navy;\n  font-size: 32px;\n}\n\np {\n  color: #333333;\n}`
        }
      ]
    },
    {
      id: "t1-2",
      title_en: "How to Add CSS",
      title_hi: "HTML में CSS कैसे जोड़ें?",
      content_en: `### How to Add CSS to HTML?

There are 3 main ways to add CSS (Cascading Style Sheets) to an HTML document. Each method has its own use case depending on the project's size and maintenance needs.

---

## 1. Inline CSS

Inline CSS is applied directly to a specific HTML element using the \`style\` attribute. It only affects the individual element it is added to.

### Advantages
- Great for quick testing or debugging.
- Useful for overriding global styles on a single element.

### Disadvantages
- Hard to manage in large projects.
- Makes the HTML code cluttered.
- The browser cannot cache the CSS for reuse.

[[SANDBOX_0]]

---

## 2. Internal (Embedded) CSS

Internal CSS is written inside a \`<style>\` tag, which is placed within the \`<head>\` section of the HTML document. The styles apply to all matching elements on that specific page.

### Advantages
- All styles for the page are in one central place.
- No need to create a separate file for small or single-page websites.

### Disadvantages
- If a website has multiple pages, you have to copy-paste the same CSS code on every page.
- Updating a style requires manually editing every single file.

[[SANDBOX_1]]

---

## 3. External CSS

External CSS is the standard and most professional method used in web development. The CSS rules are written in a completely separate file (e.g., \`style.css\`) and linked to the HTML file using the \`<link>\` tag.

### Advantages

#### Maintainability
You can change the design of an entire website by editing just one single CSS file.

#### Performance
The browser caches the external CSS file, making the website load much faster on subsequent visits.

#### Clean Code
HTML (content) and CSS (presentation) stay completely separated, making the project highly organized.

### Step 1: Create a file named \`style.css\`
### Step 2: Link it in your HTML file inside the head section

[[SANDBOX_2]]`,
      content_hi: `### HTML में CSS कैसे जोड़ें?

CSS को HTML डॉक्यूमेंट में जोड़ने के 3 मुख्य तरीके होते हैं। प्रत्येक तरीके का अपना उपयोग होता है, जो आपके प्रोजेक्ट के आकार और उसकी देखरेख (Maintenance) की आवश्यकता पर निर्भर करता है।

---

## 1. Inline CSS

Inline CSS को किसी HTML एलिमेंट पर सीधे \`style\` एट्रिब्यूट की मदद से लगाया जाता है। यह केवल उसी एलिमेंट को प्रभावित करता है जिस पर इसे लगाया गया हो।

### फायदे
- जल्दी परीक्षण (Testing) करने के लिए उपयोगी।
- किसी एक विशेष एलिमेंट की स्टाइल को बदलने या ओवरराइड करने के लिए अच्छा विकल्प।

### नुकसान
- बड़े प्रोजेक्ट्स में इसे मैनेज करना कठिन हो जाता है।
- HTML कोड अव्यवस्थित (Cluttered) दिखाई देने लगता है।
- ब्राउज़र CSS को दोबारा उपयोग के लिए कैश नहीं कर पाता।

[[SANDBOX_0]]

---

## 2. Internal (Embedded) CSS

Internal CSS को \`<style>\` टैग के अंदर लिखा जाता है, जो HTML फ़ाइल के \`<head>\` सेक्शन में रखा जाता है। इसमें लिखे गए स्टाइल नियम उस पेज के सभी मिलते-जुलते एलिमेंट्स पर लागू होते हैं।

### फायदे
- सभी स्टाइल एक ही स्थान पर रहती हैं।
- छोटी वेबसाइटों के लिए अलग CSS फ़ाइल की आवश्यकता नहीं होती।

### नुकसान
- यदि वेबसाइट में कई पेज हैं, तो एक जैसी CSS को हर पेज में कॉपी करना पड़ सकता है।
- किसी बदलाव के लिए सभी पेजों को मैन्युअली अपडेट करना पड़ सकता है।

[[SANDBOX_1]]

---

## 3. External CSS

प्रोफेशनल वेब डेवलपमेंट में External CSS को सबसे अच्छा तरीका माना जाता है। इसमें CSS नियम एक अलग फ़ाइल (आमतौर पर \`.css\` एक्सटेंशन वाली) में लिखे जाते हैं और HTML फ़ाइल से \`<link>\` टैग के माध्यम से जोड़े जाते हैं।

### फायदे

#### आसान रखरखाव (Maintainability)
एक ही CSS फ़ाइल में बदलाव करके पूरी वेबसाइट की स्टाइलिंग बदली जा सकती है।

#### बेहतर प्रदर्शन (Performance)
ब्राउज़र CSS फ़ाइल को कैश कर लेता है, जिससे अगली बार वेबसाइट तेज़ी से लोड होती है।

#### साफ-सुथरा कोड
HTML (सामग्री) और CSS (डिज़ाइन) अलग-अलग रहते हैं, जिससे कोड को समझना और मैनेज करना आसान हो जाता है।

### चरण 1: \`style.css\` नाम की फ़ाइल बनाएँ
### चरण 2: उसे अपनी HTML फ़ाइल के head सेक्शन में लिंक करें

[[SANDBOX_2]]`,
      sandboxes: [
        {
          html: `<h1 style="color: blue; text-align: center;">This is an inline styled heading.</h1>\n\n<p style="font-size: 18px; color: gray;">This text is styled inline.</p>`,
          css: `/* No need CSS */`
        },
        {
          html: `<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        h1 {\n            color: darkred;\n            font-family: Arial;\n        }\n        p {\n            font-size: 20px;\n        }\n    </style>\n</head>\n<body>\n    <h1>This is an internal styled heading.</h1>\n    <p>The styles are defined in the head.</p>\n</body>\n</html>`,
          css: `/* No need CSS */`
        },
        {
          html: `<h1>This is an external styled heading.</h1>`,
          css: `/* style.css */\nh1 {\n    color: green;\n}`
        }
      ]
    },
    {
      id: "t1-3",
      title_en: "CSS Comments",
      title_hi: "CSS टिप्पणियाँ (Comments)",
      content_en: `### CSS Comments

Comments are notes written in the code for you or other developers to read. The browser completely ignores them, meaning they won't show up on the webpage or affect how your styles load.

A CSS comment starts with \`/*\` and ends with \`*/\`.
Here is how they look in practice:

[[SANDBOX_0]]

:::warning
Comments cannot be nested in CSS. This means you cannot put one comment inside another (e.g., \`/* Comment 1 /* Comment 2 */ */\` is invalid).
:::

### Common Use Cases

#### 1. Organizing Code
As your CSS file grows to hundreds of lines, comments help you divide it into clear sections. For example, you can use comments such as \`/* Header Styles */\` or \`/* Footer Styles */\` to make different parts of your stylesheet easier to find and maintain.

#### 2. Commenting Out Code
If you want to temporarily disable a style to see how the page looks without it, you can place that code inside a comment instead of deleting it. This allows you to test changes safely.

[[SANDBOX_1]]

:::note ⚠️ Common Pitfall:
Every language handles comments differently. HTML uses \`\` and JavaScript uses \`//\`. If you try to use those inside a CSS file, your styles will break. Stick strictly to \`/* ... */\` in CSS!
:::`,
      content_hi: `### CSS टिप्पणियाँ (Comments)

Comments ऐसे नोट्स होते हैं जिन्हें आप या अन्य डेवलपर्स कोड के अंदर पढ़ने के लिए लिखते हैं। ब्राउज़र इन्हें पूरी तरह अनदेखा कर देता है, यानी ये वेब पेज पर दिखाई नहीं देते और न ही आपकी स्टाइल्स के काम करने के तरीके को प्रभावित करते हैं।

CSS में Comment की शुरुआत \`/*\` से होती है और समाप्ति \`*/\` पर होती है।
यह व्यवहार में कुछ इस प्रकार दिखाई देता है:

[[SANDBOX_0]]

:::warning
CSS में Comments को Nest (एक के अंदर दूसरा) नहीं किया जा सकता। इसका अर्थ है कि आप एक Comment के अंदर दूसरा Comment नहीं लिख सकते (उदाहरण: \`/* Comment 1 /* Comment 2 */ */\` अमान्य है)।
:::

### टिप्पणियों के सामान्य उपयोग

#### 1. कोड को व्यवस्थित करना
जैसे-जैसे आपकी CSS फ़ाइल सैकड़ों लाइनों तक बढ़ती जाती है, Comments कोड को अलग-अलग भागों में बाँटने में मदद करते हैं। उदाहरण के लिए, आप \`/* Header Styles */\` या \`/* Footer Styles */\` जैसे Comments का उपयोग करके अपनी Stylesheet के विभिन्न सेक्शनों को आसानी से पहचान सकते हैं।

#### 2. कोड को अस्थायी रूप से निष्क्रिय करना
यदि आप देखना चाहते हैं कि किसी विशेष Style के बिना वेब पेज कैसा दिखाई देगा, तो उस कोड को हटाने के बजाय Comment के अंदर रख सकते हैं। इससे वह Style अस्थायी रूप से बंद हो जाती है।

[[SANDBOX_1]]

:::note ⚠️ Common Pitfall:
हर प्रोग्रामिंग भाषा Comments को अलग तरीके से संभालती है। HTML में \`\` और JavaScript में \`//\` का उपयोग किया जाता है। यदि आप इन्हें CSS फ़ाइल के अंदर उपयोग करने की कोशिश करेंगे, तो आपकी Styles काम नहीं करेंगी। CSS में हमेशा केवल \`/* ... */\` का ही उपयोग करें!
:::`,
      sandboxes: [
        {
          html: `<h2>This is a heading element</h2>\n<p>This is a basic example.</p>`,
          css: `h2 {\n  font-size: 24px;\n  /* color: blue; <-- This line is temporarily disabled and won't run */\n}`
        },
        {
          html: `<p>CSS Comments Demo</p>`,
          css: `/* This is a single-line CSS comment */\np {\n  color: red; /* Set text to red */\n}\n\n/* \n   This is a multi-line comment.\n   You can use it to organize large sections.\n*/`
        }
      ]
    }
  ]
};

export const chapter01Quiz = [
  {
    id: "q1",
    question_en: "What does CSS stand for?",
    question_hi: "CSS का मतलब (Full Form) क्या है?",
    options_en: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    options_hi: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q2",
    question_en: "Who first proposed CSS in 1994?",
    question_hi: "1994 में CSS का प्रस्ताव सबसे पहले किसने दिया था?",
    options_en: [
      "Tim Berners-Lee",
      "Håkon Wium Lie",
      "Brendan Eich",
      "Bill Gates"
    ],
    options_hi: [
      "Tim Berners-Lee",
      "Håkon Wium Lie",
      "Brendan Eich",
      "Bill Gates"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q3",
    question_en: "How do you write a comment in a CSS file?",
    question_hi: "आप CSS फ़ाइल में टिप्पणी (Comment) कैसे लिखते हैं?",
    options_en: [
      "// this is a comment",
      "",
      "/* this is a comment */",
      "' this is a comment"
    ],
    options_hi: [
      "// this is a comment",
      "",
      "/* this is a comment */",
      "' this is a comment"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q4",
    question_en: "In CSS syntax 'color: red;', what is the 'color' part called?",
    question_hi: "CSS सिंटैक्स 'color: red;' में 'color' वाले भाग को क्या कहा जाता है?",
    options_en: [
      "Selector",
      "Property",
      "Value",
      "Declaration Block"
    ],
    options_hi: [
      "Selector",
      "Property",
      "Value",
      "Declaration Block"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q5",
    question_en: "Which is the correct way to add Inline CSS?",
    question_hi: "इनलाइन (Inline) CSS जोड़ने का सही तरीका कौन सा है?",
    options_en: [
      '<p style="color: red;">',
      '<p css="color: red;">',
      '<style p="color: red;">',
      '<p inline="color: red;">'
    ],
    options_hi: [
      '<p style="color: red;">',
      '<p css="color: red;">',
      '<style p="color: red;">',
      '<p inline="color: red;">'
    ],
    correctAnswerIndex: 0
  },
  {
    id: "q6",
    question_en: "Which HTML tag is used to write Internal CSS?",
    question_hi: "इंटरनल (Internal) CSS लिखने के लिए किस HTML टैग का उपयोग किया जाता है?",
    options_en: [
      "<css>",
      "<script>",
      "<style>",
      "<link>"
    ],
    options_hi: [
      "<css>",
      "<script>",
      "<style>",
      "<link>"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q7",
    question_en: "Which HTML tag is used to link an External CSS file?",
    question_hi: "एक्सटर्नल (External) CSS फ़ाइल को लिंक करने के लिए किस HTML टैग का उपयोग किया जाता है?",
    options_en: [
      "<style>",
      "<script>",
      "<link>",
      "<head>"
    ],
    options_hi: [
      "<style>",
      "<script>",
      "<link>",
      "<head>"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q8",
    question_en: "In which HTML section is it standard to place the internal <style> or external <link> tag?",
    question_hi: "इंटरनल <style> या एक्सटर्नल <link> टैग को रखना आमतौर पर HTML के किस सेक्शन में मानक माना जाता है?",
    options_en: [
      "<body>",
      "<footer>",
      "<head>",
      "<html>"
    ],
    options_hi: [
      "<body>",
      "<footer>",
      "<head>",
      "<html>"
    ],
    correctAnswerIndex: 2
  }
];

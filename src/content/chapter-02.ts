export const chapter02 = {
  id: "ch2",
  title_en: "Chapter 2: Basic Selectors & Grouping",
  title_hi: "अध्याय 2: मूल चयनकर्ता (Basic Selectors) और ग्रुपिंग",
  topics: [
    {
      id: "t2-1",
      title_en: "What are Selectors & The Universal Selector",
      title_hi: "चयनकर्ता क्या हैं और यूनिवर्सल चयनकर्ता (*)",
      content_en: `### What is a CSS Selector?
In CSS, a **Selector** is a pattern used to select (or target) the HTML elements you want to style. Imagine selectors as pointers or addresses that tell the browser: *"Hey, go find this specific element on the webpage and apply these styles to it."*
Without selectors, browser wouldn't know whether you want to make a heading blue or a button red!
---
### The Universal Selector (\`*\`)
The **Universal Selector** is represented by an asterisk (\`*\`). It acts like a wildcard and targets **every single element** on the HTML page—including headings, paragraphs, links, images, and even the \`<body>\` itself.
#### Syntax:
\`\`\`css
* {
  property: value;
}
\`\`\`
#### When Should You Use It?
The Universal Selector is most commonly used at the very top of a stylesheet for **CSS Resets**. By default, web browsers add their own margins and paddings to elements like \`<h1>\`, \`<p>\`, and \`<body>\`. Using \`*\` allows you to strip away those default spaces so your design looks identical across all browsers (Chrome, Safari, Firefox).
#### Example of a Basic Reset:
\`\`\`css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
\`\`\`
In the interactive sandbox below, notice how applying a style to \`*\` changes the font and border for every single tag inside the preview!
[[SANDBOX_0]]
:::tip
**Pro Tip:** While the universal selector is great for resets, avoid using it for complex styling across massive websites, as forcing the browser to restyle every single DOM element can slightly impact performance.
:::`,
      content_hi: `### CSS Selector क्या है?
CSS में **Selector** वह माध्यम (pattern) होता है जिसका उपयोग उन HTML एलिमेंट्स को चुनने (target करने) के लिए किया जाता है जिन्हें आप डिज़ाइन या स्टाइल करना चाहते हैं। Selectors को आप एक पते (address) की तरह समझ सकते हैं जो ब्राउज़र को बताता है: *"हे ब्राउज़र, वेब पेज पर इस विशेष एलिमेंट को ढूंढो और उस पर ये स्टाइल लगा दो।"*
Selectors के बिना ब्राउज़र को यह पता ही नहीं चलेगा कि आप हेडिंग को नीला करना चाहते हैं या बटन को लाल!
---
### यूनिवर्सल चयनकर्ता / Universal Selector (\`*\`)
**Universal Selector** को तारांकन चिह्न यानी Asterisk (\`*\`) से दर्शाया जाता है। यह एक वाइल्डकार्ड की तरह काम करता है और वेब पेज के **प्रत्येक एलिमेंट** को एक साथ टारगेट करता है—जिसमें हेडिंग, पैराग्राफ, लिंक, इमेज और यहाँ तक कि \`<body>\` टैग भी शामिल है।
#### सिंटैक्स (Syntax):
\`\`\`css
* {
  property: value;
}
\`\`\`
#### इसका उपयोग कब करना चाहिए?
Universal Selector का सबसे अधिक उपयोग CSS फ़ाइल की शुरुआत में **CSS Resets** के लिए किया जाता है। डिफ़ॉल्ट रूप से, सभी वेब ब्राउज़र \`<h1>\`, \`<p>\`, और \`<body>\` जैसे एलिमेंट्स में अपनी तरफ से कुछ खाली जगह (margin और padding) जोड़ देते हैं। \`*\` का उपयोग करके हम उस डिफ़ॉल्ट जगह को शून्य (0) कर सकते हैं, जिससे हमारी वेबसाइट सभी ब्राउज़रों (Chrome, Safari, Firefox) में एक जैसी दिखाई दे।
#### बेसिक रीसेट का उदाहरण:
\`\`\`css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
\`\`\`
नीचे दिए गए इंटरैक्टिव सैंडबॉक्स में देखें कि कैसे \`*\` पर स्टाइल लगाने से पूरे पेज के हर एक टैग का फ़ॉन्ट और बॉर्डर बदल गया है!
[[SANDBOX_0]]
:::tip
**प्रो टिप:** यद्यपि यूनिवर्सल सिलेक्टर रीसेट के लिए बेहतरीन है, लेकिन बहुत बड़ी वेबसाइटों पर जटिल स्टाइलिंग के लिए इसका अधिक उपयोग करने से बचें, क्योंकि यह ब्राउज़र को हर एक छोटे-बड़े एलिमेंट को स्टाइल करने के लिए मजबूर करता है।
:::`,
      sandboxes: [
        {
          html: `<h1>Welcome to Lesson 2</h1>\n<p>This paragraph and the button below are all styled by the asterisk (*).</p>\n<button>Click Me</button>`,
          css: `/* The Universal Selector targets EVERYTHING */\n* {\n  font-family: Arial, sans-serif;\n  color: #2c3e50;\n  border: 1px dashed #3498db;\n  padding: 4px;\n}`
        }
      ]
    },
    {
      id: "t2-2",
      title_en: "Element (Type) & Grouping Selectors",
      title_hi: "एलिमेंट (Type) और ग्रुपिंग चयनकर्ता",
      content_en: `### 1. Element (or Type) Selector
The **Element Selector** directly targets all HTML elements that match a specific tag name. Regardless of where that tag appears on the page, if the tag matches, the style will be applied.
#### Syntax:
\`\`\`css
tagname {
  property: value;
}
\`\`\`
#### Example:
If you write:
\`\`\`css
p {
  color: darkgreen;
  font-size: 16px;
}
\`\`\`
This rule will automatically find **every single \`<p>\` tag** on your web page and turn its text dark green. You don't need to add any class or ID to those paragraphs!
---
### 2. Grouping Selectors (The Comma \`,\`)
Sometimes, you want multiple different elements to share the exact same styling. For instance, you might want your \`<h1>\`, \`<h2>\`, and \`<h3>\` headings to all share the same font family and text color. 
Instead of writing three separate CSS blocks and repeating the same code, you can use a **Grouping Selector** by separating the tag names with a comma (\`,\`).
#### Without Grouping (Repetitive & Bad Practice):
\`\`\`css
h1 { color: navy; font-family: Arial; }
h2 { color: navy; font-family: Arial; }
p { color: navy; font-family: Arial; }
\`\`\`
#### With Grouping (Clean & DRY - Don't Repeat Yourself):
\`\`\`css
h1, h2, p {
  color: navy;
  font-family: Arial;
}
\`\`\`
The comma \`,\` basically translates to the word **"AND"** in English: *"Style h1 AND h2 AND p with these rules."*
[[SANDBOX_0]]
:::note
**Important Note:** Make sure not to leave a trailing comma at the end of your list (e.g., \`h1, h2, {\`). Doing so will make the entire CSS rule invalid, and the browser will ignore it completely!
:::`,
      content_hi: `### 1. एलिमेंट या टाइप चयनकर्ता (Element Selector)
**Element Selector** सीधे उन सभी HTML एलिमेंट्स को टारगेट करता है जिनका टैग नाम आपके लिखे नाम से मेल खाता है। चाहे वह टैग पेज पर कहीं भी हो, यदि नाम मैच होता है, तो स्टाइल उस पर लागू हो जाएगी।
#### सिंटैक्स (Syntax):
\`\`\`css
tagname {
  property: value;
}
\`\`\`
#### उदाहरण:
यदि आप लिखते हैं:
\`\`\`css
p {
  color: darkgreen;
  font-size: 16px;
}
\`\`\`
यह नियम स्वतः ही आपके वेब पेज के **हर एक \`<p>\` (पैराग्राफ) टैग** को खोजेगा और उसके टेक्स्ट को गहरे हरे रंग का बना देगा। आपको उन पैराग्राफ्स में कोई क्लास या आईडी जोड़ने की आवश्यकता नहीं है!
---
### 2. ग्रुपिंग चयनकर्ता (Grouping Selector - अल्पविराम \`,\`)
कभी-कभी आप चाहते हैं कि कई अलग-अलग एलिमेंट्स पर एक जैसी स्टाइल लागू हो। उदाहरण के लिए, आप चाह सकते हैं कि आपकी \`<h1>\`, \`<h2>\`, और \`<h3>\` तीनों हेडिंग्स का फ़ॉन्ट और रंग एक समान हो।
इसके लिए तीन अलग-अलग CSS ब्लॉक लिखकर एक ही कोड को बार-बार दोहराने के बजाय, आप अल्पविराम यानी कॉमा (\`,\`) का उपयोग करके **Grouping Selector** बना सकते हैं।
#### बिना ग्रुपिंग के (बार-बार लिखना - गलत तरीका):
\`\`\`css
h1 { color: navy; font-family: Arial; }
h2 { color: navy; font-family: Arial; }
p { color: navy; font-family: Arial; }
\`\`\`
#### ग्रुपिंग के साथ (साफ़ और सही तरीका):
\`\`\`css
h1, h2, p {
  color: navy;
  font-family: Arial;
}
\`\`\`
यहाँ कॉमा (\`,\`) का मतलब हिंदी के शब्द **"और (AND)"** जैसा होता है: *"h1 और h2 और p तीनों पर ये नियम लगाओ।"*
[[SANDBOX_0]]
:::note
**महत्वपूर्ण नोट:** ध्यान रखें कि अपनी लिस्ट के अंत में कॉमा न छोड़ें (जैसे \`h1, h2, {\`)। ऐसा करने से पूरा CSS नियम अमान्य (invalid) हो जाता है और ब्राउज़र उसे पूरी तरह अनदेखा कर देता है!
:::`,
      sandboxes: [
        {
          html: `<h1>Main Heading (h1)</h1>\n<h2>Sub Heading (h2)</h2>\n<p>This is paragraph 1.</p>\n<p>This is paragraph 2.</p>\n<span>This is a span element.</span>`,
          css: `/* Grouping Selector: Styles h1, h2, and p together */\nh1, h2, p {\n  color: #2a52be;\n  background-color: #f0f4f8;\n  padding: 5px;\n  border-left: 4px solid #2a52be;\n}\n\n/* Element Selector: Only targets span */\nspan {\n  color: #e74c3c;\n  font-weight: bold;\n}`
        }
      ]
    },
    {
      id: "t2-3",
      title_en: "Class Selectors (.) vs ID Selectors (#)",
      title_hi: "क्लास चयनकर्ता (.) बनाम आईडी चयनकर्ता (#)",
      content_en: `While element selectors are great, what if you have ten paragraphs on a page and only want to make **one** of them highlighted in yellow? You can't use \`p { ... }\` because that would highlight all ten!
To style specific elements individually or in custom groups, we use **Class** and **ID** selectors.
---
### 1. The Class Selector (\`.\`)
A **Class Selector** targets any HTML element that has a matching \`class\` attribute. To select a class in your CSS file, you must type a **period or dot (\`.\`)** followed immediately by the class name.
#### Syntax:
\`\`\`css
.className {
  property: value;
}
\`\`\`
#### Key Rules for Classes:
1. **Reusability:** You can use the exact same class name on as many HTML elements as you want (e.g., multiple buttons, cards, or text highlights).
2. **Multiple Classes:** A single HTML element can have more than one class separated by a space: \`<div class="card shadow highlighted">\`.
---
### 2. The ID Selector (\`#\`)
An **ID Selector** targets a specific HTML element with a matching \`id\` attribute. To select an ID in your CSS file, you must type a **hash or pound symbol (\`#\`)** followed immediately by the ID name.
#### Syntax:
\`\`\`css
#idName {
  property: value;
}
\`\`\`
#### Key Rules for IDs:
1. **Strictly Unique:** An ID name can only be used **ONCE** per HTML document. Think of an ID like a person's Aadhaar or Passport number—no two elements on the same page should ever share the same ID!
2. **Single ID:** An element can only have one ID assigned to it.
[[SANDBOX_0]]
---
### Class vs ID: When to use what?

| Feature | Class Selector (\`.\`) | ID Selector (\`#\`) |
| :--- | :--- | :--- |
| **Symbol Used** | Dot (\`.\`) | Hash (\`#\`) |
| **Uniqueness** | Can be used on **unlimited** elements. | Must be **unique (used only once)** per page. |
| **Primary Use Case** | General styling, reusable buttons, cards, grid layouts. | Unique layout sections (e.g., \`#main-header\`), anchor links, JavaScript targets. |

:::warning
**Best Practice:** In modern professional web development, developers rely on **Class selectors for 95% of their styling** because they are reusable and flexible. Use IDs sparingly for CSS!
:::`,
      content_hi: `यद्यपि एलिमेंट सिलेक्टर्स बहुत उपयोगी होते हैं, लेकिन क्या होगा यदि आपके पेज पर दस पैराग्राफ हैं और आप उनमें से केवल **किसी एक** को पीले रंग में हाइलाइट करना चाहते हैं? आप \`p { ... }\` का उपयोग नहीं कर सकते क्योंकि वह दसों पैराग्राफ को पीला कर देगा!
विशेष एलिमेंट्स को अलग से या अपने मन मुताबिक समूहों में स्टाइल करने के लिए हम **Class** और **ID** सिलेक्टर्स का उपयोग करते हैं।
---
### 1. क्लास चयनकर्ता / Class Selector (\`.\`)
**Class Selector** किसी भी उस HTML एलिमेंट को टारगेट करता है जिसमें संबंधित \`class\` एट्रिब्यूट मौजूद हो। अपनी CSS फ़ाइल में किसी क्लास को चुनने के लिए, आपको क्लास के नाम से ठीक पहले एक **डॉट या बिंदु (\`.\`)** लगाना होता है।
#### सिंटैक्स (Syntax):
\`\`\`css
.className {
  property: value;
}
\`\`\`
#### क्लास के मुख्य नियम:
1. **पुनः उपयोग (Reusability):** आप एक ही क्लास नाम का उपयोग जितने चाहें उतने HTML एलिमेंट्स पर कर सकते हैं (जैसे कई बटनों, कार्ड्स या हाइलाइट किए गए टेक्स्ट पर)।
2. **एक से अधिक क्लास:** एक ही HTML एलिमेंट को स्पेस (space) देकर एक से अधिक क्लासेज भी दी जा सकती हैं: \`<div class="card shadow highlighted">\`।
---
### 2. आईडी चयनकर्ता / ID Selector (\`#\`)
**ID Selector** किसी विशेष HTML एलिमेंट को उसके \`id\` एट्रिब्यूट के आधार पर टारगेट करता है। अपनी CSS फ़ाइल में किसी ID को चुनने के लिए, आपको ID के नाम से ठीक पहले एक **हैश चिह्न (\`#\`)** लगाना होता है।
#### सिंटैक्स (Syntax):
\`\`\`css
#idName {
  property: value;
}
\`\`\`
#### ID के मुख्य नियम:
1. **पूरी तरह अद्वितीय (Unique):** एक ID नाम का उपयोग पूरे HTML डॉक्यूमेंट में केवल **एक बार** ही किया जा सकता है। ID को किसी व्यक्ति के आधार कार्ड या पासपोर्ट नंबर की तरह समझें—एक ही पेज पर दो एलिमेंट्स की ID कभी भी समान नहीं होनी चाहिए!
2. **सिंगल ID:** एक एलिमेंट को केवल एक ही ID दी जा सकती है।
[[SANDBOX_0]]
---
### Class बनाम ID: किसका उपयोग कब करें?

| विशेषता | क्लास चयनकर्ता (\`.\`) | आईडी चयनकर्ता (\`#\`) |
| :--- | :--- | :--- |
| **प्रयुक्त चिह्न** | डॉट (\`.\`) | हैश (\`#\`) |
| **अद्वितीयता (Uniqueness)** | **अनगिनत** एलिमेंट्स पर उपयोग किया जा सकता है। | एक पेज पर केवल **एक बार (Unique)** उपयोग होना चाहिए। |
| **मुख्य उपयोग** | सामान्य स्टाइलिंग, रीयूजेबल बटन, कार्ड और लेआउट। | पेज के खास हिस्से (जैसे \`#main-header\`), एंकर लिंक या JavaScript के लिए। |

:::warning
**बेस्ट प्रैक्टिस:** आधुनिक वेब डेवलपमेंट में, डेवलपर्स **अपनी 95% स्टाइलिंग के लिए Class सिलेक्टर्स का ही उपयोग करते हैं** क्योंकि वे लचीले और पुनः उपयोग करने योग्य होते हैं। CSS में ID का उपयोग बहुत कम करें!
:::`,
      sandboxes: [
        {
          html: `\n<h1 id="top-banner">Special Offer Banner</h1>\n\n\n<button class="btn">Buy Now</button>\n<button class="btn">Learn More</button>\n<button class="btn">Contact Us</button>`,
          css: `/* Styling the Unique ID with Hash (#) */\n#top-banner {\n  background-color: #f39c12;\n  color: white;\n  text-align: center;\n  padding: 15px;\n  border-radius: 5px;\n}\n\n/* Styling the Reusable Class with Dot (.) */\n.btn {\n  background-color: #27ae60;\n  color: white;\n  border: none;\n  padding: 10px 15px;\n  margin: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n}`
        }
      ]
    },
    {
      id: "t2-4",
      title_en: "Basic CSS Priority (Specificity Intro)",
      title_hi: "मूल CSS प्राथमिकता (Specificity का परिचय)",
      content_en: `### What happens when Selectors Clash?
Now that you know about Element, Class, and ID selectors, an important question arises: **What happens if you apply conflicting styles to the exact same element using different selectors?**
For example, look at this HTML tag:
\`\`\`html
<p id="unique-text" class="colored-text">Hello World!</p>
\`\`\`
If your CSS looks like this:
\`\`\`css
p { color: black; }           /* Element Selector */
.colored-text { color: blue; } /* Class Selector */
#unique-text { color: red; }   /* ID Selector */
\`\`\`
Which color will the text actually become? Black, Blue, or Red?
---
### The Specificity Hierarchy
To resolve conflicts like this, web browsers calculate a score called **Specificity** (or Priority). The rule with the highest priority wins and overrides the others.
Here is the basic hierarchy from **Lowest to Highest priority**:
1. **Element Selectors (\`p\`, \`h1\`, \`div\`) ➔ Lowest Priority**
   They are very general, so they are easily overridden.
2. **Class Selectors (\`.btn\`, \`.card\`) ➔ Medium Priority**
   A class selector will **always beat** an element selector!
3. **ID Selectors (\`#header\`, \`#banner\`) ➔ High Priority**
   An ID selector is very specific. It will **always beat both** classes and element selectors!
4. **Inline CSS (\`style="..."\`) ➔ Highest Priority**
   Styles written directly inside the HTML tag override all external CSS selectors.
#### The Winner in our example above is: RED!
Even though \`p\` and \`.colored-text\` try to make it black or blue, the **ID (\`#unique-text\`) has the highest specificity score**, so the browser renders the paragraph in **red**.
[[SANDBOX_0]]
### The Golden Rule of Specificity
When memorizing priorities, just remember this simple formula:
\`Inline Style > ID (#) > Class (.) > Element Tag\`
:::tip
**What if two rules have the exact SAME specificity?**
If two classes (e.g., \`.color-blue\` and \`.color-green\`) target the same element, **The Cascade wins!** This means whichever CSS rule is written **last (further down in the stylesheet)** will take effect.
:::`,
      content_hi: `### जब सिलेक्टर्स आपस में टकराएं तो क्या होता है?
अब जबकि आप एलिमेंट, क्लास और आईडी सिलेक्टर्स के बारे में जान चुके हैं, तो एक महत्वपूर्ण प्रश्न उठता है: **क्या होगा यदि आप अलग-अलग सिलेक्टर्स का उपयोग करके एक ही एलिमेंट पर अलग-अलग (विरोधाभासी) स्टाइल लगा दें?**
उदाहरण के लिए, इस HTML टैग को देखें:
\`\`\`html
<p id="unique-text" class="colored-text">Hello World!</p>
\`\`\`
यदि आपकी CSS कुछ इस प्रकार है:
\`\`\`css
p { color: black; }           /* एलिमेंट सिलेक्टर */
.colored-text { color: blue; } /* क्लास सिलेक्टर */
#unique-text { color: red; }   /* आईडी सिलेक्टर */
\`\`\`
तो टेक्स्ट का रंग वास्तव में क्या होगा? काला, नीला, या लाल?
---
### प्राथमिकता का क्रम (Specificity Hierarchy)
इस प्रकार के टकरावों को सुलझाने के लिए, वेब ब्राउज़र एक स्कोर की गणना करते हैं जिसे **Specificity (विशेषता या प्राथमिकता)** कहा जाता है। जिस नियम की प्राथमिकता सबसे अधिक होती है, वह जीत जाता है और बाकी नियमों को दबा देता है।
यहाँ प्राथमिकता का मूल क्रम दिया गया है (**सबसे कम से सबसे अधिक प्राथमिकता**):
1. **एलिमेंट सिलेक्टर्स (\`p\`, \`h1\`, \`div\`) ➔ सबसे कम प्राथमिकता**
   ये बहुत सामान्य होते हैं, इसलिए इन्हें आसानी से ओवरराइड किया जा सकता है।
2. **क्लास सिलेक्टर्स (\`.btn\`, \`.card\`) ➔ मध्यम प्राथमिकता**
   एक क्लास सिलेक्टर **हमेशा** एलिमेंट सिलेक्टर को हरा देगा!
3. **आईडी सिलेक्टर्स (\`#header\`, \`#banner\`) ➔ उच्च प्राथमिकता**
   आईडी सिलेक्टर बहुत विशिष्ट होता है। यह क्लास और एलिमेंट सिलेक्टर **दोनों को हमेशा हरा देगा!**
4. **इनलाइन CSS (\`style="..."\`) ➔ सर्वोच्च प्राथमिकता**
   सीधे HTML टैग के अंदर लिखी गई स्टाइल सभी बाहरी CSS सिलेक्टर्स पर भारी पड़ती है।
#### हमारे ऊपर वाले उदाहरण में विजेता है: लाल (RED)!
भले ही \`p\` और \`.colored-text\` इसे काला या नीला करने की कोशिश कर रहे हों, लेकिन **ID (\`#unique-text\`) का प्राथमिकता स्कोर सबसे अधिक है**, इसलिए ब्राउज़र पैराग्राफ को **लाल** रंग में दिखाएगा।
[[SANDBOX_0]]
### प्राथमिकता का सुनहरा नियम (Golden Rule)
प्राथमिकता को याद रखने के लिए बस यह आसान सूत्र याद रखें:
\`Inline Style > ID (#) > Class (.) > Element Tag\`
:::tip
**क्या होगा यदि दो नियमों की प्राथमिकता बिल्कुल समान हो?**
यदि दो क्लासेज (जैसे \`.color-blue\` और \`.color-green\`) एक ही एलिमेंट को टारगेट कर रही हैं, तो **The Cascade (कैस्केड नियम) जीतता है!** इसका मतलब है कि जो CSS नियम फ़ाइल में **सबसे नीचे (बाद में)** लिखा होगा, वही लागू होगा।
:::`,
      sandboxes: [
        {
          html: `\n<h2 id="win-id" class="try-class">Who wins the color battle?</h2>\n\n<p class="try-class">I only have a class and an element tag.</p>`,
          css: `/* 1. Element Selector (Lowest Priority) */\nh2, p {\n  color: gray;\n  background-color: #f9f9f9;\n  padding: 10px;\n}\n\n/* 2. Class Selector (Medium Priority - Beats Element) */\n.try-class {\n  color: blue; /* Notice how the paragraph turns blue! */\n}\n\n/* 3. ID Selector (High Priority - Beats Both Class & Element) */\n#win-id {\n  color: red; /* Notice how the h2 turns RED despite having the blue class! */\n  border: 2px solid red;\n}`
        }
      ]
    }
  ]
};
export const chapter02Quiz = [
  {
    id: "q1",
    question_en: "Which character is used to represent the Universal Selector in CSS?",
    question_hi: "CSS में यूनिवर्सल चयनकर्ता (Universal Selector) को दर्शाने के लिए किस चिह्न का उपयोग किया जाता है?",
    options_en: [
      ". (Dot)",
      "# (Hash)",
      "* (Asterisk)",
      "$ (Dollar)"
    ],
    options_hi: [
      ". (डॉट)",
      "# (हैश)",
      "* (तारांकन / Asterisk)",
      "$ (डॉलर)"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q2",
    question_en: "What is the primary use case for the Universal Selector (*)?",
    question_hi: "यूनिवर्सल चयनकर्ता (*) का सबसे मुख्य उपयोग क्या है?",
    options_en: [
      "To style only images",
      "For CSS Resets (removing default margins and paddings)",
      "To create animations",
      "To target only unique buttons"
    ],
    options_hi: [
      "केवल इमेज को स्टाइल करने के लिए",
      "CSS Resets के लिए (डिफ़ॉल्ट margin और padding हटाने के लिए)",
      "एनीमेशन बनाने के लिए",
      "केवल यूनिक बटनों को टारगेट करने के लिए"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q3",
    question_en: "Which character MUST you place before a Class name in your CSS file?",
    question_hi: "अपनी CSS फ़ाइल में किसी क्लास (Class) के नाम से पहले आपको कौन सा चिह्न लगाना अनिवार्य है?",
    options_en: [
  "# (Hash)",
      ". (Dot / Period)",
      "> (Greater than)",
      "& (Ampersand)"
    ],
    options_hi: [
      "# (हैश)",
      ". (डॉट / बिंदु)",
      "> (ग्रेटर देन)",
      "& (एम्परसेंड)"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q4",
    question_en: "Which character MUST you place before an ID name in your CSS file?",
    question_hi: "अपनी CSS फ़ाइल में किसी आईडी (ID) के नाम से पहले आपको कौन सा चिह्न लगाना अनिवार्य है?",
    options_en: [
      ". (Dot)",
      "/ (Slash)",
      "# (Hash / Pound)",
      "* (Asterisk)"
    ],
    options_hi: [
      ". (डॉट)",
      "/ (स्लैश)",
      "# (हैश)",
      "* (तारांकन)"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q5",
    question_en: "How many times should a specific ID name be used within a single HTML webpage?",
    question_hi: "एक ही HTML वेब पेज के अंदर किसी विशेष ID नाम का उपयोग कितनी बार किया जाना चाहिए?",
    options_en: [
      "As many times as you want",
      "Maximum 5 times",
      "Only ONCE (It must be strictly unique)",
      "At least twice"
    ],
    options_hi: [
      "जितनी बार आप चाहें",
      "अधिकतम 5 बार",
      "केवल एक बार (यह पूरी तरह यूनिक होना चाहिए)",
      "कम से कम दो बार"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q6",
    question_en: "What is the correct syntax for a Grouping Selector to style h1, h2, and p simultaneously?",
    question_hi: "h1, h2 और p को एक साथ स्टाइल करने के लिए ग्रुपिंग चयनकर्ता (Grouping Selector) का सही सिंटैक्स क्या है?",
    options_en: [
      "h1 + h2 + p { color: blue; }",
      "h1, h2, p { color: blue; }",
      "h1 h2 p { color: blue; }",
      "h1 > h2 > p { color: blue; }"
    ],
    options_hi: [
      "h1 + h2 + p { color: blue; }",
      "h1, h2, p { color: blue; }",
      "h1 h2 p { color: blue; }",
      "h1 > h2 > p { color: blue; }"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q7",
    question_en: "Which selector wins in CSS priority if an element has both a Class and an ID targeting the same property?",
    question_hi: "यदि किसी एलिमेंट पर Class और ID दोनों से एक ही प्रॉपर्टी (जैसे color) लगाई जाए, तो CSS प्राथमिकता में कौन जीतेगा?",
    options_en: [
      "The Class Selector",
      "The Element Selector",
      "The ID Selector",
      "Whichever is written first in HTML"
    ],
    options_hi: [
      "क्लास चयनकर्ता (Class Selector)",
      "एलिमेंट चयनकर्ता (Element Selector)",
      "आईडी चयनकर्ता (ID Selector)",
      "जो भी HTML में पहले लिखा हो"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q8",
    question_en: "Which selector type do professional developers recommend using for around 95% of general styling?",
    question_hi: "पेशेवर डेवलपर्स लगभग 95% सामान्य स्टाइलिंग के लिए किस प्रकार के चयनकर्ता का उपयोग करने की सलाह देते हैं?",
    options_en: [
      "ID Selectors because they are powerful",
      "Inline Styles for everything",
      "Universal Selectors for all tags",
      "Class Selectors because they are reusable and flexible"
    ],
    options_hi: [
      "ID Selectors क्योंकि वे शक्तिशाली होते हैं",
      "हर चीज़ के लिए Inline Styles",
      "सभी टैग्स के लिए Universal Selectors",
      "Class Selectors क्योंकि वे रीयूजेबल और लचीले होते हैं"
    ],
    correctAnswerIndex: 3
  },
  {
    id: "q9",
    question_en: "If two class selectors (e.g., .color-red and .color-green) with EQUAL specificity target the same element, which rule will take effect?",
    question_hi: "यदि समान प्राथमिकता (Equal Specificity) वाले दो क्लास सिलेक्टर्स (.color-red और .color-green) एक ही एलिमेंट को टारगेट करते हैं, तो कौन सा नियम लागू होगा?",
    options_en: [
      "The rule written FIRST in the CSS file",
      "The rule written LAST (further down) in the CSS file",
      "The colors will mix together",
      "Neither will work"
    ],
    options_hi: [
      "जो नियम CSS फ़ाइल में पहले लिखा गया हो",
      "जो नियम CSS फ़ाइल में सबसे नीचे (बाद में) लिखा गया हो",
      "दोनों रंग आपस में मिल जाएंगे",
      "दोनों में से कोई काम नहीं करेगा"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q10",
    question_en: "Which of the following has the HIGHEST priority (specificity) in CSS?",
    question_hi: "निम्नलिखित में से किसकी CSS प्राथमिकता (Specificity) सबसे अधिक होती है?",
    options_en: [
      "Element Selector (e.g., p)",
      "Class Selector (e.g., .box)",
      "ID Selector (e.g., #box)",
      "Inline Style (e.g., style='color: red;')"
    ],
    options_hi: [
      "एलिमेंट चयनकर्ता (जैसे p)",
      "क्लास चयनकर्ता (जैसे .box)",
      "आईडी चयनकर्ता (जैसे #box)",
      "इनलाइन स्टाइल (जैसे style='color: red;')"
    ],
    correctAnswerIndex: 3
  }
];

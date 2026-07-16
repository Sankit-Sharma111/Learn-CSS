export const chapter04 = {
  id: "ch4",
  title_en: "Chapter 4: Typography & Text Formatting",
  title_hi: "अध्याय 4: टाइपोग्राफी और टेक्स्ट फ़ॉर्मेटिंग",
  topics: [
    {
      id: "t4-1",
      title_en: "Font Basics, Web Safe Fonts & Google Fonts",
      title_hi: "फ़ॉन्ट के मूल नियम, वेब सेफ़ फ़ॉन्ट्स और Google फ़ॉन्ट्स",
      content_en: `### The Power of Typography

Typography is the art of arranging text to make written language legible, readable, and visually appealing. In web design, over 90% of a website's content is text. Choosing the right font and styling it correctly can completely transform the user experience!

---

### 1. \`font-family\` & Font Stacks
The \`font-family\` property specifies the typeface for an element. Because different operating systems (Windows, macOS, Android) have different fonts installed, we always provide a **Font Stack** (a comma-separated list of backup fonts).

#### Syntax:
\`\`\`css
p {
  font-family: "Helvetica Neue", Arial, sans-serif;
}
\`\`\`
* **How it works:** The browser tries to load \`"Helvetica Neue"\` first. If it's not installed on the user's device, it falls back to \`Arial\`. If \`Arial\` is missing, it picks the system's default \`sans-serif\` font.
* **Note:** If a font name has spaces (like \`"Times New Roman"\`), it MUST be enclosed in quotes!

#### Serif vs Sans-Serif: What's the difference?
* **Serif Fonts (e.g., Times New Roman, Georgia):** Have small decorative lines or "feet" at the ends of characters. Best for traditional, formal, or editorial websites.
* **Sans-Serif Fonts (e.g., Arial, Helvetica, Roboto):** Do NOT have decorative feet ("Sans" means "without" in French). They look clean and modern, making them best for digital screens.
* **Monospace Fonts (e.g., Courier New, Consolas):** Every character occupies the exact same width. Best for displaying programming code!

---

### 2. Importing Google Fonts
To use beautiful custom fonts that aren't installed on the user's device, we use **Google Fonts** (a free library of web fonts). You can easily import them directly into your stylesheet using the \`@import\` rule at the very top of your CSS file.

\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

h1 {
  font-family: 'Poppins', sans-serif;
}
\`\`\`

---

### 3. Font Size, Weight & Style
* \`font-size\`: Sets the size of the text (common units: \`px\`, \`rem\`, \`%\`).
* \`font-weight\`: Sets how thick or bold the characters look. You can use keywords (\`normal\`, \`bold\`) or numbers (\`100\` to \`900\`, where \`400\` is normal and \`700\` is bold).
* \`font-style\`: Typically used to make text italic (\`normal\` vs \`italic\`).

---

### The All-in-One \`font\` Shorthand
Instead of writing 4-5 separate lines, you can combine font properties using the \`font\` shorthand.

#### Strict Syntax Order:
\`\`\`css
font: font-style font-weight font-size/line-height font-family;
\`\`\`
*(Note: \`font-size\` and \`font-family\` are mandatory in the shorthand!)*

#### Example:
\`\`\`css
/* Long way */
p {
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.5;
  font-family: Arial, sans-serif;
}

/* Shorthand way (Exactly identical!) */
p {
  font: italic bold 18px/1.5 Arial, sans-serif;
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### टाइपोग्राफी (Typography) की शक्ति

टाइपोग्राफी लिखित भाषा को पढ़ने योग्य, स्पष्ट और आकर्षक बनाने की कला है। वेब डिज़ाइन में, वेबसाइट का 90% से अधिक हिस्सा टेक्स्ट होता है। सही फ़ॉन्ट चुनना और उसे सही तरीके से स्टाइल करना उपयोगकर्ता के अनुभव को पूरी तरह से बदल सकता है!

---

### 1. \`font-family\` और फ़ॉन्ट स्टैक (Font Stacks)
\`font-family\` प्रॉपर्टी किसी एलिमेंट के लिए फ़ॉन्ट तय करती है। चूँकि अलग-अलग ऑपरेटिंग सिस्टम (Windows, macOS, Android) में अलग-अलग फ़ॉन्ट्स इंस्टॉल होते हैं, हम हमेशा एक **Font Stack** (अल्पविराम से अलग की गई बैकअप फ़ॉन्ट्स की सूची) प्रदान करते हैं।

#### सिंटैक्स (Syntax):
\`\`\`css
p {
  font-family: "Helvetica Neue", Arial, sans-serif;
}
\`\`\`
* **यह कैसे काम करता है:** ब्राउज़र सबसे पहले \`"Helvetica Neue"\` को लोड करने की कोशिश करता है। यदि वह उपयोगकर्ता के डिवाइस में नहीं है, तो वह \`Arial\` का उपयोग करता है। यदि वह भी नहीं है, तो वह सिस्टम के डिफ़ॉल्ट \`sans-serif\` फ़ॉन्ट को चुन लेता है।
* **नोट:** यदि किसी फ़ॉन्ट के नाम में स्पेस है (जैसे \`"Times New Roman"\`), तो उसे कोटेशन मार्क्स (\`""\`) के अंदर लिखना अनिवार्य है!

#### Serif और Sans-Serif में क्या अंतर है?
* **Serif फ़ॉन्ट्स (जैसे Times New Roman, Georgia):** अक्षरों के सिरों पर छोटी सजावटी रेखाएँ या "पैर" होते हैं। ये पारंपरिक और औपचारिक वेबसाइटों के लिए अच्छे होते हैं।
* **Sans-Serif फ़ॉन्ट्स (जैसे Arial, Helvetica, Roboto):** इनमें सजावटी पैर नहीं होते ("Sans" का फ्रेंच में अर्थ "बिना" होता है)। ये साफ़ और आधुनिक दिखते हैं, जो डिजिटल स्क्रीन के लिए सर्वश्रेष्ठ हैं।
* **Monospace फ़ॉन्ट्स (जैसे Courier New, Consolas):** इनमें हर अक्षर समान चौड़ाई लेता है। इनका उपयोग प्रोग्रामिंग कोड दिखाने के लिए किया जाता है!

---

### 2. Google फ़ॉन्ट्स (Google Fonts) आयात करना
ऐसे कस्टम फ़ॉन्ट्स का उपयोग करने के लिए जो उपयोगकर्ता के डिवाइस पर इंस्टॉल नहीं हैं, हम **Google Fonts** का उपयोग करते हैं। आप अपनी CSS फ़ाइल के सबसे ऊपर \`@import\` नियम का उपयोग करके उन्हें आसानी से आयात (Import) कर सकते हैं।

\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

h1 {
  font-family: 'Poppins', sans-serif;
}
\`\`\`

---

### 3. फ़ॉन्ट का आकार, मोटाई और स्टाइल
* \`font-size\`: टेक्स्ट का आकार तय करता है (सामान्य इकाइयाँ: \`px\`, \`rem\`, \`%\`)।
* \`font-weight\`: तय करता है कि अक्षर कितने मोटे या बोल्ड दिखेंगे। आप शब्दों (\`normal\`, \`bold\`) या संख्याओं (\`100\` से \`900\` तक, जहाँ \`400\` नॉर्मल है और \`700\` बोल्ड) का उपयोग कर सकते हैं।
* \`font-style\`: आमतौर पर टेक्स्ट को तिरछा (Italic) करने के लिए उपयोग किया जाता है (\`normal\` बनाम \`italic\`)।

---

### ऑल-इन-वन \`font\` शार्टहैंड
4-5 अलग-अलग लाइनें लिखने के बजाय, आप \`font\` शार्टहैंड का उपयोग करके उन्हें जोड़ सकते हैं।

#### सिंटैक्स का सही क्रम:
\`\`\`css
font: font-style font-weight font-size/line-height font-family;
\`\`\`
*(नोट: शार्टहैंड में \`font-size\` और \`font-family\` लिखना अनिवार्य है!)*

#### उदाहरण:
\`\`\`css
/* लंबा तरीका */
p {
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.5;
  font-family: Arial, sans-serif;
}

/* शार्टहैंड तरीका (बिल्कुल समान!) */
p {
  font: italic bold 18px/1.5 Arial, sans-serif;
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `\n<h1 class="google-font">Custom Google Font (Poppins)</h1>\n<p class="serif-text">This is a Serif font. Notice the decorative strokes on letter ends.</p>\n<p class="mono-text">This is a Monospace font. Every character has equal width!</p>\n<p class="shorthand-text">This text was styled using the 1-line font shorthand!</p>`,
          css: `/* Importing Poppins from Google Fonts */\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\n\n.google-font {\n  font-family: 'Poppins', sans-serif;\n  color: #2c3e50;\n  font-size: 26px;\n}\n\n.serif-text {\n  font-family: "Times New Roman", Georgia, serif;\n  font-size: 18px;\n  color: #555;\n}\n\n.mono-text {\n  font-family: "Courier New", Courier, monospace;\n  background-color: #2b2b2b;\n  color: #a9b7c6;\n  padding: 8px;\n  border-radius: 4px;\n}\n\n.shorthand-text {\n  /* style | weight | size/line-height | family */\n  font: italic bold 20px/1.4 Arial, sans-serif;\n  color: #e74c3c;\n}`
        }
      ]
    },
    {
      id: "t4-2",
      title_en: "Text Alignment, Spacing & Line Height",
      title_hi: "टेक्स्ट संरेखण (Alignment), स्पेसिंग और लाइन हाइट",
      content_en: `Once you've chosen your font, the next step is controlling how paragraphs flow and breathe on the webpage. Proper spacing is the secret weapon of professional UI designers!

---

### 1. \`text-align\`
Controls the horizontal alignment of text within its block container.
* \`left\`: (Default for left-to-right languages) Aligns text to the left edge.
* \`right\`: Aligns text to the right edge.
* \`center\`: Centers the text horizontally (great for headings and banners!).
* \`justify\`: Stretches the text so that every line has equal width, aligning cleanly to both left and right edges (like in newspapers or magazines).

---

### 2. \`line-height\` (Vertical Spacing)
Controls the vertical space between lines of text. A tight line height makes text hard to read, while a balanced line height improves readability significantly.
* **Best Practice:** Use a unitless number like \`1.5\` or \`1.6\` for paragraphs. This means the line height will be 1.5 times the font size.

\`\`\`css
p {
  font-size: 16px;
  line-height: 1.5; /* Line height becomes 24px automatically */
}
\`\`\`

---

### 3. Character & Word Spacing
* \`letter-spacing\`: Increases or decreases the space between individual letters/characters. Offsets can be positive (\`2px\`) or negative (\`-1px\`). Great for giving uppercase headings a cinematic, modern feel!
* \`word-spacing\`: Increases or decreases the space between separate words.

---

### 4. \`text-indent\`
Adds empty space (an indentation) before the very first line of a paragraph block.

\`\`\`css
p {
  text-indent: 40px; /* Indents only the first line by 40px */
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `जब आप अपना फ़ॉन्ट चुन लेते हैं, तो अगला कदम यह नियंत्रित करना होता है कि पैराग्राफ वेबपेज पर कैसे व्यवस्थित दिखाई देंगे। सही स्पेसिंग (खाली जगह) पेशेवर यूआई डिज़ाइनरों का गुप्त हथियार है!

---

### 1. \`text-align\` (टेक्स्ट संरेखण)
यह किसी ब्लॉक के अंदर टेक्स्ट के क्षैतिज संरेखण (horizontal alignment) को नियंत्रित करता है।
* \`left\`: (डिफ़ॉल्ट) टेक्स्ट को बाईं ओर संरेखित करता है।
* \`right\`: टेक्स्ट को दाईं ओर संरेखित करता है।
* \`center\`: टेक्स्ट को बिल्कुल बीच में रखता है (हेडिंग और बैनर के लिए बेहतरीन!)।
* \`justify\`: टेक्स्ट को इस तरह खींचता है कि हर लाइन की चौड़ाई बराबर हो जाए और वह बाएँ तथा दाएँ दोनों किनारों से बिल्कुल सीधी दिखे (जैसे अखबारों या किताबों में होता है)।

---

### 2. \`line-height\` (पंक्तियों के बीच की ऊँचाई)
यह टेक्स्ट की पंक्तियों (lines) के बीच की लंबवत दूरी को नियंत्रित करता है। बहुत कम लाइन हाइट टेक्स्ट को पढ़ने में मुश्किल बनाती है, जबकि सही लाइन हाइट पढ़ने के अनुभव को बहुत बेहतर कर देती है।
* **बेस्ट प्रैक्टिस:** पैराग्राफ के लिए बिना किसी इकाई (unitless number) के \`1.5\` या \`1.6\` का उपयोग करें। इसका मतलब है कि लाइन हाइट फ़ॉन्ट साइज़ का 1.5 गुना होगी।

\`\`\`css
p {
  font-size: 16px;
  line-height: 1.5; /* लाइन की ऊँचाई अपने आप 24px हो जाएगी */
}
\`\`\`

---

### 3. अक्षरों और शब्दों के बीच स्पेसिंग
* \`letter-spacing\`: अलग-अलग अक्षरों (characters) के बीच की दूरी को बढ़ाता या घटाता है। आप धनात्मक (\`2px\`) या ऋणात्मक (\`-1px\`) मान दे सकते हैं। यह बड़े अक्षरों वाली हेडिंग्स को एक आधुनिक और सिनेमैटिक लुक देने के लिए बेहतरीन है!
* \`word-spacing\`: अलग-अलग शब्दों (words) के बीच की दूरी को बढ़ाता या घटाता है।

---

### 4. \`text-indent\`
यह किसी पैराग्राफ ब्लॉक की केवल पहली लाइन के शुरू में खाली जगह (indentation) जोड़ता है।

\`\`\`css
p {
  text-indent: 40px; /* केवल पहली लाइन को 40px आगे खिसका देगा */
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<h2 class="centered-title">CENTERED & SPACED TITLE</h2>\n<p class="justified-text">\n  This paragraph demonstrates text justification and balanced line height. Typography is not just about choosing fonts; it is about creating a rhythmic flow for the human eye. When text is justified, the browser adjusts the word spacing dynamically so that both left and right margins look perfectly crisp and clean.\n</p>`,
          css: `.centered-title {\n  text-align: center;\n  letter-spacing: 4px; /* Cinematic letter spacing */\n  color: #2980b9;\n  font-weight: 800;\n  margin-bottom: 10px;\n}\n\n.justified-text {\n  text-align: justify;\n  line-height: 1.8; /* Generous, readable line height */\n  word-spacing: 2px;\n  text-indent: 50px; /* Traditional first-line indent */\n  background: #f8f9fa;\n  padding: 15px;\n  border-left: 4px solid #2980b9;\n  color: #333;\n}`
        }
      ]
    },
    {
      id: "t4-3",
      title_en: "Text Decoration, Transformation & Shadows",
      title_hi: "टेक्स्ट डेकोरेशन, ट्रांसफ़ॉर्मेशन और शैडो",
      content_en: `Now let's add some visual flair! CSS provides powerful properties to underline links, change word capitalization dynamically, and create stunning glowing 3D text effects.

---

### 1. \`text-decoration\`
Most commonly used to remove or add lines to text (like hyperlinks).
* \`none\`: Removes all decorations (vital for making clean HTML links!).
* \`underline\`: Adds a line underneath the text.
* \`overline\`: Adds a line above the text.
* \`line-through\`: Adds a line right through the text (strikethrough, used for discounted prices like <del>$99</del> $49).

#### Modern Decoration Sub-properties:
You can style the underline itself without affecting the text!
* \`text-decoration-color\`: Sets the color of the underline.
* \`text-decoration-style\`: Can be \`solid\`, \`double\`, \`dotted\`, \`dashed\`, or even **\`wavy\`**!
* \`text-decoration-thickness\`: Controls how thick the line is (\`2px\`, \`3px\`).

---

### 2. \`text-transform\`
Dynamically changes the capitalization of text, regardless of how it was typed in the raw HTML file. This ensures brand consistency!
* \`uppercase\`: Transforms all letters to capitals (e.g., "hello" ➔ "HELLO").
* \`lowercase\`: Transforms all letters to small letters.
* \`capitalize\`: Transforms only the **first letter of every word** to a capital (e.g., "john doe" ➔ "John Doe").

---

### 3. \`text-shadow\`
Adds drop shadows or glow effects to text characters.

#### Syntax:
\`\`\`css
text-shadow: offset-x offset-y blur-radius color;
\`\`\`
* **offset-x:** Horizontal distance of the shadow (positive = right, negative = left).
* **offset-y:** Vertical distance of the shadow (positive = down, negative = up).
* **blur-radius:** How blurry or sharp the shadow is (\`0px\` is completely sharp).
* **color:** Color of the shadow (HEX, RGB, RGBA, etc.).

#### Pro Tip (Multiple Shadows):
You can combine multiple text shadows by separating them with a comma to create stunning neon glow effects!

[[SANDBOX_0]]`,
      content_hi: `आइए अब टेक्स्ट में कुछ विज़ुअल स्टाइल जोड़ें! CSS आपको लिंक की रेखाओं को नियंत्रित करने, शब्दों के छोटे-बड़े अक्षरों (capitalization) को अपने आप बदलने, और शानदार 3D व ग्लोइंग टेक्स्ट शैडो बनाने की सुविधा देता है।

---

### 1. \`text-decoration\` (टेक्स्ट डेकोरेशन)
इसका उपयोग सबसे अधिक टेक्स्ट के नीचे या ऊपर रेखाएँ (lines) जोड़ने या हटाने के लिए किया जाता है (जैसे हाइपरलिंक्स में)।
* \`none\`: सभी रेखाओं को हटा देता है (HTML लिंक्स को साफ़ और सुंदर बनाने के लिए सबसे आवश्यक!)।
* \`underline\`: टेक्स्ट के नीचे एक रेखा जोड़ता है।
* \`overline\`: टेक्स्ट के ऊपर एक रेखा जोड़ता है।
* \`line-through\`: टेक्स्ट के बीचों-बीच एक काटती हुई रेखा जोड़ता है (जैसे डिस्काउंट वाले मूल्यों में <del>₹999</del> ₹499)।

#### आधुनिक डेकोरेशन सब-प्रॉपर्टीज:
अब आप टेक्स्ट को प्रभावित किए बिना केवल अंडरलाइन को स्टाइल कर सकते हैं!
* \`text-decoration-color\`: अंडरलाइन का रंग बदलता है।
* \`text-decoration-style\`: इसे \`solid\`, \`double\`, \`dotted\`, \`dashed\`, या यहाँ तक कि **\`wavy\` (लहरदार)** भी बनाया जा सकता है!
* \`text-decoration-thickness\`: रेखा की मोटाई तय करता है (\`2px\`, \`3px\`)।

---

### 2. \`text-transform\` (टेक्स्ट का रूपांतरण)
यह HTML फ़ाइल में लिखे गए टेक्स्ट को बिना छेड़े उसके अक्षरों (capitalization) को स्वतः बदल देता है।
* \`uppercase\`: सभी अक्षरों को बड़ा (Capital) बना देता है (जैसे "hello" ➔ "HELLO")।
* \`lowercase\`: सभी अक्षरों को छोटा बना देता है।
* \`capitalize\`: **हर शब्द के केवल पहले अक्षर** को बड़ा बना देता है (जैसे "john doe" ➔ "John Doe")।

---

### 3. \`text-shadow\` (टेक्स्ट शैडो)
यह अक्षरों के पीछे छाया (Shadow) या चमक (Glow) का प्रभाव जोड़ता है।

#### सिंटैक्स (Syntax):
\`\`\`css
text-shadow: offset-x offset-y blur-radius color;
\`\`\`
* **offset-x:** क्षैतिज दूरी (धनात्मक = दाएँ, ऋणात्मक = बाएँ)।
* **offset-y:** लंबवत दूरी (धनात्मक = नीचे, ऋणात्मक = ऊपर)।
* **blur-radius:** छाया कितनी धुंधली या तेज़ होगी (\`0px\` बिल्कुल स्पष्ट छाया देता है)।
* **color:** छाया का रंग।

#### प्रो टिप (एक से अधिक शैडो):
आप अल्पविराम (comma) लगाकर एक साथ कई शैडो जोड़ सकते हैं जिससे शानदार नियॉन ग्लो इफ़ेक्ट (Neon Glow Effect) बनता है!

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<a href="#" class="clean-link">Clean Link with Wavy Underline</a>\n<p class="promo-code">discount coupon: summer50</p>\n<h1 class="neon-glow">NEON GLOW EFFECT</h1>\n<h2 class="3d-text">3D SHADOW TITLE</h2>`,
          css: `/* Wavy Colored Underline */\n.clean-link {\n  font-size: 20px;\n  color: #2980b9;\n  text-decoration: underline;\n  text-decoration-color: #e74c3c;\n  text-decoration-style: wavy;\n  text-decoration-thickness: 3px;\n}\n\n/* Transforming lowercase HTML into UPPERCASE */\n.promo-code {\n  text-transform: uppercase;\n  font-weight: bold;\n  background: #f1c40f;\n  color: #000;\n  padding: 8px;\n  display: inline-block;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n\n/* Multiple text-shadows creating a Neon Glow */\n.neon-glow {\n  color: #ffffff;\n  background: #111;\n  padding: 10px;\n  text-align: center;\n  text-shadow:\n    0 0 5px #00ffcc,\n    0 0 10px #00ffcc,\n    0 0 20px #00ffcc;\n}\n\n/* Sharp offset shadow creating a retro 3D look */\n.3d-text {\n  color: #f39c12;\n  font-size: 32px;\n  text-shadow: 3px 3px 0px #c0392b;\n}`
        }
      ]
    },
    {
      id: "t4-4",
      title_en: "Advanced Text Handling (Overflow, Wrap & Break)",
      title_hi: "एडवांस्ड टेक्स्ट हैंडलिंग (Overflow, Wrap और Break)",
      content_en: `What happens when text is too long to fit inside a box? Maybe a user enters a 100-character URL, or a news headline overflows its UI card. Professional developers use advanced text wrapping and overflow properties to keep layouts clean and unbreakable.

---

### 1. \`white-space\`
Controls how whitespace and line breaks inside an element are handled.
* \`normal\`: (Default) Text wraps to the next line when it hits the box boundary. Multiple spaces are collapsed into one.
* \`nowrap\`: **Crucial Property!** Forces the text to stay on a **single line**, never wrapping to the next line even if it overflows the box!
* \`pre\`: Preserves all spaces and line breaks exactly as written in HTML (works like the HTML \`<pre>\` tag).

---

### 2. \`word-break\`
What if a single long word (like a long URL or email address) has no spaces and is wider than its container? By default, it will spill outside the box!
* \`normal\`: Uses default browser line breaking rules.
* \`break-all\`: Forces long, unbreakable words to snap and break at **any character** so they fit inside the box container.

---

### 3. The Magic Trio: Truncating Text with an Ellipsis (\`...\`)
In modern UI design (like YouTube video titles or email previews), when a text title is too long, we truncate it cleanly with three dots (\`...\`) called an **ellipsis**.

To achieve this single-line truncation effect in CSS, you **MUST combine three specific properties together**:

\`\`\`css
.truncate-text {
  /* 1. Prevent the text from wrapping to a new line */
  white-space: nowrap; 
  
  /* 2. Hide any text that spills outside the box */
  overflow: hidden; 
  
  /* 3. Add the three dots (...) at the cut-off point */
  text-overflow: ellipsis; 
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `क्या होता है जब कोई टेक्स्ट बॉक्स के अंदर फिट होने के लिए बहुत लंबा होता है? हो सकता है कि कोई उपयोगकर्ता 100 अक्षरों का URL डाल दे, या कोई समाचार शीर्षक अपने कार्ड से बाहर निकल जाए। पेशेवर डेवलपर्स लेआउट को टूटने से बचाने के लिए एडवांस्ड टेक्स्ट रैपिंग और ओवरफ्लो प्रॉपर्टीज का उपयोग करते हैं।

---

### 1. \`white-space\`
यह नियंत्रित करता है कि एलिमेंट के अंदर खाली जगह (spaces) और लाइन ब्रेक्स को कैसे संभाला जाएगा।
* \`normal\`: (डिफ़ॉल्ट) जब टेक्स्ट बॉक्स के किनारे पर पहुँचता है, तो वह अगली लाइन पर आ जाता है।
* \`nowrap\`: **बेहद महत्वपूर्ण प्रॉपर्टी!** यह टेक्स्ट को ज़बरदस्ती **एक ही लाइन** पर रखता है, चाहे वह बॉक्स से बाहर ही क्यों न निकल जाए!
* \`pre\`: HTML में दिए गए सभी स्पेसेस और लाइन ब्रेक्स को वैसे ही बनाए रखता है जैसे वे लिखे गए हैं।

---

### 2. \`word-break\`
क्या होगा यदि एक लंबा शब्द (जैसे कोई लंबा URL या ईमेल पता) बिना किसी स्पेस के अपने कंटेनर से अधिक चौड़ा हो? डिफ़ॉल्ट रूप से, वह बॉक्स के बाहर बह जाएगा!
* \`normal\`: ब्राउज़र के डिफ़ॉल्ट नियमों का पालन करता है।
* \`break-all\`: लंबे शब्दों को बॉक्स के अंदर फिट करने के लिए **किसी भी अक्षर** पर तोड़कर अगली लाइन में भेज देता है।

---

### 3. मैजिक ट्रियो: एलाप्सिस (\`...\`) के साथ टेक्स्ट को काटना
आधुनिक यूआई डिज़ाइन में (जैसे यूट्यूब वीडियो के शीर्षक या ईमेल प्रीव्यू में), जब कोई शीर्षक बहुत लंबा होता है, तो हम उसे तीन बिंदुओं (\`...\`) के साथ काट देते हैं, जिसे **Ellipsis (एलाप्सिस)** कहा जाता है।

CSS में यह सिंगल-लाइन ट्रंकेशन इफ़ेक्ट पाने के लिए, आपको **इन तीन प्रॉपर्टीज को एक साथ लगाना अनिवार्य है**:

\`\`\`css
.truncate-text {
  /* 1. टेक्स्ट को नई लाइन पर जाने से रोकें */
  white-space: nowrap; 
  
  /* 2. बॉक्स के बाहर जाने वाले टेक्स्ट को छिपा दें */
  overflow: hidden; 
  
  /* 3. कटने वाले स्थान पर तीन बिंदु (...) जोड़ दें */
  text-overflow: ellipsis; 
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="card">\n  <h3>Normal Text Wrapping</h3>\n  <p class="normal-wrap">This is a long sentence that naturally wraps to the next line when it reaches the end of the container box.</p>\n</div>\n\n<div class="card">\n  <h3>URL Breaking (word-break: break-all)</h3>\n  <p class="url-break">https://www.example-very-long-domain-name.com/user/profile/settings/security/token=839204829304820</p>\n</div>\n\n<div class="card">\n  <h3>Single Line Ellipsis Truncation (...)</h3>\n  <p class="ellipsis-box">This is a super long movie title that will be cut off cleanly with three dots instead of overflowing or breaking to a second line!</p>\n</div>`,
          css: `.card {\n  width: 320px;\n  background: #fdfdfd;\n  border: 1px solid #ddd;\n  padding: 12px;\n  margin-bottom: 12px;\n  border-radius: 6px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\n}\n\nh3 {\n  font-size: 14px;\n  color: #7f8c8d;\n  margin-top: 0;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 4px;\n}\n\n/* Normal wrap */\n.normal-wrap {\n  color: #333;\n}\n\n/* Breaks long unbroken words */\n.url-break {\n  color: #e67e22;\n  word-break: break-all;\n  font-family: monospace;\n}\n\n/* The 3-Property Combo for Ellipsis */\n.ellipsis-box {\n  color: #c0392b;\n  font-weight: bold;\n  font-size: 16px;\n  \n  /* Mandatory Trio */\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}`
        }
      ]
    }
  ]
};

export const chapter04Quiz = [
  {
    id: "q1",
    question_en: "Which font family category has small decorative lines or 'feet' at the ends of characters?",
    question_hi: "किस फ़ॉन्ट श्रेणी में अक्षरों के सिरों पर छोटी सजावटी रेखाएँ या 'पैर' (feet) होते हैं?",
    options_en: [
      "Sans-serif",
      "Serif",
      "Monospace",
      "Cursive"
    ],
    options_hi: [
      "Sans-serif (सैंस-सेरिफ़)",
      "Serif (सेरिफ़)",
      "Monospace (मोनोस्पेस)",
      "Cursive (कर्सिव)"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q2",
    question_en: "Why is it important to provide a 'Font Stack' (multiple font names separated by commas) in font-family?",
    question_hi: "font-family में 'फ़ॉन्ट स्टैक' (अल्पविराम से अलग किए गए कई फ़ॉन्ट नाम) देना क्यों महत्वपूर्ण है?",
    options_en: [
      "To mix different letters from different fonts together",
      "To make the webpage load slower",
      "As backups in case the user's device doesn't have the first font installed",
      "To create a text shadow effect"
    ],
    options_hi: [
      "अलग-अलग फ़ॉन्ट्स के अक्षरों को आपस में मिलाने के लिए",
      "वेबपेज को धीमा लोड करने के लिए",
      "बैकअप के रूप में, ताकि यदि उपयोगकर्ता के डिवाइस में पहला फ़ॉन्ट न हो तो अगला काम करे",
      "टेक्स्ट शैडो इफ़ेक्ट बनाने के लिए"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q3",
    question_en: "Which CSS rule is typically placed at the very top of a stylesheet to import custom fonts from Google Fonts?",
    question_hi: "Google Fonts से कस्टम फ़ॉन्ट्स को आयात (import) करने के लिए आमतौर पर CSS फ़ाइल के सबसे ऊपर कौन सा नियम लगाया जाता है?",
    options_en: [
      "@include",
      "@import",
      "@font-face",
      "@require"
    ],
    options_hi: [
      "@include",
      "@import",
      "@font-face",
      "@require"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q4",
    question_en: "Which property is used to control the vertical space between lines of text?",
    question_hi: "टेक्स्ट की पंक्तियों (lines) के बीच की लंबवत दूरी को नियंत्रित करने के लिए किस प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: [
      "letter-spacing",
      "word-spacing",
      "line-height",
      "text-indent"
    ],
    options_hi: [
      "letter-spacing",
      "word-spacing",
      "line-height",
      "text-indent"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q5",
    question_en: "What is the correct CSS declaration to remove the default underline from an HTML hyperlink?",
    question_hi: "HTML हाइपरलिंक के नीचे से डिफ़ॉल्ट अंडरलाइन हटाने के लिए सही CSS कोड क्या है?",
    options_en: [
      "text-decoration: none;",
      "text-style: normal;",
      "font-decoration: no-line;",
      "underline: false;"
    ],
    options_hi: [
      "text-decoration: none;",
      "text-style: normal;",
      "font-decoration: no-line;",
      "underline: false;"
    ],
    correctAnswerIndex: 0
  },
  {
    id: "q6",
    question_en: "Which value of 'text-transform' converts only the very first letter of every word to a capital letter?",
    question_hi: "'text-transform' का कौन सा मान प्रत्येक शब्द के केवल पहले अक्षर को बड़े अक्षर (Capital) में बदल देता है?",
    options_en: [
      "uppercase",
      "lowercase",
      "capitalize",
      "first-letter"
    ],
    options_hi: [
      "uppercase",
      "lowercase",
      "capitalize",
      "first-letter"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q7",
    question_en: "In the property 'font: italic bold 18px/1.5 Arial;', what does the number '1.5' represent?",
    question_hi: "प्रॉपर्टी 'font: italic bold 18px/1.5 Arial;' में संख्या '1.5' क्या दर्शाती है?",
    options_en: [
      "Letter spacing",
      "Line height",
      "Font weight",
      "Word spacing"
    ],
    options_hi: [
      "अक्षरों की दूरी (Letter spacing)",
      "लाइन की ऊँचाई (Line height)",
      "फ़ॉन्ट की मोटाई (Font weight)",
      "शब्दों की दूरी (Word spacing)"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q8",
    question_en: "In 'text-shadow: 2px 4px 6px #000;', what does the third numeric value ('6px') control?",
    question_hi: "'text-shadow: 2px 4px 6px #000;' में, तीसरा संख्यात्मक मान ('6px') क्या नियंत्रित करता है?",
    options_en: [
      "Horizontal offset",
      "Vertical offset",
      "Blur radius (how blurry or sharp the shadow is)",
      "Shadow thickness"
    ],
    options_hi: [
      "क्षैतिज दूरी (Horizontal offset)",
      "लंबवत दूरी (Vertical offset)",
      "ब्लर रेडियस (छाया कितनी धुंधली या स्पष्ट होगी)",
      "छाया की मोटाई"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q9",
    question_en: "Which property forces long, unbroken words (like URLs) to snap and wrap to the next line so they don't overflow their container?",
    question_hi: "कौन सी प्रॉपर्टी लंबे, बिना टूटे शब्दों (जैसे URL) को तोड़कर अगली लाइन में भेज देती है ताकि वे कंटेनर से बाहर न निकलें?",
    options_en: [
      "word-break: break-all;",
      "white-space: nowrap;",
      "text-overflow: clip;",
      "text-align: justify;"
    ],
    options_hi: [
      "word-break: break-all;",
      "white-space: nowrap;",
      "text-overflow: clip;",
      "text-align: justify;"
    ],
    correctAnswerIndex: 0
  },
  {
    id: "q10",
    question_en: "Which three CSS properties MUST be used together to truncate single-line overflowing text with an ellipsis (...)?",
    question_hi: "सिंगल-लाइन ओवरफ्लो होने वाले टेक्स्ट को एलाप्सिस (...) के साथ काटने के लिए किन तीन CSS प्रॉपर्टीज का एक साथ उपयोग करना अनिवार्य है?",
    options_en: [
      "font-size, line-height, text-decoration",
      "white-space: nowrap, overflow: hidden, text-overflow: ellipsis",
      "word-break, letter-spacing, text-transform",
      "display: block, text-align: center, overflow: scroll"
    ],
    options_hi: [
      "font-size, line-height, text-decoration",
      "white-space: nowrap, overflow: hidden, text-overflow: ellipsis",
      "word-break, letter-spacing, text-transform",
      "display: block, text-align: center, overflow: scroll"
    ],
    correctAnswerIndex: 1
  }
];

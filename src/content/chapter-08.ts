export const chapter08 = {
  id: "ch8",
  title_en: "Chapter 8: Advanced Selectors & Combinators",
  title_hi: "अध्याय 8: एडवांस सेलेक्टर्स और कॉम्बिनेटर्स",
  topics: [
    {
      id: "t8-1",
      title_en: "CSS Combinators (Selecting by Relationships)",
      title_hi: "CSS कॉम्बिनेटर्स (रिश्तों के आधार पर एलिमेंट्स चुनना)",
      content_en: `### Selecting Elements by Their Relationships

Until now, you have learned how to select elements directly using their tag name, class, or ID. But what if you want to style a paragraph *only* if it is inside a specific section? What if you want to target a button *only* if it sits directly next to a heading?

This is where **Combinators** come in. Combinators allow you to select elements based on their specific relationship with other elements in the HTML structure. Think of it like targeting elements based on family relationships (Parents, Children, and Siblings).

There are 4 main types of combinators in CSS:

#### 1. Descendant Selector (Space \` \`)
Selects **all** matching elements that are inside the specified parent element, no matter how deep they are buried (children, grandchildren, etc.).
\`\`\`css
/* Selects ALL <p> tags inside any <div> */
div p {
  color: #7f8c8d;
}
\`\`\`

#### 2. Child Selector (Greater Than \`>\`)
Selects only the **direct children** of a parent element. Grandchildren or deeper elements are completely ignored.
\`\`\`css
/* Selects only <p> tags that are direct children of <div> */
div > p {
  font-weight: bold;
}
\`\`\`

#### 3. Adjacent Sibling Selector (Plus \`+\`)
Selects an element that is the **immediate next neighbor** (sibling) of a specific element, sharing the same parent.
\`\`\`css
/* Selects the first <p> tag that comes IMMEDIATELY after an <h1> tag */
h1 + p {
  margin-top: 0;
}
\`\`\`

#### 4. General Sibling Selector (Tilde \`~\`)
Selects **all** matching elements that follow a specific element as neighbors, even if they aren't directly next to it.
\`\`\`css
/* Selects ALL <p> tags that follow an <h1> tag, as long as they share the same parent */
h1 ~ p {
  color: #2ecc71;
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### एलिमेंट्स को उनके आपसी रिश्तों से पहचानें

अब तक आपने सीधे टैग, क्लास या आईडी का उपयोग करके एलिमेंट्स को स्टाइल करना सीखा है। लेकिन सोचिए, अगर आपको किसी पैराग्राफ को सिर्फ तब स्टाइल करना हो जब वह किसी खास सेक्शन के अंदर हो? या किसी बटन को सिर्फ तब टारगेट करना हो जब वह हेडिंग के ठीक बगल में बैठा हो?

इसी काम के लिए बने हैं **Combinators (कॉम्बिनेटर्स)**। कॉम्बिनेटर्स हमें HTML के ऊंच-नीच के ढांचे में एलिमेंट्स के आपसी रिश्तों (जैसे माता-पिता, बच्चे, और भाई-बहन) के आधार पर उन्हें टारगेट करने की ताकत देते हैं।

CSS में ये 4 तरह के मुख्य कॉम्बिनेटर्स होते हैं:

#### 1. डिसेंडेंट सिलेक्टर (Descendant Selector - स्पेस \` \`)
यह किसी पैरेंट (पिता) एलिमेंट के अंदर मौजूद **सभी** मैचिंग एलिमेंट्स को चुन लेता है, चाहे वे कितने भी अंदर छिपे हों (बच्चे हो या पोते-पड़पोते, सब पर स्टाइल लागू होगा)।
\`\`\`css
/* किसी भी <div> के अंदर मौजूद हर एक <p> टैग को चुनेगा */
div p {
  color: #7f8c8d;
}
\`\`\`

#### 2. चाइल्ड सिलेक्टर (Child Selector - \`>\`)
यह सिर्फ और सिर्फ **डायरेक्ट बच्चों (Direct Children)** को चुनता है। पोते (grandchildren) या उससे अंदर वाले एलिमेंट्स को यह साफ़ छोड़ देता है।
\`\`\`css
/* केवल उसी <p> को चुनेगा जो सीधे <div> का सगा बच्चा है */
div > p {
  font-weight: bold;
}
\`\`\`

#### 3. एडजसेंट सिबलिंग सिलेक्टर (Adjacent Sibling - प्लस \`+\`)
यह किसी एलिमेंट के **ठीक बगल वाले (तुरंत बाद आने वाले) पड़ोसी सगे भाई** को चुनता है। शर्त यह है कि दोनों का पैरेंट एक ही होना चाहिए।
\`\`\`css
/* सिर्फ उस पहले <p> टैग को चुनेगा जो <h1> के ठीक बाद शुरू होता है */
h1 + p {
  margin-top: 0;
}
\`\`\`

#### 4. जनरल सिबलिंग सिलेक्टर (General Sibling - टिल्ड \`~\`)
यह किसी एलिमेंट के बाद आने वाले **सभी पड़ोसी भाई-बहनों** को एक साथ चुन लेता है, चाहे वे उसके ठीक बगल में हों या थोड़े फासले पर।
\`\`\`css
/* <h1> के बाद आने वाले उन सभी <p> टैग्स को चुनेगा जो उसके साथ एक ही घर (parent) में हैं */
h1 ~ p {
  color: #2ecc71;
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="parent-box">\n  <h1>I am the Parent Heading</h1>\n  <p>Paragraph 1 (Direct Child & Adjacent Sibling)</p>\n  <p>Paragraph 2 (Direct Child & General Sibling)</p>\n  <div class="nested-box">\n    <p>Paragraph 3 (Grandchild - Nested Descendant)</p>\n  </div>\n</div>`,
          css: `/* Shared base style */\n.parent-box {\n  padding: 15px;\n  border: 2px solid #34495e;\n  font-family: sans-serif;\n}\n\n/* 1. Direct Child Selector: Makes Paragraph 1 & 2 blue, but ignores Paragraph 3 */\n.parent-box > p {\n  color: #3498db;\n}\n\n/* 2. Adjacent Sibling: Makes Paragraph 1 bold because it's right next to h1 */\nh1 + p {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n/* 3. Descendant Selector: Changes the nested paragraph inside the sub-box */\n.parent-box p {\n  background-color: #f1f2f6;\n  padding: 5px;\n}`
        }
      ]
    },
    {
      id: "t8-2",
      title_en: "Pseudo-Classes (State & Structural Selectors)",
      title_hi: "सूडो-क्लासेस (स्टेट और स्ट्रक्चरल सेलेक्टर्स)",
      content_en: `### What is a Pseudo-Class?

A **Pseudo-class** is a keyword added to a selector that specifies a special state of the selected element. It allows you to style an element based on user interaction or its position in the HTML tree, without writing manual classes. 

Pseudo-classes always start with a single colon (\`:\`).

---

### 1. User Action Pseudo-Classes
These respond directly to what the user is doing on the webpage at that exact second:
- **\`:hover\`**: Triggers when the user moves their mouse pointer over an element (crucial for buttons and links).
- **\`:active\`**: Triggers at the exact millisecond an element is being clicked down.
- **\`:focus\`**: Triggers when an element (like an input field) becomes active via a click or tab key, ready to accept typing.

\`\`\`css
.btn {
  background-color: #3498db;
  transition: 0.3s;
}
.btn:hover {
  background-color: #2980b9; /* Darkens on hover */
}
.btn:active {
  transform: scale(0.95);    /* Shrinks slightly when clicked */
}
input:focus {
  border-color: #2ecc71;     /* Turns green when typing */
}
\`\`\`

---

### 2. Structural Pseudo-Classes
These select elements based on their order or index inside a list or container, which is incredibly useful for dynamic data:
- **\`:first-child\`**: Targets the absolute first element inside a parent.
- **\`:last-child\`**: Targets the absolute last element inside a parent.
- **\`:nth-child(n)\`**: The master structural selector. You can pass numbers, keywords like \`even\`/\`odd\`, or formulas to select specific patterns.

\`\`\`css
/* Styles the very first item in a list */
li:first-child {
  font-weight: bold;
}

/* Creates a beautiful zebra-stripe table effect automatically! */
li:nth-child(even) {
  background-color: #f2f2f2;
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### सूडो-क्लास (Pseudo-Class) क्या होती है?

**Pseudo-class** एक ऐसा कीवर्ड है जिसे किसी सिलेक्टर के पीछे लगाया जाता है ताकि उसकी किसी खास स्थिति या अवस्था (State) को स्टाइल किया जा सके। इसकी मदद से आप यूजर की हरकतों (जैसे माउस ले जाना) या एलिमेंट के नंबर की पोजीशन के हिसाब से उसे बिना कोई नई क्लास दिए डिज़ाइन कर सकते हैं।

सूडो-क्लास की पहचान यह है कि यह हमेशा एक कोलन (\`:\`) से शुरू होती है।

---

### 1. यूजर एक्शन सूडो-क्लासेस (User Action)
ये इस बात पर प्रतिक्रिया देती हैं कि यूजर उस सेकंड वेबसाइट पर क्या कर रहा है:
- **\`:hover\`**: जब यूजर अपने माउस का कर्सर किसी एलिमेंट (जैसे बटन या लिंक) के ऊपर ले जाता है।
- **\`:active\`**: जिस मिलीसेकंड पर यूजर बटन को दबाकर रखता है (क्लिक करने का पल)।
- **\`:focus\`**: जब यूजर किसी इनपुट बॉक्स (फॉर्म) के अंदर क्लिक करता है और वहां कर्सर टिमटिमाने लगता है ताकि वह टाइप कर सके।

\`\`\`css
.btn {
  background-color: #3498db;
  transition: 0.3s;
}
.btn:hover {
  background-color: #2980b9; /* माउस ले जाने पर गहरा रंग */
}
.btn:active {
  transform: scale(0.95);    /* क्लिक करते ही बटन थोड़ा दबेगा */
}
input:focus {
  border-color: #2ecc71;     /* टाइप करते समय बॉर्डर हरा हो जाएगा */
}
\`\`\`

---

### 2. स्ट्रक्चरल सूडो-क्लासेस (Structural Position)
ये किसी लिस्ट या कंटेनर के अंदर एलिमेंट्स के नंबर या ऑर्डर के आधार पर उन्हें चुनती हैं:
- **\`:first-child\`**: अपने ग्रुप या पैरेंट के सबसे पहले बच्चे (element) को टारगेट करता है।
- **\`:last-child\`**: अपने ग्रुप के सबसे आखिरी बच्चे को टारगेट करता Blanket है।
- **\`:nth-child(n)\`**: यह सबसे पावरफुल सिलेक्टर है। इसमें आप कोई नंबर लिख सकते हैं या \`even\` (सम संख्या) / \`odd\` (विषम संख्या) लिखकर एक अनोखा पैटर्न बना सकते हैं।

\`\`\`css
/* लिस्ट के सबसे पहले आइटम को बोल्ड करेगा */
li:first-child {
  font-weight: bold;
}

/* लिस्ट के हर दूसरे (2, 4, 6, 8) आइटम का बैकग्राउंड बदल देगा - ज़ेबरा इफ़ेक्ट! */
li:nth-child(even) {
  background-color: #f2f2f2;
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<button class="interactive-btn">Hover & Click Me</button>\n<input type="text" class="cool-input" placeholder="Click inside me to focus...">\n\n<ul class="list-demo">\n  <li>Item One (First Child)</li>\n  <li>Item Two (Even)</li>\n  <li>Item Three (Odd)</li>\n  <li>Item Four (Last & Even)</li>\n</ul>`,
          css: `body { font-family: sans-serif; }\n.interactive-btn {\n  padding: 10px 20px; background: #e74c3c; color: white; border: none; cursor: pointer; transition: 0.2s; margin-right: 10px;\n}\n/* Hover and Active states */\n.interactive-btn:hover { background: #c0392b; }\n.interactive-btn:active { transform: translateY(3px); }\n\n.cool-input {\n  padding: 8px; border: 2px solid #ccc; outline: none; border-radius: 4px;\n}\n/* Focus state */\n.cool-input:focus { border-color: #9b59b6; box-shadow: 0 0 8px rgba(155,89,182,0.3); }\n\n.list-demo { margin-top: 20px; padding-left: 20px; }\n.list-demo li { padding: 8px; list-style: none; }\n/* Structural styling */\n.list-demo li:first-child { color: red; }\n.list-demo li:nth-child(even) { background-color: #dfe4ea; }`
        }
      ]
    },
    {
      id: "t8-3",
      title_en: "Pseudo-Elements (Injecting Content with Before & After)",
      title_hi: "सूडो-एलिमेंट्स (Before और After से नकली एलिमेंट्स जोड़ना)",
      content_en: `### Styling Virtual Elements

While pseudo-classes style an existing element based on its state, **Pseudo-elements** are used to style a specific *part* of an element, or inject completely new, decorative content without touching your HTML file!

Pseudo-elements are written with a double colon (\`::\`) to differentiate them from pseudo-classes.

---

### The Magical \`::before\` and \`::after\`

These two are the absolute favorites of creative web designers. They allow you to add a "virtual" element inside your HTML element, right before or right after its actual text content.

#### Crucial Rules for Before and After:
1. They require the **\`content: "";\`** property. Without it, the pseudo-element will refuse to load on screen.
2. By default, they are **inline elements**. If you want to give them width, height, or padding, you must set \`display: block\` or \`display: inline-block\`.

\`\`\`css
/* Automatically adds a neat quote icon before every blockquote text */
blockquote::before {
  content: "“";
  font-size: 30px;
  color: #f1c40f;
  margin-right: 5px;
}

/* Creating a cool animated underline decoration for a link */
.cool-link::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: #2ecc71;
}
\`\`\`

---

### Other Useful Pseudo-Elements
- **\`::placeholder\`**: Used to style the gray hint text inside input form fields.
- **\`::first-letter\`**: Targets the very first letter of a paragraph—perfect for magazine-style "drop cap" layout designs.

[[SANDBOX_0]]`,
      content_hi: `### वर्चुअल या नकली एलिमेंट्स को स्टाइल करना

सूडो-क्लास जहाँ पहले से मौजूद एलिमेंट की स्थिति बदलती है, वहीं **Pseudo-elements (सूडो-एलिमेंट्स)** का उपयोग किसी एलिमेंट के एक खास *हिस्से* को डिजाइन करने या बिना HTML कोड छुए बिल्कुल नया सजावटी एलिमेंट (content) जोड़ने के लिए किया जाता है!

इन्हें सूडो-क्लास से अलग दिखाने के लिए डबल कोलन (\`::\`) के साथ लिखा जाता है।

---

### जादुई \`::before\` और \`::after\`

ये दोनों क्रिएटिव वेब डिज़ाइनर्स के सबसे बड़े हथियार हैं। ये आपको किसी भी HTML एलिमेंट के टेक्स्ट के ठीक पहले (\`::before\`) या ठीक बाद (\`::after\`) एक "आभासी या नकली" एलिमेंट जोड़ने की आज़ादी देते हैं।

#### इनके इस्तेमाल के दो सबसे ज़रूरी नियम:
1. इनके कोड में **\`content: "";\`** प्रॉपर्टी लिखना अनिवार्य है। अगर आप यह नहीं लिखेंगे, तो सूडो-एलिमेंट स्क्रीन पर कभी लोड ही नहीं होगा।
2. ये डिफ़ॉल्ट रूप से **Inline elements** होते हैं। अगर आप इन्हें चौड़ाई (width) या ऊंचाई (height) देना चाहते हैं, तो आपको \`display: block;\` लगाना पड़ेगा।

\`\`\`css
/* हर एक ब्लॉककोट (blockquote) टेक्स्ट के पहले अपने आप सुंदर कोट्स का निशान जोड़ देगा */
blockquote::before {
  content: "“";
  font-size: 30px;
  color: #f1c40f;
  margin-right: 5px;
}

/* किसी लिंक के नीचे एक सुंदर कस्टमाइज्ड अंडरलाइन रेखा बनाना */
.cool-link::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: #2ecc71;
}
\`\`\`

---

### अन्य काम के सूडो-एलिमेंट्स
- **\`::placeholder\`**: इसके जरिए आप फॉर्म इनपुट बॉक्स के अंदर दिखने वाले धुंधले हिंट टेक्स्ट (placeholder) का रंग और स्टाइल बदल सकते हैं।
- **\`::first-letter\`**: यह किसी पैराग्राफ के पहले अक्षर को चुनता है—इससे आप मैगज़ीन या अख़बार जैसा बड़ा पहला अक्षर (Drop cap) बना सकते हैं।

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<blockquote class="quote">Learning CSS Advanced Selectors makes you a styling wizard.</blockquote>\n\n<input type="text" class="styled-input" placeholder="Custom styled placeholder text">\n\n<p class="magazine-text">Once upon a time in the world of internet...</p>`,
          css: `body { font-family: Georgia, serif; padding: 10px; }\n\n/* Before creates a custom yellow opening quote icon */\n.quote {\n  position: relative; font-style: italic; font-size: 20px; color: #34495e; margin: 20px 0;\n}\n.quote::before {\n  content: "“"; font-size: 50px; color: #f1c40f; position: absolute; left: -25px; top: -15px; font-family: sans-serif;\n}\n\n/* Styling placeholder text */\n.styled-input {\n  padding: 10px; width: 100%; max-width: 300px; border: 1px solid #ccc; display: block; margin-bottom: 20px;\n}\n.styled-input::placeholder {\n  color: #e67e22; font-weight: bold; font-style: italic;\n}\n\n/* First letter gets big and red like a magazine drop cap */\n.magazine-text::first-letter {\n  font-size: 45px; font-weight: bold; color: #e74c3c; float: left; margin-right: 8px; line-height: 1;\n}`
        }
      ]
    }
  ]
};

export const chapter08Quiz = [
  {
    id: "q1",
    question_en: "Which CSS combinator matches all elements that are inside a parent, regardless of how deeply nested they are?",
    question_hi: "कौन सा CSS कॉम्बिनेटर उन सभी एलिमेंट्स को मैच करता है जो एक पैरेंट के अंदर मौजूद हैं, चाहे वे कितने भी गहरे नेस्टेड (nested) हों?",
    options_en: [
      "Child Selector (>)",
      "Adjacent Sibling Selector (+)",
      "Descendant Selector (Space)",
      "General Sibling Selector (~)"
    ],
    options_hi: [
      "चाइल्ड सिलेक्टर (>)",
      "एडजसेंट सिबलिंग सिलेक्टर (+)",
      "डिसेंडेंट सिलेक्टर (Space - खाली जगह)",
      "जनरल सिबलिंग सिलेक्टर (~)"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q2",
    question_en: "What is the key difference between the Descendant Selector (space) and the Child Selector (>)?",
    question_hi: "डिसेंडेंट सिलेक्टर (स्पेस) और चाइल्ड सिलेक्टर (>) के बीच मुख्य अंतर क्या है?",
    options_en: [
      "The space selector targets only direct children, while > targets grandchildren.",
      "The space selector targets all inner descendants, while > targets only direct immediate children.",
      "They are identical and perform the exact same action.",
      "The > selector applies only to text links."
    ],
    options_hi: [
      "स्पेस सिलेक्टर केवल सीधे बच्चों को चुनता है, जबकि > पोतों (grandchildren) को चुनता है।",
      "स्पेस सिलेक्टर अंदर के सभी वंशजों (descendants) को चुनता है, जबकि > केवल सीधे और तुरंत आने वाले बच्चों को चुनता है।",
      "वे बिल्कुल समान हैं और एक ही काम करते हैं।",
      "Selector > केवल टेक्स्ट लिंक पर लागू होता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q3",
    question_en: "If you want to style a paragraph ONLY if it is the immediate next neighbor right after an <h1> tag, which combinator should you use?",
    question_hi: "यदि आप किसी पैराग्राफ को केवल तब स्टाइल करना चाहते हैं जब वह <h1> टैग के ठीक बगल वाला (तुरंत बाद का) पड़ोसी हो, तो आपको किस कॉम्बिनेटर का उपयोग करना चाहिए?",
    options_en: [
      "h1 ~ p",
      "h1 > p",
      "h1 p",
      "h1 + p"
    ],
    options_hi: [
      "h1 ~ p",
      "h1 > p",
      "h1 p",
      "h1 + p"
    ],
    correctAnswerIndex: 3
  },
  {
    id: "q4",
    question_en: "Which symbol represents the General Sibling Selector, matching all following sibling elements that share the same parent?",
    question_hi: "कौन सा प्रतीक जनरल सिबलिंग सिलेक्टर (General Sibling Selector) को दर्शाता है, जो एक ही पैरेंट वाले बाद के सभी पड़ोसी एलिमेंट्स को चुनता है?",
    options_en: [
      "+ (Plus)",
      "~ (Tilde)",
      "> (Greater Than)",
      "* (Asterisk)"
    ],
    options_hi: [
      "+ (Plus)",
      "~ (Tilde)",
      "> (Greater Than)",
      "* (Asterisk)"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q5",
    question_en: "How are Pseudo-classes distinguished from Pseudo-elements in standard modern CSS syntax?",
    question_hi: "मानक मॉडर्न CSS सिंटैक्स में सूडो-क्लासेस (Pseudo-classes) को सूडो-एलिमेंट्स (Pseudo-elements) से कैसे अलग पहचाना जाता है?",
    options_en: [
      "Pseudo-classes start with an @ symbol, pseudo-elements start with a dot.",
      "Pseudo-classes use a single colon (:), while pseudo-elements use a double colon (::).",
      "Pseudo-elements go inside the HTML file, pseudo-classes stay in CSS.",
      "There is no syntactic difference between them."
    ],
    options_hi: [
      "Pseudo-classes एक @ सिंबल से शुरू होती हैं, pseudo-elements एक डॉट से शुरू होते हैं।",
      "Pseudo-classes सिंगल कोलन (:) का उपयोग करती हैं, जबकि pseudo-elements डबल कोलन (::) का उपयोग करते हैं।",
      "Pseudo-elements HTML फ़ाइल के अंदर जाते हैं, pseudo-classes CSS में रहती हैं।",
      "उनके बीच कोई सिंटैक्स का अंतर नहीं होता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q6",
    question_en: "Which pseudo-class triggers the exact moment an element is actively hovered over by a user's mouse pointer?",
    question_hi: "कौन सी सूडो-क्लास उस सटीक समय पर ट्रिगर होती है जब कोई यूजर अपने माउस पॉइंटर को किसी एलिमेंट के ऊपर ले जाता है?",
    options_en: [
      ":active",
      ":focus",
      ":hover",
      ":visited"
    ],
    options_hi: [
      ":active",
      ":focus",
      ":hover",
      ":visited"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q7",
    question_en: "Which structural pseudo-class would you use to automatically select all even items (2, 4, 6, etc.) in a long dynamic list?",
    question_hi: "एक लंबी डायनेमिक लिस्ट में सभी सम नंबर वाले आइटम्स (2, 4, 6, आदि) को स्वचालित रूप से चुनने के लिए आप किस स्ट्रक्चरल सूडो-क्लास का उपयोग करेंगे?",
    options_en: [
      ":first-child",
      ":nth-child(even)",
      ":nth-child(odd)",
      ":last-child"
    ],
    options_hi: [
      ":first-child",
      ":nth-child(even)",
      ":nth-child(odd)",
      ":last-child"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q8",
    question_en: "What mandatory CSS property MUST be included for '::before' and '::after' pseudo-elements to render properly on a webpage?",
    question_hi: "वेबपेज पर '::before' और '::after' सूडो-एलिमेंट्स को ठीक से लोड (render) करने के लिए कौन सी अनिवार्य CSS प्रॉपर्टी शामिल की जानी चाहिए?",
    options_en: [
      "display: block;",
      "content: \"\";",
      "position: absolute;",
      "width: 100%;"
    ],
    options_hi: [
      "display: block;",
      "content: \"\";",
      "position: absolute;",
      "width: 100%;"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q9",
    question_en: "By default, what type of display layout box do '::before' and '::after' pseudo-elements form?",
    question_hi: "डिफ़ॉल्ट रूप से, '::before' और '::after' सूडो-एलिमेंट्स किस प्रकार का डिस्प्ले लेआउट बॉक्स बनाते हैं?",
    options_en: [
      "Block layout",
      "Flex layout",
      "Inline layout",
      "Grid layout"
    ],
    options_hi: [
      "ब्लॉक (Block) लेआउट",
      "फ्लेक्स (Flex) लेआउट",
      "इनलाइन (Inline) लेआउट",
      "ग्रिड (Grid) लेआउट"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q10",
    question_en: "Which pseudo-element targets the gray text tip inside an empty form text field before the user starts typing?",
    question_hi: "यूजर के टाइपिंग शुरू करने से पहले, खाली फॉर्म टेक्स्ट फ़ील्ड के अंदर दिखने वाले धुंधले हिंट टेक्स्ट को कौन सा सूडो-एलिमेंट टारगेट करता है?",
    options_en: [
      "::first-letter",
      "::placeholder",
      "::before",
      ":focus"
    ],
    options_hi: [
      "::first-letter",
      "::placeholder",
      "::before",
      ":focus"
    ],
    correctAnswerIndex: 1
  }
];

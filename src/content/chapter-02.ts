export const chapter02 = {
  "id": "advanced-css-selectors",
  "title_en": "Chapter 2: Advanced CSS Selectors",
  "title_hi": "अध्याय 2: एडवांस्ड CSS सेलेक्टर्स",
  "topics": [
    {
      "id": "combinators-hierarchy",
      "title_en": "Combinators & Hierarchy",
      "title_hi": "कॉम्बिनेटर्स और हायरार्की",
      "content_en": "### Understanding CSS Combinators\n\nCSS combinators are powerful tools that allow you to select elements based on their relationship to other elements in the HTML document structure. They help you target specific elements with greater precision, making your CSS more robust and maintainable.\n\nThere are four main types of combinators:\n\n1.  **Descendant Selector** (space)\n2.  **Child Selector** (>)\n3.  **Adjacent Sibling Selector** (+)\n4.  **General Sibling Selector** (~)\n\nLet's explore each one.\n\n#### 1. Descendant Selector (space)\n\nThe descendant selector selects all elements that are descendants of a specified element. A descendant can be a child, grandchild, great-grandchild, and so on.\n\n**Syntax:** `ancestor descendant { property: value; }`\n\n**Example:**\n```css\ndiv p {\n  color: blue;\n}\n```\nThis rule will apply `color: blue;` to all `<p>` elements that are inside a `<div>` element, regardless of how deep they are nested.\n\n[[SANDBOX_0]]\n\n#### 2. Child Selector (>)\n\nThe child selector selects all elements that are direct children of a specified element. It's stricter than the descendant selector, only targeting immediate children.\n\n**Syntax:** `parent > child { property: value; }`\n\n**Example:**\n```css\nul > li {\n  list-style-type: square;\n}\n```\nThis rule will apply `list-style-type: square;` only to `<li>` elements that are direct children of a `<ul>` element. It will not affect `<li>` elements nested further down (e.g., inside another `<ul>` within the first `<li>`).\n\n[[SANDBOX_1]]\n\n#### 3. Adjacent Sibling Selector (+)\n\nThe adjacent sibling selector selects an element that is immediately preceded by a specified sibling element. Both elements must have the same parent.\n\n**Syntax:** `element1 + element2 { property: value; }`\n\n**Example:**\n```css\nh2 + p {\n  margin-top: 0;\n}\n```\nThis rule will apply `margin-top: 0;` to a `<p>` element only if it immediately follows an `<h2>` element, and both are siblings (share the same parent).\n\n[[SANDBOX_2]]\n\n#### 4. General Sibling Selector (~)\n\nThe general sibling selector selects all sibling elements that follow a specified element. Like the adjacent sibling selector, both elements must have the same parent. However, it doesn't have to be immediately adjacent.\n\n**Syntax:** `element1 ~ element2 { property: value; }`\n\n**Example:**\n```css\nh2 ~ p {\n  font-style: italic;\n}\n```\nThis rule will apply `font-style: italic;` to all `<p>` elements that are siblings of an `<h2>` element and appear *after* it in the document flow.\n\n:::tip\nUnderstanding the difference between descendant and child selectors, and adjacent vs. general sibling selectors, is crucial for writing precise and efficient CSS.\n:::\n\n",
      "content_hi": "### CSS कॉम्बिनेटर्स को समझना\n\nCSS कॉम्बिनेटर्स शक्तिशाली टूल्स हैं जो आपको HTML डॉक्यूमेंट स्ट्रक्चर में अन्य एलिमेंट्स के साथ उनके संबंध के आधार पर एलिमेंट्स को सेलेक्ट करने की अनुमति देते हैं। वे आपको अधिक सटीकता के साथ विशिष्ट एलिमेंट्स को टारगेट करने में मदद करते हैं, जिससे आपकी CSS अधिक मजबूत और रखरखाव योग्य बनती है।\n\nकॉम्बिनेटर्स के चार मुख्य प्रकार हैं:\n\n1.  **डिसेंडेंट सेलेक्टर** (space)\n2.  **चाइल्ड सेलेक्टर** (>)\n3.  **एडजेसेंट सिबलिंग सेलेक्टर** (+)\n4.  **जनरल सिबलिंग सेलेक्टर** (~)\n\nआइए प्रत्येक को एक्सप्लोर करें।\n\n#### 1. डिसेंडेंट सेलेक्टर (space)\n\nडिसेंडेंट सेलेक्टर उन सभी एलिमेंट्स को सेलेक्ट करता है जो एक निर्दिष्ट एलिमेंट के डिसेंडेंट होते हैं। एक डिसेंडेंट एक चाइल्ड, ग्रैंडचाइल्ड, ग्रेट-ग्रैंडचाइल्ड, और इसी तरह कुछ भी हो सकता है।\n\n**सिंटैक्स:** `ancestor descendant { property: value; }`\n\n**उदाहरण:**\n```css\ndiv p {\n  color: blue;\n}\n```\nयह रूल `color: blue;` को सभी `<p>` एलिमेंट्स पर लागू करेगा जो एक `<div>` एलिमेंट के अंदर हैं, चाहे वे कितनी भी गहराई में नेस्टेड हों।\n\n[[SANDBOX_0]]\n\n#### 2. चाइल्ड सेलेक्टर (>)\n\nचाइल्ड सेलेक्टर उन सभी एलिमेंट्स को सेलेक्ट करता है जो एक निर्दिष्ट एलिमेंट के डायरेक्ट चाइल्ड होते हैं। यह डिसेंडेंट सेलेक्टर की तुलना में अधिक सख्त है, केवल तत्काल चाइल्ड को टारगेट करता है।\n\n**सिंटैक्स:** `parent > child { property: value; }`\n\n**उदाहरण:**\n```css\nul > li {\n  list-style-type: square;\n}\n```\nयह रूल `list-style-type: square;` को केवल उन `<li>` एलिमेंट्स पर लागू करेगा जो एक `<ul>` एलिमेंट के डायरेक्ट चाइल्ड हैं। यह आगे नेस्टेड `<li>` एलिमेंट्स (जैसे, पहले `<li>` के भीतर एक और `<ul>` के अंदर) को प्रभावित नहीं करेगा।\n\n[[SANDBOX_1]]\n\n#### 3. एडजेसेंट सिबलिंग सेलेक्टर (+)\n\nएडजेसेंट सिबलिंग सेलेक्टर उस एलिमेंट को सेलेक्ट करता है जिसके ठीक पहले एक निर्दिष्ट सिबलिंग एलिमेंट होता है। दोनों एलिमेंट्स का पैरेंट समान होना चाहिए।\n\n**सिंटैक्स:** `element1 + element2 { property: value; }`\n\n**उदाहरण:**\n```css\nh2 + p {\n  margin-top: 0;\n}\n```\nयह रूल `margin-top: 0;` को एक `<p>` एलिमेंट पर तभी लागू करेगा जब वह तुरंत एक `<h2>` एलिमेंट के बाद आता है, और दोनों सिबलिंग (एक ही पैरेंट साझा करते हैं) हों।\n\n[[SANDBOX_2]]\n\n#### 4. जनरल सिबलिंग सेलेक्टर (~)\n\nजनरल सिबलिंग सेलेक्टर उन सभी सिबलिंग एलिमेंट्स को सेलेक्ट करता है जो एक निर्दिष्ट एलिमेंट के बाद आते हैं। एडजेसेंट सिबलिंग सेलेक्टर की तरह, दोनों एलिमेंट्स का पैरेंट समान होना चाहिए। हालांकि, यह तुरंत एडजेसेंट होना जरूरी नहीं है।\n\n**सिंटैक्स:** `element1 ~ element2 { property: value; }`\n\n**उदाहरण:**\n```css\nh2 ~ p {\n  font-style: italic;\n}\n```\nयह रूल `font-style: italic;` को उन सभी `<p>` एलिमेंट्स पर लागू करेगा जो एक `<h2>` एलिमेंट के सिबलिंग हैं और डॉक्यूमेंट फ्लो में उसके *बाद* दिखाई देते हैं।\n\n:::tip\nडिसेंडेंट और चाइल्ड सेलेक्टर्स, और एडजेसेंट बनाम जनरल सिबलिंग सेलेक्टर्स के बीच के अंतर को समझना सटीक और कुशल CSS लिखने के लिए महत्वपूर्ण है।\n:::\n\n",
      "sandboxes": [
        {
          "css": ".container p {\n  color: blue;\n  font-weight: bold;\n}",
          "html": "<div class=\"container\">\n  <p>This is a direct child paragraph.</p>\n  <span>\n    <p>This is a nested paragraph.</p>\n  </span>\n</div>\n<p>This is an outside paragraph.</p>"
        },
        {
          "css": ".menu > li {\n  background-color: lightblue;\n  padding: 5px;\n  margin-bottom: 2px;\n}",
          "html": "<ul class=\"menu\">\n  <li>Item 1</li>\n  <li>Item 2\n    <ul>\n      <li>Sub-item 2.1</li>\n      <li>Sub-item 2.2</li>\n    </ul>\n  </li>\n  <li>Item 3</li>\n</ul>"
        },
        {
          "css": "h2 + p {\n  color: green;\n  font-size: 1.1em;\n}",
          "html": "<div class=\"section\">\n  <h2>Section Title 1</h2>\n  <p>This paragraph immediately follows h2.</p>\n  <p>This paragraph does not immediately follow h2.</p>\n</div>\n<div class=\"section\">\n  <h3>Section Title 2</h3>\n  <p>This paragraph immediately follows h3.</p>\n</div>"
        },
        {
          "css": "h1 ~ p {\n  background-color: yellow;\n  border-left: 3px solid orange;\n  padding-left: 5px;\n}",
          "html": "<div class=\"article\">\n  <h1>Article Heading</h1>\n  <p>First paragraph.</p>\n  <div>\n    <p>Nested paragraph (not a sibling).</p>\n  </div>\n  <p>Second paragraph.</p>\n  <span>Some text</span>\n  <p>Third paragraph.</p>\n</div>"
        }
      ]
    },
    {
      "id": "pseudo-classes",
      "title_en": "Pseudo-classes",
      "title_hi": "स्यूडो-क्लासेस",
      "content_en": "### Introduction to Pseudo-classes\n\nPseudo-classes are keywords added to selectors that specify a special state of the selected element(s). They allow you to style elements not just based on their position in the document tree, but also based on user interaction, their state, or their position relative to siblings.\n\n**Syntax:** `selector:pseudo-class { property: value; }`\n\nLet's look at some common pseudo-classes.\n\n#### 1. UI Pseudo-classes\n\nThese pseudo-classes respond to user interaction or the state of a link.\n\n*   **`:hover`**: Selects an element when the user's mouse pointer is over it.\n*   **`:active`**: Selects an element when it is being activated by the user (e.g., clicked).\n*   **`:focus`**: Selects an element when it has received focus (e.g., from a keyboard tab or click). Commonly used with form elements and links.\n*   **`:link`**: Selects unvisited links.\n*   **`:visited`**: Selects visited links.\n\n**Example:**\n```css\na:link { color: blue; }\na:visited { color: purple; }\na:hover { color: red; text-decoration: underline; }\na:active { color: green; }\n\nbutton:hover {\n  background-color: #f0f0f0;\n}\ninput:focus {\n  border: 2px solid blue;\n}\n```\n\n[[SANDBOX_4]]\n\n#### 2. Structural Pseudo-classes\n\nThese pseudo-classes select elements based on their position within a parent element's list of children.\n\n*   **`:first-child`**: Selects the first child of its parent.\n*   **`:last-child`**: Selects the last child of its parent.\n*   **`:nth-child(n)`**: Selects the nth child of its parent. `n` can be a number, a keyword (like `odd` or `even`), or a formula (like `2n+1`).\n*   **`:nth-of-type(n)`**: Similar to `:nth-child`, but selects the nth element of a *specific type* among its siblings.\n*   **`:only-child`**: Selects an element that is the only child of its parent.\n\n**Example:**\n```css\nli:first-child {\n  font-weight: bold;\n}\np:nth-child(2n) { /* Selects even paragraphs */\n  background-color: lightgray;\n}\nspan:only-child {\n  color: green;\n}\n```\n\n[[SANDBOX_5]]\n\n#### 3. Form Pseudo-classes\n\nThese pseudo-classes target form elements based on their state.\n\n*   **`:checked`**: Selects radio buttons or checkboxes that are checked.\n*   **`:disabled`**: Selects form elements that are disabled.\n*   **`:enabled`**: Selects form elements that are enabled.\n*   **`:read-only`**: Selects input elements with the `readonly` attribute.\n*   **`:required`**: Selects input elements with the `required` attribute.\n\n**Example:**\n```css\ninput[type=\"checkbox\"]:checked + label {\n  font-weight: bold;\n  color: blue;\n}\ninput:disabled {\n  background-color: #eee;\n  cursor: not-allowed;\n}\n```\n\n[[SANDBOX_6]]\n\n#### 4. Negation Pseudo-class (`:not()`)\n\nThe `:not()` pseudo-class selects elements that do *not* match the specified selector. It's useful for excluding specific elements from a selection.\n\n**Syntax:** `selector:not(another-selector) { property: value; }`\n\n**Example:**\n```css\ndiv:not(.special) {\n  border: 1px solid gray;\n}\n```\nThis will apply a border to all `<div>` elements *except* those with the class `special`.\n\n:::warning\nThe `:not()` pseudo-class can only take a simple selector (like a type selector, class selector, ID selector, or another pseudo-class) as an argument. It cannot contain combinators or other `:not()` pseudo-classes.\n:::\n\n[[SANDBOX_7]]\n",
      "content_hi": "### स्यूडो-क्लासेस का परिचय\n\nस्यूडो-क्लासेस सेलेक्टर्स में जोड़े गए कीवर्ड होते हैं जो सेलेक्टेड एलिमेंट(s) की एक विशेष स्थिति को निर्दिष्ट करते हैं। वे आपको एलिमेंट्स को न केवल डॉक्यूमेंट ट्री में उनकी स्थिति के आधार पर, बल्कि यूजर इंटरेक्शन, उनकी स्थिति, या सिबलिंग के सापेक्ष उनकी स्थिति के आधार पर स्टाइल करने की अनुमति देते हैं।\n\n**सिंटैक्स:** `selector:pseudo-class { property: value; }`\n\nआइए कुछ सामान्य स्यूडो-क्लासेस देखें।\n\n#### 1. UI स्यूडो-क्लासेस\n\nये स्यूडो-क्लासेस यूजर इंटरेक्शन या लिंक की स्थिति पर प्रतिक्रिया करते हैं।\n\n*   **`:hover`**: जब यूजर का माउस पॉइंटर किसी एलिमेंट पर होता है तो उसे सेलेक्ट करता है।\n*   **`:active`**: जब कोई एलिमेंट यूजर द्वारा एक्टिवेट किया जा रहा होता है (जैसे, क्लिक किया गया) तो उसे सेलेक्ट करता है।\n*   **`:focus`**: जब किसी एलिमेंट को फोकस प्राप्त होता है (जैसे, कीबोर्ड टैब या क्लिक से) तो उसे सेलेक्ट करता है। आमतौर पर फॉर्म एलिमेंट्स और लिंक्स के साथ उपयोग किया जाता है।\n*   **`:link`**: अनविजिटेड लिंक्स को सेलेक्ट करता है।\n*   **`:visited`**: विजिटेड लिंक्स को सेलेक्ट करता है।\n\n**उदाहरण:**\n```css\na:link { color: blue; }\na:visited { color: purple; }\na:hover { color: red; text-decoration: underline; }\na:active { color: green; }\n\nbutton:hover {\n  background-color: #f0f0f0;\n}\ninput:focus {\n  border: 2px solid blue;\n}\n```\n\n[[SANDBOX_4]]\n\n#### 2. स्ट्रक्चरल स्यूडो-क्लासेस\n\nये स्यूडो-क्लासेस पैरेंट एलिमेंट के चाइल्ड की लिस्ट में उनकी स्थिति के आधार पर एलिमेंट्स को सेलेक्ट करते हैं।\n\n*   **`:first-child`**: अपने पैरेंट के पहले चाइल्ड को सेलेक्ट करता है।\n*   **`:last-child`**: अपने पैरेंट के अंतिम चाइल्ड को सेलेक्ट करता है।\n*   **`:nth-child(n)`**: अपने पैरेंट के nth चाइल्ड को सेलेक्ट करता है। `n` एक संख्या, एक कीवर्ड (जैसे `odd` या `even`), या एक फ़ॉर्मूला (जैसे `2n+1`) हो सकता है।\n*   **`:nth-of-type(n)`**: `:nth-child` के समान, लेकिन अपने सिबलिंग के बीच एक *विशिष्ट प्रकार* के nth एलिमेंट को सेलेक्ट करता है।\n*   **`:only-child`**: उस एलिमेंट को सेलेक्ट करता है जो अपने पैरेंट का एकमात्र चाइल्ड है।\n\n**उदाहरण:**\n```css\nli:first-child {\n  font-weight: bold;\n}\np:nth-child(2n) { /* Selects even paragraphs */\n  background-color: lightgray;\n}\nspan:only-child {\n  color: green;\n}\n```\n\n[[SANDBOX_5]]\n\n#### 3. फॉर्म स्यूडो-क्लासेस\n\nये स्यूडो-क्लासेस फॉर्म एलिमेंट्स को उनकी स्थिति के आधार पर टारगेट करते हैं।\n\n*   **`:checked`**: चेक किए गए रेडियो बटन या चेकबॉक्स को सेलेक्ट करता है।\n*   **`:disabled`**: डिसेबल किए गए फॉर्म एलिमेंट्स को सेलेक्ट करता है।\n*   **`:enabled`**: एनेबल किए गए फॉर्म एलिमेंट्स को सेलेक्ट करता है।\n*   **`:read-only`**: `readonly` एट्रीब्यूट वाले इनपुट एलिमेंट्स को सेलेक्ट करता है।\n*   **`:required`**: `required` एट्रीब्यूट वाले इनपुट एलिमेंट्स को सेलेक्ट करता है।\n\n**उदाहरण:**\n```css\ninput[type=\"checkbox\"]:checked + label {\n  font-weight: bold;\n  color: blue;\n}\ninput:disabled {\n  background-color: #eee;\n  cursor: not-allowed;\n}\n```\n\n[[SANDBOX_6]]\n\n#### 4. नेगेशन स्यूडो-क्लास (`:not()`)\n\n`:not()` स्यूडो-क्लास उन एलिमेंट्स को सेलेक्ट करता है जो निर्दिष्ट सेलेक्टर से मेल नहीं खाते हैं। यह सिलेक्शन से विशिष्ट एलिमेंट्स को बाहर करने के लिए उपयोगी है।\n\n**सिंटैक्स:** `selector:not(another-selector) { property: value; }`\n\n**उदाहरण:**\n```css\ndiv:not(.special) {\n  border: 1px solid gray;\n}\n```\nयह `<div>` एलिमेंट्स पर एक बॉर्डर लागू करेगा *सिवाय* उन पर जिनमें `special` क्लास है।\n\n:::warning\n`:not()` स्यूडो-क्लास केवल एक सिंपल सेलेक्टर (जैसे एक टाइप सेलेक्टर, क्लास सेलेक्टर, ID सेलेक्टर, या एक और स्यूडो-क्लास) को एक आर्ग्यूमेंट के रूप में ले सकता है। इसमें कॉम्बिनेटर्स या अन्य `:not()` स्यूडो-क्लासेस शामिल नहीं हो सकते हैं।\n:::\n\n[[SANDBOX_7]]\n",
      "sandboxes": [
        {
          "css": ".link-example {\n  color: blue;\n  text-decoration: none;\n}\n.link-example:hover {\n  color: red;\n  text-decoration: underline;\n}\n.link-example:active {\n  color: green;\n}\n\n.btn-example {\n  padding: 10px 15px;\n  background-color: lightgray;\n  border: 1px solid gray;\n  cursor: pointer;\n  margin-left: 20px;\n}\n.btn-example:hover {\n  background-color: #ddd;\n}\n.btn-example:active {\n  background-color: #bbb;\n  transform: translateY(1px);\n}\n\ninput[type=\"text\"] {\n  padding: 8px;\n  border: 1px solid #ccc;\n  margin-left: 20px;\n}\ninput[type=\"text\"]:focus {\n  border-color: dodgerblue;\n  box-shadow: 0 0 5px dodgerblue;\n  outline: none;\n}",
          "html": "<a href=\"#\" class=\"link-example\">Hover over me</a>\n<button class=\"btn-example\">Click me</button>\n<input type=\"text\" placeholder=\"Focus here\">"
        },
        {
          "css": ".list-items li:first-child {\n  color: green;\n  font-weight: bold;\n}\n.list-items li:last-child {\n  color: red;\n  text-decoration: underline;\n}\n.list-items li:nth-child(odd) {\n  background-color: #f0f0f0;\n}\n.list-items li:nth-child(2n) { /* Even items */\n  background-color: #e0e0e0;\n}\n\n.parent-div p:nth-of-type(2) {\n  border: 2px dashed orange;\n}\n\n.single-child-container span:only-child {\n  background-color: lightgreen;\n  padding: 5px;\n}",
          "html": "<ul class=\"list-items\">\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n  <li>Fourth item</li>\n  <li>Fifth item</li>\n</ul>\n\n<div class=\"parent-div\">\n  <p>This is the first paragraph.</p>\n  <span>This is a span.</span>\n  <p>This is the second paragraph.</p>\n  <p>This is the third paragraph.</p>\n</div>\n\n<div class=\"single-child-container\">\n  <span>I am the only child.</span>\n</div>\n<div class=\"multi-child-container\">\n  <span>I am not the only child.</span>\n  <span>I am another child.</span>\n</div>"
        },
        {
          "css": "input[type=\"checkbox\"]:checked + label {\n  color: blue;\n  font-weight: bold;\n}\ninput[type=\"radio\"]:checked + label {\n  color: purple;\n  font-style: italic;\n}\n\ninput:enabled {\n  border: 1px solid green;\n}\ninput:disabled {\n  background-color: #f0f0f0;\n  border: 1px dashed gray;\n  cursor: not-allowed;\n}\ninput:required {\n  border-color: orange;\n}\ninput:read-only {\n  background-color: #eee;\n  color: #555;\n}",
          "html": "<form>\n  <input type=\"checkbox\" id=\"agree\" checked>\n  <label for=\"agree\">I agree to terms</label><br><br>\n\n  <input type=\"radio\" id=\"option1\" name=\"choice\" value=\"1\">\n  <label for=\"option1\">Option 1</label><br>\n  <input type=\"radio\" id=\"option2\" name=\"choice\" value=\"2\" checked>\n  <label for=\"option2\">Option 2</label><br><br>\n\n  <input type=\"text\" placeholder=\"Enabled input\"><br><br>\n  <input type=\"text\" placeholder=\"Disabled input\" disabled><br><br>\n  <input type=\"text\" placeholder=\"Required input\" required><br><br>\n  <input type=\"text\" placeholder=\"Read-only input\" readonly value=\"Cannot edit\">\n</form>"
        },
        {
          "css": ".box {\n  padding: 10px;\n  margin: 5px;\n  border: 1px solid #ccc;\n}\n\ndiv:not(.special) {\n  background-color: lightblue;\n}\n\n/* This will not apply to the paragraph with class 'box' */\n.box:not(div) {\n  font-style: italic;\n  color: gray;\n}",
          "html": "<div class=\"box\">This is a regular box.</div>\n<div class=\"box special\">This is a special box.</div>\n<div class=\"box\">Another regular box.</div>\n<p class=\"box\">This is a paragraph box.</p>"
        }
      ]
    }
  ]
};

export const chapter02Quiz = [
  {
    "id": "q1",
    "question_en": "Which CSS combinator selects all `<p>` elements that are descendants of a `<div>` element, regardless of their nesting level?",
    "question_hi": "कौन सा CSS कॉम्बिनेटर सभी `<p>` एलिमेंट्स को सेलेक्ट करता है जो एक `<div>` एलिमेंट के डिसेंडेंट हैं, उनकी नेस्टिंग लेवल की परवाह किए बिना?",
    "options_en": [
      "`div + p`",
      "`div > p`",
      "`div p`",
      "`div ~ p`"
    ],
    "options_hi": [
      "`div + p`",
      "`div > p`",
      "`div p`",
      "`div ~ p`"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "q2",
    "question_en": "The `>` combinator is used to select which type of elements?",
    "question_hi": "`>` कॉम्बिनेटर का उपयोग किस प्रकार के एलिमेंट्स को सेलेक्ट करने के लिए किया जाता है?",
    "options_en": [
      "All descendants",
      "Direct children",
      "Adjacent siblings",
      "General siblings"
    ],
    "options_hi": [
      "सभी डिसेंडेंट",
      "डायरेक्ट चाइल्ड",
      "एडजेसेंट सिबलिंग",
      "जनरल सिबलिंग"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "q3",
    "question_en": "What does the CSS rule `h2 + p { color: red; }` do?",
    "question_hi": "CSS रूल `h2 + p { color: red; }` क्या करता है?",
    "options_en": [
      "Colors all `<p>` elements red that are inside an `<h2>`.",
      "Colors the first `<p>` element red that immediately follows an `<h2>`.",
      "Colors all `<p>` elements red that follow an `<h2>`.",
      "Colors all `<p>` elements red that are direct children of an `<h2>`."
    ],
    "options_hi": [
      "सभी `<p>` एलिमेंट्स को लाल रंग देता है जो एक `<h2>` के अंदर हैं।",
      "पहले `<p>` एलिमेंट को लाल रंग देता है जो तुरंत एक `<h2>` के बाद आता है।",
      "सभी `<p>` एलिमेंट्स को लाल रंग देता है जो एक `<h2>` के बाद आते हैं।",
      "सभी `<p>` एलिमेंट्स को लाल रंग देता है जो एक `<h2>` के डायरेक्ट चाइल्ड हैं।"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "q4",
    "question_en": "Which combinator selects all sibling elements that follow a specified element?",
    "question_hi": "कौन सा कॉम्बिनेटर उन सभी सिबलिंग एलिमेंट्स को सेलेक्ट करता है जो एक निर्दिष्ट एलिमेंट के बाद आते हैं?",
    "options_en": [
      "Descendant selector",
      "Child selector",
      "Adjacent sibling selector",
      "General sibling selector"
    ],
    "options_hi": [
      "डिसेंडेंट सेलेक्टर",
      "चाइल्ड सेलेक्टर",
      "एडजेसेंट सिबलिंग सेलेक्टर",
      "जनरल सिबलिंग सेलेक्टर"
    ],
    "correctAnswerIndex": 3
  },
  {
    "id": "q5",
    "question_en": "To change the background color of a button when the user hovers over it, which pseudo-class would you use?",
    "question_hi": "जब यूजर किसी बटन पर होवर करता है तो उसका बैकग्राउंड कलर बदलने के लिए, आप किस स्यूडो-क्लास का उपयोग करेंगे?",
    "options_en": [
      "`:active`",
      "`:focus`",
      "`:hover`",
      "`:visited`"
    ],
    "options_hi": [
      "`:active`",
      "`:focus`",
      "`:hover`",
      "`:visited`"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "q6",
    "question_en": "Which pseudo-class would you use to style the first item in an unordered list?",
    "question_hi": "एक अनऑर्डर्ड लिस्ट में पहले आइटम को स्टाइल करने के लिए आप किस स्यूडो-क्लास का उपयोग करेंगे?",
    "options_en": [
      "`:first`",
      "`:first-child`",
      "`:nth-child(1)`",
      "Both B and C"
    ],
    "options_hi": [
      "`:first`",
      "`:first-child`",
      "`:nth-child(1)`",
      "B और C दोनों"
    ],
    "correctAnswerIndex": 3
  },
  {
    "id": "q7",
    "question_en": "How can you select every odd-numbered paragraph element within a container?",
    "question_hi": "आप एक कंटेनर के भीतर हर विषम-संख्या वाले पैराग्राफ एलिमेंट को कैसे सेलेक्ट कर सकते हैं?",
    "options_en": [
      "`p:odd`",
      "`p:nth-child(odd)`",
      "`p:nth-of-type(even)`",
      "`p:first-child`"
    ],
    "options_hi": [
      "`p:odd`",
      "`p:nth-child(odd)`",
      "`p:nth-of-type(even)`",
      "`p:first-child`"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "q8",
    "question_en": "Which pseudo-class is used to style a checkbox or radio button when it is selected?",
    "question_hi": "जब एक चेकबॉक्स या रेडियो बटन सेलेक्ट किया जाता है तो उसे स्टाइल करने के लिए किस स्यूडो-क्लास का उपयोग किया जाता है?",
    "options_en": [
      "`:selected`",
      "`:active`",
      "`:checked`",
      "`:enabled`"
    ],
    "options_hi": [
      "`:selected`",
      "`:active`",
      "`:checked`",
      "`:enabled`"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "q9",
    "question_en": "What does the `:not()` pseudo-class do?",
    "question_hi": "`:`not()` स्यूडो-क्लास क्या करता है?",
    "options_en": [
      "Selects elements that match a specific selector.",
      "Selects elements that do NOT match a specific selector.",
      "Selects elements that are disabled.",
      "Selects elements that are hidden."
    ],
    "options_hi": [
      "उन एलिमेंट्स को सेलेक्ट करता है जो एक विशिष्ट सेलेक्टर से मेल खाते हैं।",
      "उन एलिमेंट्स को सेलेक्ट करता है जो एक विशिष्ट सेलेक्टर से मेल नहीं खाते हैं।",
      "उन एलिमेंट्स को सेलेक्ट करता है जो डिसेबल हैं।",
      "उन एलिमेंट्स को सेलेक्ट करता है जो छिपे हुए हैं।"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "q10",
    "question_en": "Which of the following pseudo-classes is typically used to style an input field when a user is typing in it?",
    "question_hi": "निम्नलिखित में से कौन सा स्यूडो-क्लास आमतौर पर एक इनपुट फील्ड को स्टाइल करने के लिए उपयोग किया जाता है जब कोई यूजर उसमें टाइप कर रहा होता है?",
    "options_en": [
      "`:active`",
      "`:hover`",
      "`:visited`",
      "`:focus`"
    ],
    "options_hi": [
      "`:active`",
      "`:hover`",
      "`:visited`",
      "`:focus`"
    ],
    "correctAnswerIndex": 3
  }
];

export const chapter01 = {
  id: "ch1",
  title_en: "Chapter 1: Introduction to CSS",
  title_hi: "अध्याय 1: CSS का परिचय",
  topics: [
    {
      id: "t1-1",
      title_en: "What is CSS?",
      title_hi: "CSS क्या है?",
      content_en: `### Introduction to CSS

**CSS** stands for **Cascading Style Sheets**. It is the language used to design and style the visual layout of web pages.

If a website were a building, **HTML** would be the raw concrete walls and pillars (the structure), while **CSS** would be the paint, the lighting, the furniture, and the interior design. It dictates exactly how elements look, where they sit on the screen, and how they adapt to different devices.

![Example of CSS](https://ik.imagekit.io/Sankit/example_css.png)

### CSS Prerequisites

- Basic knowledge of working with files or **file management.**
- Basic understanding of HTML. In order to start learning CSS you have to have a basic understanding of HTML first. If your new to HTML you can install this app [Learn HTML](https://mfirstweb.netlify.app/).

### What Exactly Does CSS Do?

Without CSS, every webpage would look like a plain text document with black text, blue links, and raw images stacked vertically. CSS gives you control over:

- **Typography:** Choosing fonts, sizing text, and adjusting spacing between lines or letters.
- **Colors & Backgrounds:** Applying text colors, gradients, background images, and transparency.
- **The Layout:** Positioning elements side-by-side, creating grids, alignment, and adding padding or margins.
- **Responsiveness:** Making sure a website looks clean and readable whether it is viewed on a massive 4K monitor or a small smartphone screen.

### How It Works: The Basic Syntax

CSS works by targeting an HTML element and declaring how it should change. A simple code snippet consists of a **selector** (what you want to style) and a **declaration block** containing properties and values.

\`\`\`css
.example-class {
  property-name: value;
}
\`\`\`

- \`.example-class\` ➔ This is the selector. It tells the browser *where* to apply the style.
- \`property-name\` ➔ The specific aspect we want to change (e.g., color, size).
- \`value\` ➔ The exact setting we are applying (e.g., red, 20px).

Here is a simple example of how it works:

[[SANDBOX_0]]

:::tip
**Did you know?** CSS was first proposed by Håkon Wium Lie on October 10, 1994. Before CSS, nearly all presentation attributes were contained within the HTML markup.
:::

Why Is It Called **Cascading**?

The word Cascading means that rules fall down from one level to another. If you apply a style to the entire body of a web page, all the paragraphs and headings inside it will automatically inherit that style unless you specifically override it with a more targeted rule later. It allows you to write clean, reusable code without having to style every single line of text individually.`,
      content_hi: `### CSS का परिचय

**CSS** का पूरा नाम **Cascading Style Sheets** है। यह वह भाषा है जिसका उपयोग वेब पेजों के दृश्य लेआउट (Visual Layout) को डिज़ाइन और स्टाइल करने के लिए किया जाता है।

यदि किसी वेबसाइट को एक भवन माना जाए, तो **HTML** उसकी कच्ची दीवारें और खंभे (Structure) होगा, जबकि **CSS** उसका रंग-रोगन, प्रकाश व्यवस्था, फर्नीचर और आंतरिक सजावट होगा। CSS यह निर्धारित करता है कि किसी वेब पेज के तत्व कैसे दिखेंगे, स्क्रीन पर कहाँ दिखाई देंगे, और विभिन्न उपकरणों के अनुसार कैसे अनुकूलित होंगे।

![Example of CSS](https://ik.imagekit.io/Sankit/example_css.png)

### CSS सीखने के लिए आवश्यक पूर्वज्ञान

- फ़ाइलों के साथ काम करने या **फ़ाइल प्रबंधन (File Management)** की मूल जानकारी
- HTML की बुनियादी समझ। CSS सीखना शुरू करने के लिए HTML का आधारभूत ज्ञान आवश्यक है। यदि आप HTML में नए हैं, तो आप यह ऐप इंस्टॉल कर सकते हैं: [Learn HTML](https://mfirstweb.netlify.app/).

### CSS वास्तव में क्या करता है?

CSS के बिना प्रत्येक वेब पेज एक साधारण टेक्स्ट दस्तावेज़ जैसा दिखाई देगा, जिसमें काला टेक्स्ट, नीले लिंक और एक के नीचे एक रखी हुई सामान्य छवियाँ होंगी। CSS आपको निम्नलिखित चीज़ों पर नियंत्रण देता है:

- **टाइपोग्राफी (Typography):** फ़ॉन्ट चुनना, टेक्स्ट का आकार निर्धारित करना तथा पंक्तियों और अक्षरों के बीच की दूरी नियंत्रित करना।
- **रंग और पृष्ठभूमि (Colors & Backgrounds):** टेक्स्ट के रंग, ग्रेडिएंट, पृष्ठभूमि छवियाँ और पारदर्शिता लागू करना।
- **लेआउट (Layout):** तत्वों को साथ-साथ व्यवस्थित करना, ग्रिड बनाना, संरेखण (Alignment) करना तथा Padding और Margin जोड़ना।
- **रिस्पॉन्सिव डिज़ाइन (Responsiveness):** यह सुनिश्चित करना कि वेबसाइट बड़े 4K मॉनिटर से लेकर छोटे स्मार्टफ़ोन तक सभी उपकरणों पर साफ़ और पढ़ने योग्य दिखाई दे।

### यह कैसे काम करता है: मूल सिंटैक्स (Syntax)

CSS किसी HTML तत्व को लक्ष्य बनाकर उस पर स्टाइल लागू करता है। एक साधारण CSS कोड में एक **Selector** (जिसे स्टाइल करना है) और एक **Declaration Block** (जिसमें Properties और Values होती हैं) शामिल होता है

\`\`\`css
.example-class {
  property-name: value;
}
\`\`\`

- \`.example-class\` ➔ यह Selector है। यह ब्राउज़र को बताता है कि स्टाइल **कहाँ** लागू करनी है।
- \`property-name\` ➔ वह विशेष गुण जिसे हम बदलना चाहते हैं (जैसे color, size आदि)।
- \`value\` ➔ वह मान जो हम उस गुण पर लागू कर रहे हैं (जैसे red, 20px आदि)।

यहाँ एक सरल उदाहरण दिया गया है कि यह कैसे कार्य करता है:

[[SANDBOX_0]]

:::tip
**क्या आप जानते हैं?** CSS का प्रस्ताव सबसे पहले Håkon Wium Lie द्वारा 10 अक्टूबर 1994 को रखा गया था। CSS के आने से पहले लगभग सभी प्रस्तुति संबंधी गुण (Presentation Attributes) सीधे HTML मार्कअप में लिखे जाते थे।
:::

इसे **Cascading** क्यों कहा जाता है?

"Cascading" का अर्थ है कि स्टाइल नियम एक स्तर से दूसरे स्तर तक प्रवाहित होते हैं। यदि आप किसी वेब पेज के पूरे body पर कोई स्टाइल लागू करते हैं, तो उसके अंदर मौजूद सभी पैराग्राफ और हेडिंग स्वतः उस स्टाइल को अपनाएँगे, जब तक कि आप बाद में किसी अधिक विशिष्ट नियम द्वारा उसे बदल न दें।
यह सुविधा आपको साफ़, व्यवस्थित और पुनः उपयोग योग्य (Reusable) कोड लिखने में मदद करती है, क्योंकि आपको प्रत्येक टेक्स्ट पंक्ति को अलग-अलग स्टाइल करने की आवश्यकता नहीं पड़ती।`,
      sandboxes: [
        {
          html: `<h1 class="title">Hello World</h1>\n<p>Welcome to learning CSS!</p>`,
          css: `h1 {\n  color: navy;\n  font-size: 32px;\n}\n\np {\n  color: #333333;\n}`
        }
      ]
    },
    {
      id: "t1-2",
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

If you want to temporarily disable a style to see how the page looks without it, you can place that code inside a comment instead of deleting it. This allows you to test changes safely and restore the code later if needed.

[[SANDBOX_1]]

:::note ⚠️ Common Pitfall:
Every language handles comments differently. HTML uses \`<!-- comment -->\` and JavaScript uses \`//\`. If you try to use those inside a CSS file, your styles will break because the browser won't understand them. Stick strictly to \`/* ... */\` in CSS!
:::`,
      content_hi: `### CSS टिप्पणियाँ (Comments)

Comments ऐसे नोट्स होते हैं जिन्हें आप या अन्य डेवलपर्स कोड के अंदर पढ़ने के लिए लिखते हैं। ब्राउज़र इन्हें पूरी तरह अनदेखा कर देता है, यानी ये वेब पेज पर दिखाई नहीं देते और न ही आपकी स्टाइल्स के काम करने के तरीके को प्रभावित करते हैं।

CSS में Comment की शुरुआत \`/*\` से होती है और समाप्ति \`*/\` पर होती है।
यह व्यवहार में कुछ इस प्रकार दिखाई देता है:

[[SANDBOX_0]]

:::warning
CSS में Comments को Nest नहीं किया जा सकता। इसका अर्थ है कि आप एक Comment के अंदर दूसरा Comment नहीं लिख सकते (उदाहरण: \`/* Comment 1 /* Comment 2 */ */\` अमान्य है)।
:::

### टिप्पणियों के सामान्य उपयोग

#### 1. कोड को व्यवस्थित करना

जैसे-जैसे आपकी CSS फ़ाइल सैकड़ों लाइनों तक बढ़ती जाती है, Comments कोड को अलग-अलग भागों में बाँटने में मदद करते हैं। उदाहरण के लिए, आप \`/* Header Styles */\` या \`/* Footer Styles */\` जैसे Comments का उपयोग करके अपनी Stylesheet के विभिन्न सेक्शनों को आसानी से पहचान और व्यवस्थित कर सकते हैं।

#### 2. कोड को अस्थायी रूप से निष्क्रिय करना

यदि आप देखना चाहते हैं कि किसी विशेष Style के बिना वेब पेज कैसा दिखाई देगा, तो उस कोड को हटाने के बजाय Comment के अंदर रख सकते हैं। इससे वह Style अस्थायी रूप से निष्क्रिय हो जाती है और आवश्यकता पड़ने पर बाद में आसानी से वापस उपयोग की जा सकती है।

[[SANDBOX_1]]

:::note ⚠️ Common Pitfall:
हर प्रोग्रामिंग भाषा Comments को अलग तरीके से संभालती है। HTML में \`<!-- comment -->\` और JavaScript में \`//\` का उपयोग किया जाता है। यदि आप इन्हें CSS फ़ाइल के अंदर उपयोग करने की कोशिश करेंगे, तो आपकी Styles काम नहीं करेंगी क्योंकि ब्राउज़र उन्हें समझ नहीं पाएगा। CSS में हमेशा केवल \`/* ... */\` का ही उपयोग करें!
:::`,
      sandboxes: [
        {
          html: `<h2>This is blue coloured heading</h2>\n<p>This is a basic example.</p>`,
          css: `h2 {\n  font-size: 20px;\n  /* color: blue; <-- This line is temporarily disabled and won't run */\n}`
        },
        {
          html: `<p>Demo 2: Advanced Selectors</p>`,
          css: `/* This is a single-line CSS comment */
p {
  color: red; /* Set paragraph text to red */
}

/* 
   This is a multi-line comment.
   You can use it to organize large sections of your stylesheet 
   or leave detailed explanations.
*/`
        }
      ]
    },
    {
      id: "t1-3",
      title_en: "CSS selector & Priority",
      title_hi: "CSS चयनकर्ता & प्राथमिकता",
      content_en: `### CSS Selectors

Selectors are used to **find (or select)** the HTML elements you want to style. Once selected, CSS priority (also known as **Specificity**) determines which style is applied when multiple rules conflict.

### Element Selector

This targets all instances of a specific HTML tag.

**Syntax:** \`tagname\`

**Example:** \`p { color: blue; }\`

Styles all \`<p>\` tags.

### Class Selector

This targets any element that has a specific class attribute. You can reuse classes across many different elements.

**Syntax:** \`.className\`

**Example:** \`.button-primary { background: red; }\`

Styles all elements with \`class="button-primary"\`.

### ID Selector

This targets a single, unique element. An ID must be unique within the entire HTML document.

**Syntax:** \`#idName\`

**Example:** \`#main-header { font-size: 20px; }\`

Styles the single element with \`id="main-header"\`.

### Grouping Selector

This allows you to apply the same CSS rules to multiple selectors simultaneously, separated by commas, to keep your code clean and concise.

**Syntax:** \`s1, s2\`

**Example:** \`h1, h2, p { color: black; }\`

Styles all \`<h1>\`, \`<h2>\`, and \`<p>\` elements with the same color.

[[SANDBOX_0]]

### CSS Priority (Specificity)

When two or more CSS rules point to the same element, the browser uses a hierarchy to determine which style wins. This hierarchy is calculated using a **Specificity Score**.

The browser calculates priority in the following order (from lowest to highest):

1. **Type Selectors**: Element selectors (\`p\`, \`div\`, \`h1\`).
2. **Class Selectors**: Class, attribute, and pseudo-class selectors (\`.myClass\`, \`[type="text"]\`, \`:hover\`).
3. **ID Selectors**: ID selectors (\`#myID\`).
4. **Inline Styles**: Styles applied directly in the HTML tag using the \`style\` attribute.

**Example:** \`<p style="color: red;">Hello</p>\`

### The Golden Rules of Priority

#### Specificity Wins

A rule with a higher specificity always overrides a rule with lower specificity.

**Example:** An ID selector will always beat a class selector, regardless of the order they appear in the CSS file.

#### The Cascade (Equal Specificity)

If two rules have the exact same specificity, the **last rule defined** in the CSS document wins.

#### The !important Override

You can force a style to take precedence by adding \`!important\` to the property value.

**Example:** \`color: red !important;\`

:::note
**Note:** Use this sparingly! Overusing \`!important\` makes your CSS very difficult to maintain and debug.
:::

### Visualizing the Hierarchy

You can think of CSS priority like this:

\`Inline Style > ID > Class/Attribute > Element\`

### Example

If you have:

\`p { color: black; }\` **(Element - Score 1)**

\`.text { color: blue; }\` **(Class - Score 10)**

\`#intro { color: red; }\` **(ID - Score 100)**

An element \`<p id="intro" class="text">Hello</p>\` will be **red** because the ID has the highest specificity.

[[SANDBOX_1]]`,
      content_hi: `### CSS Selectors

Selectors का उपयोग उन HTML elements को **चुनने (select)** के लिए किया जाता है जिन्हें आप style देना चाहते हैं। जब एक ही element पर कई CSS rules लागू होते हैं, तो **CSS Priority (Specificity)** तय करती है कि कौन-सी style लागू होगी।

### Element Selector

यह किसी विशेष HTML tag के सभी elements को target करता है।

**Syntax:** \`tagname\`

**Example:** \`p { color: blue; }\`

यह सभी \`<p>\` tags को style करता है।

### Class Selector

यह उन सभी elements को target करता है जिनमें कोई विशेष class attribute मौजूद हो। एक class को कई अलग-अलग elements पर दोबारा उपयोग किया जा सकता है।

**Syntax:** \`.className\`

**Example:** \`.button-primary { background: red; }\`

यह सभी \`class="button-primary"\` वाले elements को style करता है।

### ID Selector

यह किसी एक unique element को target करता है। एक HTML document में एक ID केवल एक बार ही उपयोग होनी चाहिए।

**Syntax:** \`#idName\`

**Example:** \`#main-header { font-size: 20px; }\`

यह \`id="main-header"\` वाले element को style करता है।

### Grouping Selector

यह आपको एक ही CSS rule को कई selectors पर एक साथ लागू करने की सुविधा देता है। इससे code छोटा और साफ़ रहता है।

**Syntax:** \`s1, s2\`

**Example:** \`h1, h2, p { color: black; }\`

यह सभी \`<h1>\`, \`<h2>\` और \`<p>\` elements को एक ही color देता है।

[[SANDBOX_0]]

### CSS Priority (Specificity)

जब दो या अधिक CSS rules एक ही element को target करते हैं, तो browser यह तय करने के लिए एक hierarchy का उपयोग करता है कि कौन-सी style लागू होगी। इस hierarchy को **Specificity Score** कहा जाता है।

Browser निम्नलिखित क्रम में priority तय करता है (सबसे कम से सबसे अधिक):

1. **Type Selectors**: Element selectors (\`p\`, \`div\`, \`h1\`)।
2. **Class Selectors**: Class, attribute और pseudo-class selectors (\`.myClass\`, \`[type="text"]\`, \`:hover\`)।
3. **ID Selectors**: ID selectors (\`#myID\`)।
4. **Inline Styles**: HTML tag के अंदर \`style\` attribute का उपयोग करके लिखी गई styles।

**Example:** \`<p style="color: red;">Hello</p>\`

### Priority के मुख्य नियम

#### Specificity Wins

जिस rule की specificity अधिक होती है, वही लागू होती है।

**Example:** ID selector हमेशा Class selector से अधिक priority रखता है, चाहे CSS file में उसका स्थान कुछ भी हो।

#### The Cascade (Equal Specificity)

यदि दो rules की specificity समान हो, तो CSS document में बाद में लिखा गया rule लागू होगा।

#### The !important Override

आप किसी style को ज़बरदस्ती अधिक priority देने के लिए \`!important\` का उपयोग कर सकते हैं।

**Example:** \`color: red !important;\`

:::note
**Note:** \`!important\` का उपयोग बहुत कम करें। इसका अधिक उपयोग CSS को maintain और debug करना कठिन बना देता है।
:::

### Hierarchy को समझें

आप CSS priority को इस प्रकार समझ सकते हैं:

\`Inline Style > ID > Class/Attribute > Element\`

### Example

यदि आपके पास:

\`p { color: black; }\` **(Element - Score 1)**

\`.text { color: blue; }\` **(Class - Score 10)**

\`#intro { color: red; }\` **(ID - Score 100)**

और HTML element:

\`<p id="intro" class="text">Hello</p>\`

तो text का color **red** होगा क्योंकि ID selector की specificity सबसे अधिक है।

[[SANDBOX_1]]`,
      sandboxes: [
        {
          html: `<h1 id="main-heading">Welcome to CSS</h1>\n<p class="info">This paragraph uses a class selector.</p>\n<p class="info">This is another paragraph with the same class.</p>\n<h2>Group Selector Example</h2>\n<button>Click Me</button>`,
          css: `/* ID Selector */\n#main-heading {\n  color: red;\n  text-align: center;\n}\n\n/* Class Selector */\n.info {\n  color: blue;\n  font-size: 20px;\n}\n\n/* Group Selector */\nh2, button {\n  background-color: yellow;\n  color: black;\n  padding: 10px;\n}`
        },
        {
          html: `<p class="text" id="intro">Hello</p>`,
          css: `p { color: black; }  /* Element Selector */\n.text { color: blue; } /* class Selector */\n#intro { color: red; } /* id Selector */`
        }
      ]
    },
    {
      id: "t1-4",
      title_en: "How to Add CSS",
      title_hi: "CSS कैसे जोड़ें",
      content_en: `### CSS ko HTML me Kaise Add Karein?

CSS (Cascading Style Sheets) ko HTML document me add karne ke 3 mukhya tareeke hote hain. Har method ka apna alag use case hota hai, jo project ke size aur maintenance requirements par depend karta hai.

---

## 1. Inline CSS

Inline CSS ko kisi specific HTML element par directly \`style\` attribute ke madhyam se lagaya jata hai. Yeh sirf usi element ko affect karta hai jisme use kiya gaya ho.

### Fayde
- Jaldi testing ke liye useful.
- Kisi ek element ki style ko override karne ke liye upyogi.

### Nuksan
- Bade projects me manage karna mushkil ho jata hai.
- HTML code cluttered ho jata hai.
- Browser CSS ko reuse ke liye cache nahi kar pata.

[[SANDBOX_0]]

---

## 2. Internal (Embedded) CSS

Internal CSS ko \`<style>\` tag ke andar likha jata hai, jo HTML file ke \`<head>\` section me hota hai. Isme likhe gaye styles us page ke sabhi matching elements par apply hote hain.

### Fayde
- Saare styles ek hi jagah par mil jate hain.
- Chhoti websites ke liye alag CSS file ki zarurat nahi hoti.

### Nuksan
- Agar website me kai pages hain, to har page me same CSS code copy karna padta hai.
- Kisi style ko update karne ke liye har page ko manually edit karna pad sakta hai.

[[SANDBOX_1]]

---

## 3. External CSS

Professional web development me External CSS ko sabse behtar method mana jata hai. Isme CSS rules ek alag file (jaise \`style.css\`) me likhe jate hain aur HTML file me \`<link>\` tag ke through connect kiye jate hain.

### Fayde

#### Maintainability
Sirf ek CSS file me badlav karke poori website ki styling update ki ja sakti hai.

#### Performance
Browser CSS file ko cache kar leta hai, jisse website agle visits me tez load hoti hai.

#### Clean Code
HTML (content) aur CSS (presentation) alag-alag rehte hain, jisse code samajhna aur maintain karna aasan ho jata hai.

### Step 1: \`style.css\` naam ki file banayein

### Step 2: HTML file me use link karein

[[SANDBOX_2]]`,
      content_hi: `### HTML में CSS कैसे जोड़ें?

CSS (Cascading Style Sheets) को HTML डॉक्यूमेंट में जोड़ने के 3 मुख्य तरीके होते हैं। प्रत्येक तरीके का अपना उपयोग होता है, जो आपके प्रोजेक्ट के आकार और उसकी देखभाल (Maintenance) की आवश्यकता पर निर्भर करता है।

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
- किसी बदलाव के लिए सभी पेजों को अपडेट करना पड़ सकता है।

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

### चरण 2: उसे अपनी HTML फ़ाइल से लिंक करें

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
    question_en: "Who first proposed CSS?",
    question_hi: "CSS का प्रस्ताव सबसे पहले किसने दिया था?",
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
      "<!-- this is a comment -->",
      "/* this is a comment */",
      "' this is a comment"
    ],
    options_hi: [
      "// this is a comment",
      "<!-- this is a comment -->",
      "/* this is a comment */",
      "' this is a comment"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q4",
    question_en: "Which character is used to indicate a Class selector?",
    question_hi: "क्लास (Class) चयनकर्ता को दर्शाने के लिए किस वर्ण (Character) का उपयोग किया जाता है?",
    options_en: [
      "# (Hash)",
      ". (Dot)",
      "* (Asterisk)",
      "> (Greater than)"
    ],
    options_hi: [
      "# (हैश)",
      ". (डॉट)",
      "* (तारांकन)",
      "> (ग्रेटर देन)"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q5",
    question_en: "Which character is used to indicate an ID selector?",
    question_hi: "आईडी (ID) चयनकर्ता को दर्शाने के लिए किस वर्ण (Character) का उपयोग किया जाता है?",
    options_en: [
      ". (Dot)",
      "/ (Slash)",
      "# (Hash)",
      "& (Ampersand)"
    ],
    options_hi: [
      ". (डॉट)",
      "/ (स्लैश)",
      "# (हैश)",
      "& (एम्परसेंड)"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q6",
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
    id: "q7",
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
    id: "q8",
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
    id: "q9",
    question_en: "Which method of adding CSS has the highest priority?",
    question_hi: "CSS जोड़ने की किस विधि की प्राथमिकता सबसे अधिक होती है?",
    options_en: [
      "Internal CSS",
      "External CSS",
      "Browser Defaults",
      "Inline CSS"
    ],
    options_hi: [
      "इंटरनल (Internal) CSS",
      "एक्सटर्नल (External) CSS",
      "ब्राउज़र डिफ़ॉल्ट",
      "इनलाइन (Inline) CSS"
    ],
    correctAnswerIndex: 3
  },
  {
    id: "q10",
    question_en: "What keyword can you use to override all other CSS rules, including Inline CSS?",
    question_hi: "इनलाइन CSS सहित अन्य सभी CSS नियमों को ओवरराइड करने के लिए आप किस कीवर्ड का उपयोग कर सकते हैं?",
    options_en: [
      "!override",
      "!important",
      "!first",
      "!urgent"
    ],
    options_hi: [
      "!override",
      "!important",
      "!first",
      "!urgent"
    ],
    correctAnswerIndex: 1
  }
];

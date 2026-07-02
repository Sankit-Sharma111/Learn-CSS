import fs from 'fs';

let data = fs.readFileSync('src/data/courseData.ts', 'utf8');

// Replace t1-1 content
data = data.replace(
  /"content_en": "### Why do we need CSS\?\\n\\n1. \*\*Separation of Concerns:\*\* Keep your content \(HTML\) separate from your design \(CSS\)\. This makes your code much easier to manage and update\.\\n2. \*\*Consistency:\*\* You can style all the headings on a 100-page website by changing just one line of code in a single CSS file\.\\n3. \*\*Device Compatibility:\*\* CSS allows you to make your website look great on phones, tablets, and desktops by using responsive design techniques\.\\n4. \*\*Faster Loading:\*\* Since one CSS file can style many pages, the browser only needs to download the design once\.\\n\\n### A simple Example\\nHere is how you can change the color and size of a heading:\\n\\n\[\[SANDBOX_0\]\]"/g,
  `"content_en": "### Why do we need CSS?\\n\\n1. **Separation of Concerns:** Keep your content (HTML) separate from your design (CSS). This makes your code much easier to manage and update.\\n2. **Consistency:** You can style all the headings on a 100-page website by changing just one line of code in a single CSS file.\\n3. **Device Compatibility:** CSS allows you to make your website look great on phones, tablets, and desktops by using responsive design techniques.\\n4. **Faster Loading:** Since one CSS file can style many pages, the browser only needs to download the design once.\\n\\n:::tip\\n**Did you know?** CSS was first proposed by Håkon Wium Lie on October 10, 1994. Before CSS, nearly all presentation attributes of HTML documents were contained within the HTML markup.\\n:::\\n\\n### A simple Example\\nHere is how you can change the color and size of a heading:\\n\\n[[SANDBOX_0]]\\n\\n:::mistake\\nDon't write CSS styles directly inside HTML tags (like \`<div style=\\"color: red;\\">\`). This is called inline styling and makes your code hard to maintain.\\n:::"`
);

data = data.replace(
  /"content_hi": "### हमें CSS की आवश्यकता क्यों है\?\\n\\n1. \*\*चिंताओं को अलग करना:\*\* अपनी सामग्री \(HTML\) को अपने डिज़ाइन \(CSS\) से अलग रखें। इससे आपके कोड को प्रबंधित करना और अपडेट करना बहुत आसान हो जाता है।\\n2. \*\*संगति:\*\* आप एक ही CSS फ़ाइल में केवल एक पंक्ति का कोड बदलकर 100-पृष्ठ की वेबसाइट पर सभी शीर्षकों को स्टाइल कर सकते हैं।\\n3. \*\*डिवाइस संगतता:\*\* CSS आपको उत्तरदायी डिज़ाइन तकनीकों का उपयोग करके अपनी वेबसाइट को फोन, टैबलेट और डेस्कटॉप पर शानदार बनाने की अनुमति देता है।\\n4. \*\*तेज़ लोडिंग:\*\* चूंकि एक CSS फ़ाइल कई पृष्ठों को स्टाइल कर सकती है, इसलिए ब्राउज़र को केवल एक बार डिज़ाइन डाउनलोड करने की आवश्यकता होती है।\\n\\n### एक सरल उदाहरण\\nयहां बताया गया है कि आप शीर्षक का रंग और आकार कैसे बदल सकते हैं:\\n\\n\[\[SANDBOX_0\]\]"/g,
  `"content_hi": "### हमें CSS की आवश्यकता क्यों है?\\n\\n1. **चिंताओं को अलग करना:** अपनी सामग्री (HTML) को अपने डिज़ाइन (CSS) से अलग रखें। इससे आपके कोड को प्रबंधित करना और अपडेट करना बहुत आसान हो जाता है।\\n2. **संगति:** आप एक ही CSS फ़ाइल में केवल एक पंक्ति का कोड बदलकर 100-पृष्ठ की वेबसाइट पर सभी शीर्षकों को स्टाइल कर सकते हैं।\\n3. **डिवाइस संगतता:** CSS आपको उत्तरदायी डिज़ाइन तकनीकों का उपयोग करके अपनी वेबसाइट को फोन, टैबलेट और डेस्कटॉप पर शानदार बनाने की अनुमति देता है।\\n4. **तेज़ लोडिंग:** चूंकि एक CSS फ़ाइल कई पृष्ठों को स्टाइल कर सकती है, इसलिए ब्राउज़र को केवल एक बार डिज़ाइन डाउनलोड करने की आवश्यकता होती है।\\n\\n:::tip\\n**क्या आप जानते हैं?** CSS को पहली बार 10 अक्टूबर, 1994 को हाकोन वियम लाई द्वारा प्रस्तावित किया गया था।\\n:::\\n\\n### एक सरल उदाहरण\\nयहां बताया गया है कि आप शीर्षक का रंग और आकार कैसे बदल सकते हैं:\\n\\n[[SANDBOX_0]]\\n\\n:::mistake\\nHTML टैग्स के अंदर सीधे CSS स्टाइल न लिखें (जैसे \`<div style=\\"color: red;\\">\`)। इसे इनलाइन स्टाइलिंग कहा जाता है और यह आपके कोड को बनाए रखना मुश्किल बना देता है।\\n:::"`
);

// Replace t1-2 content
data = data.replace(
  /"content_en": "### CSS Comments\\nComments are used to explain the code, and may help when you edit the source code at a later date. Comments are ignored by browsers.\\n\\nA CSS comment starts with `\/\*` and ends with `\*\/`."/g,
  `"content_en": "### CSS Comments\\nComments are used to explain the code, and may help when you edit the source code at a later date. Comments are ignored by browsers.\\n\\nA CSS comment starts with \`/*\` and ends with \`*/\`.\\n\\n:::warning\\nComments cannot be nested in CSS. This means you cannot put one comment inside another.\\n:::\\n\\n![CSS Comments Example](https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop)"`
);

data = data.replace(
  /"content_hi": "### CSS टिप्पणियाँ\\nटिप्पणियों का उपयोग कोड को समझाने के लिए किया जाता है, और बाद में स्रोत कोड को संपादित करते समय मदद कर सकते हैं। ब्राउज़रों द्वारा टिप्पणियों को अनदेखा कर दिया जाता है।\\n\\nएक CSS टिप्पणी `\/\*` से शुरू होती है और `\*\/` पर समाप्त होती है।"/g,
  `"content_hi": "### CSS टिप्पणियाँ\\nटिप्पणियों का उपयोग कोड को समझाने के लिए किया जाता है, और बाद में स्रोत कोड को संपादित करते समय मदद कर सकते हैं। ब्राउज़रों द्वारा टिप्पणियों को अनदेखा कर दिया जाता है।\\n\\nएक CSS टिप्पणी \`/*\` से शुरू होती है और \`*/\` पर समाप्त होती है。\\n\\n:::warning\\nCSS में टिप्पणियों को नेस्ट नहीं किया जा सकता है। इसका मतलब है कि आप एक टिप्पणी को दूसरी टिप्पणी के अंदर नहीं रख सकते।\\n:::\\n\\n![CSS Comments Example](https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop)"`
);

// Add suggestion in chapter 2
data = data.replace(
  /"content_en": "### Selectors\\n\\n### • Element Selector\\nSelects HTML elements based on the element name.\\n\\n### • Class Selector\\nSelects HTML elements with a specific class attribute. Starts with a dot `\.class-name`\./g,
  `"content_en": "### Selectors\\n\\n:::suggestion\\nWe suggest using Class Selectors most of the time instead of ID selectors because classes can be reused, making your CSS more scalable!\\n:::\\n\\n### • Element Selector\\nSelects HTML elements based on the element name.\\n\\n### • Class Selector\\nSelects HTML elements with a specific class attribute. Starts with a dot \`.class-name\`.`
);

data = data.replace(
  /"content_hi": "### चयनकर्ता\\n\\n### • तत्व चयनकर्ता \(Element Selector\)\\nतत्व नाम के आधार पर HTML तत्वों का चयन करता है।\\n\\n### • वर्ग चयनकर्ता \(Class Selector\)\\nएक विशिष्ट वर्ग विशेषता वाले HTML तत्वों का चयन करता है। एक बिंदु `\.class-name` से शुरू होता है।/g,
  `"content_hi": "### चयनकर्ता\\n\\n:::suggestion\\nहम आईडी चयनकर्ताओं के बजाय अधिकांश समय कक्षा चयनकर्ताओं (Class Selectors) का उपयोग करने का सुझाव देते हैं क्योंकि कक्षाओं का पुन: उपयोग किया जा सकता है, जिससे आपका CSS अधिक स्केलेबल हो जाता है!\\n:::\\n\\n### • तत्व चयनकर्ता (Element Selector)\\nतत्व नाम के आधार पर HTML तत्वों का चयन करता है।\\n\\n### • वर्ग चयनकर्ता (Class Selector)\\nएक विशिष्ट वर्ग विशेषता वाले HTML तत्वों का चयन करता है। एक बिंदु \`.class-name\` से शुरू होता है।`
);

fs.writeFileSync('src/data/courseData.ts', data);
console.log('Successfully updated courseData.ts');

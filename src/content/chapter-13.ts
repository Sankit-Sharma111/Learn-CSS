export const chapter13 = {
  id: "ch13",
  title_en: "Chapter 13: CSS Animations, Transitions & Transforms",
  title_hi: "अध्याय 13: CSS एनिमेशन, ट्रांजिशन और ट्रांसफॉर्म (वेबसाइट में जान डालना)",
  topics: [
    {
      id: "t13-1",
      title_en: "CSS Transforms: Moving, Scaling & Rotating in 2D/3D Space",
      title_hi: "CSS Transforms: एलिमेंट्स को खिसकाना, घुमाना और बड़ा-छोटा करना",
      content_en: `### Altering the Shape & Position of Elements

The **\`transform\`** property allows you to visually manipulate an element in 2D or 3D space *without* interrupting the normal document flow. This means if you rotate a box, it won't push its neighboring boxes out of the way!

Here are the 4 fundamental transform functions:

#### 1. \`translate(x, y)\` - Moving Elements
Moves an element left/right (X-axis) and up/down (Y-axis) from its original position.
* \`transform: translate(50px, 100px);\` (Moves 50px right, 100px down)
* \`transform: translateY(-20px);\` (Moves 20px straight UP)

#### 2. \`scale(n)\` - Resizing Elements
Grows or shrinks an element relative to its original size (where 1 is default).
* \`transform: scale(1.5);\` (Makes it 50% larger)
* \`transform: scale(0.5);\` (Shrinks it to half size)

#### 3. \`rotate(deg)\` - Spinning Elements
Rotates the element clockwise (positive) or counter-clockwise (negative).
* \`transform: rotate(45deg);\` (Spins 45 degrees clockwise)
* \`transform: rotate(-180deg);\` (Spins upside down)

#### 4. \`skew(deg)\` - Tilting Elements
Tilts or slants the element on the X or Y axis, creating a parallelogram effect.

---

### Combining Multiple Transforms
You can apply multiple transforms at the exact same time by separating them with spaces!

\`\`\`css
/* Moves the box UP by 20px AND makes it 10% larger at the same time! */
.magic-box:hover {
  transform: translateY(-20px) scale(1.1);
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### एलिमेंट्स का आकार और जगह बदलना (बिना लेआउट तोड़े!)

**\`transform\`** प्रॉपर्टी आपको किसी भी एलिमेंट को 2D या 3D स्पेस में खिसकाने, घुमाने या बड़ा-छोटा करने की ताकत देती है। सबसे खास बात: यह सब नॉर्मल लेआउट को डिस्टर्ब किए बिना होता है! यानी अगर आप किसी बॉक्स को घुमाते हैं, तो वह अपने आस-पास के बॉक्स को धक्का देकर नहीं खिसकाएगा।

यहाँ 4 सबसे मुख्य ट्रांसफॉर्म फंक्शन दिए गए हैं:

#### 1. \`translate(x, y)\` - एलिमेंट को खिसकाना (Move)
यह एलिमेंट को उसकी असली जगह से दाएं-बाएं (X-axis) और ऊपर-नीचे (Y-axis) खिसकाता है।
* \`transform: translate(50px, 100px);\` (50px दाएं और 100px नीचे खिसकाएगा)
* \`transform: translateY(-20px);\` (सीधे 20px **ऊपर** खिसकाएगा)

#### 2. \`scale(n)\` - एलिमेंट को बड़ा/छोटा करना (Resize)
यह एलिमेंट के साइज को गुना (multiply) करता है (जहाँ 1 उसका नॉर्मल साइज है)।
* \`transform: scale(1.5);\` (नॉर्मल से 50% बड़ा कर देगा)
* \`transform: scale(0.5);\` (सिकोड़कर आधा कर देगा)

#### 3. \`rotate(deg)\` - एलिमेंट को घुमाना (Spin)
यह एलिमेंट को घड़ी की दिशा में (Positive) या उल्टी दिशा में (Negative) घुमाता है।
* \`transform: rotate(45deg);\` (घड़ी की दिशा में 45 डिग्री घुमाएगा)
* \`transform: rotate(-180deg);\` (उल्टा घुमा देगा)

#### 4. \`skew(deg)\` - एलिमेंट को तिरछा करना (Tilt)
यह एलिमेंट को X या Y एक्सिस पर तिरछा (slant) कर देता है, जिससे वह बर्फी या पैरेललोग्राम जैसा दिखता है।

---

### कई ट्रांसफॉर्म्स को एक साथ मिलाना
आप स्पेस (space) देकर एक ही समय में कई ट्रांसफॉर्म्स लगा सकते हैं!

\`\`\`css
/* होवर करने पर बॉक्स 20px ऊपर भी जाएगा और 10% बड़ा भी होगा! */
.magic-box:hover {
  transform: translateY(-20px) scale(1.1);
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="grid">\n  <div class="box trans-box">translateY(30px)</div>\n  <div class="box scale-box">scale(1.2)</div>\n  <div class="box rotate-box">rotate(45deg)</div>\n  <div class="box skew-box">skewX(20deg)</div>\n  <div class="box combo-box">Hover Me! (Combo)</div>\n</div>`,
          css: `body { font-family: sans-serif; padding: 20px; background: #2d3436; }\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 30px;\n  padding-top: 20px;\n}\n\n.box {\n  background: #00cec9;\n  color: #2d3436;\n  font-weight: bold;\n  text-align: center;\n  padding: 30px 10px;\n  border-radius: 8px;\n  transition: transform 0.5s ease; /* Makes the transform smooth! */\n  cursor: pointer;\n}\n\n/* 1. Translate */\n.trans-box:hover { transform: translateY(30px); background: #74b9ff; }\n\n/* 2. Scale */\n.scale-box:hover { transform: scale(1.2); background: #ff7675; }\n\n/* 3. Rotate */\n.rotate-box:hover { transform: rotate(45deg); background: #fdcb6e; }\n\n/* 4. Skew */\n.skew-box:hover { transform: skewX(-20deg); background: #a29bfe; }\n\n/* 5. Combination! */\n.combo-box {\n  background: #e84393;\n  color: white;\n}\n.combo-box:hover {\n  transform: translateY(-15px) scale(1.1) rotate(5deg);\n}`
        }
      ]
    },
    {
      id: "t13-2",
      title_en: "CSS Transitions: The Art of Smooth State Changes",
      title_hi: "CSS Transitions: खुरदुरे बदलावों को मखमली (Smooth) बनाना",
      content_en: `### Eliminating Harsh Jumps

By default, when an element's CSS state changes (like when you \`:hover\` over a button and its background turns from blue to red), the change happens **instantly in 0.001 seconds**. This harsh jump looks robotic and unprofessional.

**CSS Transitions** allow you to slow down that change, creating a smooth, fluid animation from State A to State B!

---

### The 4 Pillars of a Transition

To create a transition, you define rules on the **base element** (NOT on the \`:hover\` state!). You must specify:

1. **\`transition-property\`**: Which CSS property should animate? (e.g., \`background-color\`, \`transform\`, \`opacity\`, or \`all\`).
2. **\`transition-duration\`**: How long should the animation take? (e.g., \`0.3s\` for 300 milliseconds, or \`2s\` for 2 seconds).
3. **\`transition-timing-function\`**: The speed curve of the animation (the "feel" of it).
   * **\`linear\`**: Same constant speed from start to finish (looks robotic).
   * **\`ease\`** (Default): Starts slow, speeds up in the middle, slows down at the end.
   * **\`ease-in-out\`**: Very gentle acceleration and deceleration.
4. **\`transition-delay\`**: How long to wait before starting the animation? (e.g., \`0.5s\`).

---

### The Clean Shorthand Syntax

Professionals almost always use the single-line shorthand **\`transition\`** property:

\`\`\`css
/* Syntax: property duration timing-function delay */
.modern-button {
  background-color: blue;
  
  /* Animate background-color smoothly over 0.3 seconds */
  transition: background-color 0.3s ease; 
}

.modern-button:hover {
  background-color: red;
}
\`\`\`

#### Animating Multiple Properties
You can animate different properties at different speeds by separating them with a comma!

\`\`\`css
.advanced-card {
  /* Animate color fast, but animate transform slowly! */
  transition: background-color 0.2s ease, transform 0.6s ease-in-out;
}
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### झटके वाले बदलावों को खत्म करना!

डिफ़ॉल्ट रूप से, जब किसी एलिमेंट का CSS बदलता है (जैसे जब आप किसी बटन पर \`:hover\` करते हैं और उसका रंग नीले से लाल हो जाता है), तो यह बदलाव **0.001 सेकंड में तुरंत (instantly)** होता है। यह अचानक लगने वाला झटका बहुत अनप्रोफेशनल लगता है।

**CSS Transitions** आपको इस बदलाव की स्पीड धीमी करने की सुविधा देता है, जिससे State A से State B तक एक मखमली और स्मूद (smooth) एनिमेशन बनता है!

---

### ट्रांजिशन (Transition) के 4 मुख्य स्तंभ

एक ट्रांजिशन बनाने के लिए, आप **मूल (Base) एलिमेंट** पर नियम लिखते हैं (ध्यान रहे, \`:hover\` वाले कोड में नहीं!)। आपको 4 चीजें बतानी होती हैं:

1. **\`transition-property\`**: किस CSS प्रॉपर्टी को एनिमेट करना है? (जैसे \`background-color\`, \`transform\`, या \`all\`)।
2. **\`transition-duration\`**: एनिमेशन में कितना समय लगना चाहिए? (जैसे \`0.3s\` यानी 300 मिलीसेकंड, या \`2s\` यानी 2 सेकंड)।
3. **\`transition-timing-function\`**: एनिमेशन की स्पीड कैसी होगी (उसका "feel")?
   * **\`linear\`**: शुरू से अंत तक एक ही स्पीड (रोबोटिक लगता है)।
   * **\`ease\`** (डिफ़ॉल्ट): धीरे शुरू होता है, बीच में तेज़ होता है, और अंत में फिर धीमा हो जाता है।
   * **\`ease-in-out\`**: बहुत ही स्मूद तरीके से स्पीड पकड़ता है और छोड़ता है।
4. **\`transition-delay\`**: एनिमेशन शुरू होने से पहले कितनी देर रुकना है? (जैसे \`0.5s\`)।

---

### क्लीन शॉर्टहैंड (Shorthand) सिंटैक्स

प्रोफेशनल डेवलपर्स हमेशा एक लाइन वाले **\`transition\`** शॉर्टहैंड का उपयोग करते हैं:

\`\`\`css
/* सिंटैक्स: property duration timing-function delay */
.modern-button {
  background-color: blue;
  
  /* बैकग्राउंड कलर को 0.3 सेकंड में स्मूद तरीके से बदलें */
  transition: background-color 0.3s ease; 
}

.modern-button:hover {
  background-color: red;
}
\`\`\`

#### एक साथ कई प्रॉपर्टीज को एनिमेट करना
आप कॉमा (comma) लगाकर अलग-अलग प्रॉपर्टीज को अलग-अलग स्पीड पर एनिमेट कर सकते हैं!

\`\`\`css
.advanced-card {
  /* रंग को जल्दी (0.2s) बदलें, लेकिन खिसकने (transform) को धीमा (0.6s) रखें! */
  transition: background-color 0.2s ease, transform 0.6s ease-in-out;
}
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="wrapper">\n  <p>1. NO TRANSITION (Harsh robotic jump)</p>\n  <button class="btn btn-harsh">Hover Me Fast!</button>\n\n  <p>2. SMOOTH TRANSITION (0.4s ease)</p>\n  <button class="btn btn-smooth">Hover Me Smoothly!</button>\n\n  <p>3. MULTIPLE TRANSITIONS (Color is fast, Transform is slow!)</p>\n  <button class="btn btn-advanced">Hover for Magic!</button>\n</div>`,
          css: `body { font-family: sans-serif; padding: 20px; background: #f1f2f6; }\n.wrapper p { font-weight: bold; color: #2f3542; margin-top: 30px; font-size: 14px; }\n\n.btn {\n  padding: 15px 30px;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background-color: #3742fa;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n/* 1. Harsh Jump - No transition property applied! */\n.btn-harsh:hover {\n  background-color: #ff4757;\n  transform: scale(1.1);\n}\n\n/* 2. Smooth Transition */\n.btn-smooth {\n  /* Magic line that watches 'all' properties for changes! */\n  transition: all 0.4s ease;\n}\n.btn-smooth:hover {\n  background-color: #2ed573;\n  transform: scale(1.1);\n}\n\n/* 3. Advanced Split Transitions */\n.btn-advanced {\n  /* Color changes in 0.2s, but scale/move takes a slow 0.8s! */\n  transition: background-color 0.2s ease, transform 0.8s ease-in-out;\n}\n.btn-advanced:hover {\n  background-color: #ffa502;\n  transform: scale(1.15) translateY(-10px);\n}`
        }
      ]
    },
    {
      id: "t13-3",
      title_en: "CSS Keyframe Animations (@keyframes)",
      title_hi: "CSS Keyframe Animations (@keyframes से असली फिल्में बनाना!)",
      content_en: `### Moving Beyond Simple A-to-B Transitions

Transitions are great, but they are limited. They require a trigger (like \`:hover\`) and they only go from State A to State B. 

What if you want an element to pulse continuously without user interaction? What if you want an element to bounce from State A, to State B, to State C, and back to State A? 

For complex, multi-step, autonomous animations, we use **CSS \`@keyframes\`**!

---

### Step 1: Define the Animation Timeline (\`@keyframes\`)

A keyframe timeline is a script for your animation. You give it a custom name (like \`bounce\`) and define what CSS styles should apply at specific percentage points (from \`0%\` start to \`100%\` finish).

\`\`\`css
/* Scripting a bouncing ball animation */
@keyframes bouncingBall {
  0%   { transform: translateY(0px); }    /* Start on the ground */
  50%  { transform: translateY(-100px); } /* Midpoint: High in the air */
  100% { transform: translateY(0px); }    /* End: Back on the ground */
}
\`\`\`
*(Tip: You can use \`from\` instead of \`0%\`, and \`to\` instead of \`100%\` for simple 2-step animations).*

---

### Step 2: Apply the Animation to an Element

Once the timeline is written, you must "attach" it to an HTML element using the **\`animation\`** property.

\`\`\`css
.ball {
  /* Syntax: name duration timing-function delay iteration-count direction */
  animation: bouncingBall 2s ease-in-out 0s infinite alternate;
}
\`\`\`

#### Important Animation Properties:
* **\`animation-name\`**: The custom name of your \`@keyframes\` script.
* **\`animation-duration\`**: How long one full cycle takes (e.g., \`2s\`).
* **\`animation-iteration-count\`**: How many times should it run? Use a number (e.g., \`3\`) or **\`infinite\`** to run forever!
* **\`animation-direction\`**: 
  * \`normal\` (default): Plays 0% to 100%, then snaps back to 0% and repeats.
  * **\`alternate\`**: Plays 0% to 100%, then plays backwards 100% to 0%, creating a seamless yo-yo effect!

[[SANDBOX_0]]`,
      content_hi: `### सिर्फ A से B तक जाने से आगे बढ़ें!

Transitions शानदार हैं, लेकिन उनकी एक सीमा है। उन्हें शुरू होने के लिए किसी ट्रिगर (जैसे \`:hover\`) की आवश्यकता होती है, और वे केवल State A से State B तक जाते हैं।

सोचिए अगर आप चाहते हैं कि कोई पल्स (Pulse) एनीमेशन बिना माउस घुमाए लगातार चलता रहे? या अगर आप चाहते हैं कि कोई एलिमेंट State A से B पर जाए, फिर C पर, और फिर वापस A पर आ जाए?

ऐसे जटिल (complex), कई स्टेप्स वाले और अपने आप चलने वाले एनिमेशन बनाने के लिए, हम **CSS \`@keyframes\`** का उपयोग करते हैं!

---

### स्टेप 1: एनिमेशन की टाइमलाइन बनाना (\`@keyframes\`)

कीफ्रेम (keyframe) टाइमलाइन आपके एनिमेशन की एक स्क्रिप्ट (Script) है। आप इसे अपना एक नाम देते हैं (जैसे \`bounce\`) और बताते हैं कि कितने प्रतिशत (0% से 100%) समय पर कौन सी CSS लागू होनी चाहिए।

\`\`\`css
/* एक उछलती हुई गेंद की स्क्रिप्ट (Timeline) */
@keyframes bouncingBall {
  0%   { transform: translateY(0px); }    /* शुरुआत: ज़मीन पर */
  50%  { transform: translateY(-100px); } /* बीच का समय: हवा में ऊपर */
  100% { transform: translateY(0px); }    /* अंत: वापस ज़मीन पर */
}
\`\`\`
*(टिप: 2-स्टेप वाले आसान एनिमेशन के लिए आप \`0%\` की जगह \`from\`, और \`100%\` की जगह \`to\` भी लिख सकते हैं)।*

---

### स्टेप 2: एनिमेशन को एलिमेंट पर लगाना

स्क्रिप्ट लिखने के बाद, आपको उसे **\`animation\`** प्रॉपर्टी का उपयोग करके किसी HTML एलिमेंट से "जोड़ना" होगा।

\`\`\`css
.ball {
  /* सिंटैक्स: name duration timing-function delay iteration-count direction */
  animation: bouncingBall 2s ease-in-out 0s infinite alternate;
}
\`\`\`

#### एनिमेशन की ज़रूरी प्रॉपर्टीज:
* **\`animation-name\`**: आपके \`@keyframes\` स्क्रिप्ट का नाम।
* **\`animation-duration\`**: एनिमेशन का एक चक्र (cycle) पूरा होने में कितना समय लगेगा (\`2s\`)।
* **\`animation-iteration-count\`**: यह कितनी बार चलेगा? कोई नंबर लिखें (जैसे \`3\`) या हमेशा चलाने के लिए **\`infinite\`** लिखें!
* **\`animation-direction\`**: 
  * \`normal\` (डिफ़ॉल्ट): 0% से 100% तक चलेगा, फिर अचानक 0% पर वापस आकर दोबारा शुरू होगा।
  * **\`alternate\`**: 0% से 100% तक जाएगा, और फिर उल्टे पैर 100% से 0% तक वापस आएगा (yo-yo इफ़ेक्ट)।

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="arena">\n  <div class="element pulse-circle">Pulse</div>\n  \n  <div class="element slide-box">Slide</div>\n  \n  <div class="element color-box">Color</div>\n</div>`,
          css: `body { font-family: sans-serif; background: #2f3542; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }\n.arena { display: flex; gap: 50px; align-items: center; }\n.element { width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: white; }\n\n/* 1. CONTINUOUS PULSE ANIMATION */\n@keyframes heartbeat {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.2); }\n  100% { transform: scale(1); }\n}\n.pulse-circle {\n  background: #ff4757;\n  border-radius: 50%;\n  animation: heartbeat 1s ease-in-out infinite;\n}\n\n/* 2. ALTERNATING SLIDE ANIMATION */\n@keyframes slideUp {\n  0% { transform: translateY(0); }\n  100% { transform: translateY(-80px); }\n}\n.slide-box {\n  background: #1e90ff;\n  border-radius: 12px;\n  /* Uses 'alternate' to smoothly slide back down! */\n  animation: slideUp 1.5s ease-in-out infinite alternate;\n}\n\n/* 3. MULTI-STEP COLOR CHANGE */\n@keyframes rgbShift {\n  0% { background: #2ed573; border-radius: 10px; }\n  33% { background: #ffa502; border-radius: 30px; }\n  66% { background: #3742fa; border-radius: 50%; transform: rotate(180deg); }\n  100% { background: #2ed573; border-radius: 10px; transform: rotate(360deg); }\n}\n.color-box {\n  animation: rgbShift 4s linear infinite;\n}`
        }
      ]
    }
  ]
};

export const chapter13Quiz = [
  {
    id: "q1",
    question_en: "Which CSS 'transform' function is used to physically move an element left, right, up, or down from its original position?",
    question_hi: "किस CSS 'transform' फंक्शन का उपयोग किसी एलिमेंट को उसकी मूल जगह से बाएं, दाएं, ऊपर या नीचे खिसकाने के लिए किया जाता है?",
    options_en: [
      "scale()",
      "translate()",
      "rotate()",
      "skew()"
    ],
    options_hi: [
      "scale()",
      "translate()",
      "rotate()",
      "skew()"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q2",
    question_en: "If you apply 'transform: scale(0.5);' to an element, what happens to it visually?",
    question_hi: "यदि आप किसी एलिमेंट पर 'transform: scale(0.5);' लगाते हैं, तो दिखने में उस पर क्या असर होगा?",
    options_en: [
      "It becomes 50% larger than its original size.",
      "It shrinks to exactly half (50%) of its original size.",
      "It moves 0.5 pixels to the right.",
      "It becomes 50% transparent."
    ],
    options_hi: [
      "यह अपने मूल आकार से 50% बड़ा हो जाएगा।",
      "यह सिकुड़कर अपने मूल आकार का ठीक आधा (50%) हो जाएगा।",
      "यह दाईं ओर 0.5 पिक्सेल खिसक जाएगा।",
      "यह 50% पारदर्शी (transparent) हो जाएगा।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q3",
    question_en: "What is the primary visual difference between a standard CSS 'change' (e.g., hovering without transition) and a CSS 'transition'?",
    question_hi: "एक सामान्य CSS बदलाव (बिना ट्रांजिशन के hover करना) और CSS 'transition' के बीच मुख्य दृश्य (visual) अंतर क्या है?",
    options_en: [
      "Standard changes happen instantly creating a harsh jump, while transitions slow the change down to create a smooth, fluid animation.",
      "Transitions only work on mobile devices.",
      "Transitions require complex JavaScript to run, standard changes do not.",
      "Standard changes alter colors, transitions only alter shapes."
    ],
    options_hi: [
      "सामान्य बदलाव तुरंत होते हैं जिससे एक कठोर झटका (jump) लगता है, जबकि ट्रांजिशन बदलाव को धीमा कर देते हैं जिससे एक स्मूद और मखमली एनिमेशन बनता है।",
      "ट्रांजिशन केवल मोबाइल उपकरणों पर काम करते हैं।",
      "ट्रांजिशन को चलाने के लिए जटिल JavaScript की आवश्यकता होती है, जबकि सामान्य बदलाव में नहीं।",
      "सामान्य बदलाव रंग बदलते हैं, ट्रांजिशन केवल आकार (shapes) बदलते हैं।"
    ],
    correctAnswerIndex: 0
  },
  {
    id: "q4",
    question_en: "Which of the following properties is NOT one of the 4 pillars required to build a standard CSS transition?",
    question_hi: "निम्नलिखित में से कौन सी प्रॉपर्टी एक मानक CSS ट्रांजिशन (transition) बनाने के लिए आवश्यक 4 स्तंभों में से एक नहीं है?",
    options_en: [
      "transition-duration",
      "transition-timing-function",
      "transition-color-palette",
      "transition-property"
    ],
    options_hi: [
      "transition-duration",
      "transition-timing-function",
      "transition-color-palette (यह कोई असली प्रॉपर्टी नहीं है)",
      "transition-property"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q5",
    question_en: "Where is the correct place to apply the 'transition' CSS rule?",
    question_hi: "'transition' CSS नियम को लगाने की सही जगह कौन सी है?",
    options_en: [
      "On the :hover pseudo-class state (e.g., .button:hover).",
      "On the base original element itself (e.g., .button).",
      "Only in the HTML style attribute.",
      "Inside a @media query exclusively."
    ],
    options_hi: [
      ":hover स्यूडो-क्लास स्टेट पर (जैसे .button:hover)।",
      "खुद मुख्य (Base) ओरिजिनल एलिमेंट पर (जैसे .button)।",
      "केवल HTML स्टाइल एट्रिब्यूट के अंदर।",
      "केवल @media क्वेरी के अंदर।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q6",
    question_en: "What is the core limitation of CSS Transitions that CSS Keyframe Animations (@keyframes) solves?",
    question_hi: "CSS Transitions की वह कौन सी मुख्य सीमा (limitation) है जिसे CSS Keyframe Animations (@keyframes) हल कर देता है?",
    options_en: [
      "Transitions cannot change background colors.",
      "Transitions only go from point A to point B and require a trigger (like hover), whereas Keyframes allow multi-step, complex, autonomous animations without user interaction.",
      "Transitions use too much computer memory.",
      "Keyframes can render 3D games, transitions cannot."
    ],
    options_hi: [
      "ट्रांजिशन बैकग्राउंड के रंग नहीं बदल सकते।",
      "ट्रांजिशन केवल बिंदु A से B तक जाते हैं और उन्हें शुरू होने के लिए किसी ट्रिगर (जैसे hover) की आवश्यकता होती है, जबकि कीफ्रेम बिना यूज़र इंटरैक्शन के कई स्टेप्स वाले जटिल एनिमेशन को अपने आप चला सकते हैं।",
      "ट्रांजिशन कंप्यूटर की बहुत ज्यादा मेमोरी का उपयोग करते हैं।",
      "कीफ्रेम 3D गेम्स बना सकते हैं, ट्रांजिशन नहीं।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q7",
    question_en: "In an @keyframes timeline rule, what do percentages like '0%', '50%', and '100%' represent?",
    question_hi: "एक @keyframes टाइमलाइन नियम में, '0%', '50%', और '100%' जैसे प्रतिशत (percentages) क्या दर्शाते हैं?",
    options_en: [
      "The opacity of the element.",
      "The volume level of sound effects.",
      "Specific time points across the total duration of the animation cycle.",
      "The width of the element relative to the screen."
    ],
    options_hi: [
      "एलिमेंट की ओपेसिटी (पारदर्शिता)।",
      "साउंड इफ़ेक्ट का वॉल्यूम लेवल।",
      "एनिमेशन साइकिल के कुल समय (duration) में अलग-अलग टाइम पॉइंट (time points)।",
      "स्क्रीन के सापेक्ष एलिमेंट की चौड़ाई।"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q8",
    question_en: "If you want a CSS keyframe animation to run endlessly forever, which value should you pass to the 'animation-iteration-count' property?",
    question_hi: "यदि आप चाहते हैं कि कोई CSS कीफ्रेम एनिमेशन कभी न रुके और हमेशा (endlessly) चलता रहे, तो आपको 'animation-iteration-count' प्रॉपर्टी को क्या वैल्यू देनी चाहिए?",
    options_en: [
      "always",
      "endless",
      "forever",
      "infinite"
    ],
    options_hi: [
      "always",
      "endless",
      "forever",
      "infinite"
    ],
    correctAnswerIndex: 3
  },
  {
    id: "q9",
    question_en: "What does setting 'animation-direction: alternate;' achieve in an @keyframes animation?",
    question_hi: "एक @keyframes एनिमेशन में 'animation-direction: alternate;' सेट करने से क्या हासिल होता है?",
    options_en: [
      "It automatically alternates the colors of the element to the opposite colors on the color wheel.",
      "It plays the animation forwards from 0% to 100%, and then seamlessly plays it backwards from 100% to 0% (creating a yo-yo effect).",
      "It alternates the animation between two different HTML elements.",
      "It stops the animation and resets it to the beginning."
    ],
    options_hi: [
      "यह एलिमेंट के रंगों को कलर व्हील के विपरीत रंगों में बदल देता है।",
      "यह एनिमेशन को पहले 0% से 100% तक आगे की ओर चलाता है, और फिर बहुत स्मूद तरीके से 100% से 0% तक पीछे की ओर (उल्टा) चलाता है (yo-yo इफ़ेक्ट)।",
      "यह एनिमेशन को दो अलग-अलग HTML एलिमेंट्स के बीच बदलता रहता है।",
      "यह एनिमेशन को रोक देता है और शुरुआत से रीसेट कर देता है।"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q10",
    question_en: "Which transition timing function starts slowly, accelerates rapidly through the middle, and slows down gently at the very end (providing a natural feel)?",
    question_hi: "कौन सा ट्रांजिशन टाइमिंग फंक्शन (timing function) धीरे-धीरे शुरू होता है, बीच में तेज़ी से गति पकड़ता है, और अंत में बहुत आराम से धीमा हो जाता है (जिससे एक प्राकृतिक अहसास मिलता है)?",
    options_en: [
      "linear",
      "steps()",
      "ease",
      "jump-start"
    ],
    options_hi: [
      "linear (यह हमेशा एक समान गति से चलता है)",
      "steps()",
      "ease (यह प्राकृतिक स्पीड कर्व है)",
      "jump-start"
    ],
    correctAnswerIndex: 2
  }
];

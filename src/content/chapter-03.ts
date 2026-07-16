export const chapter03 = {
  id: "ch3",
  title_en: "Chapter 3: CSS Colors & Backgrounds",
  title_hi: "अध्याय 3: CSS रंग (Colors) और पृष्ठभूमि (Backgrounds)",
  topics: [
    {
      id: "t3-1",
      title_en: "CSS Color Formats (HEX, RGB, HSL & Transparency)",
      title_hi: "CSS रंग प्रारूप (HEX, RGB, HSL और पारदर्शिता)",
      content_en: `### Bringing Your Website to Life with Colors!

Color is one of the most important elements of web design. In CSS, colors can be applied to text, backgrounds, borders, shadows, and much more. But how does the browser understand which exact shade of blue or red you want?

CSS supports several ways to define colors:

---

### 1. Color Names (Keywords)
CSS supports **140 standard color names** like \`red\`, \`blue\`, \`green\`, \`yellow\`, \`tomato\`, \`dodgerblue\`, and \`purple\`. While easy to use, they offer limited options for exact branding colors.

### 2. HEX Codes (Hexadecimal)
This is the most popular format used by designers. A HEX code starts with a hash (\`#\`) followed by 6 characters (0-9 and A-F) representing Red, Green, and Blue values.
* **Syntax:** \`#RRGGBB\`
* **Example:** \`#FF0000\` is pure Red, \`#000000\` is Black, and \`#FFFFFF\` is Pure White.

### 3. RGB & RGBA (Red, Green, Blue, Alpha)
An RGB color value represents the intensity of Red, Green, and Blue on a scale from **0 to 255**.
* **Syntax:** \`rgb(red, green, blue)\` ➔ e.g., \`rgb(255, 99, 71)\`
* **RGBA (Transparency):** The 'A' stands for **Alpha**, which controls transparency on a scale from \`0.0\` (completely transparent/invisible) to \`1.0\` (fully solid).
* **Example:** \`rgba(0, 0, 255, 0.5)\` creates a 50% see-through blue!

### 4. HSL & HSLA (Hue, Saturation, Lightness)
HSL is intuitive because it works like a color wheel:
* **Hue:** Degree on the color wheel from 0 to 360 (0 is Red, 120 is Green, 240 is Blue).
* **Saturation:** Percentage of intensity (0% is a shade of gray, 100% is full color).
* **Lightness:** Percentage of brightness (0% is black, 50% is normal, 100% is white).
* **Example:** \`hsl(120, 100%, 50%)\`

### 5. The \`currentcolor\` Keyword
The \`currentcolor\` keyword acts like a dynamic variable. It automatically adopts whatever color is currently set on the element's text (\`color\` property).

[[SANDBOX_0]]`,
      content_hi: `### रंगों के साथ अपनी वेबसाइट में जान डालें!

रंग (Color) वेब डिज़ाइन के सबसे महत्वपूर्ण तत्वों में से एक है। CSS में, रंगों का उपयोग टेक्स्ट, बैकग्राउंड, बॉर्डर, शैडो और बहुत कुछ डिज़ाइन करने के लिए किया जाता है। लेकिन ब्राउज़र यह कैसे समझता है कि आपको नीले या लाल रंग का कौन सा सटीक शेड चाहिए?

CSS रंगों को परिभाषित करने के कई तरीके प्रदान करता है:

---

### 1. रंग के नाम (Color Names)
CSS में **140 मानक रंगों के नाम** समर्थित हैं, जैसे \`red\`, \`blue\`, \`green\`, \`yellow\`, \`tomato\`, \`dodgerblue\`, और \`purple\`। ये उपयोग करने में आसान होते हैं, लेकिन सटीक ब्रांडिंग रंगों के लिए विकल्प सीमित होते हैं।

### 2. हेक्स कोड (HEX Codes - Hexadecimal)
यह डिज़ाइनरों द्वारा सबसे अधिक उपयोग किया जाने वाला प्रारूप है। HEX कोड की शुरुआत हैश (\`#\`) से होती है, जिसके बाद 6 अक्षर (0-9 और A-F) होते हैं जो Red, Green और Blue के मान को दर्शाते हैं।
* **सिंटैक्स:** \`#RRGGBB\`
* **उदाहरण:** \`#FF0000\` शुद्ध लाल है, \`#000000\` काला है, और \`#FFFFFF\` बिल्कुल सफेद है।

### 3. RGB और RGBA
RGB रंग का मान **0 से 255** के पैमाने पर Red, Green और Blue की तीव्रता को दर्शाता है।
* **सिंटैक्स:** \`rgb(red, green, blue)\` ➔ उदाहरण के लिए, \`rgb(255, 99, 71)\`
* **RGBA (पारदर्शिता / Transparency):** इसमें 'A' का मतलब **Alpha** होता है, जो पारदर्शिता को \`0.0\` (पूरी तरह से पारदर्शी/अदृश्य) से लेकर \`1.0\` (पूरी तरह से ठोस) के पैमाने पर नियंत्रित करता है।
* **उदाहरण:** \`rgba(0, 0, 255, 0.5)\` 50% पारदर्शी नीला रंग बनाता है!

### 4. HSL और HSLA (Hue, Saturation, Lightness)
HSL बहुत आसान है क्योंकि यह एक कलर व्हील (रंग चक्र) की तरह काम करता है:
* **Hue:** कलर व्हील पर 0 से 360 तक की डिग्री (0 लाल है, 120 हरा है, 240 नीला है)।
* **Saturation:** रंग की गहराई का प्रतिशत (0% ग्रे का शेड है, 100% पूरा रंग है)।
* **Lightness:** चमक का प्रतिशत (0% काला, 50% सामान्य, 100% सफेद)।
* **उदाहरण:** \`hsl(120, 100%, 50%)\`

### 5. \`currentcolor\` कीवर्ड
\`currentcolor\` कीवर्ड एक डायनामिक वेरिएबल की तरह काम करता है। यह स्वतः ही उस रंग को अपना लेता है जो वर्तमान में उस एलिमेंट के टेक्स्ट (\`color\` प्रॉपर्टी) पर सेट होता है।

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<h1>Color Formats Demo</h1>\n<p class="hex-box">HEX Color: #3498db</p>\n<p class="rgba-box">RGBA Transparent Green</p>\n<p class="hsl-box">HSL Vibrant Orange</p>\n<button class="dynamic-btn">CurrentColor Border</button>`,
          css: `h1 {\n  color: tomato; /* Named color */\n}\n\n.hex-box {\n  background-color: #3498db; /* Blue in HEX */\n  color: white;\n  padding: 10px;\n}\n\n.rgba-box {\n  /* 40% transparent green background */\n  background-color: rgba(46, 204, 113, 0.4);\n  color: #2c3e50;\n  padding: 10px;\n  font-weight: bold;\n}\n\n.hsl-box {\n  background-color: hsl(30, 100%, 50%); /* Orange in HSL */\n  color: white;\n  padding: 10px;\n}\n\n.dynamic-btn {\n  color: #8e44ad; /* Purple text */\n  /* The border dynamically uses the purple text color! */\n  border: 3px solid currentcolor;\n  background: transparent;\n  padding: 8px 16px;\n  font-size: 16px;\n  margin-top: 5px;\n}`
        }
      ]
    },
    {
      id: "t3-2",
      title_en: "Background Colors & Background Images",
      title_hi: "पृष्ठभूमि रंग (Background Colors) और छवियाँ (Images)",
      content_en: `### Styling Element Backgrounds

In CSS, the background of an element is the total area underneath its content, padding, and borders. You can fill this area with a solid color, a beautiful photograph, or even layer multiple graphics together!

---

### 1. \`background-color\`
This property sets a solid background color for an element using any of the formats we learned (HEX, RGB, HSL, or color names).

\`\`\`css
body {
  background-color: #f4f7f6;
}
\`\`\`

---

### 2. \`background-image\`
To place an image inside an element's background, we use the \`background-image\` property combined with the \`url('...')\` function.

#### Syntax:
\`\`\`css
div {
  background-image: url("https://example.com/image.jpg");
}
\`\`\`

#### What happens by default?
When you add a background image:
1. By default, the browser will **repeat (tile)** the image both horizontally and vertically until it fills the entire element.
2. If the image is larger than the element, only the top-left corner of the image will be visible.
3. **Layering Rule:** If you set both a \`background-color\` and a \`background-image\`, the image always sits **on top** of the color. The color will only be visible if the image fails to load or has transparent areas!

[[SANDBOX_0]]

:::tip
**Accessibility Tip:** Always specify a fallback \`background-color\` when using a background image. If the user's internet is slow and the image fails to load, your text will still remain readable against the fallback color!
:::`,
      content_hi: `### बैकग्राउंड (पृष्ठभूमि) को स्टाइल करना

CSS में, किसी एलिमेंट का बैकग्राउंड उसके कंटेंट, पैडिंग और बॉर्डर के नीचे का पूरा क्षेत्र होता है। आप इस क्षेत्र को किसी ठोस रंग, एक खूबसूरत तस्वीर, या यहाँ तक कि कई ग्राफिक्स को एक साथ जोड़कर भर सकते हैं!

---

### 1. \`background-color\`
यह प्रॉपर्टी हमने सीखे गए किसी भी कलर फॉर्मेट (HEX, RGB, HSL, या रंग के नाम) का उपयोग करके एलिमेंट के लिए एक ठोस बैकग्राउंड रंग सेट करती है।

\`\`\`css
body {
  background-color: #f4f7f6;
}
\`\`\`

---

### 2. \`background-image\`
किसी एलिमेंट के बैकग्राउंड में इमेज (तस्वीर) लगाने के लिए, हम \`background-image\` प्रॉपर्टी के साथ \`url('...')\` फ़ंक्शन का उपयोग करते हैं।

#### सिंटैक्स (Syntax):
\`\`\`css
div {
  background-image: url("https://example.com/image.jpg");
}
\`\`\`

#### डिफ़ॉल्ट रूप से क्या होता है?
जब आप कोई बैकग्राउंड इमेज लगाते हैं:
1. डिफ़ॉल्ट रूप से, ब्राउज़र इमेज को क्षैतिज और लंबवत (horizontally and vertically) दोनों दिशाओं में तब तक **दोहराता (repeat करता)** है जब तक कि वह पूरे एलिमेंट को भर न दे।
2. यदि इमेज एलिमेंट से बड़ी है, तो केवल उसका ऊपरी-बायाँ हिस्सा ही दिखाई देगा।
3. **लेयरिंग का नियम:** यदि आप \`background-color\` और \`background-image\` दोनों सेट करते हैं, तो इमेज हमेशा रंग के **ऊपर** रहती है। रंग केवल तभी दिखाई देगा जब इमेज लोड होने में विफल हो जाए या इमेज में पारदर्शी हिस्से हों!

[[SANDBOX_0]]

:::tip
**एक्सेसिबिलिटी टिप:** बैकग्राउंड इमेज का उपयोग करते समय हमेशा एक फॉलबैक (वैकल्पिक) \`background-color\` सेट करें। यदि उपयोगकर्ता का इंटरनेट धीमा है और इमेज लोड नहीं होती है, तब भी उस बैकग्राउंड रंग पर आपका टेक्स्ट आसानी से पढ़ा जा सकेगा!
:::`,
      sandboxes: [
        {
          html: `<div class="color-box">\n  <h2>Solid Color Background</h2>\n</div>\n\n<div class="image-box">\n  <h2>Background Image (Tiled by Default)</h2>\n</div>`,
          css: `.color-box {\n  background-color: #2c3e50;\n  color: white;\n  padding: 20px;\n  margin-bottom: 15px;\n  border-radius: 8px;\n}\n\n.image-box {\n  /* Setting a fallback color AND an image URL */\n  background-color: #34495e;\n  background-image: url("https://ik.imagekit.io/Sankit/background.png");\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 8px;\n  text-shadow: 1px 1px 3px black;\n}`
        }
      ]
    },
    {
      id: "t3-3",
      title_en: "CSS Gradients (Linear, Radial & Conic)",
      title_hi: "CSS ग्रेडिएंट्स (Linear, Radial और Conic)",
      content_en: `### Why use Gradients?
In the early days of web development, if designers wanted a smooth color transition (like a button fading from blue to purple), they had to create an image in Photoshop and load it via HTTP. Today, CSS can generate stunning **Gradients** natively using math!

:::note ⚠️ Important Distinction
Even though gradients look like colors, web browsers treat CSS gradients as **Images**. Therefore, you must use the \`background-image\` (or shorthand \`background\`) property to apply them, **NOT** \`background-color\`!
:::

---

### 1. Linear Gradient (\`linear-gradient\`)
Transitions colors in a straight line (up, down, left, right, or diagonally).

#### Syntax:
\`\`\`css
background-image: linear-gradient(direction, color1, color2, ...);
\`\`\`
* **Direction Examples:** \`to right\`, \`to bottom left\`, \`45deg\`, \`-135deg\`.

### 2. Radial Gradient (\`radial-gradient\`)
Transitions colors outward from a central point, creating a circular or elliptical shape.

#### Syntax:
\`\`\`css
background-image: radial-gradient(shape size at position, color1, color2, ...);
\`\`\`
* **Shape:** \`circle\` or \`ellipse\` (default).

### 3. Conic Gradient (\`conic-gradient\`)
Transitions colors rotated around a center point (like a color pie chart or clock face). This is a modern CSS feature!

#### Syntax:
\`\`\`css
background-image: conic-gradient(from angle, color1, color2, ...);
\`\`\`

[[SANDBOX_0]]`,
      content_hi: `### ग्रेडिएंट्स (Gradients) का उपयोग क्यों करें?
वेब डेवलपमेंट के शुरुआती दिनों में, यदि डिज़ाइनरों को रंगों का एक सुगम बदलाव चाहिए होता था (जैसे एक बटन जो नीले से बैंगनी रंग में बदल रहा हो), तो उन्हें फोटोशॉप में एक इमेज बनानी पड़ती थी। आज, CSS सीधे गणित का उपयोग करके शानदार **Gradients** बना सकता है!

:::note ⚠️ महत्वपूर्ण अंतर
भले ही ग्रेडिएंट्स रंगों की तरह दिखते हैं, लेकिन वेब ब्राउज़र CSS ग्रेडिएंट्स को **इमेज (Image)** के रूप में मानता है। इसलिए, इन्हें लगाने के लिए आपको \`background-image\` (या शार्टहैंड \`background\`) प्रॉपर्टी का उपयोग करना होगा, **\`background-color\` का नहीं!**
:::

---

### 1. लीनियर ग्रेडिएंट (\`linear-gradient\`)
यह रंगों को एक सीधी रेखा में (ऊपर, नीचे, बाएँ, दाएँ, या तिरछे) बदलता है।

#### सिंटैक्स (Syntax):
\`\`\`css
background-image: linear-gradient(direction, color1, color2, ...);
\`\`\`
* **दिशा के उदाहरण:** \`to right\`, \`to bottom left\`, \`45deg\`, \`-135deg\`.

### 2. रेडियल ग्रेडिएंट (\`radial-gradient\`)
यह रंगों को केंद्र बिंदु से बाहर की ओर फैलाता है, जिससे एक गोलाकार या अंडाकार आकृति बनती है।

#### सिंटैक्स (Syntax):
\`\`\`css
background-image: radial-gradient(shape size at position, color1, color2, ...);
\`\`\`
* **आकार (Shape):** \`circle\` (वृत्त) या \`ellipse\` (अंडाकार - डिफ़ॉल्ट)।

### 3. कॉनिक ग्रेडिएंट (\`conic-gradient\`)
यह रंगों को एक केंद्र बिंदु के चारों ओर घुमाता है (जैसे पाई चार्ट या घड़ी की सुइयाँ)। यह एक आधुनिक CSS फीचर!

#### सिंटैक्स (Syntax):
\`\`\`css
background-image: conic-gradient(from angle, color1, color2, ...);
\`\`\`

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="box linear">Linear Gradient (45deg)</div>\n<div class="box radial">Radial Gradient (Circle)</div>\n<div class="box conic">Conic Gradient (Pie Chart Effect)</div>`,
          css: `.box {\n  height: 80px;\n  color: white;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n  border-radius: 8px;\n  text-shadow: 1px 1px 2px rgba(0,0,0,0.7);\n}\n\n/* 1. Linear: Fading diagonally at 45 degrees */\n.linear {\n  background-image: linear-gradient(45deg, #ff416c, #ff4b2b);\n}\n\n/* 2. Radial: Circle expanding outward */\n.radial {\n  background-image: radial-gradient(circle, #8e44ad, #2c3e50);\n}\n\n/* 3. Conic: Rotating around center */\n.conic {\n  background-image: conic-gradient(from 0deg, #f39c12, #e74c3c, #3498db, #2ecc71, #f39c12);\n}`
        }
      ]
    },
    {
      id: "t3-4",
      title_en: "Background Control Properties & The Shorthand",
      title_hi: "बैकग्राउंड नियंत्रण प्रॉपर्टीज और शार्टहैंड (Shorthand)",
      content_en: `When you insert a background image, you usually don't want it tiling endlessly like a cheap 90s website! CSS gives you granular properties to control exactly how background graphics behave.

---

### 1. \`background-repeat\`
Controls if and how the image tiles.
* \`repeat\`: (Default) Tiles horizontally and vertically.
* \`no-repeat\`: Shows the image only once.
* \`repeat-x\` / \`repeat-y\`: Tiles strictly horizontally or vertically.

### 2. \`background-size\`
Controls the dimensions of the background graphic.
* \`cover\`: **Most Popular!** Scales the image to completely cover the container without stretching it. (Some parts of the image may be clipped if aspect ratios differ).
* \`contain\`: Scales the image to be as large as possible without clipping or overflowing.
* \`100% 100%\`: Forces the image to stretch to exact container dimensions (can distort image quality!).

### 3. \`background-position\`
Sets the starting position of the background image.
* **Keywords:** \`center\`, \`top left\`, \`bottom right\`.
* **Coordinates:** \`50% 50%\` or \`20px 40px\`.

### 4. \`background-attachment\`
Determines whether the background image scrolls with the page or stays fixed in place.
* \`scroll\`: (Default) Moves with the document.
* \`fixed\`: The image stays locked to the viewport, creating a stunning **Parallax scrolling effect**!

---

### The All-in-One \`background\` Shorthand
Writing 6 different background lines for a single banner is tedious. You can combine them into one clean line using the \`background\` shorthand!

#### Shorthand Syntax Order:
\`\`\`css
background: color image repeat attachment position / size;
\`\`\`

#### Example of Shorthand in Action:
\`\`\`css
/* Long way: */
div {
  background-color: #000;
  background-image: url('banner.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* Shorthand Way (Exactly identical!): */
div {
  background: #000 url('banner.jpg') no-repeat center / cover;
}
\`\`\`
*(Note: Notice the forward slash \`/\` separating position and size!)*

[[SANDBOX_0]]`,
      content_hi: `जब आप कोई बैकग्राउंड इमेज लगाते हैं, तो आप यह बिल्कुल नहीं चाहते कि वह 90 के दशक की किसी पुरानी वेबसाइट की तरह बार-बार रिपीट हो! CSS आपको बैकग्राउंड ग्राफिक्स के व्यवहार को पूरी तरह नियंत्रित करने के लिए विशेष प्रॉपर्टीज देता है।

---

### 1. \`background-repeat\`
यह नियंत्रित करता है कि इमेज दोहराई जाएगी या नहीं।
* \`repeat\`: (डिफ़ॉल्ट) क्षैतिज और लंबवत दोनों तरफ दोहराता है।
* \`no-repeat\`: इमेज को केवल एक बार दिखाता है।
* \`repeat-x\` / \`repeat-y\`: केवल क्षैतिज या केवल लंबवत दिशा में दोहराता है।

### 2. \`background-size\`
यह बैकग्राउंड ग्राफिक के आकार को नियंत्रित करता है।
* \`cover\`: **सबसे लोकप्रिय!** इमेज को बिना खींचे (without stretching) इस तरह बड़ा करता है कि वह पूरे कंटेनर को पूरी तरह ढक ले। (यदि कंटेनर का अनुपात अलग है तो इमेज का कुछ हिस्सा कट सकता है)।
* \`contain\`: इमेज को बिना काटे जितना संभव हो उतना बड़ा दिखाता है।
* \`100% 100%\`: इमेज को ज़बरदस्ती खींचकर कंटेनर के आकार का बना देता है (इससे फोटो खराब दिख सकती है!)।

### 3. \`background-position\`
यह बैकग्राउंड इमेज की शुरुआती स्थिति (position) तय करता है।
* **कीवर्ड्स:** \`center\`, \`top left\`, \`bottom right\`.
* **निर्देशांक (Coordinates):** \`50% 50%\` या \`20px 40px\`.

### 4. \`background-attachment\`
यह तय करता है कि पेज स्क्रॉल करने पर बैकग्राउंड इमेज साथ में स्क्रॉल होगी या अपनी जगह स्थिर रहेगी।
* \`scroll\`: (डिफ़ॉल्ट) पेज के साथ स्क्रॉल होती है।
* \`fixed\`: इमेज स्क्रीन पर लॉक हो जाती है, जिससे एक शानदार **Parallax स्क्रॉलिंग इफ़ेक्ट** बनता है!

---

### ऑल-इन-वन \`background\` शार्टहैंड
एक ही बैनर के लिए 6 अलग-अलग बैकग्राउंड लाइनें लिखना उबाऊ है। आप उन्हें \`background\` शार्टहैंड का उपयोग करके एक ही साफ़ लाइन में जोड़ सकते हैं!

#### शार्टहैंड सिंटैक्स का क्रम:
\`\`\`css
background: color image repeat attachment position / size;
\`\`\`

#### शार्टहैंड का उदाहरण:
\`\`\`css
/* लंबा तरीका: */
div {
  background-color: #000;
  background-image: url('banner.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* शार्टहैंड तरीका (बिल्कुल समान!): */
div {
  background: #000 url('banner.jpg') no-repeat center / cover;
}
\`\`\`
*(नोट: ध्यान दें कि position और size को अलग करने के लिए बीच में स्लैश \`/\` लगाया गया है!)*

[[SANDBOX_0]]`,
      sandboxes: [
        {
          html: `<div class="card cover-demo">\n  <h3>background-size: cover;</h3>\n  <p>Fills entire box nicely.</p>\n</div>\n\n<div class="card contain-demo">\n  <h3>background-size: contain;</h3>\n  <p>Fits image without cropping.</p>\n</div>`,
          css: `.card {\n  height: 140px;\n  color: white;\n  padding: 15px;\n  margin-bottom: 15px;\n  border-radius: 8px;\n  border: 2px solid #bdc3c7;\n  text-shadow: 1px 1px 3px black;\n}\n\n/* Using Shorthand with Cover */\n.cover-demo {\n  background: #2c3e50 url("https://ik.imagekit.io/Sankit/background.jpg") no-repeat center / cover;\n}\n\n/* Using Shorthand with Contain */\n.contain-demo {\n  background: #1a252f url("https://ik.imagekit.io/Sankit/background.jpg") no-repeat center / contain;\n}`
        }
      ]
    }
  ]
};

export const chapter03Quiz = [
  {
    id: "q1",
    question_en: "Which color format uses a hash (#) followed by 6 characters (e.g., #FF0000)?",
    question_hi: "कौन सा कलर फॉर्मेट एक हैश (#) और उसके बाद 6 अक्षरों का उपयोग करता है (जैसे #FF0000)?",
    options_en: [
      "RGB",
      "HEX (Hexadecimal)",
      "HSL",
      "Color Keyword"
    ],
    options_hi: [
      "RGB",
      "HEX (हेक्साडेसिमल)",
      "HSL",
      "रंग का नाम (Keyword)"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q2",
    question_en: "What does the letter 'A' stand for in RGBA and HSLA color formats?",
    question_hi: "RGBA और HSLA कलर फॉर्मेट में 'A' अक्षर का क्या अर्थ है?",
    options_en: [
      "Alignment",
      "Angle",
      "Alpha (Opacity/Transparency)",
      "Absolute"
    ],
    options_hi: [
      "Alignment (संरेखण)",
      "Angle (कोण)",
      "Alpha (पारदर्शिता / Opacity)",
      "Absolute (पूर्ण)"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q3",
    question_en: "What value of Alpha in RGBA makes an element completely invisible (transparent)?",
    question_hi: "RGBA में Alpha का कौन सा मान किसी एलिमेंट को पूरी तरह से अदृश्य (transparent) बना देता है?",
    options_en: [
      "1.0",
      "100",
      "0.0",
      "0.5"
    ],
    options_hi: [
      "1.0",
      "100",
      "0.0",
      "0.5"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q4",
    question_en: "Which CSS property is required to display an image as a background?",
    question_hi: "किसी इमेज को बैकग्राउंड के रूप में दिखाने के लिए किस CSS प्रॉपर्टी की आवश्यकता होती है?",
    options_en: [
      "background-color",
      "background-image",
      "img-source",
      "background-src"
    ],
    options_hi: [
      "background-color",
      "background-image",
      "img-source",
      "background-src"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q5",
    question_en: "By default, how does a web browser display a background image that is smaller than its container?",
    question_hi: "डिफ़ॉल्ट रूप से, वेब ब्राउज़र उस बैकग्राउंड इमेज को कैसे दिखाता है जो अपने कंटेनर से छोटी होती है?",
    options_en: [
      "It stretches the image once",
      "It hides the image",
      "It repeats (tiles) the image horizontally and vertically",
      "It places it only in the top-right corner"
    ],
    options_hi: [
      "यह इमेज को एक बार खींचकर बड़ा कर देता है",
      "यह इमेज को छिपा देता है",
      "यह इमेज को क्षैतिज और लंबवत (horizontally and vertically) दोनों दिशाओं में दोहराता (repeat करता) है",
      "यह इसे केवल ऊपरी-दाएँ कोने में रखता है"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q6",
    question_en: "Which CSS function creates a background gradient transitioning in a straight line?",
    question_hi: "कौन सा CSS फ़ंक्शन एक सीधी रेखा में बदलने वाला बैकग्राउंड ग्रेडिएंट बनाता है?",
    options_en: [
      "radial-gradient()",
      "straight-gradient()",
      "conic-gradient()",
      "linear-gradient()"
    ],
    options_hi: [
      "radial-gradient()",
      "straight-gradient()",
      "conic-gradient()",
      "linear-gradient()"
    ],
    correctAnswerIndex: 3
  },
  {
    id: "q7",
    question_en: "Does the browser treat a CSS gradient as a color or as an image?",
    question_hi: "क्या वेब ब्राउज़र CSS ग्रेडिएंट को एक रंग (color) मानता है या एक इमेज (image)?",
    options_en: [
      "As a text property",
      "As a color (use background-color)",
      "As an image (use background-image)",
      "As an SVG element"
    ],
    options_hi: [
      "एक टेक्स्ट प्रॉपर्टी के रूप में",
      "एक रंग के रूप में (background-color का उपयोग करें)",
      "एक इमेज के रूप में (background-image का उपयोग करें)",
      "एक SVG एलिमेंट के रूप में"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q8",
    question_en: "Which value of 'background-size' scales the image to completely cover the container without altering its aspect ratio?",
    question_hi: "'background-size' का कौन सा मान इमेज के अनुपात (aspect ratio) को बिगाड़े बिना पूरे कंटेनर को पूरी तरह ढक लेता है?",
    options_en: [
      "contain",
      "cover",
      "100% 100%",
      "auto"
    ],
    options_hi: [
      "contain",
      "cover",
      "100% 100%",
      "auto"
    ],
    correctAnswerIndex: 1
  },
  {
    id: "q9",
    question_en: "Which property locks a background image in place so it doesn't move when the user scrolls the page (Parallax effect)?",
    question_hi: "कौन सी प्रॉपर्टी बैकग्राउंड इमेज को अपनी जगह पर लॉक कर देती है ताकि पेज स्क्रॉल करने पर वह न हिले (Parallax इफ़ेक्ट)?",
    options_en: [
      "background-repeat: no-repeat;",
      "background-position: fixed;",
      "background-attachment: fixed;",
      "background-scroll: false;"
    ],
    options_hi: [
      "background-repeat: no-repeat;",
      "background-position: fixed;",
      "background-attachment: fixed;",
      "background-scroll: false;"
    ],
    correctAnswerIndex: 2
  },
  {
    id: "q10",
    question_en: "In the shorthand 'background: #000 url(\"img.jpg\") no-repeat center / cover;', what character separates position and size?",
    question_hi: "शार्टहैंड 'background: #000 url(\"img.jpg\") no-repeat center / cover;' में, position और size को कौन सा चिह्न अलग करता है?",
    options_en: [
      ", (Comma)",
      "/ (Forward Slash)",
      "- (Hyphen)",
      ": (Colon)"
    ],
    options_hi: [
      ", (अल्पविराम / Comma)",
      "/ (स्लैश / Forward Slash)",
      "- (हाइफ़न)",
      ": (कोलन)"
    ],
    correctAnswerIndex: 1
  }
];

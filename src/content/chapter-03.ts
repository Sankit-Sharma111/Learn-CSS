export const chapter03 = {
  "id": "chapter-3-colors-backgrounds",
  "title_en": "Chapter 3: Colors & Backgrounds",
  "title_hi": "अध्याय 3: रंग और पृष्ठभूमि",
  "topics": [
    {
      "id": "css-colors",
      "title_en": "CSS Colors",
      "title_hi": "CSS रंग",
      "content_en": "Colors are fundamental to web design, and CSS provides several ways to define and apply them to various elements. Understanding these methods allows for precise control over your website's visual appearance.\n\n### Color Keywords\nCSS offers a list of predefined color names (keywords) that are easy to use and understand. These include common colors like `red`, `blue`, `green`, `black`, `white`, and many more specific names like `tomato`, `dodgerblue`, `mediumseagreen`.\n\n```css\np {\n  color: blue; /* Sets text color to blue */\n}\n\ndiv {\n  background-color: lightgray; /* Sets background color to light gray */\n}\n```\n\n### Hexadecimal Colors\nHexadecimal colors are specified using a `#` symbol followed by six hexadecimal digits (0-9, A-F). Each pair of digits represents the red, green, and blue components of the color, respectively. A shorter three-digit format (`#RGB`) can be used when each pair of digits is the same (e.g., `#FF00CC` can be `#F0C`).\n\n*   `#RRGGBB`: `RR` (red), `GG` (green), `BB` (blue)\n*   `#RGB`: Shorthand for `#RRGGBB` where `R`, `G`, `B` are repeated (e.g., `#F0C` is `#FF00CC`)\n\n```css\nh1 {\n  color: #FF0000; /* Pure red */\n}\n\nspan {\n  background-color: #336699; /* A shade of blue */\n}\n\n.short-hex {\n  color: #0F0; /* Equivalent to #00FF00 (pure green) */\n}\n```\n\n### RGB and RGBA Colors\nRGB (Red, Green, Blue) colors are defined using the `rgb()` function, which takes three integer values from 0 to 255, representing the intensity of red, green, and blue light. `rgba()` extends this by adding an alpha channel for opacity.\n\n*   `rgb(red, green, blue)`: `red`, `green`, `blue` values from 0 to 255.\n*   `rgba(red, green, blue, alpha)`: `alpha` value from 0.0 (fully transparent) to 1.0 (fully opaque).\n\n```css\n.box-rgb {\n  background-color: rgb(255, 99, 71); /* Tomato color */\n}\n\n.box-rgba {\n  background-color: rgba(0, 0, 255, 0.5); /* 50% opaque blue */\n}\n```\n\n### HSL and HSLA Colors\nHSL (Hue, Saturation, Lightness) colors are defined using the `hsl()` function. This model is often considered more intuitive for humans as it relates to how we perceive color.\n\n*   `hue`: A degree on the color wheel from 0 to 360 (0/360=red, 120=green, 240=blue).\n*   `saturation`: A percentage from 0% (grayscale) to 100% (full color).\n*   `lightness`: A percentage from 0% (black) to 100% (white).\n*   `hsla(hue, saturation, lightness, alpha)`: Adds an `alpha` channel for opacity.\n\n```css\n.box-hsl {\n  background-color: hsl(120, 100%, 50%); /* Pure green */\n}\n\n.box-hsla {\n  background-color: hsla(240, 100%, 50%, 0.7); /* 70% opaque blue */\n}\n```\n\n::tip\nWhen choosing a color format, consider your needs. Hexadecimal is concise for solid colors. RGB/RGBA is great for precise color mixing and transparency. HSL/HSLA is often preferred for creating color palettes and adjusting lightness/darkness or saturation easily.\n:::\n\n[[SANDBOX_0]]",
      "content_hi": "वेब डिज़ाइन के लिए रंग मौलिक हैं, और CSS उन्हें विभिन्न elements पर परिभाषित और लागू करने के कई तरीके प्रदान करता है। इन तरीकों को समझने से आपकी वेबसाइट की दृश्य उपस्थिति पर सटीक नियंत्रण मिलता है।\n\n### Color Keywords\nCSS पूर्वनिर्धारित रंग नामों (keywords) की एक सूची प्रदान करता है जो उपयोग करने और समझने में आसान हैं। इनमें `red`, `blue`, `green`, `black`, `white` जैसे सामान्य रंग और `tomato`, `dodgerblue`, `mediumseagreen` जैसे कई विशिष्ट नाम शामिल हैं।\n\n```css\np {\n  color: blue; /* टेक्स्ट का रंग नीला सेट करता है */\n}\n\ndiv {\n  background-color: lightgray; /* बैकग्राउंड का रंग हल्का ग्रे सेट करता है */\n}\n```\n\n### Hexadecimal Colors\nHexadecimal colors को `#` प्रतीक के बाद छह हेक्साडेसिमल अंकों (0-9, A-F) का उपयोग करके निर्दिष्ट किया जाता है। अंकों का प्रत्येक जोड़ा क्रमशः रंग के लाल, हरे और नीले घटकों का प्रतिनिधित्व करता है। एक छोटा तीन-अंकीय प्रारूप (`#RGB`) का उपयोग तब किया जा सकता है जब अंकों का प्रत्येक जोड़ा समान हो (उदाहरण के लिए, `#FF00CC` को `#F0C` लिखा जा सकता है)।\n\n*   `#RRGGBB`: `RR` (लाल), `GG` (हरा), `BB` (नीला)\n*   `#RGB`: `#RRGGBB` के लिए शॉर्टहैंड जहाँ `R`, `G`, `B` दोहराए जाते हैं (उदाहरण के लिए, `#F0C` `#FF00CC` है)\n\n```css\nh1 {\n  color: #FF0000; /* शुद्ध लाल */\n}\n\nspan {\n  background-color: #336699; /* नीले रंग का एक शेड */\n}\n\n.short-hex {\n  color: #0F0; /* #00FF00 (शुद्ध हरा) के बराबर */\n}\n```\n\n### RGB और RGBA Colors\nRGB (Red, Green, Blue) colors को `rgb()` फ़ंक्शन का उपयोग करके परिभाषित किया जाता है, जो 0 से 255 तक के तीन पूर्णांक मान लेता है, जो लाल, हरे और नीले प्रकाश की तीव्रता का प्रतिनिधित्व करते हैं। `rgba()` इसमें अपारदर्शिता (opacity) के लिए एक अल्फा चैनल जोड़कर इसे विस्तारित करता है।\n\n*   `rgb(red, green, blue)`: `red`, `green`, `blue` मान 0 से 255 तक।\n*   `rgba(red, green, blue, alpha)`: `alpha` मान 0.0 (पूरी तरह से पारदर्शी) से 1.0 (पूरी तरह से अपारदर्शी) तक।\n\n```css\n.box-rgb {\n  background-color: rgb(255, 99, 71); /* टमाटर का रंग */\n}\n\n.box-rgba {\n  background-color: rgba(0, 0, 255, 0.5); /* 50% अपारदर्शी नीला */\n}\n```\n\n### HSL और HSLA Colors\nHSL (Hue, Saturation, Lightness) colors को `hsl()` फ़ंक्शन का उपयोग करके परिभाषित किया जाता है। इस मॉडल को अक्सर मनुष्यों के लिए अधिक सहज माना जाता है क्योंकि यह इस बात से संबंधित है कि हम रंग को कैसे समझते हैं।\n\n*   `hue`: कलर व्हील पर 0 से 360 तक की डिग्री (0/360=लाल, 120=हरा, 240=नीला)।\n*   `saturation`: 0% (ग्रेस्केल) से 100% (पूर्ण रंग) तक का प्रतिशत।\n*   `lightness`: 0% (काला) से 100% (सफेद) तक का प्रतिशत।\n*   `hsla(hue, saturation, lightness, alpha)`: अपारदर्शिता के लिए एक `alpha` चैनल जोड़ता है।\n\n```css\n.box-hsl {\n  background-color: hsl(120, 100%, 50%); /* शुद्ध हरा */\n}\n\n.box-hsla {\n  background-color: hsla(240, 100%, 50%, 0.7); /* 70% अपारदर्शी नीला */\n}\n```\n\n::tip\nरंग प्रारूप चुनते समय, अपनी आवश्यकताओं पर विचार करें। ठोस रंगों के लिए हेक्साडेसिमल संक्षिप्त है। RGB/RGBA सटीक रंग मिश्रण और पारदर्शिता के लिए बहुत अच्छा है। HSL/HSLA को अक्सर रंग पैलेट बनाने और आसानी से हल्कापन/गहरापन या संतृप्ति समायोजित करने के लिए पसंद किया जाता है।\n:::\n\n[[SANDBOX_0]]",
      "sandboxes": [
        {
          "css": "body { font-family: sans-serif; display: flex; flex-direction: column; gap: 10px; padding: 20px; }\n.color-box { width: 150px; height: 50px; display: flex; align-items: center; justify-content: center; color: white; border-radius: 5px; font-weight: bold; }\n.keyword { background-color: dodgerblue; }\n.hex { background-color: #FF5733; }\n.rgb { background-color: rgb(60, 179, 113); }\n.rgba { background-color: rgba(147, 112, 219, 0.7); }\n.hsl { background-color: hsl(300, 70%, 60%); }\n.hsla { background-color: hsla(45, 100%, 50%, 0.8); color: black; }",
          "html": "<div class=\"color-box keyword\">Dodgerblue (Keyword)</div>\n<div class=\"color-box hex\">#FF5733 (Hex)</div>\n<div class=\"color-box rgb\">rgb(60, 179, 113) (RGB)</div>\n<div class=\"color-box rgba\">rgba(147, 112, 219, 0.7) (RGBA)</div>\n<div class=\"color-box hsl\">hsl(300, 70%, 60%) (HSL)</div>\n<div class=\"color-box hsla\">hsla(45, 100%, 50%, 0.8) (HSLA)</div>"
        }
      ]
    },
    {
      "id": "background",
      "title_en": "Background",
      "title_hi": "पृष्ठभूमि",
      "content_en": "CSS background properties allow you to control the background of an element, including its color, image, how the image repeats, its position, and whether it scrolls with the content.\n\n### `background-color`\nThis property sets the solid color of an element's background. It accepts any valid CSS color value (keyword, hex, RGB, HSL, etc.).\n\n```css\ndiv {\n  background-color: #f0f0f0;\n}\n\nbody {\n  background-color: lightblue;\n}\n```\n\n### `background-image`\nThis property sets one or more background images for an element. The value is typically `url('path/to/image.jpg')`. You can specify multiple images separated by commas.\n\n```css\n.hero-section {\n  background-image: url('https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Hero');\n}\n```\n\n### `background-repeat`\nControls how a background image repeats. Common values include:\n*   `repeat`: Repeats the image both horizontally and vertically (default).\n*   `repeat-x`: Repeats the image horizontally only.\n*   `repeat-y`: Repeats the image vertically only.\n*   `no-repeat`: Displays the image only once.\n\n```css\n.pattern-bg {\n  background-image: url('https://via.placeholder.com/50/0000FF/FFFFFF?text=P');\n  background-repeat: repeat;\n}\n\n.single-logo {\n  background-image: url('https://via.placeholder.com/100/00FF00/FFFFFF?text=Logo');\n  background-repeat: no-repeat;\n}\n```\n\n### `background-position`\nSets the initial position of each background image. You can use keywords (e.g., `top`, `center`, `bottom`, `left`, `right`), percentages, or length units (e.g., `px`, `em`).\n\n```css\n.centered-bg {\n  background-image: url('https://via.placeholder.com/150/FFFF00/000000?text=Center');\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.top-right-bg {\n  background-image: url('https://via.placeholder.com/100/FF00FF/FFFFFF?text=TR');\n  background-repeat: no-repeat;\n  background-position: top right;\n}\n```\n\n### `background-attachment`\nDetermines whether a background image scrolls with the rest of the page or is fixed in place.\n*   `scroll`: The background image scrolls with the element's content (default).\n*   `fixed`: The background image is fixed relative to the viewport, even if the element's content scrolls.\n*   `local`: The background image scrolls with the element's contents.\n\n```css\n.fixed-parallax {\n  background-image: url('https://via.placeholder.com/1200x600/87CEEB/FFFFFF?text=Fixed+Background');\n  background-attachment: fixed;\n  background-size: cover;\n}\n```\n\n### `background` Shorthand Property\nThe `background` shorthand property allows you to set all background properties in a single declaration. The order of values is generally:\n\n`background: [background-color] [background-image] [background-repeat] [background-attachment] [background-position];`\n\nNot all values are required, and you can omit any that you don't want to set.\n\n```css\n.shorthand-example {\n  background: lightcoral url('https://via.placeholder.com/50/000000/FFFFFF?text=S') no-repeat center fixed;\n}\n```\n\n::note\nWhen using the `background` shorthand, any individual background properties set previously will be overridden. It's a powerful way to define backgrounds concisely, but be mindful of its cascading effect.\n:::\n\n[[SANDBOX_0]]",
      "content_hi": "CSS background properties आपको एक element की पृष्ठभूमि को नियंत्रित करने की अनुमति देते हैं, जिसमें उसका रंग, छवि, छवि कैसे दोहराई जाती है, उसकी स्थिति और क्या वह content के साथ स्क्रॉल करती है, शामिल है।\n\n### `background-color`\nयह property एक element की पृष्ठभूमि का ठोस रंग सेट करती है। यह कोई भी वैध CSS color value (keyword, hex, RGB, HSL, आदि) स्वीकार करती है।\n\n```css\ndiv {\n  background-color: #f0f0f0;\n}\n\nbody {\n  background-color: lightblue;\n}\n```\n\n### `background-image`\nयह property एक element के लिए एक या अधिक background images सेट करती है। मान आमतौर पर `url('path/to/image.jpg')` होता है। आप अल्पविराम से अलग करके कई images निर्दिष्ट कर सकते हैं।\n\n```css\n.hero-section {\n  background-image: url('https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Hero');\n}\n```\n\n### `background-repeat`\nनियंत्रित करता है कि एक background image कैसे दोहराई जाती है। सामान्य मानों में शामिल हैं:\n*   `repeat`: छवि को क्षैतिज और लंबवत दोनों तरह से दोहराता है (डिफ़ॉल्ट)।\n*   `repeat-x`: छवि को केवल क्षैतिज रूप से दोहराता है।\n*   `repeat-y`: छवि को केवल लंबवत रूप से दोहराता है।\n*   `no-repeat`: छवि को केवल एक बार प्रदर्शित करता है।\n\n```css\n.pattern-bg {\n  background-image: url('https://via.placeholder.com/50/0000FF/FFFFFF?text=P');\n  background-repeat: repeat;\n}\n\n.single-logo {\n  background-image: url('https://via.placeholder.com/100/00FF00/FFFFFF?text=Logo');\n  background-repeat: no-repeat;\n}\n```\n\n### `background-position`\nप्रत्येक background image की प्रारंभिक स्थिति सेट करता है। आप keywords (जैसे, `top`, `center`, `bottom`, `left`, `right`), प्रतिशत, या लंबाई इकाइयों (जैसे, `px`, `em`) का उपयोग कर सकते हैं।\n\n```css\n.centered-bg {\n  background-image: url('https://via.placeholder.com/150/FFFF00/000000?text=Center');\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.top-right-bg {\n  background-image: url('https://via.placeholder.com/100/FF00FF/FFFFFF?text=TR');\n  background-repeat: no-repeat;\n  background-position: top right;\n}\n```\n\n### `background-attachment`\nनिर्धारित करता है कि एक background image पृष्ठ के बाकी हिस्सों के साथ स्क्रॉल करती है या अपनी जगह पर स्थिर रहती है।\n*   `scroll`: background image element के content के साथ स्क्रॉल करती है (डिफ़ॉल्ट)।\n*   `fixed`: background image viewport के सापेक्ष स्थिर रहती है, भले ही element का content स्क्रॉल करे।\n*   `local`: background image element के content के साथ स्क्रॉल करती है।\n\n```css\n.fixed-parallax {\n  background-image: url('https://via.placeholder.com/1200x600/87CEEB/FFFFFF?text=Fixed+Background');\n  background-attachment: fixed;\n  background-size: cover;\n}\n```\n\n### `background` Shorthand Property\n`background` shorthand property आपको एक ही घोषणा में सभी background properties सेट करने की अनुमति देती है। मानों का क्रम आम तौर पर इस प्रकार होता है:\n\n`background: [background-color] [background-image] [background-repeat] [background-attachment] [background-position];`\n\nसभी मान आवश्यक नहीं हैं, और आप किसी भी मान को छोड़ सकते हैं जिसे आप सेट नहीं करना चाहते हैं।\n\n```css\n.shorthand-example {\n  background: lightcoral url('https://via.placeholder.com/50/000000/FFFFFF?text=S') no-repeat center fixed;\n}\n```\n\n::note\n`background` shorthand का उपयोग करते समय, पहले से सेट की गई कोई भी व्यक्तिगत background properties ओवरराइड हो जाएंगी। यह backgrounds को संक्षिप्त रूप से परिभाषित करने का एक शक्तिशाली तरीका है, लेकिन इसके कैस्केडिंग प्रभाव के प्रति सचेत रहें।\n:::\n\n[[SANDBOX_0]]",
      "sandboxes": [
        {
          "css": "body { font-family: sans-serif; margin: 0; padding: 0; }\n.box { width: 100%; height: 200px; margin-bottom: 20px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2em; text-shadow: 1px 1px 2px black; }\n.box-color { background-color: #e0f7fa; color: #333; text-shadow: none; }\n.box-image-repeat { background-image: url('https://via.placeholder.com/50/FFD700/000000?text=P'); background-repeat: repeat; }\n.box-image-no-repeat { background-image: url('https://via.placeholder.com/100/FF6347/FFFFFF?text=Logo'); background-repeat: no-repeat; background-position: center; }\n.box-image-position { background-image: url('https://via.placeholder.com/100/8A2BE2/FFFFFF?text=Pos'); background-repeat: no-repeat; background-position: 90% 20%; }\n.box-attachment-scroll { background-image: url('https://via.placeholder.com/1200x600/ADD8E6/FFFFFF?text=Scroll'); background-repeat: no-repeat; background-size: cover; background-attachment: scroll; height: 300px; overflow: auto; }\n.box-attachment-fixed { background-image: url('https://via.placeholder.com/1200x600/90EE90/FFFFFF?text=Fixed'); background-repeat: no-repeat; background-size: cover; background-attachment: fixed; height: 300px; }\n.box-shorthand { background: linear-gradient(to right, #ff7e5f, #feb47b) url('https://via.placeholder.com/30/FFFFFF/000000?text=S') no-repeat 10px center; color: #333; text-shadow: none; }\n.content-scroll { height: 150px; overflow-y: scroll; padding: 10px; background-color: rgba(255,255,255,0.8); color: black; border-radius: 5px; margin: 20px; }\n",
          "html": "<div class=\"box box-color\">Background Color</div>\n<div class=\"box box-image-repeat\">Background Image (Repeat)</div>\n<div class=\"box box-image-no-repeat\">Background Image (No Repeat, Center)</div>\n<div class=\"box box-image-position\">Background Image (Custom Position)</div>\n<div class=\"box box-attachment-scroll\">Background Attachment (Scroll)\n  <div class=\"content-scroll\">\n    <p>Scroll down to see the background image scroll with this content.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  </div>\n</div>\n<div class=\"box box-attachment-fixed\">Background Attachment (Fixed)</div>\n<div class=\"box box-shorthand\">Background Shorthand</div>"
        }
      ]
    },
    {
      "id": "background-image",
      "title_en": "Background Image",
      "title_hi": "पृष्ठभूमि छवि",
      "content_en": "Background images are a powerful way to add visual appeal and branding to your web pages. CSS provides extensive control over how these images are displayed.\n\n### Setting a Background Image\nTo set a background image, use the `background-image` property with the `url()` function, pointing to the image file. Ensure the path is correct, whether it's relative or absolute.\n\n```css\nbody {\n  background-image: url('/images/background-pattern.png'); /* Relative path */\n}\n\n.header {\n  background-image: url('https://example.com/assets/header-bg.jpg'); /* Absolute URL */\n}\n```\n\n### `background-repeat` Revisited\nAs discussed, `background-repeat` controls image tiling. For background images, `no-repeat` is very common when you want a single image, like a logo or a hero image.\n\n```css\n.logo-container {\n  background-image: url('https://via.placeholder.com/100/0000FF/FFFFFF?text=Logo');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n```\n\n### `background-size`\nThis property specifies the size of the background image. It's crucial for making images fit well within their containers.\n\n*   `auto`: The background image's original size (default).\n*   `cover`: Scales the image to cover the entire container, potentially cropping parts of the image if its aspect ratio doesn't match the container's.\n*   `contain`: Scales the image to fit entirely within the container, maintaining its aspect ratio. This might leave empty space (letterboxing).\n*   `length` (e.g., `200px 100px`): Sets explicit width and height.\n*   `percentage` (e.g., `50% 100%`): Sets width and height relative to the element's size.\n\n```css\n.full-width-bg {\n  background-image: url('https://via.placeholder.com/1200x600/FF5733/FFFFFF?text=Cover');\n  background-size: cover;\n  background-position: center;\n}\n\n.contained-icon {\n  background-image: url('https://via.placeholder.com/100/33FF57/FFFFFF?text=Icon');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n```\n\n### `background-position` Revisited\nBeyond simple keywords, `background-position` can take two values (horizontal and vertical) or even three/four values for more complex positioning relative to corners.\n\n*   `background-position: 20px 30px;` (20px from left, 30px from top)\n*   `background-position: right 10px bottom 20px;` (10px from right, 20px from bottom)\n\n```css\n.custom-pos-bg {\n  background-image: url('https://via.placeholder.com/80/FFC300/000000?text=Dot');\n  background-repeat: no-repeat;\n  background-position: 10% 80%;\n}\n```\n\n### `background-attachment` Revisited\n`fixed` attachment is often used to create parallax scrolling effects, where the background image appears to move slower than the foreground content.\n\n```css\n.parallax-section {\n  background-image: url('https://via.placeholder.com/1600x900/4CAF50/FFFFFF?text=Parallax');\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  height: 400px; /* Needs height to show effect */\n}\n```\n\n### Multiple Background Images\nYou can layer multiple background images on a single element by separating their `url()` values with commas. The first image listed will be on top, and subsequent images will be layered underneath.\n\n```css\n.layered-bg {\n  background-image: url('https://via.placeholder.com/100/FF0000/FFFFFF?text=Top'),\n                    url('https://via.placeholder.com/200/00FF00/FFFFFF?text=Mid'),\n                    url('https://via.placeholder.com/300/0000FF/FFFFFF?text=Bot');\n  background-repeat: no-repeat, no-repeat, no-repeat;\n  background-position: top left, center, bottom right;\n  background-size: 50px, 100px, 150px;\n}\n```\n\n::warning\nUsing very large or unoptimized background images can significantly impact page load times and performance. Always optimize your images for the web (compress, use appropriate formats like WebP) to ensure a smooth user experience.\n:::\n\n[[SANDBOX_0]]",
      "content_hi": "Background images आपकी वेब पेजों में दृश्य अपील और ब्रांडिंग जोड़ने का एक शक्तिशाली तरीका हैं। CSS इन images को कैसे प्रदर्शित किया जाता है, इस पर व्यापक नियंत्रण प्रदान करता है।\n\n### Setting a Background Image\nएक background image सेट करने के लिए, `url()` फ़ंक्शन के साथ `background-image` property का उपयोग करें, जो image फ़ाइल को इंगित करता है। सुनिश्चित करें कि पथ सही है, चाहे वह relative हो या absolute।\n\n```css\nbody {\n  background-image: url('/images/background-pattern.png'); /* Relative path */\n}\n\n.header {\n  background-image: url('https://example.com/assets/header-bg.jpg'); /* Absolute URL */\n}\n```\n\n### `background-repeat` Revisited\nजैसा कि चर्चा की गई है, `background-repeat` image tiling को नियंत्रित करता है। background images के लिए, `no-repeat` बहुत आम है जब आप एक ही image चाहते हैं, जैसे कि एक logo या एक hero image।\n\n```css\n.logo-container {\n  background-image: url('https://via.placeholder.com/100/0000FF/FFFFFF?text=Logo');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n```\n\n### `background-size`\nयह property background image का आकार निर्दिष्ट करती है। images को उनके containers में अच्छी तरह से फिट करने के लिए यह महत्वपूर्ण है।\n\n*   `auto`: background image का मूल आकार (डिफ़ॉल्ट)।\n*   `cover`: image को पूरे container को कवर करने के लिए स्केल करता है, यदि उसका aspect ratio container के aspect ratio से मेल नहीं खाता है तो image के कुछ हिस्सों को क्रॉप कर सकता है।\n*   `contain`: image को उसके aspect ratio को बनाए रखते हुए, container के भीतर पूरी तरह से फिट होने के लिए स्केल करता है। इससे खाली जगह (letterboxing) रह सकती है।\n*   `length` (जैसे, `200px 100px`): स्पष्ट चौड़ाई और ऊंचाई सेट करता है।\n*   `percentage` (जैसे, `50% 100%`): element के आकार के सापेक्ष चौड़ाई और ऊंचाई सेट करता है।\n\n```css\n.full-width-bg {\n  background-image: url('https://via.placeholder.com/1200x600/FF5733/FFFFFF?text=Cover');\n  background-size: cover;\n  background-position: center;\n}\n\n.contained-icon {\n  background-image: url('https://via.placeholder.com/100/33FF57/FFFFFF?text=Icon');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n```\n\n### `background-position` Revisited\nसरल keywords से परे, `background-position` दो मान (क्षैतिज और लंबवत) या कोनों के सापेक्ष अधिक जटिल स्थिति के लिए तीन/चार मान भी ले सकता है।\n\n*   `background-position: 20px 30px;` (बाएं से 20px, ऊपर से 30px)\n*   `background-position: right 10px bottom 20px;` (दाएं से 10px, नीचे से 20px)\n\n```css\n.custom-pos-bg {\n  background-image: url('https://via.placeholder.com/80/FFC300/000000?text=Dot');\n  background-repeat: no-repeat;\n  background-position: 10% 80%;\n}\n```\n\n### `background-attachment` Revisited\n`fixed` attachment का उपयोग अक्सर parallax scrolling effects बनाने के लिए किया जाता है, जहाँ background image foreground content की तुलना में धीमी गति से चलती हुई प्रतीत होती है।\n\n```css\n.parallax-section {\n  background-image: url('https://via.placeholder.com/1600x900/4CAF50/FFFFFF?text=Parallax');\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  height: 400px; /* प्रभाव दिखाने के लिए ऊंचाई की आवश्यकता है */\n}\n```\n\n### Multiple Background Images\nआप एक ही element पर कई background images को उनके `url()` मानों को अल्पविराम से अलग करके परत कर सकते हैं। सूचीबद्ध पहली image शीर्ष पर होगी, और बाद की images उसके नीचे परत की जाएंगी।\n\n```css\n.layered-bg {\n  background-image: url('https://via.placeholder.com/100/FF0000/FFFFFF?text=Top'),\n                    url('https://via.placeholder.com/200/00FF00/FFFFFF?text=Mid'),\n                    url('https://via.placeholder.com/300/0000FF/FFFFFF?text=Bot');\n  background-repeat: no-repeat, no-repeat, no-repeat;\n  background-position: top left, center, bottom right;\n  background-size: 50px, 100px, 150px;\n}\n```\n\n::warning\nबहुत बड़ी या unoptimized background images का उपयोग करने से पेज लोड समय और प्रदर्शन पर महत्वपूर्ण प्रभाव पड़ सकता है। एक सहज उपयोगकर्ता अनुभव सुनिश्चित करने के लिए हमेशा अपनी images को वेब के लिए optimize करें (compress करें, WebP जैसे उपयुक्त प्रारूपों का उपयोग करें)।\n:::\n\n[[SANDBOX_0]]",
      "sandboxes": [
        {
          "css": "body { font-family: sans-serif; margin: 0; padding: 0; }\n.container { width: 100%; height: 250px; margin-bottom: 20px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2em; text-shadow: 1px 1px 2px black; background-color: #f0f0f0; }\n.bg-image-no-repeat { background-image: url('https://via.placeholder.com/150/FFD700/000000?text=Logo'); background-repeat: no-repeat; background-position: center; }\n.bg-size-cover { background-image: url('https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Cover'); background-size: cover; background-position: center; }\n.bg-size-contain { background-image: url('https://via.placeholder.com/200/33FF57/FFFFFF?text=Contain'); background-size: contain; background-repeat: no-repeat; background-position: center; }\n.bg-size-custom { background-image: url('https://via.placeholder.com/100/8A2BE2/FFFFFF?text=Custom'); background-size: 100px 150px; background-repeat: no-repeat; background-position: top left; }\n.bg-multiple { \n  background-image: url('https://via.placeholder.com/50/FF0000/FFFFFF?text=1'), url('https://via.placeholder.com/70/00FF00/FFFFFF?text=2'), url('https://via.placeholder.com/90/0000FF/FFFFFF?text=3');\n  background-repeat: no-repeat, no-repeat, no-repeat;\n  background-position: 10px 10px, center, bottom right;\n  background-size: 40px, 60px, 80px;\n  background-color: #e0f7fa;\n  color: #333; text-shadow: none;\n}\n.parallax-effect { \n  background-image: url('https://via.placeholder.com/1600x900/4CAF50/FFFFFF?text=Parallax');\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  height: 400px; \n  margin-top: 20px;\n  color: white; text-shadow: 1px 1px 2px black;\n  display: flex; align-items: center; justify-content: center;\n}\n.scroll-content { height: 1000px; background-color: #f8f8f8; padding: 20px; }\n",
          "html": "<div class=\"container bg-image-no-repeat\">No Repeat, Centered</div>\n<div class=\"container bg-size-cover\">Background Size: Cover</div>\n<div class=\"container bg-size-contain\">Background Size: Contain</div>\n<div class=\"container bg-size-custom\">Background Size: Custom (100px 150px)</div>\n<div class=\"container bg-multiple\">Multiple Background Images</div>\n<div class=\"scroll-content\">Scroll down to see the fixed background effect below.\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</div>\n<div class=\"parallax-effect\">Parallax Effect (Fixed Background)</div>\n<div class=\"scroll-content\">More content to enable scrolling.\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</div>"
        }
      ]
    }
  ]
};

export const chapter03Quiz = [
  {
    "id": "q1",
    "question_en": "Which CSS property is used to set the background color of an element?",
    "question_hi": "किसी element की पृष्ठभूमि का रंग सेट करने के लिए किस CSS property का उपयोग किया जाता है?",
    "options_en": [
      "color",
      "background-color",
      "bgcolor",
      "background"
    ],
    "options_hi": [
      "color",
      "background-color",
      "bgcolor",
      "background"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "q2",
    "question_en": "What is the correct way to specify a hexadecimal color for pure red?",
    "question_hi": "शुद्ध लाल रंग के लिए हेक्साडेसिमल रंग निर्दिष्ट करने का सही तरीका क्या है?",
    "options_en": [
      "#RRGGBB",
      "#FF0000",
      "rgb(255,0,0)",
      "hsl(0,100%,50%)"
    ],
    "options_hi": [
      "#RRGGBB",
      "#FF0000",
      "rgb(255,0,0)",
      "hsl(0,100%,50%)"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "q3",
    "question_en": "Which color format allows you to specify transparency?",
    "question_hi": "कौन सा रंग प्रारूप आपको पारदर्शिता निर्दिष्ट करने की अनुमति देता है?",
    "options_en": [
      "Hexadecimal",
      "RGB",
      "RGBA",
      "HSL"
    ],
    "options_hi": [
      "हेक्साडेसिमल",
      "RGB",
      "RGBA",
      "HSL"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "q4",
    "question_en": "What does `background-repeat: no-repeat;` do?",
    "question_hi": "`background-repeat: no-repeat;` क्या करता है?",
    "options_en": [
      "Repeats the image horizontally",
      "Repeats the image vertically",
      "Displays the image only once",
      "Stretches the image to fit"
    ],
    "options_hi": [
      "छवि को क्षैतिज रूप से दोहराता है",
      "छवि को लंबवत रूप से दोहराता है",
      "छवि को केवल एक बार प्रदर्शित करता है",
      "छवि को फिट करने के लिए फैलाता है"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "q5",
    "question_en": "Which `background-size` value scales the background image to cover the entire container, even if it has to crop the image?",
    "question_hi": "कौन सा `background-size` मान background image को पूरे container को कवर करने के लिए स्केल करता है, भले ही उसे image को क्रॉप करना पड़े?",
    "options_en": [
      "contain",
      "auto",
      "cover",
      "100%"
    ],
    "options_hi": [
      "contain",
      "auto",
      "cover",
      "100%"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "q6",
    "question_en": "How do you set a background image that stays in place when the user scrolls?",
    "question_hi": "आप एक background image कैसे सेट करते हैं जो उपयोगकर्ता के स्क्रॉल करने पर अपनी जगह पर स्थिर रहती है?",
    "options_en": [
      "background-attachment: scroll;",
      "background-position: fixed;",
      "background-attachment: fixed;",
      "background-repeat: no-repeat;"
    ],
    "options_hi": [
      "background-attachment: scroll;",
      "background-position: fixed;",
      "background-attachment: fixed;",
      "background-repeat: no-repeat;"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "q7",
    "question_en": "Which of the following is NOT a valid CSS color format?",
    "question_hi": "निम्नलिखित में से कौन सा एक वैध CSS रंग प्रारूप नहीं है?",
    "options_en": [
      "RGB",
      "CMYK",
      "Hexadecimal",
      "HSL"
    ],
    "options_hi": [
      "RGB",
      "CMYK",
      "हेक्साडेसिमल",
      "HSL"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "q8",
    "question_en": "How can you add multiple background images to a single element?",
    "question_hi": "आप एक ही element में कई background images कैसे जोड़ सकते हैं?",
    "options_en": [
      "Using multiple `background-image` properties",
      "Separating `url()` values with commas in `background-image`",
      "Using `background-image-1`, `background-image-2` properties",
      "It's not possible to add multiple background images"
    ],
    "options_hi": [
      "कई `background-image` properties का उपयोग करके",
      "`background-image` में `url()` मानों को अल्पविराम से अलग करके",
      "`background-image-1`, `background-image-2` properties का उपयोग करके",
      "कई background images जोड़ना संभव नहीं है"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "q9",
    "question_en": "What do HSL stand for in `hsl()` color format?",
    "question_hi": "`hsl()` रंग प्रारूप में HSL का क्या अर्थ है?",
    "options_en": [
      "High, Saturation, Lightness",
      "Hue, Saturation, Lightness",
      "Highlight, Shade, Luminosity",
      "Hot, Soft, Light"
    ],
    "options_hi": [
      "हाई, सैचुरेशन, लाइटनेस",
      "ह्यू, सैचुरेशन, लाइटनेस",
      "हाइलाइट, शेड, ल्यूमिनोसिटी",
      "हॉट, सॉफ्ट, लाइट"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "q10",
    "question_en": "In the `background` shorthand property, which component is typically listed first?",
    "question_hi": "`background` शॉर्टहैंड property में, आमतौर पर कौन सा घटक पहले सूचीबद्ध होता है?",
    "options_en": [
      "background-image",
      "background-position",
      "background-color",
      "background-repeat"
    ],
    "options_hi": [
      "background-image",
      "background-position",
      "background-color",
      "background-repeat"
    ],
    "correctAnswerIndex": 2
  }
];

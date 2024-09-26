# Project Description

Our project is a boba tea information site. We have one page explaining the bases, one page 
giving information on the toppings, and one page analyzing the sugar and ice levels. Our goal is to give a comprehensive explanation on the process of curating your perfect boba.  

# HTML DOM Tree

```# HTML DOM Tree

```sh
html
<html lang="en">
  ├── <head>
  │   ├── <meta charset="UTF-8">
  │   ├── <meta name="viewport" content="width=device-width, initial-scale=1.0">
  │   ├── <title>bubble tea</title>
  │   ├── <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css">
  │   └── <link rel="stylesheet" href="./styles/index.css">
  └── <body un-cloak bg-purple-200 h-full text-center flex select-none all:transition-400 justify-center items-center h-screen>
      ├── <div ma>
      │   ├── <div text-5xl text-pretty text-pink fw100 animate-bounce-alt animate-count-infinite animate-duration-2s>
      │   │   └── "hiiiiiiiiiiiiii"
      │   ├── <div text-lg justify-center fw300 m1 text-black>
      │   │   └── "welcome to claire's, maya's, and ethan's boba tea store"
      │   └── <div flex flex-col items-center>
      │       ├── <img justify-center fw300 m1 src="./images/catgirl.png" alt="catgirl">
      │       └── <div flex justify-center space-x-4 mt-2>
      │           ├── <a i-carbon-drink-02 text-inherit href='./claire.html'></a>
      │           ├── <a i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy text-inherit href='./ethan.html'></a>
      │           └── <a i-carbon-type-pattern text-inherit href='./mayaindex.html'></a>
      └── <div absolute bottom-5 right-0 left-0 text-center fw300>
          └── "copyright"
  
      <!-- start global scripts here -->
      ├── <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/preset-uno.global.js"></script>
      ├── <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/preset-attributify.global.js"></script>
      ├── <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/preset-icons.global.js"></script>
      └── <script>
            window.__unocss = {
              presets: [
                () => window.__unocss_runtime.presets.presetUno(),
                () => window.__unocss_runtime.presets.presetAttributify(),
                () => window.__unocss_runtime.presets.presetIcons({
                  scale: 1.2,
                  cdn: 'https://esm.sh/',
                }),
              ],
            };
          </script>
      └── <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/core.global.js"></script>
```
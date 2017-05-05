# Demo: A Simple Voice AI Bot with Web Speech API and Node.js

This demo uses the experimental Web Speech API, which is currently only supported by Chrome 25+ and Opera 27+.

[![View the demo on Vimeo](https://i.vimeocdn.com/video/633160262_480x297.jpg)](https://vimeo.com/215612852)

View the demo on [Vimeo](https://vimeo.com/215612852/)



This is how this web app works:

1. Use the Web Speech API’s `SpeechRecognition` interface to listen your voice 
2. Send your message to API.ai as a text string
3. Once API.ai returns the reply text back, use the `SpeechSynthesis` interface to give it a synthetic voice.



[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/girliemac/web-speech-ai)


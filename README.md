# Demo: A Simple Voice AI Bot with Web Speech API and Node.js

This demo uses the experimental Web Speech API, which is currently only [supported](http://caniuse.com/#search=speech) by Blink-based browsers including Chrome 25+, Opera 27+, Samsung Internet, QQ Browser, and Baidu Browser.

[![View the demo on Vimeo](https://i.vimeocdn.com/video/633160262_480x297.jpg)](https://vimeo.com/215612852)

View the demo on [Vimeo](https://vimeo.com/215612852/)



This is how this web app works:

1. Using the Web Speech API’s `SpeechRecognition` interface to listen your voice from a microphone
2. Send your message to [Dialogflow][formerly known as api.ai](https://dialogflow) (the natural language processing platform) as a text string
3. Once the AI from the Dialogflow returns the reply text back, use the `SpeechSynthesis` interface to give it a synthetic voice.

### Setup
First go to google cloud console create a project enable the project to access the dialogflow api in the api/services and the create you key (credentials) they will be automatically saved to your local system.Send the file to your workspace and enjoy.


### Try It on Your Own Server

Rename the `.env.local` to `.env` and fill the env vars:

```
PROJECT_ID //the project Id of the project you gave access to the dialogflow api
```
.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/girliemac/web-speech-ai)




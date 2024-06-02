# Demo: A Simple Voice AI Bot with Web Speech API and Node.js

This demo uses the experimental Web Speech API, which is currently only [supported](http://caniuse.com/#search=speech) by Blink-based browsers including Chrome 25+, Opera 27+, Samsung Internet, QQ Browser, and Baidu Browser.

[![View the demo on Vimeo](https://i.vimeocdn.com/video/633160262_480x297.jpg)](https://vimeo.com/215612852)

View the demo on [Vimeo](https://vimeo.com/215612852/)



This is how this web app works:

1. Using the Web Speech API’s `SpeechRecognition` interface to listen your voice from a microphone
2. Send your message to [azure openai](https://learn.microsoft.com/en-us/azure/ai-services/openai/) (the natural language processing platform) as a text string
3. Once the AI from the azure openai returns the reply text back, use the `SpeechSynthesis` interface to give it a synthetic voice.


### Try It on Your Own Server

Rename the `.env.local` to `.env` and fill the env vars:

```
OPENAI_API_KEY=
OPENAI_ENDPOINT=https://<your openai endpoint>/openai/deployments/<your deployment name>/chat/completions?api-version=<api version>
```

- You can follow this MicroSoft page to generate key and endpoint
    - https://learn.microsoft.com/en-us/azure/ai-services/openai/chatgpt-quickstart?tabs=command-line%2Cpython-new&pivots=rest-api
 
You just need to fill out the env vars with the API key and a OPENAI_ENDPOINT. No need to create an `.env` file.


## run the program

```text
npm install
npm start
```

once started, you can access url at
```text
http://127.0.0.1:5000/
```


[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/girliemac/web-speech-ai)




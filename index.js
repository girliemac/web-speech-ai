'use strict';

require('dotenv').config()
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_ENDPOINT = process.env.OPENAI_ENDPOINT; // URL of your Azure OpenAI endpoint

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js, css, images

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

const io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');
});

const axios = require('axios'); // for making HTTP requests

// Web UI
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

io.on('connection', function(socket) {
  socket.on('chat message', async(text) => {
    console.log('Message: ' + text);

const headers = {
  "Content-Type": "application/json",
  "api-key": OPENAI_API_KEY

};

const data = {
  "messages": [
    {"role": "user", "content": text},
    {"role": "user", "content": "STOP_HERE"}
  ],
  "max_tokens": 80,
  "temperature": 0.7,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0.95,
  "stop": "STOP_HERE"
};

    await axios.post(OPENAI_ENDPOINT, data, { headers: headers })
    .then(response => {
      if (response.status === 200) { // Check for success
        const generatedText = response.data.choices[0].message.content.trim();
        console.log(generatedText);
        socket.emit('bot reply', generatedText);
      } else {
        console.error(`Error: API call failed with status ${response.status}`);
      }
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
  });
});

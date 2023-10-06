const express = require("express");
const app = express();
const morgan = require('morgan');
const path = require('path');
const { SessionsClient } = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
require('dotenv').config()
app.use(morgan('dev'));
const projectId = process.env.PROJECT_ID;
const credentials = require('path/to/yout/credetials.json')

const sessionClient = new SessionsClient({
  projectId: projectId,
  credentials: credentials
});
app.get('/credentials', (req, res) => {
  res.send(credentials).status(200)
})
async function detectIntent(projectId, text) {
  const sessionId = uuid.v4()
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: text,
        languageCode: 'en-US',
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    return result.fulfillmentText;
  } catch (error) {
    console.error('Error communicating with Dialogflow:', error.message);
    return 'Sorry, there was an error.';
  }
}
io.on('connection', function (socket) {
  socket.on('chat message', async (text) => {

    try {
      const aiText = await detectIntent(projectId, text);
      socket.emit('bot reply', aiText);
    } catch (error) {
      console.log(error);
      socket.emit('bot reply', "I couldn't find a reply .");
    }
  });
});


const PORT = process.env.PORT || 4000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

app.use(express.static(path.join(__dirname, 'views')));
app.get('/test', (req, res) => {
  console.log(process.env.PROJECT_ID);
  res.status(200).json('check');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Call the detectIntent function when the server starts
http.listen(PORT, () => {
  console.log(`Server listening on localhost:${PORT}`);
});

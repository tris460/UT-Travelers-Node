const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');

// Settings
app.set('port', 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({}));

// Routes
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/programs', require('./routes/programs.routes'));
app.use('/api/experiences', require('./routes/experiences.routes'));
app.use('/api/forum', require('./routes/forum.routes'));
app.use('/api/commentaries', require('./routes/commentaries.routes'));
app.use('/api/userProgram', require('./routes/userProgram.routes'));

// Start the server
app.listen(app.get('port'), () => {
    console.log("Server on port ", app.get('port'));
})

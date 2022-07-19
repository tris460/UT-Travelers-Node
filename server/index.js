const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({}));

// Routes
app.get('/', function(req, res){
    res.send('<h1>Web server for UTTravelers</h1>');
});
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

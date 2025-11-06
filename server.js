const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

const submitLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 survey submissions per 15 minutes
    message: 'Too many survey submissions, please try again later.'
});

// Apply rate limiting to all routes
app.use(limiter);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve only specific static files, not the entire directory
const allowedStaticFiles = {
    '/style.css': 'style.css',
    '/main.js': 'main.js',
    '/pharmacy-agent.jpg': 'pharmacy-agent.jpg',
    '/survey.PNG': 'survey.PNG'
};

Object.entries(allowedStaticFiles).forEach(([route, file]) => {
    app.use(route, express.static(path.join(__dirname, file)));
});

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to receive survey data
app.post('/submit-survey', submitLimiter, (req, res) => {
    console.log('Survey data received:');
    console.log(req.body);
    
    // Here you can process the survey data
    // For example, save it to a database or file
    
    res.json({
        success: true,
        message: 'Encuesta recibida exitosamente',
        data: req.body
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

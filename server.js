const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to receive survey data
app.post('/submit-survey', (req, res) => {
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

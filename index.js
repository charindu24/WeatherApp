import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Determine the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.render('index'); // Render 'index.ejs' for the home page
});

// Weather route
app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const lat = req.query.lat;
    const lon = req.query.lon;
    const apiKey = 'c8459e58a1a03aac731373b51b02e3af'; // Replace with your OpenWeatherMap API key

    let url;
    if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } else if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else {
        return res.render('result', { city: null, rain: null, error: 'Please provide a city or use the current location button.' });
    }

    try {
        const response = await axios.get(url);
        const weatherData = response.data;
        let rain = null;

        if (weatherData.list) {
            // Forecast data is available
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const tomorrowDate = tomorrow.toISOString().split('T')[0];

            const forecast = weatherData.list.filter(entry => entry.dt_txt.includes(tomorrowDate));
            rain = forecast.some(entry => entry.rain && entry.rain['3h'] > 0);
        } else {
            // Current weather data, no rain info
            rain = false; // No rain info for current weather
        }

        res.render('result', { city: city || 'Current Location', rain, error: null });
    } catch (error) {
        res.render('result', { city: city || 'Current Location', rain: null, error: 'Error, please try again' });
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

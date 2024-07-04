import express from 'express';
const app = express();
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("Route accessed");

    const today = new Date();
    console.log("Date object created:", today);

    const day = today.getDay();
    console.log("Day of the week:", day);

    res.render('index', {
        dayType: 'a weekday', 
        advice: "It's time to work hard"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});

import express from 'express';
const app = express();
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("Route accessed");
    const today = new Date("August 24, 2025 11:13:00");
    const day = today.getDay();
    console.log("Day of the week:", day);

    let type = " a weekday"
    let adv = "it's time to work hard";

    if (day === 0 || day === 6){
        type = " the weekend";
        adv = "it's time to have some fun"
    }

    res.render('index', {
        dayType: type, 
        advice: adv
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});
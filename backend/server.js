const dotenv = require('dotenv').config({ path: "./config.env" })
const app = require('./app');
const mongoose = require('mongoose');

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

process.on('exit', (code) => {
    if (code != 0) {
        console.log(`Restart the server 🔥 🔥 🔥`)
    }
});

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Database Connected Successfully !!')).catch((error) => console.log(error));

const port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})
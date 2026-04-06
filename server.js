require('dotenv').config();

const ConnectDB = require('./src/db/db')
const app = require('./src/app')

ConnectDB().then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running on port ${process.env.PORT}` )
    })
}).catch((err) => {
    console.log("Error connecting to the database: ", err);
})
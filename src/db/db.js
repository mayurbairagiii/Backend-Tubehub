const mongoose = require('mongoose')
const {DB_NAME} = require('../constants')

const ConnectDB = async () => {
    try {
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`)
        console.log(`Databse Connected Successfully ${ConnectionInstance.connection.host}`)
    } catch (error) {
        console.log(`DATABASE Connection Error FAILED ${error}`)
        process.exit(1)
    }
}

module.exports = ConnectDB
const mongoose = require('mongoose')
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try{
        mongoose.connect(process.env.DB, connectionParams)
        console.log(`Connected to DB successfully`)
    }
    catch(error) {
        console.log(`Can't connect to db coz of this ${error}`)
    }
}
const mongoose = require('mongoose');

connectDatabase = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:${process.env.PORT_MONGO}/${process.env.DATABASE_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect database success');
    } catch (error) {
        console.log(`Connect database fail ${err}`);
    }
}

module.exports = connectDatabase;
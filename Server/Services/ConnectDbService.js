const mongoose = require('mongoose');

connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect database success');
    } catch (error) {
        console.log(`Connect database fail ${err}`);
    }
}

module.exports = connectDatabase;
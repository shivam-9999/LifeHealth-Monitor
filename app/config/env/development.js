//Development configuration options
//To sign the session identifier, use a secret string
//Development configuration options
//To sign the session identifier, use a secret string

module.exports = {
    db: process.env.MONGODB_URI ||'mongodb+srv://shivammaniya7469:K1tOqPckXNxEO4Wk@lifehealthdb.hnonjgw.mongodb.net/?retryWrites=true&w=majority', // Use environment variable for production
    sessionSecret: process.env.SESSION_SECRET || 'developmentSessionSecret', // Use environment variable for production
    secretKey: process.env.SECRET_KEY || 'real_secret', // Use environment variable for production
};

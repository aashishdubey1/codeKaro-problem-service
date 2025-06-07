const dotenv = require('dotenv')

dotenv.config()

if (!process.env.PORT) {
    console.error("Error: PORT environment variable is not set.");
    process.exit(1); // Exit the process with an error code
}

module.exports = {
    PORT : process.env.PORT || 3000
}
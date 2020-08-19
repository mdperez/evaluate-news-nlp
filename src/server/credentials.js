const dotenv = require('dotenv');
dotenv.config();

let json = {
  'key': process.env.API_KEY
}

module.exports = json;
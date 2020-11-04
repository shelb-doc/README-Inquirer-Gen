// Calls Github to get the input user info

const axios = require('axios');


const api = {
async getUser(userResponse) {
    try { let response = await axios
        
        .get(`https://api.github.com/users/${userResponse.username}`);
        return response.data;

    } catch (error) {
        console.log(error);
    }
}
};

module.exports = api;
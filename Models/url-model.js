const db = require("../config/db-config");


const getURL = () => {
    return db.select('*').from('url');
}
const addURL = (newurl) => {
return db("url").insert(newurl,"id")
}
module.exports = {
    getURL,
    addURL
    // updateURL,
    // deleteURL
}

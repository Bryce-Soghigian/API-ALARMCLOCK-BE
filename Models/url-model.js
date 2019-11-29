const db = require("../config/db-config");

module.exports = {
    getURL,
    addURL,
    updateURL,
    deleteURL
}

const getURL = () => {
    return db.select('*').from('tbl');
}
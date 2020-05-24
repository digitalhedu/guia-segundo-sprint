const path = require("path");
module.exports = {
    index: function (req,res) {
        res.sendFile(path.resolve(__dirname , "..","views","index.html"))
    },
    about: function (req,res) {
        res.sendFile(path.resolve(__dirname , "../views/about.html"))
    },
    contact: function (req,res) {
        res.sendFile(path.resolve(__dirname , "../views/contact.html"))
    }
}
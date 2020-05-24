const express = require("express");

const router = express.Router();

const controller = require("../controllers/web");

router.get("/",controller.index);

router.get("/about-us",controller.about);

router.get("/contact",controller.contact);

module.exports = router;
const express = require("express");

const openingPage = require("../src/Components/OpeningPage");
const loginPage = require("../src/Components/Login");

const router = express.Router();

// Public Routes
router.post("/public",);
router.post("/public/check",);
router.post("/public/search",);

// Admin Routes
router.post("/admin",);
router.post("/admin/search",);
router.post("/admin/new-entry",);
router.post("/admin/predict",);

module.exports = router;
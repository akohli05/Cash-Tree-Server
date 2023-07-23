"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bank_accounts_1 = require("../controllers/bank_accounts");
const router = (0, express_1.Router)();
router.post("/add-account-type", bank_accounts_1.addAccountType);
router.post("/add-customer", bank_accounts_1.addCustomer);
router.get('/', (req, res) => {
    res.end('Welcome to the back end!');
});
exports.default = router;

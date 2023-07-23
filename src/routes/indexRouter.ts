import { Router } from "express"
import { addAccountType, addCustomer } from "../controllers/bank_accounts"

const router: Router = Router();

router.post("/add-account-type", addAccountType);
router.post("/add-customer", addCustomer);
router.get('/', (req, res) => {
    res.end('Welcome to the back end!');
});


export default router;
import { Router } from 'express';
import { getCustomers, postCustomers, getCustomersById } from '../controllers/customersController.js';

const router = Router();

router.get("/customers", getCustomers);
router.post("/customers", postCustomers);
router.get('/customers/:id', getCustomersById);

export default router;
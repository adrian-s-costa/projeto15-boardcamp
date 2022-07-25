import { Router } from 'express';
import { getRentals, postRentals,  getRentalsById} from '../controllers/rentalsCotroller.js';

const router = Router();

router.get("/rentals", getRentals);
router.post("/rentals", postRentals);
router.get("/rentals", getRentalsById);

export default router;
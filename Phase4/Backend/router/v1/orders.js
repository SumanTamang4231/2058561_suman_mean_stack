const express = require("express");
const Orders = require("../../controllers/orders");


const router = express.Router();

router.get("/getallorders", Orders.getAllOrders);
// get all orders by given status using req.query
router.get("/getorder", Orders.getOrder);
router.get("/getOrderByUser/:username",Orders.getOrderByUser)
router.get("/getOrdersByStatus/:status",Orders.getOrdersByStatus)





router.put("/updateorder/:id", Orders.updateOrder);
router.put("/updateStatus/:id",Orders.updateStatus)

router.delete("/deletetorder/;id", Orders.deleteOrder);

module.exports = router;

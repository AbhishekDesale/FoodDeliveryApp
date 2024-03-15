const express = require('express');
const app = express();
const db = require('./db');
const price = require('./price');

const bodyparser = require('body-parser');
app.use(bodyparser.json());


app.get('/', (req, res) => {
    res.send("server is Started");

});

app.get('/price', async (req, res) => {

    try {
        let total_price;
        let price_per_item_type;
        const { zone, organization_id, total_distance, item_type } = req.body;

        const datafromdb = await price.findOne({
            organization_id: organization_id,
            zone: zone
        });
        if (!datafromdb) {
            console.error("No data found in the database for the provided criteria:", organization_id, zone);
            return res.status(400).json({ error: 'Invalid Zone or Organization ID' });
        }
        const total_price_from_db = datafromdb.fixed_price;
        const base_distance = datafromdb.base_distance;



        if (item_type == "perishable") {
            price_per_item_type = 1.5;
        } else if (item_type == "non-perishable") {
            price_per_item_type = 1;
        } else {
            console.error("Invalid item_type entered:", item_type);
            return res.status(400).json({ error: 'Invalid item type. Please enter ITem Type as "perishable" or "non-perishable".' });
        }

        if (total_distance <= base_distance) {
            total_price = total_price_from_db;
        } else {
            var ans = total_distance - base_distance;
            var ans2 = ans * price_per_item_type;
            total_price = ans2 + total_price_from_db;
        }
        res.status(200).json({ "total_price": total_price });


    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal error' });

    }


});
app.listen(3000, () => {
    console.log("Server is Running on port 3000");
});

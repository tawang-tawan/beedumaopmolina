const mongoose = require('mongoose');
const Plant = require('./models/plant');

mongoose.connect('mongodb://localhost:27017/plantdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const plants = [
    { name: "Snake Plant", light: "Low to bright indirect", water: "Every 2–3 weeks", image: "https://media.houseandgarden.co.uk/photos/6736030759a56cf43ffed622/master/w_1600%2Cc_limit/517540986" },
    { name: "Spider Plant", light: "Bright indirect", water: "Weekly", image: "https://media.houseandgarden.co.uk/photos/66e02c4143ff56cb528fe5b6/master/w_1600%2Cc_limit/08-01-24-HG-Crisp242.jpg" },
    { name: "Peace Lily", light: "Low to medium", water: "Weekly (keep soil moist)", image: "https://cdn11.bigcommerce.com/s-fr32feerow/product_images/uploaded_images/peace-lily-01.jpg" },
    { name: "ZZ Plant", light: "Low to bright indirect", water: "Every 2–3 weeks", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaELkAXn3Q0R4c2x01ppMpsrUdRkNcR_X-Q&s" },
    { name: "Aloe Vera", light: "Bright direct", water: "Every 2–3 weeks (let dry out)", image: "https://cdn.shopify.com/s/files/1/0691/8363/5772/files/Aloe_Vera_Plant2_1_600x600.jpg?v=1740762354" },
    { name: "Pothos", light: "Low to medium", water: "Weekly", image: "https://www.marthastewart.com/thmb/9etIquryA7k90xAxOOOwAVZMA60=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2170686151-675aeaba15364e1c876dc485f7e6d8d8.jpg" },
    { name: "Monstera Deliciosa", light: "Bright indirect", water: "Weekly", image: "https://florastore.com/cdn/shop/files/1711701_Atmosphere_04_SQ_MJ.jpg?v=1751966314&width=1080" },
    { name: "Chinese Evergreen", light: "Low to medium", water: "Every 1–2 weeks", image: "https://www.gardendesign.com/pictures/images/900x705Max/site_3/igneous-timeless-tides-chinese-evergreen-aglaonema-commutatum-proven-winners_19182.jpg" },
    { name: "Rubber Plant", light: "Bright indirect", water: "Weekly", image: "https://abeautifulmess.com/wp-content/uploads/2023/06/rubbertree-10.jpg" },
    { name: "Calathea", light: "Low to medium", water: " Every 5–7 days (likes humidity)", image: "https://media.greg.app/cGxhbnQtZGItcGhvdG9zL0NhbGF0aGVhX21lZGFsbGlvbi5qcGc=?format=pjpeg&optimize=high&auto=webp&precrop=1000:1000,smart&fit=crop&width=1000&height=1000" },
];

const seedDB = async () => {
    await Plant.deleteMany({});
    await Plant.insertMany(plants);
    mongoose.connection.close();
    console.log("Database seeded!");
};

seedDB();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/hospitalDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const patientSchema = new mongoose.Schema({
    patientId: String,
    lastName: String,
    firstName: String,
    age: Number
});

const Patient = mongoose.model('Patient', patientSchema);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const patients = await Patient.find({});
        res.render('index', { patients });
    } catch (error) {
        res.status(500).send('Error retrieving patient data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

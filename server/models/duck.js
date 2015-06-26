var mongoose = require('mongoose');

var DuckSchema = new mongoose.Schema({
    name: String,
    color: String,
    created_at: {type: Date, default: Date.now}
});

mongoose.model('Duck', DuckSchema);
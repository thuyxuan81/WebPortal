const mongoose = require('mongoose');

const SalesAdminSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  links: {
    type: [String],
    default: ['Sales Reports', 'Sales Leads', 'Sales Demo']
  }
});

module.exports = SalesAdmin = mongoose.model('SalesAdmin', SalesAdminSchema);
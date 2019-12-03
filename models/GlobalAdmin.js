const mongoose = require('mongoose');

const GlobalAdminSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  links: {
    type: [String],
    default: ['Manage User Accounts', 'Assign Roles', 'Help Desk']
  }
});

module.exports = GlobalAdmin = mongoose.model('GlobalAdmin', GlobalAdminSchema);
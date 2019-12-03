const mongoose = require('mongoose');

const HRAdminSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  links: {
    type: [String],
    default: ['New Hire','On-boarding','Benefits','Payroll','Terminations','HR Reports']
  }
});

module.exports = HRAdmin = mongoose.model('HRAdmin', HRAdminSchema);
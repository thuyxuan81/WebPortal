const mongoose = require('mongoose');

const FinanceAdminSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  links: {
    type: [String],
    default: ['Finance Reports', 'Accounts Payable', 'Accounts Receivables', 'Tax']
  }
});

module.exports = FinanceAdmin = mongoose.model('FinanceAdmin', FinanceAdminSchema);
const mongoose = require('mongoose');

const EngAdminSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  links: {
    type: [String],
    default: ['Application Monitoring', 'Tech Support', 'App Development', 'App Admin', 'Release Management']
  }
});

module.exports = EngAdmin = mongoose.model('EngAdmin', EngAdminSchema);
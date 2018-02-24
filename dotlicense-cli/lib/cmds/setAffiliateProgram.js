const buildSetAddressCommand = require('../buildSetAddressCommand');

const command = buildSetAddressCommand({
  desc: 'Set the affiliate program address',
  method: 'setAffiliateProgramAddress',
  argument: 'affiliate-program-address'
});

module.exports = command;

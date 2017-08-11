const MAINET_RPC_URL = 'https://mainnet.infura.io/metamask'
const ROPSTEN_RPC_URL = 'https://ropsten.infura.io/metamask'
const KOVAN_RPC_URL = 'https://kovan.infura.io/metamask'
const RINKEBY_RPC_URL = 'https://rinkeby.infura.io/metamask'
const ORACLES_DEV_RPC_URL = 'http://40.117.197.50:8545'
const ORACLES_TEST_RPC_URL = 'http://40.117.197.50:8545'
const ORACLES_PROD_RPC_URL = 'http://40.117.197.50:8545'

global.METAMASK_DEBUG = 'GULP_METAMASK_DEBUG'

module.exports = {
  network: {
    mainnet: MAINET_RPC_URL,
    ropsten: ROPSTEN_RPC_URL,
    kovan: KOVAN_RPC_URL,
    rinkeby: RINKEBY_RPC_URL,
    oracles_dev: ORACLES_DEV_RPC_URL,
    oracles_test: ORACLES_TEST_RPC_URL,
    oracles_prod: ORACLES_PROD_RPC_URL
  },
}

import { ChainId } from '@pancakeswap/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://mainnet.infura.io/v3/099fc58e0de9451d80b18d7c74caa7c1',
  [ChainId.TESTNET]: 'https://bsc-dataseed1.defibit.io',
}

export default NETWORK_URLS

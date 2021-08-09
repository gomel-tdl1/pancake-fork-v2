import React, { FC } from 'react'
import { ChainId } from '../../../../../../config/constants/netConst'
import Select from '../../../../../../components/Select/Select'

const SwitchNetwork: FC = () => {
  const networks = [
    {
      label: 'BEP20',
      value: 'BEP20',
    },
    {
      label: 'ERC20',
      value: 'ERC20',
    },
  ]
  const handleSelect = async (e) => {
    const value = e.value
    let networkVersion
    let chainId
    if (value === 'ERC20') {
      networkVersion = ChainId.MAINNET
      chainId = '0x1'
    } else if (value === 'BEP20') {
      networkVersion = ChainId.TESTNET
      chainId = '0x38'
    }
    if (window.ethereum) {
      window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId }],
      });
    }
  }
  return (
    <div style={{display: 'none'}}>
      <Select options={networks} onChange={handleSelect} minWidth={110} />
    </div>
  )
}
export default SwitchNetwork
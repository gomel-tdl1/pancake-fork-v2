// eslint-disable-next-line @typescript-eslint/no-shadow
import { EthereumNetworkInfo, NetworkInfo } from '../constants/networks'

export function networkPrefix(activeNewtork: NetworkInfo) {
  const isEthereum = activeNewtork === EthereumNetworkInfo
  if (isEthereum) {
    return '/'
  }
  const prefix = `/${  activeNewtork.name.toLocaleLowerCase()  }/`
  return prefix
}

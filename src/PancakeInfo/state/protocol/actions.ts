// eslint-disable-next-line @typescript-eslint/no-shadow
import { createAction } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { ProtocolData } from './reducer'
import { ChartDayData, Transaction } from '../../types'
import { SupportedNetwork } from '../../constants/networks'

// protocol wide info
export const updateProtocolData = createAction<{ protocolData: ProtocolData; networkId: SupportedNetwork }>(
  'protocol/updateProtocolData'
)
export const updateChartData = createAction<{ chartData: ChartDayData[]; networkId: SupportedNetwork }>(
  'protocol/updateChartData'
)
export const updateTransactions = createAction<{ transactions: Transaction[]; networkId: SupportedNetwork }>(
  'protocol/updateTransactions'
)

// eslint-disable-next-line @typescript-eslint/no-shadow
import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { AutoColumn } from '../../components/Column'
import { TYPE } from '../../theme'
import { ResponsiveRow, RowBetween, RowFixed } from '../../components/Row'
import LineChart from '../../components/LineChart/alt'
import useTheme from '../../hooks/useTheme'
import {
  useProtocolData,
  useProtocolChartData,
  useProtocolTransactions,
  useAggregateOverviewData,
} from '../../state/protocol/hooks'
import { DarkGreyCard } from '../../components/Card'
import { formatDollarAmount } from '../../utils/numbers'
import Percent from '../../components/Percent'
import { HideMedium, HideSmall, StyledInternalLink } from '../../theme/components'
import TokenTable from '../../components/tokens/TokenTable'
import PoolTable from '../../components/pools/PoolTable'
import { PageWrapper, ThemedBackgroundGlobal } from '../styled'
import { unixToDate } from '../../utils/date'
import BarChart from '../../components/BarChart/alt'
import { useAllPoolData } from '../../state/pools/hooks'
import { notEmpty } from '../../utils'
import TransactionsTable from '../../components/TransactionsTable'
import { useAllTokenData } from '../../state/tokens/hooks'
import { MonoSpace } from '../../components/shared'
import { useActiveNetworkVersion } from '../../state/application/hooks'

const ChartWrapper = styled.div`
  width: 49%;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const theme = useTheme()

  useAggregateOverviewData()

  const [activeNetwork] = useActiveNetworkVersion()

  const [protocolData] = useProtocolData()
  const [chartData] = useProtocolChartData()
  const [transactions] = useProtocolTransactions()

  const [volumeHover, setVolumeHover] = useState<number | undefined>()
  const [liquidityHover, setLiquidityHover] = useState<number | undefined>()
  const [leftLabel, setLeftLabel] = useState<string | undefined>()
  const [rightLabel, setRightLabel] = useState<string | undefined>()

  useEffect(() => {
    setLiquidityHover(undefined)
    setVolumeHover(undefined)
  }, [activeNetwork])

  // get all the pool datas that exist
  const allPoolData = useAllPoolData()
  const poolDatas = useMemo(() => {
    return Object.values(allPoolData)
      .map((p) => p.data)
      .filter(notEmpty)
  }, [allPoolData])

  // if hover value undefined, reset to current day value
  useEffect(() => {
    if (!volumeHover && protocolData) {
      setVolumeHover(protocolData.volumeUSD)
    }
  }, [protocolData, volumeHover])
  useEffect(() => {
    if (!liquidityHover && protocolData) {
      setLiquidityHover(protocolData.tvlUSD)
    }
  }, [liquidityHover, protocolData])

  const formattedTvlData = useMemo(() => {
    if (chartData) {
      return chartData.map((day) => {
        return {
          time: unixToDate(day.date),
          value: day.tvlUSD,
        }
      })
    } 
      return []
    
  }, [chartData])

  const formattedVolumeData = useMemo(() => {
    if (chartData) {
      return chartData.map((day) => {
        return {
          time: unixToDate(day.date),
          value: day.volumeUSD,
        }
      })
    } 
      return []
    
  }, [chartData])

  const allTokens = useAllTokenData()

  const formattedTokens = useMemo(() => {
    return Object.values(allTokens)
      .map((t) => t.data)
      .filter(notEmpty)
  }, [allTokens])

  return (
    <PageWrapper>
      <ThemedBackgroundGlobal backgroundColor={activeNetwork.bgColor} />
      <AutoColumn gap="16px">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <TYPE.main>Uniswap Overview</TYPE.main>
        <ResponsiveRow>
          <ChartWrapper>
            <LineChart
              data={formattedTvlData}
              height={220}
              minHeight={332}
              color={activeNetwork.primaryColor}
              value={liquidityHover}
              label={leftLabel}
              setValue={setLiquidityHover}
              setLabel={setLeftLabel}
              topLeft={
                <AutoColumn gap="4px">
                  {/* eslint-disable-next-line react/jsx-pascal-case */}
                  <TYPE.mediumHeader fontSize="16px">TVL</TYPE.mediumHeader>
                  {/* eslint-disable-next-line react/jsx-pascal-case */}
                  <TYPE.largeHeader fontSize="32px">
                    <MonoSpace>{formatDollarAmount(liquidityHover, 2, true)} </MonoSpace>
                  </TYPE.largeHeader>
                  {/* eslint-disable-next-line react/jsx-pascal-case */}
                  <TYPE.main fontSize="12px" height="14px">
                    {leftLabel ? <MonoSpace>{leftLabel} (UTC)</MonoSpace> : null}
                  </TYPE.main>
                </AutoColumn>
              }
            />
          </ChartWrapper>
          <ChartWrapper>
            <BarChart
              height={220}
              minHeight={332}
              data={formattedVolumeData}
              color={theme.blue1}
              setValue={setVolumeHover}
              setLabel={setRightLabel}
              value={volumeHover}
              label={rightLabel}
              topLeft={
                <AutoColumn gap="4px">
                  {/* eslint-disable-next-line react/jsx-pascal-case */}
                  <TYPE.mediumHeader fontSize="16px">Volume 24H</TYPE.mediumHeader>
                  {/* eslint-disable-next-line react/jsx-pascal-case */}
                  <TYPE.largeHeader fontSize="32px">
                    <MonoSpace> {formatDollarAmount(volumeHover, 2)}</MonoSpace>
                  </TYPE.largeHeader>
                  {/* eslint-disable-next-line react/jsx-pascal-case */}
                  <TYPE.main fontSize="12px" height="14px">
                    {rightLabel ? <MonoSpace>{rightLabel} (UTC)</MonoSpace> : null}
                  </TYPE.main>
                </AutoColumn>
              }
            />
          </ChartWrapper>
        </ResponsiveRow>
        <HideSmall>
          <DarkGreyCard>
            <RowBetween>
              <RowFixed>
                <RowFixed mr="20px">
                  {/* eslint-disable-next-line react/jsx-pascal-case */}
                  <TYPE.main mr="4px">Volume 24H: </TYPE.main>
                  {/* eslint-disable-next-line react/jsx-pascal-case */}
                  <TYPE.label mr="4px">{formatDollarAmount(protocolData?.volumeUSD)}</TYPE.label>
                  <Percent value={protocolData?.volumeUSDChange} wrap />
                </RowFixed>
                <RowFixed mr="20px">
                  {/* eslint-disable-next-line react/jsx-pascal-case */}
                  <TYPE.main mr="4px">Fees 24H: </TYPE.main>
                  {/* eslint-disable-next-line react/jsx-pascal-case */}
                  <TYPE.label mr="4px">{formatDollarAmount(protocolData?.feesUSD)}</TYPE.label>
                  <Percent value={protocolData?.feeChange} wrap />
                </RowFixed>
                <HideMedium>
                  <RowFixed mr="20px">
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <TYPE.main mr="4px">TVL: </TYPE.main>
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <TYPE.label mr="4px">{formatDollarAmount(protocolData?.tvlUSD)}</TYPE.label>
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <TYPE.main />
                    <Percent value={protocolData?.tvlUSDChange} wrap />
                  </RowFixed>
                </HideMedium>
              </RowFixed>
            </RowBetween>
          </DarkGreyCard>
        </HideSmall>
        <RowBetween>
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          <TYPE.main>Top Tokens</TYPE.main>
          <StyledInternalLink to="tokens">Explore</StyledInternalLink>
        </RowBetween>
        <TokenTable tokenDatas={formattedTokens} />
        <RowBetween>
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          <TYPE.main>Top Pools</TYPE.main>
          <StyledInternalLink to="pools">Explore</StyledInternalLink>
        </RowBetween>
        <PoolTable poolDatas={poolDatas} />
        <RowBetween>
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          <TYPE.main>Transactions</TYPE.main>
        </RowBetween>
        {transactions ? <TransactionsTable transactions={transactions} color={activeNetwork.primaryColor} /> : null}
      </AutoColumn>
    </PageWrapper>
  )
}

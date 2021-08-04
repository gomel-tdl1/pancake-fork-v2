// eslint-disable-next-line @typescript-eslint/no-shadow
import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { isAddress } from 'ethers/lib/utils'
import TokenPage from './TokenPage'

export function RedirectInvalidToken(props: RouteComponentProps<{ address: string }>) {
  const {
    match: {
      params: { address },
    },
  } = props

  if (!isAddress(address)) {
    return <Redirect to="/" />
  }
  return <TokenPage {...props} />
}

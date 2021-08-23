import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ZoOBDoO',
  description:
    'Mainframe Staking',
  image: 'https://i.ibb.co/f8wccMz/zbdo-img.jpg',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ZoOBDoO')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ZoOBDoO')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ZoOBDoO')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ZoOBDoO')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ZoOBDoO')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ZoOBDoO')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('ZoOBDoO')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ZoOBDoO')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ZoOBDoO')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('ZoOBDoO')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('ZoOBDoO')}`,
      }
    default:
      return null
  }
}

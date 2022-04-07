import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE, DIR_LTR } from 'constants/ThemeConstant'
import { env } from './EnvironmentConfig'

export const APP_NAME = 'Police Service Commission Recruitment Portal'
export const API_BASE_URL = env.API_ENDPOINT_URL
export const APP_PREFIX_PATH = '/app'
export const AUTH_PREFIX_PATH = '/auth'

export const THEME_CONFIG = {
  navCollapsed: false,
  sideNavTheme: SIDE_NAV_LIGHT,
  locale: 'en',
  navType: NAV_TYPE_SIDE,
  topNavColor: '#183250',
  headerNavColor: '',
  mobileNav: false,
  currentTheme: 'light',
  direction: DIR_LTR,
}

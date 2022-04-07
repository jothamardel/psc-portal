import { FileFilled, UserOutlined } from '@ant-design/icons'
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const jobsNavTree = [
  {
    key: 'jobs',
    path: `${APP_PREFIX_PATH}/jobs`,
    title: 'sidenav.jobs',
    icon: FileFilled,
    breadcrumb: false,
    submenu: [
      {
        key: 'list',
        path: `${APP_PREFIX_PATH}/jobs/list`,
        title: 'sidenav.jobs.list',
        icon: FileFilled,
        breadcrumb: false,
        submenu: [],
      },
      // {
      //   key: 'applied',
      //   path: `${APP_PREFIX_PATH}/jobs/applied`,
      //   title: 'sidenav.jobs.applied',
      //   icon: FileDoneOutlined,
      //   breadcrumb: false,
      //   submenu: [],
      // },
    ],
  },
]

const profileNavTree = [
  {
    key: 'user',
    path: `${APP_PREFIX_PATH}/user`,
    title: 'sidenav.user',
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'profile',
        path: `${APP_PREFIX_PATH}/user/profile`,
        title: 'sidenav.user.profile',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
]

const navigationConfig = [...profileNavTree, ...jobsNavTree]

export default navigationConfig

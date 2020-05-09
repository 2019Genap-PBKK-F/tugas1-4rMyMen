import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import ExcelView from './components/views/Jexcel.vue'

import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'

import AspekView from './components/views/Aspek.vue'
import DataDasarView from './components/views/DataDasar.vue'

import JenisSatkerView from './components/views/JenisSatker.vue'
import MasterIndikatorView from './components/views/MasterIndikator.vue'
import PeriodeView from './components/views/Periode.vue'
import IndikatorPeriodeView from './components/views/IndikatorPeriode.vue'
import SatuanKerjaView from './components/views/SatuanKerja.vue'
import CapaianUnitView from './components/views/CapaianUnit.vue'
import IndikatorSatuanKerjaView from './components/views/IndikatorSatuanKerja.vue'
import IndikatorSatuanKerjaLogView from './components/views/IndikatorSatuanKerjaLog.vue'
import MasterIndikatorFullView from './components/views/MasterIndikatorFull.vue'

import publikasiView from './components/views/publikasi.vue'
import abmasView from './components/views/abmas.vue'
import dosenView from './components/views/dosen.vue'
import penelitianView from './components/views/penelitian.vue'
// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'excel',
        component: ExcelView,
        name: 'Excel',
        meta: {description: 'Excel in CoPilot'}
      }, {
        path: 'publikasi',
        component: publikasiView,
        name: 'publikasi',
        meta: {description: 'publikasi in CoPilot'}
      }, {
        path: 'abmas',
        component: abmasView,
        name: 'abmas',
        meta: {description: 'abmas in CoPilot'}
      }, {
        path: 'dosen',
        component: dosenView,
        name: 'dosen',
        meta: {description: 'dosen in CoPilot'}
      }, {
        path: 'penelitian',
        component: penelitianView,
        name: 'penelitian',
        meta: {description: 'penelitian in CoPilot'}
      }, {
        path: 'DataDasar',
        component: DataDasarView,
        name: 'DataDasar',
        meta: {description: 'DataDasar in CoPilot'}
      }, {
        path: 'Aspek',
        component: AspekView,
        name: 'Aspek',
        meta: {description: 'Aspek in CoPilot'}
      }, {
        path: 'MasterIndikatorFull',
        component: MasterIndikatorFullView,
        name: 'MasterIndikatorFull',
        meta: {description: 'MasterIndikatorFull in CoPilot'}
      }, {
        path: 'JenisSatker',
        component: JenisSatkerView,
        name: 'JenisSatker',
        meta: {description: 'JenisSatker in CoPilot'}
      }, {
        path: 'MasterIndikator',
        component: MasterIndikatorView,
        name: 'MasterIndikator',
        meta: {description: 'MasterIndikator in CoPilot'}
      }, {
        path: 'Periode',
        component: PeriodeView,
        name: 'Periode',
        meta: {description: 'Periode in CoPilot'}
      }, {
        path: 'IndikatorPeriode',
        component: IndikatorPeriodeView,
        name: 'IndikatorPeriode',
        meta: {description: 'IndikatorPeriode in CoPilot'}
      }, {
        path: 'SatuanKerja',
        component: SatuanKerjaView,
        name: 'SatuanKerja',
        meta: {description: 'SatuanKerja in CoPilot'}
      }, {
        path: 'CapaianUnit',
        component: CapaianUnitView,
        name: 'CapaianUnit',
        meta: {description: 'CapaianUnit in CoPilot'}
      }, {
        path: 'IndikatorSatuanKerja',
        component: IndikatorSatuanKerjaView,
        name: 'Indikator_SatuanKerja',
        meta: {description: 'IndikatorSatuanKerja in CoPilot'}
      }, {
        path: 'IndikatorSatuanKerjaLog',
        component: IndikatorSatuanKerjaLogView,
        name: 'IndikatorSatuanKerjaLog',
        meta: {description: 'IndikatorSatuanKerjaLog in CoPilot'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes

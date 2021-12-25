import { createApp } from 'vue'
import App from './App.vue'

import VueSlider from '../lib'
import { getTheme } from './utils'

const theme = getTheme()
switch (theme) {
  case 'antd':
    require('../lib/theme/antd.scss')
    break
  case 'material':
    require('../lib/theme/material.scss')
    break
  default:
    require('../lib/theme/default.scss')
}

//@ts-ignore
const app = createApp(App)

app.component('VueSlider', VueSlider)

app.mount('#app')

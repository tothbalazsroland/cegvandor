import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',  // use Material Design Icons
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          // Near-white backgrounds (literal values)
          background: '#fafafa',
          surface: '#ffffff',

          // Accent
          primary: '#22288d',

          // Text colors (explicit)
          'on-background': '#111827',
          'on-surface': '#111827',
        },
      },
    },
  },
})
const app = createApp(App)
app.use(vuetify)
app.use(i18n)
app.use(router)

app.mount('#app')

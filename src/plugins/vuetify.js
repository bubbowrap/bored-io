import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: colors.grey.lighten4,
        headingColor: colors.indigo,
        bodyColor: colors.grey.darken2,
        notifBar: colors.grey.lighten2,
        primary: colors.indigo,
        secondary: colors.orange.darken2,
        accent: colors.shades.black,
        error: colors.red.accent3
      },
      dark: {
        background: '#121212',
        headingColor: colors.grey.lighten5,
        bodyColor: colors.grey.lighten5,
        notifBar: colors.grey.darken4,
        primary: colors.indigo.darken2,
        secondary: colors.orange.darken2
      }
    }
  }
})

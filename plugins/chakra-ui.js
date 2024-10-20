import Vue from 'vue'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'

Vue.use(Chakra)

export default (context, inject) => {
  context.app.head.link.push({
    rel: 'stylesheet',
    href: 'https://unpkg.com/@chakra-ui/core@1.0.0-rc.3/dist/chakra-ui.min.css'
  })
}
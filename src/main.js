import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

import moment from 'moment'

Vue.prototype.moment = moment

Vue.config.productionTip = false

Vue.mixin({
  data: function () {
    return {
      get HTTP_OK () {
        return 200
      },
      get HTTP_ACCEPTED () {
        return 202
      },
      get HTTP_CREATED () {
        return 201
      },
      get HTTP_UNAUTHORIZED () {
        return 401
      },
      get HTTP_FORBIDDEN () {
        return 403
      }
    }
  },
  methods: {
    replaceSpecialChars (str) {
      if (str) {
        str = str.replace(/[ÀÁÂÃÄÅ]/, 'A')
        str = str.replace(/[àáâãäå]/, 'a')
        str = str.replace(/[ÈÉÊË]/, 'E')
        str = str.replace(/[èéê]/, 'e')
        str = str.replace(/[ÍÍÎ]/, 'I')
        str = str.replace(/[ìíî]/, 'i')
        str = str.replace(/[òóôõ]/, 'o')
        str = str.replace(/[ÒÓÔÕ]/, 'O')
        str = str.replace(/[ùúû]/, 'u')
        str = str.replace(/[ÙÚÛ]/, 'U')
        str = str.replace(/[Ç]/, 'C')
        str = str.replace(/[ç]/, 'c')
        return str.toLowerCase()
      }
      return str
    },
    stripHtml (htmlContent) {
      return htmlContent.replace(/(<([^>]+)>)/gi, '')
    },
    getDefaultJoditConfig () {
      const locale = 'pt_br'
      return {
        language: locale,
        height: 300,
        toolbarButtonSize: 'small',
        indentMargin: 20,
        allowResizeX: false,
        allowResizeY: true,
        ignoreEmptyParagraph: true,
        spellcheck: true,
        readonly: false
      }
    },
    getDefaultJoditButtons () {
      return ['bold', 'italic', 'underline', 'strikethrough', '|',
        'align', 'outdent', 'indent', '|',
        'ul', 'ol', '|',
        'font', 'fontsize', 'brush', 'paragraph', '|',
        'image', 'table', 'link', '|',
        'hr', 'eraser', 'source', '\n',
        'undo', 'redo', '|',
        'selectall', 'fullsize', 'print']
    },
    getDefaultJoditButtonsPush () {
      return ['undo', 'redo', '|',
        'selectall', 'print']
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')

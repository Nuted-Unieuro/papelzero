import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

window._ = require('lodash')

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
        width: 'auto',
        height: 'auto',
        theme: "summer",
        zIndex: 9999,
        toolbarButtonSize: 'small',
        indentMargin: 20,
        allowResizeX: false,
        activeButtonsInReadOnly: ['fullsize', 'print', 'preview'],
        allowResizeY: true,
        ignoreEmptyParagraph: true,
        saveHeightInStorage: false,
        saveModeInStorage: false,
        sizeLG: 900,
        sizeMD: 700,
        sizeSM: 400,
        sizeSM: 400,
        spellcheck: true,
        readonly: false
      }
    },
    getDefaultJoditConfigViewProcesso () {
      const locale = 'pt_br'
      return {
        language: locale,
        width: 'auto',
        height: 'auto',
        theme: "summer",
        zIndex: 9999,
        toolbarButtonSize: 'small',
        indentMargin: 20,
        allowResizeX: false,
        activeButtonsInReadOnly: ['fullsize', 'print', 'preview'],
        allowResizeY: true,
        ignoreEmptyParagraph: true,
        saveHeightInStorage: false,
        saveModeInStorage: false,
        sizeLG: 900,
        sizeMD: 700,
        sizeSM: 400,
        sizeSM: 400,
        spellcheck: true,
        readonly: true
      }
    },
    getDefaultJoditConfigTemplate () {
      const locale = 'pt_br'
      return {
        language: locale,
        width: 'auto',
        height: '400',
        theme: "summer",
        zIndex: 9999,
        toolbarButtonSize: 'small',
        indentMargin: 20,
        allowResizeX: false,
        activeButtonsInReadOnly: ['fullsize', 'print', 'preview'],
        allowResizeY: true,
        ignoreEmptyParagraph: true,
        saveHeightInStorage: false,
        saveModeInStorage: false,
        sizeLG: 900,
        sizeMD: 700,
        sizeSM: 400,
        sizeSM: 400,
        spellcheck: true,
        readonly: false,
        askBeforePasteFromWord: false,
        askBeforePasteHTML: false
      }
    },
    getDefaultJoditButtons () {
      return ['bold', 'italic', 'underline', 'strikethrough', '|',
        'align', 'outdent', 'indent', '|',
        'ul', 'ol', '|',
        'font', 'fontsize', 'brush', 'paragraph', '|',
        'image', 'table', 'link', '|',
        'hr', 'eraser', 'copyformat', 'source', '\n',
        'undo', 'redo', '|',
        'selectall', 'fullsize', 'print', 'preview']
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

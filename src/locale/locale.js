/*
 * Import dependencies
**/
import i18next from 'i18next'
import moment from 'moment'
/*
 * Import resources
**/
import baseLanguage from './resources/_base'
import enLocale from './resources/en-us'
import deLocale from './resources/de'
import zhCNLocale from './resources/zh-cn'

const resources = {
  en: {
    translation: Object.assign(enLocale, baseLanguage)
  },
  de: {
    translation: Object.assign(deLocale, baseLanguage)
  },
  'zh_CN': {
    translation: Object.assign(zhCNLocale, baseLanguage)
  }
}

export const languages = [
  {
    label: 'English',
    value: 'en'
  }, {
    label: 'German',
    value: 'de'
  },
  {
    label: 'Simplified Chinese',
    value: 'zh_CN'
  }
]

export default function init (options) {
  const bus = options.bus
  /*
   * Initialize with the resource
  **/
  i18next.init({
    lng: 'en', // Defaults to english language
    resources,
    interpolation: {
      format (value, format, lng) {
        // Format date with moment js
        if (value instanceof Date) {
          return moment(value).format(format)
        }
      }
    }
  }, (err, template) => {
    if (err) {
      console.log(err)
    }
    bus.$emit('locale', {
      template,
      action: 'init'
    })
  })
  /*
   * Listen to the change in language
  **/
  i18next.on('languageChanged', (lng) => {
    moment.locale(lng)
  })
  /*
   * Set a new language
  **/
  bus.$on('locale', (payload) => {
    if (payload.action !== 'set') {
      return
    }
    console.log('locale.js:Changing language to', payload.lng)
    i18next.changeLanguage(payload.lng, (err, template) => {
      console.log('err', err)
      console.log('template', template)
      if (err) {
        console.log(err)
      } else {
        bus.$emit('locale', {
          template,
          action: 'change'
        })
      }
    })
  })

  return i18next
}

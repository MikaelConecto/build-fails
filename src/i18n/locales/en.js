const moment = require('moment')

const enLocaleData = require('react-intl/locale-data/en')
const intl = require('react-intl')
const defineMessages = intl.defineMessages
const addLocaleData = intl.addLocaleData

moment.locale('en')

addLocaleData(enLocaleData)

const messages = defineMessages({
  lang_fr: 'Fr',
  lang_en: 'En',
  menu: 'Menu',
  notAContrator: "I'm not a contractor",
  contractor: 'contractor',
})

module.exports = messages

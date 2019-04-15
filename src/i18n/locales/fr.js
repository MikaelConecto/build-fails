const frLocaleData = require('react-intl/locale-data/fr')
const intl = require('react-intl')
const defineMessages = intl.defineMessages
const addLocaleData = intl.addLocaleData

addLocaleData(frLocaleData)

require('./moment/fr')

const messages = defineMessages({
  lang_fr: 'Fr',
  lang_en: 'En',
  menu: 'Menu',
  notAContrator: 'Je ne suis pas entrepreneur',
  contractor: 'entrepreneur',
})

module.exports = messages

import Vue from 'vue'
import moment from 'moment'

moment.locale('fr')
Vue.use(moment)

export default ({ app }, inject) => {
  app.$moment = moment
  inject('moment', moment)
}

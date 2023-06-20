import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUsers, faMap, faHome, faBars, faSearch, faUser, faCog, faFileAlt, faFile, faHeart, faLocationArrow, faStar, faTrashAlt, faPenAlt, faCaretRight } from '@fortawesome/free-solid-svg-icons'

library.add(faUsers)
library.add(faMap)
library.add(faHome)
library.add(faBars)
library.add(faSearch)
library.add(faUser)
library.add(faCog)
library.add(faFileAlt)
library.add(faFile)
library.add(faHeart)
library.add(faLocationArrow)
library.add(faStar)
library.add(faTrashAlt)
library.add(faPenAlt)
library.add(faCaretRight)

export default {
    install: function(Vue) {
        Vue.component('font-awesome-icon', FontAwesomeIcon)
    }
}
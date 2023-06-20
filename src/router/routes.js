import SignInVue from '@/pages/Auth/SignIn.vue'
import SignUpVue from '@/pages/Auth/SignUp.vue'
import MapPageVue from '@/pages/MainPages/MapPage.vue'
import Start from '@/pages/Auth/Start.vue'
import AllFeedback from '@/pages/MainPages/AllFeedback.vue'
import Profile from '@/pages/MainPages/Profile.vue'
import OwnFeed from '@/pages/Lists/OwnFeed.vue'
import Liked from '@/pages/Lists/Liked.vue'
import Test from '@/pages/Test.vue'
import BGMenu from '@/pages/MenuSettings/BGMenu.vue'
import NewFeedback from '@/pages/Lists/NewFeedback.vue'
export default [{
        path: '/',
        name: 'Start',
        component: Start
    },
    {
        path: '/Test',
        name: 'Test',
        component: Test
    },
    {
        path: '/SignIn',
        name: 'SignIn',
        component: SignInVue
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUpVue
    },
    {
        path: '/MapPage',
        name: 'MapPage',
        component: MapPageVue
    },
    {
        path: '/AllFeedback',
        name: 'AllFeedback',
        component: AllFeedback
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/OwnFeed',
        name: 'OwnFeed',
        component: OwnFeed
    },
    {
        path: '/Liked',
        name: 'Liked',
        component: Liked
    },
    {
        path: '/BGMenu',
        name: 'BGMenu',
        component: BGMenu,
        meta: { transitionName: 'slide' }
    },
    {
        path: '/NewFeedback',
        name: 'NewFeedback',
        component: NewFeedback
    }
]
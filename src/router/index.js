import { createRouter, createWebHistory } from 'vue-router'
import PeekPrivacy from '../views/peek/PeekPrivacy.vue'
import PeekPrivacyKo from '../views/peek/PeekPrivacyKo.vue'
import TvBootPrivacy from '../views/tvboot/TvBootPrivacy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/peek/privacy',
      name: 'peek-privacy',
      component: PeekPrivacy,
      meta: { title: 'Privacy Policy for Peek (English)' },
    },
    {
      path: '/peek/privacy/ko',
      name: 'peek-privacy-ko',
      component: PeekPrivacyKo,
      meta: { title: 'Peek 개인정보처리방침 (한국어)' },
    },
    {
      path: '/tvboot/privacy',
      name: 'tvboot-privacy',
      component: TvBootPrivacy,
      meta: { title: 'Privacy Policy for TvBoot: Auto Launch & Keeper' },
    },
  ],
})

router.afterEach((to) => {
  document.title = to.meta?.title || 'app.iank.im'
})

export default router

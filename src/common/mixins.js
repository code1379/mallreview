import { SHOW_BACKTOP_HEIGHT } from './const'
import BackTop from 'ct/backTop/BackTop'


export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
      showBackTopHeight: SHOW_BACKTOP_HEIGHT
    }
  },
  methods: {
    handleBacktop() {
      this.scroll.scrollTo(0)
    }
  },
}


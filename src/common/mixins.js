import { SHOW_BACKTOP_HEIGHT } from './const'
import BackTop from 'ct/backTop/BackTop'


export const backTopMixin = {
  components: {
    BackTop
  },
  methods: {
    handleBacktop() {
      this.scroll.scrollTo(0)
    }
  },
  computed: {
    isShowBackTop() {
      return this.currentY >= SHOW_BACKTOP_HEIGHT
    }
  }
}


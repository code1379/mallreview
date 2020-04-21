<template>
  <div class="home">
    <HomeTopBar />
    <Scroll
      class="home-scroll"
      :scrollOptions="homeScrollOptions"
      @sendPullUpEvent="handlePullUpEvent"
      @sendCurrentPositionY="handleCurrentPositionY"
      ref="scroll"
    >
      <!-- 首页上的内容插入到这里 -->
      <HomeSwiper :bannerList="bannerList" />
      <HomeRecommend :recommendList="recommendList" />
      <HomeTrend />
      <NavBar :currentIndex="currentIndex" @sendChangeIndex="handleChangeNavIndex" />
      <div class="wrapper">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
        <p>16</p>
        <p>17</p>
        <p>18</p>
        <p>19</p>
        <p>20</p>
        <p>21</p>
        <p>22</p>
        <p>23</p>
        <p>24</p>
        <p>25</p>
        <p>26</p>
        <p>27</p>
        <p>28</p>
        <p>29</p>
        <p>30</p>
        <p>31</p>
        <p>32</p>
        <p>33</p>
        <p>34</p>
        <p>35</p>
        <p>36</p>
        <p>37</p>
        <p>38</p>
        <p>39</p>
        <p>40</p>
        <p>41</p>
        <p>42</p>
        <p>43</p>
        <p>44</p>
        <p>45</p>
        <p>46</p>
        <p>47</p>
        <p>48</p>
        <p>49</p>
        <p>50</p>
        <p>51</p>
        <p>52</p>
        <p>53</p>
        <p>54</p>
        <p>55</p>
        <p>56</p>
        <p>57</p>
        <p>58</p>
        <p>59</p>
        <p>60</p>
        <p>61</p>
        <p>62</p>
        <p>63</p>
        <p>64</p>
        <p>65</p>
        <p>66</p>
        <p>67</p>
        <p>68</p>
        <p>69</p>
        <p>70</p>
        <p>71</p>
        <p>72</p>
        <p>73</p>
        <p>74</p>
        <p>75</p>
        <p>76</p>
        <p>77</p>
        <p>78</p>
        <p>79</p>
        <p>80</p>
        <p>81</p>
        <p>82</p>
        <p>83</p>
        <p>84</p>
        <p>85</p>
        <p>86</p>
        <p>87</p>
        <p>88</p>
        <p>89</p>
        <p>90</p>
        <p>91</p>
        <p>92</p>
        <p>93</p>
        <p>94</p>
        <p>95</p>
        <p>96</p>
        <p>97</p>
        <p>98</p>
        <p>99</p>
        <p>100</p>
      </div>
    </Scroll>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTopBar from "./childComps/HomeTopBar";
import Scroll from "cn/scroll/Scroll";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeTrend from "./childComps/HomeTrend";
import NavBar from "ct/navBar/NavBar";
// 获取数据
import { getMultiData } from "network/home";
// 一些小配置
import { homeScrollOptions } from "common/const";

export default {
  name: "Home",
  components: {
    HomeTopBar,
    Scroll,
    HomeSwiper,
    HomeRecommend,
    HomeTrend,
    NavBar
  },
  data() {
    return {
      // 1. better-scroll 配置
      homeScrollOptions,
      // 2. swiper 的图片列表
      bannerList: [],
      // 3. 推荐图片列表
      recommendList: [],
      // 4.navBar CurrentIndex
      currentIndex: 0
    };
  },
  mounted() {
    // 1. 执行获取数据
    this.getMultiData();
  },
  methods: {
    // 2. 获取数据的方法
    async getMultiData() {
      const res = await getMultiData();
      // 如果没有获取过程出错 返回的是 undefined
      if (res) {
        const data = res.data;
        // 这里 两种写法 都可以。。。。
        this.bannerList.push(...data.banner.list);
        this.recommendList = data.recommend.list;
        console.log(this.bannerList);
        console.log(this.recommendList);
      }
    },
    // 1. better-scroll 的事件
    handlePullUpEvent() {
      console.log("home handlePullUpEvent");
    },
    handleCurrentPositionY(y) {
      // console.log("实时监听滚动位置", y);
    },
    // 2. navbar 事件
    handleChangeNavIndex(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style lang="stylus" scoped>
.home-scroll
  position: absolute
  top: 43px
  right: 0
  left: 0
  bottom: 49px
  overflow: hidden
  background-color: #EEEEEE
</style>
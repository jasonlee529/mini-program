<template>
    <van-button open-type="getUserInfo" bindgetuserinfo="afterUserInfo">微信登录</van-button>
</template>
<script>
export default {
  methods: {
    afterUserInfo(e) {
      console.log("微信授权成功");
      const url = "/pages/user/register/main";
      wx.navigateTo({ url });
    }
  },
  afterUserInfo(e) {
    console.log("微信授权成功");
    const url = "/pages/user/register/main";
    wx.navigateTo({ url });
  },
  created() {}
};
</script>

<style scoped></style>
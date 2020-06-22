import request from '~/utils/request'
// import cookie from 'js-cookie'

export default {
  submitLogin(user) {
    return request({
      baseURL: 'http://localhost:8386',
      url: '/api/ucenter/member/login',
      method: 'post',
      data: user
    })
  },

  getLoginInfo() {
    return request({
      baseURL: 'http://localhost:8386',
      url: '/api/ucenter/member/get-login-info',
      method: 'get'
      //   通过请求头发送token // 通过request统一处理
    //   headers: { 'token': cookie.get('guli_jwt_token') }
    })
  }
}

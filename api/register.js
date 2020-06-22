import request from '@/utils/request'
export default {

  sendMessage(mobile) {
    return request({
      baseURL: 'http://localhost:8385',
      url: `/api/sms/send/${mobile}`,
      method: 'get'
    })
  },

  register(member) {
    return request({
      baseURL: 'http://localhost:8386',
      url: '/api/ucenter/member/register',
      method: 'post',
      data: member
    })
  }
}

import cookie from '../utils/store'

let state = {
  count : 0,
  isShowNav:true,
  userName: cookie.getCookie('userName'),
  token: cookie.getCookie('token'),
}

export default state

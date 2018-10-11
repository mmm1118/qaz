/**
 * 数据操作类
 */
const store = {
  /**
   * 设置Cookie
   * @param { String } name cookie名称
   * @param { String } value cooke的值
   * @param { Number } exp 过期时间 默认2小时 单位毫秒
   */
  setCookie (name, value, exp = 60 * 60 * 12 * 1000) {
    let date = new Date()
    date.setTime(date.getTime() + exp)
    document.cookie = `${name}=${escape(value)};expires=${date.toGMTString()}`
  },

  /**
   * 获取Cookie
   * @param { String } name cookie名称
   * @returns { (Array | Null) } 返回数据
   */
  getCookie (name) {
    if (name) {
      let reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
      let arr = document.cookie.match(reg)
      return arr&&arr[2] ? arr[2] : null
    }
    let getAllCookies = []
    if (document.cookie !== '') {
      let arrCookie = document.cookie.split('; ')
      for (let k in arrCookie) {
        getAllCookies.push({
          name: `${unescape(arrCookie[k].split('=')[0])}`,
          value: `${unescape(arrCookie[k].split('=')[1])}`
        })
      }
      return getAllCookies
    } else {
      return null
    }
  },

  /**
   * 删除Cookie
   * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
   */
  rmCookie (name) {
    let date = new Date()
    date.setTime(date.getTime() - 1)
    if (name) {
      let cookieInfo = store.getCookie(name)
      if (cookieInfo !== null) {
        document.cookie = `${name}=${cookieInfo};expires=${date.toGMTString()}`
      }
      return
    }
    let getAllCookies = store.getCookie()
    for (let k in getAllCookies) {
      document.cookie = `${getAllCookies[k].name}=${getAllCookies[k].value};expires=${date.toGMTString()}`
    }
  },
}
export default store

export const state = () => ({
  user_info: {
    id: 1,
    name: '魏永强',
    head_img:
      'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
  }
})

export const mutations = {
  increase(state) {
    state.counter++
  }
}

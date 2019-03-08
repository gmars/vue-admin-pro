export const state = () => ({
  NavMenuCollapse: false
})

export const mutations = {
  NavMenuCollapseChange(state) {
    state.NavMenuCollapse = !state.NavMenuCollapse
  }
}

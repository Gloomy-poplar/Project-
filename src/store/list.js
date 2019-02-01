export default {
  state: {
    list: [{
        id: '1',
        firstname: 'Egor',
        lastname: 'Smirnov',
        imageId: 'https://pp.userapi.com/c830400/v830400833/185706/hLQGSOOcAwU.jpg',
      },
      {
        id: '2',
        firstname: 'Anton',
        lastname: 'Lesik',
        imageId: 'https://pp.userapi.com/c841426/v841426186/7d4d9/d-UbGF9O2b8.jpg',
      }
    ]
  },
  mutations: {
    SET_LIST(state, payload) {
      state.list = payload
    },
  },
  getters: {
    getList: (state) => state.list,
  }
}
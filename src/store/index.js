import { createPinia, defineStore } from 'pinia'

export const createStore = () => createPinia({})

export const useStore = defineStore('main', {
  state: () => ({}),
  actions: {
    // sayHello(t) {
    //   useToast(t, 'message.hello', 'success')
    // },
  },
})

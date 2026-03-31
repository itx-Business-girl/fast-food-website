import {defineStore} from 'pinia'

export const useGlobelStore = defineStore('globelstore', {
  state: () => ({search:'',
   dataArray:[{img:'https://i.pinimg.com/736x/95/a8/32/95a83210c5268d81255f66e24f174613.jpg', title:'Finger fries', subtitle:'Crispy', price:'12'},{img:'https://i.pinimg.com/736x/cf/63/7d/cf637da6ea699845769cc6c26ac8935b.jpg', title:'Cheezy hoted', subtitle:'pizza', price:'16'},{img:'https://i.pinimg.com/736x/af/35/91/af359169ba9ab8c02d6f2e8eb86e32cd.jpg', title:'Chicken Burger', subtitle:'Burger', price:'11'},{img:'https://i.pinimg.com/1200x/de/f4/77/def4772c25b1d237a5483d7ac4f2b6e5.jpg', title:'Hot Wings ', subtitle:'Wings', price:'12'},{img:'https://i.pinimg.com/736x/e5/df/6a/e5df6a695af69cec44d11faf4f7b7a33.jpg', title:'Chicken Zinger', subtitle:'burger', price:'12'},{img:'https://i.pinimg.com/736x/4d/f7/3a/4df73af974c09c7d211332e59fb82ab8.jpg', title:'shawarma', subtitle:'shawarma', price:'13',}],
   filterArrayData:[]
  }

    
  ),
  getters: {
    getArrayData: (state)=>state.search.length ? state.filterArrayData: state.dataArray
  },
  actions: {
    onSearch(){
     
    this.filterArrayData = this.dataArray.filter(current => current.
title == this.search || current .  subtitle == this.search
)
},
}
})
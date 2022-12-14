import { defineStore } from "pinia";
import { getcartItems } from "@/helper/LocalstorageHelper";
interface CartItem {
  name: string;
  info: string;
  price: number;
  imgUrl: string;
  id: string;
  number:number
}
export const useCartStore = defineStore("cart", {
  state: () => ({ cart: [] as CartItem[] }),
  getters: {
    getCart: (state) => state.cart,
    getTotalPrice: (state)=> state.cart.reduce((a, b) => a + b.price * b.number, 0)
  },
  actions: {
    addItemToCart(item: CartItem) {
      this.cart.push(item);
    },
    refreshCart(){
        this.cart = [];
    },
    getSavedCart() {
        getcartItems().then(val=>{
            this.cart = val;
        }).catch(err=>{

        })
    },
  },
});

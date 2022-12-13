import { defineStore } from "pinia";

interface CartItem {
  name: string;
  info: string;
  price: number;
  imgUrl: string;
  id: string;
}
export const useCartStore = defineStore("cart", {
  state: () => ({ cart: [] as CartItem[] }),
  getters: {
    getCart: (state) => state.cart,
  },
  actions: {
    addItemToCart(item: CartItem) {
      this.cart.push(item);
    },
    getSavedCart() {

    },
  },
});

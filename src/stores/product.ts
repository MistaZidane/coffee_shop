import { defineStore } from "pinia";
import { getProducts } from "@/services/api";

export const useProductStore = defineStore("products",{
    state: () => ({ products: [] }),
    getters:{
        getProducts:  (state) => state.products,
    },
    actions:{
        fetchProducts(){
            getProducts().then((val:any)=>{
                this.products = val.data.listProducts.items
            }).catch(err=>{

            })
        }
    }
})
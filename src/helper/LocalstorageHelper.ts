interface CartItem {
  name: string;
  info: string;
  price: number;
  imgUrl: string;
  id: string;
}
export const addItem =  async(item: CartItem) => {
  const getItem = await localStorage.getItem("cart");
  const items: any = getItem ? JSON.parse(getItem) : ([] as CartItem[]);
  items.push(item);
 await localStorage.setItem("cart", JSON.stringify(items));
};
export const getcartItems =async () => {
  const getItem =  await localStorage.getItem("cart");
  const items: any = getItem ? JSON.parse(getItem) : ([] as CartItem[]);
  return items;
};

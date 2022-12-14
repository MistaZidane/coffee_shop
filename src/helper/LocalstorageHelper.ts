interface CartItem {
  name: string;
  info: string;
  price: number;
  imgUrl: string;
  id: string;
  number: number;
}
export const addItem = async (item: CartItem) => {
  const getItem: any = await localStorage.getItem("cart");
  const items: any = getItem != null ? JSON.parse(getItem) : ([] as CartItem[]);

  let foundItem: number = items.findIndex(
    (val: any, index: number) => val.id == item.id
  );
  console.log(foundItem);
  if (foundItem != -1) {
    items[foundItem].number = item.number;
    console.log(items);
    
  } else {
    await items.push(item);
  }
  await localStorage.setItem("cart", JSON.stringify(items));
};
export const getcartItems = async () => {
  const getItem = await localStorage.getItem("cart");
  const items: any = getItem != null ? JSON.parse(getItem) : ([] as CartItem[]);
  return items;
};

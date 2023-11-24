import React, { createContext, useCallback, useRef, useState } from "react";
export const CartContext = createContext<ProductProps[] | null>(null);
export const AddCartContext = createContext((item: ProductProps) => {});
export const RemoveCartContext = createContext((item: ProductProps) => {});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<ProductProps[]>([]);
  const itemsRef = useRef(items);
  itemsRef.current = items;

  return (
    <AddCartContext.Provider
      value={useCallback((item) => {
        if (Array.isArray(item)) {
          setItems([...itemsRef.current, ...item]);
        } else {
          setItems([...itemsRef.current, item]);
        }
      }, [])}
    >
      <RemoveCartContext.Provider
        value={useCallback((item) => {
          const newItems = itemsRef.current.filter(
            (_item) => _item.name != item.name
          );
          setItems(newItems);
        }, [])}
      >
        <CartContext.Provider value={items}>{children}</CartContext.Provider>
      </RemoveCartContext.Provider>
    </AddCartContext.Provider>
  );
};

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
        const existingItem = itemsRef.current.find(
          (_item) => _item.name === item.name
        );

        if (existingItem) {
          // Item já existe no carrinho, incrementar a quantidade
          const updatedItems = itemsRef.current.map((_item) =>
            _item.name === item.name
              ? { ..._item, quantity: _item.quantity ? _item.quantity + 1 : 1 }
              : _item
          );
          setItems(updatedItems);
        } else {
          // Item não existe no carrinho, adicioná-lo
          setItems([...itemsRef.current, { ...item, quantity: 1 }]);
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

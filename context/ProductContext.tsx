"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProductContextProps {
  productName: string | null;
  setProductName: (name: string) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [productName, setProductName] = useState<string | null>(null);

  return (
    <ProductContext.Provider value={{ productName, setProductName }}>
      {children}
    </ProductContext.Provider>
  );
};

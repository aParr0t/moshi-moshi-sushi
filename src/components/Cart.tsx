"use client";

import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";
import { CartContext } from "@/context/cart";
import Link from "next/link";

function QuantityPicker({
  quantity,
  decrease,
  increase,
}: {
  quantity: number;
  decrease: () => void;
  increase: () => void;
}) {
  return (
    <div className="flex flex-row outline outline-1 outline-black rounded-full gap-2 px-2 place-items-center">
      <span className="hover:cursor-pointer text-lg" onClick={decrease}>
        -
      </span>
      <span>{quantity}</span>
      <span className="hover:cursor-pointer text-lg" onClick={increase}>
        +
      </span>
    </div>
  );
}

export default function Cart() {
  const {
    cartItems,
    addToCart,
    removeOneFromCart,
    removeAllFromCart,
    clearCart,
    getCartTotal,
  } = useContext(CartContext);

  const total = getCartTotal();
  const isCartEmpty = cartItems.length === 0;

  return (
    <Sheet>
      <SheetTrigger>
        <FaShoppingCart size={32} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Handlekurv</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col py-4 gap-3">
          {isCartEmpty && (
            <span className="text-center">Handlekurven er tom</span>
          )}
          {!isCartEmpty && (
            <>
              <ul>
                {cartItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex flex-row gap-4 place-items-center border-b-2 border-b-gray-400 py-4"
                  >
                    <div>
                      <span className="font-semibold">{item.product.name}</span>
                      <p className="text-sm">{item.product.description}</p>
                    </div>
                    <QuantityPicker
                      quantity={item.quantity}
                      decrease={() => {
                        removeOneFromCart(item.product.id);
                      }}
                      increase={() => {
                        addToCart(item.product);
                      }}
                    />
                    <span>{item.product.price}kr</span>
                    <span
                      className="hover:cursor-pointer"
                      onClick={() => {
                        removeAllFromCart(item.product.id);
                      }}
                    >
                      <RxCross1 />
                    </span>
                  </li>
                ))}
              </ul>

              <span className="ml-auto">Totalt: {total}kr</span>
              <Button className="" asChild>
                <Link href="/checkout">Checkout</Link>
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

"use client";
import React from "react";
import { useCart } from "../context/CartProvider";
import Container from "../components/Container";
import Image from "next/image";
import { numberToPrice, priceToNumber } from "@/utils/priceConverter";
import Link from "next/link";

const Page = () => {
  const { cart, addToCart, reduceCartItem, totalPrice } = useCart();

  if (!cart.length) {
    return (
      <Container className=" my-12 text-center">
        <div>
          <h3 className="font-semibold text-2xl">No Product In Cart Yet!</h3>
          <Link href="/">
            <button className=" bg-primary text-white rounded-[50px] py-3 px-4 mt-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-12">
      <div className=" cart-headings hidden md:grid grid-cols-12 gap-4 border-b border-light_border pb-4">
        <li className="col-span-6">
          <h3 className="font-semibold text-2xl">Product Name</h3>
        </li>
        <li className="col-span-2 text-center">
          <h3 className="font-semibold text-2xl">Unit Price</h3>
        </li>
        <li className="col-span-2 text-center">
          <h3 className="font-semibold text-2xl">Qty</h3>
        </li>
        <li className="col-span-2 text-center">
          <h3 className="font-semibold text-2xl">Total</h3>
        </li>
      </div>
      <div className="cart-items">
        {cart.map((item) => (
          <div
            key={item.id}
            className="cart-item py-6 border-b border-light_border"
          >
            <div className="md:grid grid-cols-12 items-center gap-4">
              <div className="product-details col-span-6 flex">
                <div className=" bg-gray_bg rounded mr-4">
                  <Image
                    alt="product-1"
                    src={item.image}
                    width={350}
                    height={360}
                    className=" w-40 h-36"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold text-xl">{item.title}</h4>
                  <div>
                    <p className="pb-2">
                      {/* {item.brand} */}
                      Brand Name: Stride & Co
                    </p>
                    <p className="pb-2">Product Type: {item.category}</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex unit-price col-span-2 md:justify-center text-center">
                <p className="font-semibold text-lg">
                  ₦{numberToPrice(priceToNumber(item.price))}
                </p>
              </div>
              <div className="hidden md:flex quantity col-span-2 text-center justify-center">
                <div className="relative w-24 flex justify-center items-center">
                  <button
                    onClick={() => reduceCartItem(item.id)}
                    className=" absolute left-3"
                  >
                    <p className=" text-3xl w-6 h-6 pb-1 flex justify-center items-center">
                      -
                    </p>
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    className="w-24 px-8 text-center outline-none rounded-2xl border border-black"
                  />
                  <button
                    onClick={() => addToCart(item)}
                    className=" absolute right-3"
                  >
                    <p className=" text-2xl w-6 h-6 flex justify-center items-center">
                      +
                    </p>
                  </button>
                </div>
              </div>
              <div className="hidden md:flex unit-price col-span-2 md:justify-center text-center">
                <p className="font-semibold text-lg">
                  ₦{numberToPrice(priceToNumber(item.price) * item.quantity)}
                </p>
              </div>
              <div className="md:hidden mt-2">
                <div className="flex items-center">
                  <div className="unit-price col-span-2 text-center">
                    <p className="font-semibold">
                      Price: ₦{numberToPrice(priceToNumber(item.price))}
                    </p>
                  </div>
                  <div className="quantity col-span-2 text-center flex justify-center">
                    <div className="relative ml-12 w-24 flex justify-center items-center">
                      <button
                        onClick={() => reduceCartItem(item.id)}
                        className=" absolute left-3"
                      >
                        <p className=" text-3xl w-6 h-6 pb-1 flex justify-center items-center">
                          -
                        </p>
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        className="w-24 px-8 text-center outline-none rounded-2xl border border-black"
                      />
                      <button
                        onClick={() => addToCart(item)}
                        className=" absolute right-3"
                      >
                        <p className=" text-2xl w-6 h-6 flex justify-center items-center">
                          +
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="unit-price col-span-2 mt-6">
                  <p className="font-semibold text-lg">
                    Subtotal:
                    <span className="pl-4">
                      ₦
                      {numberToPrice(priceToNumber(item.price) * item.quantity)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between pt-6">
        <div className="mt-8 md:mt-0">
          <Link href="/">
            <button className=" bg-gray_bg rounded-[50px] py-3 px-4">
              Continue Shopping
            </button>
          </Link>
        </div>
        <div>
          <div className=" flex justify-between pb-12 text-lg">
            <span className=" font-semibold">Total</span>
            <span>₦{numberToPrice(totalPrice)}</span>
          </div>
          <div className="pr-12">
            <Link href="/checkout">
              <button className="bg-primary text-white rounded-[50px] py-3 px-4">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;

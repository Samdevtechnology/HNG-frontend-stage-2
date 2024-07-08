"use client";

import Container from "@/app/components/Container";
import { useCart } from "@/app/context/CartProvider";
import { numberToPrice } from "@/utils/priceConverter";
import Image from "next/image";

const Summary = () => {
  const { cart, totalPrice } = useCart();

  if (!cart.length) {
    return (
      <Container className="my-12 text-center">
        <div>
          <h3 className=" text-2xl">Error Loading Cart</h3>
        </div>
      </Container>
    );
  }
  return (
    <div className="mt-12">
      <header className="mb-8 font-medium text-2xl ">Order Summary</header>

      <div className=" border border-light_border rounded p-4">
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 pb-4 mb-4 border-b border-light_border"
            >
              <div className="bg-gray_bg rounded">
                <Image
                  className=" w-32 h-32"
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h3 className=" font-semibold">{item.title}</h3>
                {/* <p>{item.brand}</p> */}
                <p>Brand Name: Stride & Co</p>
                <p>Product Type: {item.category}</p>
                <h6 className=" font-semibold">₦{item.price}</h6>
              </div>
            </div>
          ))}
        </div>

        <div className=" text-center">
          <h5 className=" font-semibold text-lg">
            Total: ₦{numberToPrice(totalPrice)}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Summary;

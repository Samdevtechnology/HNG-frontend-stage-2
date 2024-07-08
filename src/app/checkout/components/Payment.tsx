"use client";
import React, { ChangeEvent, useState } from "react";
import Input from "./form/Input";
import Container from "@/app/components/Container";

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const handlePaymentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.id);
  };

  return (
    <div className="mb-12">
      <header className="mb-8 font-medium text-2xl ">
        Choose Payment Method
      </header>

      <form action="">
        <div>
          <div className="bg-gray_bg p-4 mt-6">
            <div className=" cursor-pointer">
              <fieldset className="flex justify-start items-center">
                <input
                  type="radio"
                  name="payment"
                  id="card"
                  checked={selectedPayment === "card"}
                  onChange={handlePaymentChange}
                />
                <label htmlFor="card" className="font-medium pl-2">
                  Credit Card
                </label>
              </fieldset>
            </div>

            {selectedPayment === "card" && (
              <div>
                <div className=" my-8">
                  <p>
                    Make your payment directly into our bank account, Your
                    orders will not be shipped until your orders have cleared in
                    our account.
                  </p>
                </div>

                <fieldset className="mb-4">
                  <label className="flex pb-4" htmlFor="card-number">
                    Card Number
                  </label>
                  <Input placeholder="mm /dd / yyyy" />
                </fieldset>

                <fieldset className="mb-4">
                  <label className="flex pb-4" htmlFor="date">
                    Date
                  </label>
                  <Input placeholder="mm /dd / yyyy" />
                </fieldset>
                <fieldset className="mb-4">
                  <label className="flex pb-4" htmlFor="cvv">
                    CVV
                  </label>
                  <Input placeholder="Choose Country/Region" />
                </fieldset>

                <div className=" cursor-pointer">
                  <fieldset className="flex justify-start items-center">
                    <input type="checkbox" name="save" id="save" />
                    <label className="font-medium pl-2" htmlFor="save">
                      Save Card Details
                    </label>
                  </fieldset>
                </div>
              </div>
            )}
          </div>
          <div className="bg-gray_bg p-4 mt-6">
            <div className=" cursor-pointer">
              <fieldset className="flex justify-start items-center">
                <input
                  type="radio"
                  name="payment"
                  id="cash"
                  checked={selectedPayment === "cash"}
                  onChange={handlePaymentChange}
                />
                <label htmlFor="cash" className="font-medium pl-2">
                  Cash on Delivery
                </label>
              </fieldset>
            </div>
            {selectedPayment === "cash" && (
              <div className=" mt-8">
                <h1>Payment Option Not Currently available</h1>
              </div>
            )}
          </div>
        </div>
        <div className="bg-gray_bg p-4 mt-6">
          <div className=" cursor-pointer">
            <fieldset className="flex justify-start items-center">
              <input
                type="radio"
                name="payment"
                id="transfer"
                checked={selectedPayment === "transfer"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="transfer" className="font-medium pl-2">
                Bank Transfer
              </label>
            </fieldset>
          </div>
          {selectedPayment === "transfer" && (
            <div className="mt-8">
              <h1>Payment Option Not Currently available</h1>
            </div>
          )}
        </div>

        <div className=" mt-8">
          <button className="w-full bg-primary p-2 text-white">Payment</button>
        </div>
      </form>
    </div>
  );
};

export default Payment;

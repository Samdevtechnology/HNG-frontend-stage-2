import React from "react";
import Input from "./form/Input";
import Select from "./form/Select";

const Billing = () => {
  return (
    <div className="mt-12">
      <header className="mb-8 font-medium text-2xl ">
        Billing Information
      </header>
      <div>
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Phone Number" />
          <Select placeholder="Choose Country / Region" />
          <Select placeholder="State" />
        </div>
        <div className="py-4 flex gap-4 flex-col">
          <Input placeholder="Town / City" />
          <Input placeholder="Street Address" />
        </div>
      </div>
    </div>
  );
};

export default Billing;

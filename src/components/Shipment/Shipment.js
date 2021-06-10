import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import "./Shipment.css";

const Shipment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [logedInUser, setLogedInUser] = useContext(UserContext);

  const onSubmit = (data) => {
    const savedCart = getDatabaseCart();
    const orderDetails = {
      ...logedInUser,
      products: savedCart,
      shipment: data,
      orderTime: new Date(),
    };

    fetch("https://ema-john-nur.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          processOrder();
          alert("Your order Placed successflly");
        }
      });
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("fullName", { required: true })}
            placeholder="Your Name"
            defaultValue={logedInUser.name}
          />
          {errors.fullName && (
            <span className="error">Fullname is required</span>
          )}

          <input
            {...register("email", { required: true })}
            placeholder="Email"
            defaultValue={logedInUser.email}
          />
          {errors.email && <span className="error">Email is required</span>}

          <input
            {...register("address", { required: true })}
            placeholder="Address"
          />
          {errors.address && <span className="error">Address is required</span>}

          <input
            {...register("phoneNumber", { required: true })}
            placeholder="Your Phone"
          />
          {errors.phoneNumber && (
            <span className="error">PhoneNumber is required</span>
          )}

          <input type="submit" />
        </form>
      </div>
      <div className="col-md-6">
        <h2>Please pay</h2>
        <ProcessPayment />
      </div>
    </div>
  );
};

export default Shipment;

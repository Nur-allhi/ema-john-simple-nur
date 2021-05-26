import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import "./Shipment.css";

const Shipment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [logedInUser, setLogedInUser] = useContext(UserContext);

  const onSubmit = (data) => console.log(data);

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("fullName", { required: true })}
        placeholder="Your Name"
        defaultValue={logedInUser.name}
      />
      {errors.fullName && <span className="error">Fullname is required</span>}

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
  );
};

export default Shipment;

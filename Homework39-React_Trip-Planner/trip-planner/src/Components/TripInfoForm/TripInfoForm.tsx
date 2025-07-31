import { useForm } from "react-hook-form";
import "./TripInfoForm.css";
import type { TripInfoValues } from "../../Pages/TripInfoPage/TripInfo";
import Button from "../Button/Button";
import { useContext } from "react";
import { CountriesContext } from "../../Contexts/CountriesContext";
import type { Trip } from "../../models/trip.model";

export function TripInfoForm() {
  const {
    register,
    formState: { isValid, isDirty, errors },
    handleSubmit,
    getValues,
  } = useForm<TripInfoValues>({
    defaultValues: {
      fullName: "",
      email: "",
      budget: 1,
      passportNum: 1,
      comments: "",
    },
  });

  const { resetTripPlanner, createTrip, tripPlanner } =
    useContext(CountriesContext);

  const onSubmit = (data: TripInfoValues) => {
    console.log("trip submitted", data);

    if (!isValid) return;
    console.log("trip submitted");
    const { fullName, email, budget, passportNum, comments } = getValues();

    const createTripInfoReq: Trip = {
      passenger: { fullName, email, budget, passportNum, comments },
      countries: tripPlanner,
    };

    createTrip(createTripInfoReq);

    resetTripPlanner();
  };

  console.log("errrorrs", errors);
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          {...register("fullName", { required: true })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="budget">Budget</label>
        <input
          type="text"
          id="budget"
          {...register("budget", { required: true })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="passportNum">Passport Number</label>
        <input
          type="text"
          id="passportNum"
          {...register("passportNum", { required: true })}
        />
      </div>
      <div className="comments">
        <label htmlFor="comments">Comments</label>
        <input
          type="text"
          id="comments"
          {...register("comments", { required: true })}
        />
      </div>
      {!isValid && isDirty && (
        <div className="form-error">All fields are required</div>
      )}
      <Button
        type="submit"
        // disabled={isValid}
        onBtnClick={handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </form>
  );
}

import "./TripInfo.css";
// import { useForm } from "react-hook-form";
// import { useContext } from "react";
// import { CountriesContext } from "../../Contexts/CountriesContext";
// import type { Trip } from "../../models/trip.model";
import { TripInfoForm } from "../../Components/TripInfoForm/TripInfoForm";

export interface TripInfoValues {
  fullName: string;
  email: string;
  budget: number;
  passportNum: number;
  comments: string;
}

export function TripInfoPage() {
  // const tripInfoForm = useForm<TripInfoValues>({
  //   defaultValues: {
  //     fullName: "",
  //     email: "",
  //     budget: 1,
  //     passportNum: 1,
  //     comments: "",
  //   },
  // });

  // const { resetTripPlanner, createTrip, tripPlanner } =
  //   useContext(CountriesContext);

  // const onTripInfoSubmit = (data: TripInfoValues) => {
  //   console.log("trip submitted", data);

  //   if (!tripInfoForm.formState.isValid) return;
  //   console.log("trip submitted");
  //   const { fullName, email, budget, passportNum, comments } =
  //     tripInfoForm.getValues();

  //   const createTripInfoReq: Trip = {
  //     passenger: { fullName, email, budget, passportNum, comments },
  //     countries: tripPlanner,
  //   };

  //   createTrip(createTripInfoReq);

  //   resetTripPlanner();
  // };

  // const postNewTripInfo = async (reqBody: Trip) => {
  //   try {
  //     // await httpService.post("/planned-trips", reqBody);
  //     console.log(reqBody);
  //     resetTripPlanner();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return <TripInfoForm></TripInfoForm>;
}

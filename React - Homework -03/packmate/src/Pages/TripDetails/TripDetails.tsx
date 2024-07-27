import "./TripDetails.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../utils/hooks";
import { onSubmit } from "../../state/slice/tripDetails.slice";
import { useForm } from "react-hook-form";
import { LinkData } from "../../models/core.model";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";

export interface FormValues {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
}

function TripDetailsPage() {
  const linkDataArr: LinkData[] = [
    {
      path: "/home",
      text: "HOME",
    },
  ];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
    },
  });

  return (
    <section className="TripDetailsPage">
      <Header title="🧳PackMate" linkDataArr={linkDataArr} />
      <h1>Trip Details Page</h1>
      <form
        className="trip-form"
        onSubmit={handleSubmit((item) => {
          dispatch(onSubmit(item));
        })}
      >
        <input
          type="text"
          placeholder="First Name"
          {...register("firstName", {
            required: { value: true, message: "First Name is required!" },
          })}
        />
        <input
          type="text"
          placeholder="Last Name"
          {...register("lastName", {
            required: { value: true, message: "Last Name is required!" },
          })}
        />
        <input
          type="text"
          placeholder="Date of Birth"
          {...register("dateOfBirth", {
            required: { value: true, message: "Date of birth is required!" },
          })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "Email is required!" },
          })}
        />
        <input
          type="text"
          placeholder="Phone number"
          {...register("phoneNumber", {
            required: { value: true, message: "Phone number is required!" },
          })}
        />
        <div className="error">
          <div>
            {!isValid && isSubmitted ? (
              <div>All fields are required</div>
            ) : null}
          </div>
          <button className="add-button" type="submit">
            Submit
          </button>
        </div>
      </form>
      {isValid && isSubmitted && (
        <div className="btn">
          <button
            onClick={() => {
              navigate("/summary");
            }}
          >
            Next
          </button>
        </div>
      )}
      <Footer />
    </section>
  );
}

export default TripDetailsPage;

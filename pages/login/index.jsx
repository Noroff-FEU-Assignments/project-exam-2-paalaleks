import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Index = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Vennligst skriv inn en ordentlig epostadresse.")
      .required("Du må fylle inn en epost"),
    password: yup
      .string()
      .min(4, "Du må skrive inn minst fire bokstaver.")
      .required("Vi trenger et passord!"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    shouldUseNativeValidation: true,
  });

  const onSubmit = (data, e) => console.log(data, e);

  return (
    <div className="relative min-h-screen bg-[url('/solar-pattern-dark.png')] bg-[length:40px_40px] min-w-screen body-padding flex items-center">
      <div className="mx-auto max-w-4xl flex flex-col">
        <h3>Admin Login</h3>
        <form className="form-control w-60" onSubmit={handleSubmit(onSubmit)}>
          <label className="label">
            <span className="label-text text-accent">Admin e-post</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="e-post"
            className="input input-bordered w-60"
          />

          <label className="label">
            <span className="label-text text-accent">Admin passord</span>
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="passord"
            className="input input-bordered w-60"
          />

          <button type="submit" className="btn btn-accent capitalize mt-7">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;

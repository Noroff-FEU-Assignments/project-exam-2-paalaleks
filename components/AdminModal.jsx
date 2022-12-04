import { setToken } from "../lib/auth";

const AdminModal = ({ data, setData }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: data.identifier,
        password: data.password,
      }),
    });
    const res = await req.json();
    setToken(res);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Log inn</h3>
          <input
            className="input bg-neutral my-2"
            type="text"
            name="identifier"
            onChange={handleChange}
            placeholder="Brukernavn eller epost"
            required
          />
          <input
            className="input bg-neutral my-2"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Passord"
            required
          />

          <button className="btn btn-accent mt-2" type="submit">
            Login
          </button>
        </form>
      </div>
      <div className=" opacity-90 fixed inset-0 z-40 bg-darkblue-1"></div>
    </>
  );
};

export default AdminModal;

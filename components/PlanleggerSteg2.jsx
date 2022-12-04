import axios from "axios";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const PlanleggerSteg2 = ({ page, setPage }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      bilder: [
        {
          takbilde: "",
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "bilder",
  });

  const uploadImage = (event) => {
    console.log(event);
    setLoading(true);
    const formData = new FormData();
    formData.append("file", event);
    formData.append("upload_preset", "gcofyjll");
    axios
      .post(process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL, formData)
      .then((response) => console.log(response))
      .finally(() => setLoading(false), append());
  };

  console.log(loading);

  return (
    <form className="body-padding min-h-[574px]" onSubmit={handleSubmit}>
      <div className="text-primary h-[75px] my-8 ">
        <h2 className=" text-2xl">Last opp bilder</h2>
        <p>
          Det er kjempefint hvis du laster opp bilder av de forksjellige
          takflatene.
        </p>
      </div>
      {fields.map(({ id, takbilde }, index) => {
        return (
          <div key={id} className="min-h-[323px]">
            <h2 className="inline mr-2 text-lg">Takflate#{index + 1}</h2>
            <input
              key={index}
              {...register(`bilder[${index}].takbilde`)}
              type="file"
              onChange={(event) => {
                setImage();
              }}
            />
          </div>
        );
      })}

      <div className="my-8 w-full flex items-center justify-center md:relative md:right-12">
        <h2 className="mr-4 text-base">Steg 2 av 3</h2>
        <button
          className="btn btn-accent w-36 capitalize mr-1"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Forige
        </button>
        <button
          type="submit"
          className="btn btn-accent w-36 capitalize ml-1"
          onClick={() => {
            setPage(page + 1);
            uploadImage;
          }}
        >
          Neste
        </button>
      </div>
    </form>
  );
};

export default PlanleggerSteg2;

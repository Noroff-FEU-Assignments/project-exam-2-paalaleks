import AdminLayout from "../../components/AdminLayout.jsx";
import BlogCards from "../../components/BlogCards.jsx";
import AdminModal from "../../components/AdminModal.jsx";
import { useState } from "react";
import { getTokenFromLocalCookie, unsetToken } from "../../lib/auth";
import { BiPowerOff } from "react-icons/bi";
import { BiCaretDown, BiCaretRight, BiCheck } from "react-icons/bi";
import { useRouter } from "next/router.js";

const Index = ({ blogs }) => {
  // fetch posts static way
  const [data, setData] = useState("");
  //just some UI
  const [hidePosts, sethidePosts] = useState(false);
  const [hideCreatePosts, sethideCreatePosts] = useState(true);
  //grab data from inputs
  const [textarea, setTextarea] = useState("");
  const [tittel, setTittel] = useState("");
  const [slug, setSlug] = useState("");

  const getJwt = getTokenFromLocalCookie();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = JSON.stringify({
      data: {
        headerText: textarea,
        title: tittel,
        slug: slug,
      },
    });

    try {
      const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/`, {
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${getJwt}`,
        },
      });
      const res = await req.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    unsetToken();
    router.reload();
  };

  return (
    <AdminLayout>
      <ul className="menu menu-horizontal bg-accent w-full justify-between flex items-center pr-2">
        <li>
          <h1 className="mr-4 leading-4 whitespace-nowrap">
            Pro solar
            <br />– admin
          </h1>
        </li>
        <li>
          <button className="btn btn-ghost" onClick={logOut}>
            <BiPowerOff color="colorCurrent" /> Logg ut
          </button>
        </li>
      </ul>

      <div className="body-padding">
        <main className="max-w-4xl mx-auto">
          <div>
            <div>
              <h1
                className="flex my-8 items-center cursor-pointer"
                onClick={() => {
                  if (!hidePosts) {
                    sethidePosts(true);
                  } else {
                    sethidePosts(false);
                  }
                }}
              >
                Mine blogginnlegg
                {!hidePosts ? <BiCaretRight /> : <BiCaretDown />}
              </h1>
              {hidePosts && (
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {blogs.data.map((blog) => {
                    return (
                      <BlogCards
                        key={blog.id}
                        id={blog.id}
                        slug={blog.attributes.slug}
                        title={blog.attributes.title}
                        cardImage={
                          blog.attributes.headerImage.data.attributes.formats
                            .medium
                        }
                        headerText={blog.attributes.headerText}
                      />
                    );
                  })}
                </div>
              )}
            </div>
            <div>
              <h1
                className="flex items-center cursor-pointer"
                onClick={() => {
                  if (!hideCreatePosts) {
                    sethideCreatePosts(true);
                  } else {
                    sethideCreatePosts(false);
                  }
                }}
              >
                Skriv et nytt innlegg
                {!hideCreatePosts ? <BiCaretRight /> : <BiCaretDown />}
              </h1>
              {hideCreatePosts && (
                <form
                  onSubmit={handleSubmit}
                  className="flex justify-between flex-col"
                >
                  <textarea
                    required
                    placeholder="Skriv om solceller..."
                    className="textarea bg-neutral w-full min-h-[300px] mt-4"
                    onChange={(e) => {
                      setTextarea(e.target.value);
                    }}
                  />

                  <div className="flex mt-4">
                    <div className="mr-4">
                      <input
                        onChange={(e) => {
                          setSlug(e.target.value);
                        }}
                        required
                        type="text"
                        id="slug"
                        name="slug"
                        placeholder="Url med bindestrek!"
                        className="input w-full max-w-[300px] input-md bg-neutral"
                      />
                    </div>
                    <div>
                      <input
                        onChange={(e) => {
                          setTittel(e.target.value);
                        }}
                        required
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Tittel"
                        className="input w-full max-w-[300px] input-md bg-neutral"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className=" rounded-lg flex flex-col mt-4">
                      <input className="my-4" type="file" name="headerImage" />
                    </div>

                    <button type="submit" className="btn btn-accent mt-auto ">
                      Publiser artikkel
                      <BiCheck color="currentColor" fontSize={"20px"} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </main>
      </div>
      {!getJwt && <AdminModal data={data} setData={setData} />}
    </AdminLayout>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?populate=*`
  );
  const blogs = await res.json();

  return {
    props: { blogs },
  };
}

export default Index;

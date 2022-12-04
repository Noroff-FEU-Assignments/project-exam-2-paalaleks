import Layout from "../../components/Layout";
import BlogCards from "../../components/BlogCards";
import { useState } from "react";
import Link from "next/link";

const Index = ({ blogs }) => {
  const [filteredData, setFilteredData] = useState([]);

  const { data } = blogs;

  const handleFilter = (event) => {
    const searchWord = event;

    const newFilter = data.filter((value) => {
      return (
        value.attributes.headerText
          .toLowerCase()
          .includes(searchWord.toLowerCase()) ||
        value.attributes.title.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const getValue = (event) => {
    console.log(event);
  };

  return (
    <Layout>
      <div className="body-padding content-padding">
        <main className="min-h-screen mx-auto max-w-4xl">
          <div className="dropdown">
            <input
              tabIndex={0}
              type="text"
              onChange={(event) => {
                handleFilter(event.target.value), getValue(event.target.value);
              }}
              placeholder="Søk etter prosjekt"
              className="input input-ghost shadow z-10 relative w-64 text-neutral"
            />
            {filteredData.length != 0 && (
              <ul
                tabIndex={0}
                className="menu dropdown-content shadow bg-base-100 w-64 text-neutral absolute"
              >
                {filteredData.slice(0, 5).map((value, key) => {
                  return (
                    <Link key={key} href={`blog/${value.attributes.slug}`}>
                      <li>
                        <a>
                          {value.attributes.headerText
                            .toLowerCase()
                            .slice(0, 40) ||
                            value.attributes.title.toLowerCase().slice(0, 40)}
                        </a>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            )}
          </div>

          <h2 className=" text-2xl mt-4">Pro Solar prosjekt blog</h2>
          <p className="mb-8">
            Målet vårt er å ta bilde av arbeid som pågår slik at de som ikke vet
            så mye om solceller kan få en bedre forståelse av prosessen med å
            bygge solcelleplanlegg.
          </p>

          <div className="grid grid-cols-2 gap-2 my-8">
            {blogs.data.map((blog) => {
              return (
                <BlogCards
                  alt={""}
                  key={blog.id}
                  id={blog.id}
                  slug={blog.attributes.slug}
                  title={blog.attributes.title}
                  headerText={blog.attributes.headerText}
                  cardImage={
                    blog.attributes.headerImage.data.attributes.formats.medium
                  }
                />
              );
            })}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?populate=*`
  );
  const blogs = await res.json();

  return {
    props: { blogs },
  };
}

export default Index;

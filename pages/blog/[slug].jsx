import Layout from "../../components/Layout";
import Image from "next/image";

const BlogPost = ({ blogs }) => {
  return (
    <Layout>
      <div className="body-padding content-padding">
        <main className="min-h-screen mx-auto max-w-4xl">
          <div className="p-2 bg-accent flex rounded-3xl mx-auto mb-4">
            <Image
              alt="header images"
              style={{ borderRadius: "18px" }}
              height={
                blogs.data[0].attributes.headerImage.data.attributes.formats
                  .large.height
              }
              width={
                blogs.data[0].attributes.headerImage.data.attributes.formats
                  .large.width
              }
              src={
                blogs.data[0].attributes.headerImage.data.attributes.formats
                  .large.url
              }
            />
          </div>
          <h2>{blogs.data[0].attributes.title}</h2>
          <p>{blogs.data[0].attributes.headerText}</p>

          <div className="mt-8">
            {blogs.data[0].attributes.images.data.map((elm, index) => {
              return (
                <figure
                  key={index}
                  className="flex items-center odd:flex-row-reverse odd:text-right even:text-left last-of-type:mb-16"
                >
                  <div className="p-2 bg-accent flex rounded-3xl mx-auto mb-4">
                    <Image
                      alt="blog images"
                      style={{ borderRadius: "18px" }}
                      src={elm.attributes.formats.medium.url}
                      width={elm.attributes.formats.medium.width}
                      height={elm.attributes.formats.medium.height}
                    />
                  </div>
                  <p className="max-w-[50%] px-4">{elm.attributes.caption}</p>
                </figure>
              );
            })}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?populate=*`
  );
  const blogs = await res.json();

  const paths = blogs.data.map((blog) => ({
    params: { slug: blog.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?populate=*`
  );
  const blogs = await res.json();

  return { props: { blogs } };
}

export default BlogPost;

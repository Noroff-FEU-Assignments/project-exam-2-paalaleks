import Link from "next/link";
import Image from "next/image";

const BlogCards = ({ title, headerText, cardImage, slug }) => {
  const MAX_LENGTH = 250;
  return (
    <Link href={`/blog/${slug}`}>
      <div className="card max-w-sm bg-primary text-darkblue-1 shadow-md cursor-pointer relative">
        <figure className=" ">
          <Image
            src={cardImage.url}
            height={cardImage.height}
            width={cardImage.width}
            alt={title}
          />
        </figure>
        <div className="bg-primary px-8 py-4">
          <h2 className="card-title">{title}</h2>
          <p className=" max-h-14">
            {headerText.substring(0, MAX_LENGTH) + "..."}
          </p>
        </div>
        <div className="h-16 bg-gradient-to-b from-neutral/60 to-neutral absolute bottom-0 w-full" />
      </div>
    </Link>
  );
};

export default BlogCards;

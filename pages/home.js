import client from "../apolloClient";
import { gql } from "@apollo/client";
import Image from "next/image";

export default function Home({ menus,products }) {
  const { jsonField, content, image } = menus[0];

  const findData = (key) => {
    let data = jsonField.find((x) => x.key === key);
    if (data)
      return (
        <>
          <h3 className=" pb-2 font-bold">{data.header}</h3>
          <p>{data.body}</p>
        </>
      );

    return null;
  };

  return (
    <div className="container mx-auto sm:px-0 overflow-hidden relative w-4/5 text-babyBrown">
      <Image
        alt="main"
        src={image[0].url}
        layout="responsive"
        width="100%"
        height="40px"
        className="w-10/12 h-10/12 rounded "
      />
      <div className=" w-full h-full flex-col text-center ">
        <div
          className=" pt-8 pb-9 text-babyBrown"
          dangerouslySetInnerHTML={{ __html: content.html }}
        ></div>

        <h2 className="text-babyBrown font-extrabold pb-7">Our Core Values</h2>
      </div>

      <div className=" w-full h-full flex flex-row bg-slate-400 justify-center text-center">
        <div className="w-1/3 p-12  bg-yellow-50 ">{findData("first")}</div>
        <div className="w-1/3 p-12 bg-stone-200">{findData("second")}</div>
        <div className="w-1/3 p-12 bg-orange-50">{findData("third")}</div>
      </div>

      <div className="animate-carouselAnim carousel-items flex items-center justify-center w-fit">
        {products &&
          products.length > 0 &&
          products.map((data, index) => {
            return (
              <div key={index}
                className="carousel-focus flex items-center flex-col relative bg-lightBrown mx-5 my-10 px-4 py-3 rounded-lg shadow-lg"
                style={{ width: "270px" }}
              >
                <span className="text-babyBrown font-bold text-xl mb-3">
                  {data.name}
                </span>
                <img
                  className="h-16 w-16 rounded-full shadow-2xl"
                  src={data.image.url}
                  alt="Img"
                />
                <p className="mt-3 text-gray-600 text-center">
                  {data.name}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        menus(where: { slug: "home" }) {
          name
          slug
          title
          image {
            url
          }
          jsonField
          content {
            html
          }
        }

        products {
          title
          slug
          date
          name
          description
          price
          image {
            url
          }
          type
        }
      }
    `,
  });

  const { menus, products } = data;
  return { props: { menus, products } };
}

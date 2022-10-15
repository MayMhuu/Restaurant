import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import CardView from "../components/article/CardView";

export default function Menu({ products }) {
  return (
    <div className="container mx-auto sm:px-0 w-4/5">

        <div className="w-full">
          <div className="flex flex-wrap justify-center ">
            {products &&
              products.length > 0 &&
              products.map((data, index) => {
                return <CardView data={data} index={index} />;
              })}
          </div>
        </div>
 
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log("pa_xx", context);
  const { data } = await client.query({
    query: gql`
      query {
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
        }
      }
    `,
  });

  const { products } = data;
  console.log("menus_xxx", products);

  return { props: { products } };
}

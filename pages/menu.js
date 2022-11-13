import { gql } from "@apollo/client";
import client from "../apolloClient";
import CardView from "../components/article/CardView";

export default function Menu({ products, breadData }) {
  return (
    <div className="container mx-auto sm:px-0 w-4/5">
      <div className="w-full">
        <div className="flex flex-wrap justify-center pt-3">
          {products &&
            products.length > 0 &&
            products.map((data, index) => {
              return <CardView data={data} key={index} />;
            })}
          {breadData &&
            breadData.length > 0 &&
            breadData.map((data, index) => {
              return <CardView data={data} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        products(where: { type: "coffee" }) {
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

  const { data: bread } = await client.query({
    query: gql`
      query {
        products(where: { type: "bread" }) {
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

  const { products } = data;
  const { products: breadData } = bread;

  return { props: { products, breadData } };
}

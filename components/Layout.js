import HeaderMenu from "../components/article/HeaderMenu";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Today News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-ful ">
        <HeaderMenu />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        menus {
          name
        }
      }
    `,
  });

  const { menus } = data;
  console.log("data_xxx", data);
  return {
    props: {
      menus,
    },
  };
}

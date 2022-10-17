import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import client from "../apolloClient";
import { gql } from "@apollo/client";
import Layout from "../components/Layout";

function App({ Component, pageProps, menus }) {
  return (
    <Layout menus={menus}>
      <Component {...pageProps} />
    </Layout>
  );
}

if (typeof window !== "undefined") {
  window.uncaughtErrors = [];
  window.addEventListener("error", (err) => {
    window.uncaughtErrors.push(err);
  });
  window.addEventListener("unhandledrejection", (err) => {
    window.uncaughtErrors.push(err);
  });
}

App.getInitialProps = async ({ Component, ctx }) => {
  const props = {};
  if (Component.getInitialProps) {
    props.initialProps = await Component.getInitialProps(ctx);
  }

  const { data } = await client.query({
    query: gql`
      query {
        menus {
          name
          slug
          title
        }
      }
    `,
  });

  const { menus } = data;
  return { props, menus };
};
export default App;

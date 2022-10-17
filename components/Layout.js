import HeaderMenu from "../components/article/HeaderMenu";
import Head from "next/head";

export default function Layout({ menus, children }) {
  return (
    <div>
      <Head>
        <title>Coffee House</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="w-full bg-yellowBrown ">
        <HeaderMenu menus={menus} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

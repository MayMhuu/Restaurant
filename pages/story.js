import HeadLine from "../components/article/HeadLine";
import ByLine from "../components/article/ByLine";
import DateLine from "../components/article/DateLine";
import HeroImage from "../components/article/HeroImage";
import Connect from "../components/article/Connect";
import ArticleBody from "../components/article/ArticleBody";
import SideBar from "../components/article/SideBar";
import client from "../apolloClient";
import { gql } from "@apollo/client";
export default function Story({ menus, sideBars }) {
  const storyData = menus[0];

  return (
    <div className="container mx-auto sm:px-0 w-4/5">
      <div className="flex flex-wrap mt-10 text-amber-900">
        <div className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4 ">
          <div className="w-full h-full pr-5">
            <HeroImage
              image={storyData.image[0].url}
              caption={storyData.storyTitle}
              className="col-span-2 w-4/5 h-full justify-center justify-self-center mx-auto"
            />
          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4 pt-14">
          <div className="w-full h-full pr-5 ">
            <ArticleBody data={storyData.content} />
          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 pt-16">
          <div className="w-full h-full  ">
            <SideBar data={sideBars} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        menus(where: { slug: "story" }) {
          name
          slug
          content {
            html
          }
          storyTitle {
            html
          }
          image {
            url
          }
        }
        sideBars {
          name
          label {
            html
          }
          image {
            url
          }
          sideBar {
            type
            name
          }
        }
      }
    `,
  });

  const { menus, sideBars } = data;
  return { props: { menus, sideBars } };
}

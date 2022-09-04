import HeadLine from "../components/article/HeadLine";
import ByLine from "../components/article/ByLine";
import DateLine from "../components/article/DateLine";
import HeroImage from "../components/article/HeroImage";
import Connect from "../components/article/Connect";
import ArticleBody from "../components/article/ArticleBody";
import SideBar from "../components/article/SideBar";
import articelJson from "./view/json/article-316751.json";
import sideBarJson from "./view/json/sideBar.json";
import FollowPage from "../components/article/FollowPage";
import TaggedTopic from "../components/article/TaggedTopics";
import Subscribe from "../components/article/Subscribe";
import ReadAlso from "../components/article/ReadAlso";

export default function NewsArticle() {
  const articalBody = articelJson[0];

  const checkedBundleType = (key) => {
    if (key === "text") {
      const articel = articalBody.content.find(
        (element) => element.bundle === key
      );
      return <ArticleBody data={articel} />;
    }
  };

  return (
    <div className="container mx-auto sm:px-0 w-4/5">
      <div className="flex flex-wrap mt-10">
        <HeadLine data={articalBody.title} />
        <div className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4 ">
          <div className="w-full h-full  text-black pr-5">
            <HeroImage
              image={articalBody.image.media_image}
              caption={articalBody.image.description}
              className="col-span-2 w-4/5 h-full justify-center justify-self-center mx-auto"
            />
          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4">
          <div className="w-full h-full  text-black">
            <ByLine data={articalBody.byline_detail} />
            <DateLine data={articalBody} />
            <Connect url={articalBody.url}/>
          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4 pt-14">
          <div className="w-full h-full text-black pr-5 ">
            <FollowPage />
            {checkedBundleType("text")}
            <ReadAlso data={articalBody.components}/>
            {articalBody.topics && <TaggedTopic data={articalBody.topics} />}
            <Subscribe data={articalBody.content} />
          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 pt-16">
          <div className="w-full h-full  text-black">
            <SideBar data={sideBarJson} />
          </div>
        </div>
      </div>
    </div>
  );
}

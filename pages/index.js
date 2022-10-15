import client from "../apolloClient";
import { gql } from "@apollo/client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid justify-items-center ">
      <div className="w-10/12 h-10/12 mt-3 mb-5 items-center">
        <Image
          alt="Mountains"
          src="https://media.graphassets.com/BB4YtSNmQsKpkGeEXSnM"
          layout="responsive"
          width="100%"
          height="40px"
          className="w-10/12 h-10/12  rounded "
        />
      </div>
      <div className="grid w-full h-full bg-babyYellow justify-items-center text-center ">
        <div className="w-10/12 pt-8 pb-9 justify-items-center text-center">
          <h3 className="text-babyBrown font-medium">About Us</h3>
          <p className="text-brown font-normal">
            Western brunch classics with Japanese flair. We&apos;re located in the
            heart of Joo Chiat, the home to cafe culture. Serving contemporary
            dishes using the freshest Japanese ingredients, dining at Café Natsu
            is a luxurious yet comforting affair. ‍
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 w-full h-full bg-yellowBrown">
        <div className="w-full h-10/12">
          <Image
            alt="img1"
            src="https://media.graphassets.com/vdw9AC8SYGqLxU0bGivT"
            layout="responsive"
            width="100%"
            height="45px"
            className="w-11/12 h-10/12 "
          />
        </div>
        <div className="w-full h-10/12">
          <Image
            alt="img5"
            src="https://media.graphassets.com/vR5ED4T8RuWwVrCQ1GFr"
            layout="responsive"
            width="100%"
            height="45px"
            className="w-full h-10/12  "
          />
        </div>
        <div className="w-full h-10/12">
          <Image
            alt="img"
            src="https://media.graphassets.com/KpJ0Gc3RSC8rwA2gBi7p"
            layout="responsive"
            width="100%"
            height="45px"
            className="w-11/12 h-10/12   "
          />
        </div>
        <div className="w-full h-10/12">
          <Image
            alt="img6"
            src="https://media.graphassets.com/aPHpbT6KRAO1QCsanrv1"
            layout="responsive"
            width="100%"
            height="45px"
            className="w-11/12 h-10/12   "
          />
        </div>
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
          slug
          title
        }
      }
    `,
  });

  const { menus } = data;

  return { props: { menus } };
}

import Image from "next/image";

export default function HeroImage({ image, caption }) {
  return (
    <div>
      <Image
        alt="Mountains"
        src={image && image}
        layout="responsive"
        width="100%"
        height="50px"
        className="w-9/12 h-10/12 rounded"
      />

      <div className="pt-3" dangerouslySetInnerHTML={{ __html: caption.html }}></div>
    </div>
  );
}

import Link from "next/link";
import girl1 from "../../public/assets/image/girl1.png";
import girl2 from "../../public/assets/image/girl2.png";
import men from "../../public/assets/image/men.png";
import Image from "next/image";

const mycardinfo = [
  {
    img: girl1,

    name: "James Vuong",
    nametwo: "(Co-CEO)",
    para1:
      "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
  },
  {
    img: girl2,
    nametwo: "(Co-CEO)",
    name: "Tricia Yong",
    para1:
      "Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer ",
  },
  {
    img: men,
    name: "Kevin Li",
    nametwo: "(CFO)",
    para1:
      "Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His",
  },
];
export default function Home() {
  const mycard = mycardinfo.map((mycard, index) => (
    <div key={index}>
      <div className="behind_card position-relative mb-4 p-3 overflow-hidden">
        <div className="d-sm-flex align-items-center text-center ">
          <div className="flex justify-center">
            <Image
              className="behind_img "
              src={mycard.img}
              alt="card-img"
              width={200}
              height={200}
            />
          </div>
          <div>
            <p className=" flex items-center fw-semibold text-white ms-2 justify-center  ">
              {mycard.name}
              <span className="fs-sm fw-normal text-white ms-2">
                {mycard.nametwo}
              </span>
            </p>
            <p className="fs-sm fw-normal  text-white ms-2">{mycard.para1}</p>
          </div>
        </div>
        <p className="fs-sm fw-normal  text-white mt-2 ms-2 ms-sm-0">
          {mycard.para2}
        </p>
        <span className="ellipesourtem"></span>
      </div>
    </div>
  ));
  return (
    <div className="bg-black min-h-screen">
      <div className="container px-3 mx-auto">
        <div className="container pt-2 ">
          <div className="d-flex align-items-center justify-content-center"></div>
          <h1 className=" fw-bold text-white text-center mx-auto">
            Behind our expertise
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2  pt-5 ">
            {mycard}
          </div>
        </div>
        <div className=" flex justify-center items-center pt-[50px]">
          <Link
            href="./components/swiper"
            className="bg-white text-black rounded-[16px] hover:text-white hover:bg-black hover:border border hover:duration-300 py-4 px-6"
          >
            Swiper
          </Link>
        </div>
      </div>
    </div>
  );
}

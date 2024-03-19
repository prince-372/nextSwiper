import Link from "next/link";
import behind1 from "../../public/assets/image/image1.png";
import behind2 from "../../public/assets/image/image2.png";
import behind3 from "../../public/assets/image/image3.png";
import Image from "next/image";

const mycardinfo = [
  {
    img: behind1,

    name: "James Vuong",
    nametwo: "(Co-CEO)",
    para1:
      "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
    para2:
      "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
  },
  {
    img: behind2,
    nametwo: "(Co-CEO)",
    name: "Tricia Yong",
    para1:
      "Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer ",
    para2:
      "products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape.",
  },
  {
    img: behind3,
    name: "Kevin Li",
    nametwo: "(CFO)",
    para1:
      "Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His",
    para2:
      "strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease..",
  },
];
export default function Home() {
  const mycard = mycardinfo.map((mycard, index) => (
    <div key={index}>
      <div className="behind_card position-relative mb-4 p-3 overflow-hidden">
        <div className="d-sm-flex align-items-center">
          <Image
            className="behind_img"
            src={mycard.img}
            alt="card-img"
            width={200}
            height={200}
          />
          <div>
            <p className=" flex items-center fw-semibold text-white ms-2">
              {mycard.name}
              <span className="fs-sm fw-normal text-white ms-2 ">
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
    <div className="bg-black pb-10">
      <div className="container px-3 mx-auto">
        <div className="container pt-2 ">
          <div className="d-flex align-items-center justify-content-center"></div>
          <h1 className="fs-xl1 fw-bold text-white text-center mx-auto">
            Behind our expertise
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2  pt-5 ">
            {mycard}
          </div>
        </div>
        <Link
          href="./components/swiper"
          className="bg-white text-black rounded-[16px] py-4 px-6"
        >
          Swiper With NextJs
        </Link>
      </div>
    </div>
  );
}

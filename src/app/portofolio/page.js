import PortoCard from "@/components/PortoCard"

export default function portofolio(){
    return (
    <>
      <div className="bg-cover bg-no-repeat bg-[url('/images/news/recent/cblog.png')] bg-no-repeat w-full md:h-[600px] ">
        <div className="bg-cover bg-no-repeat bg-[url('/images/about/banner/blue.png')] w-full bg-no-repeat h-full z-10 text-center items-center">
          <h1 className="font-bold md:text-5xl sm:text-4xl mx-3 text-2xl text-white pb-14 pt-16 md:pt-32 md:pb-24">
            PORTOFOLIO
          </h1>
          <h5 className="font-bold md:pb-24 pb-14 text-white md:text-3xl text-lg sm:text-xl">
          PT SAPTALOKA DIGITAL INDONESIA
          </h5>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center">
        {/* DINAMIS PORTOFOLIO CARD */}
      <PortoCard src={"/images/news/recent/cblog.png"} title={"Inventory management Indolakto"} desc={"lorem ipsum dolor amet terbang "}/>
      <PortoCard src={"/images/news/recent/cblog.png"} title={"Inventory management Indolakto"} desc={"lorem ipsum dolor amet terbang "}/>
      <PortoCard src={"/images/news/recent/cblog.png"} title={"Inventory management Indolakto"} desc={"lorem ipsum dolor amet terbang "}/>
      <PortoCard src={"/images/news/recent/cblog.png"} title={"Inventory management Indolakto"} desc={"lorem ipsum dolor asdasd asdasdasd asdasd asdasd asdasd asdasd asdasd asdasda asdasd asdasda asdasd asdasd asdasd asdasd asdasd asdasd asdas asdasd asdas asdas dasda dasdas amet terbang lorem ipsum dolor asdasd asdasdasd asdasd asdasd asdasd asdasd asdasd asdasda asdasd asdasda asdasd asdasd asdasd asdasd asdasd asdasd asdas asdasd asdas asdas dasda dasdas amet terbang"}/>
      </div>
    </>
    )
}
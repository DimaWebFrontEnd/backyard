import gen1 from "../assets/Gen1.png"
import gen2 from "../assets/Gen2.png"
import gen3 from "../assets/Gen3.png"

const WhatIs = () => {
   const cardsContent = [
      {
         id: "card1",
         img: gen1,
         heading: "Yield Aggregator",
         headingAbout: "One-click yield aggregation",
         about: "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity"
      },
      {
         id: "card2",
         img: gen2,
         heading: "Yield-backed Stablecoin",
         headingAbout: "Unlock liquidity with BYD",
         about: "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time"
      },
      {
         id: "card3",
         img: gen3,
         heading: "Boost DeFi Liquidity",
         headingAbout: "Boost protocols, earn more",
         about: "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards."
      }
   ]

   const createCards = cardsContent.map((card, index) => {
      const { id, img, heading, headingAbout, about } = card;
      return (
            <div key={id} className="flex flex-col items-center w-full max-w-85">
               <figure className="-mb-5">
                  <img src={img} alt={heading} />
               </figure>
               <div className="relative flex justify-center items-center bg-[#F4F6F7] h-14 w-full rounded-full">
                  <p className="absolute left-3 flex items-center justify-center text-xl bg-[#2D322F] text-[#FBFBFC] w-9 h-9 rounded-full">
                     {index + 1}
                  </p>
                  <h4 className="font-bold text-xl">
                     {heading}
                  </h4>
               </div>
               <div className="bg-[#F4F6F7] w-full h-36 p-7 mt-4 rounded-4xl">
                  <h4 className="font-extrabold text-xl">
                     {headingAbout}
                  </h4>
                  <p className="text-base mt-2 ">
                     {about}
                  </p>
               </div>
            </div>
      )
   })

   return (
      <section className="mt-32 mb-32">
         <h2 className="font-bold text-5xl">What is Backyard?</h2>
         {/* Cards Container */}
         <div className="flex justify-between items-end w-full"> 
            {createCards}
         </div>
      </section>
  )
}

export default WhatIs

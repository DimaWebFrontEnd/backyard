import gen1 from "../assets/Gen1.png"
import gen2 from "../assets/Gen2.png"
import gen3 from "../assets/Gen3.png"

const Cards = () => {
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
      //const margin = index === 1 ? "mx-2.5" : null;
      //const cardsClasses = `flex flex-col items-center {{margin}} w-full max-w-78.75 md:max-w-97 lg:max-w-82.5 xl:max-w-85`
      return (
            <div key={id} className="flex flex-col items-center justify-between min-w-full cursor-pointer sm:flex-row-reverse sm:mt-11 lg:flex-col lg:min-w-0 lg:w-full lg:max-w-77.5 xl:max-w-85" > {/* w-full max-w-78.75 md:max-w-97 lg:flex-col lg:max-w-82.5 xl:max-w-85 */}

               <figure className="min-w-44.75 max-w-44.75 -mb-5 sm:min-w-61.25 sm:max-w-61.25 sm:my-0 lg:-mb-5 lg:min-w-44.75 lg:max-w-44.75">
                  <img className="min-w-full" src={img} alt={heading} />
               </figure>

               <div  className="w-full md:max-w-97 l:max-w-130">
                  <div className="relative flex justify-center items-center bg-[#F4F6F7] h-14 w-full rounded-full">
                     <p className="absolute left-3 flex items-center justify-center text-xl bg-[#2D322F] text-[#FBFBFC] w-9 h-9 rounded-full ">
                        {index + 1}
                     </p>
                     <h4 className="font-normal text-xl">
                        {heading}
                     </h4>
                  </div>

                  <div className="flex flex-col justify-center bg-[#F4F6F7] w-full p-7 mt-4 rounded-4xl"> 
                     <h4 className="font-extrabold text-lg">
                        <span className="whitespace-nowrap">{headingAbout}</span>
                     </h4>
                     <p className="text-sm size-fit max-w-65 mt-2">
                        {about}
                     </p>
                  </div>
               </div>
            </div>
      )
   })


   return (
      <>
         {createCards}
      </>
   )
}

export default Cards

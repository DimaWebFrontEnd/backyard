import gen1 from "../assets/Gen1.png"
import gen2 from "../assets/Gen2.png"
import gen3 from "../assets/Gen3.png"

const WhatIs = () => {
  return (
    <section className="mt-32 mb-32">
      <h2 className="font-bold text-5xl">What is Backyard?</h2>
      {/* About Container */}
      <div className="flex justify-between w-full">

         {/* First Block */}
         <div className="flex flex-col items-center w-full max-w-85"> {/* w-85 */}
            <figure className="-mb-5">
               <img src={gen1} alt="Yield Aggregator" />
            </figure>
            <div className="relative flex justify-center items-center bg-[#F4F6F7] h-14 w-full rounded-full">
               <p className="absolute left-3 flex items-center justify-center text-xl bg-[#2D322F] text-[#FBFBFC] w-9 h-9 rounded-full">
                  1
               </p>
               <h4 className="font-bold text-xl">
                  Yield Aggregator
               </h4>
            </div>
            <div className="bg-[#F4F6F7] w-full h-36 p-7 mt-4 rounded-4xl">
               <h4 className="font-extrabold text-xl">
                  One-click yield aggregation
               </h4>
               <p className="text-base mt-2 ">
                  Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity
               </p>
            </div>
         </div>

         {/* Second Block */}
         <div className="flex flex-col items-center w-full max-w-85"> {/* w-85 */}
            <figure className="-mb-5">
               <img src={gen1} alt="Yield Aggregator" />
            </figure>
            <div className="relative flex justify-center items-center bg-[#F4F6F7] h-14 w-full rounded-full">
               <p className="absolute left-3 flex items-center justify-center text-xl bg-[#2D322F] text-[#FBFBFC] w-9 h-9 rounded-full">
                  1
               </p>
               <h4 className="font-bold text-xl">
                  Yield Aggregator
               </h4>
            </div>
            <div className="bg-[#F4F6F7] w-full h-36 p-7 mt-4 rounded-4xl">
               <h4 className="font-extrabold text-xl">
                  One-click yield aggregation
               </h4>
               <p className="text-base mt-2 ">
                  Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity
               </p>
            </div>
         </div>

         {/* Third Block */}
         <div className="flex flex-col items-center w-full max-w-85"> {/* w-85 */}
            <figure className="-mb-5">
               <img src={gen1} alt="Yield Aggregator" />
            </figure>
            <div className="relative flex justify-center items-center bg-[#F4F6F7] h-14 w-full rounded-full">
               <p className="absolute left-3 flex items-center justify-center text-xl bg-[#2D322F] text-[#FBFBFC] w-9 h-9 rounded-full">
                  1
               </p>
               <h4 className="font-bold text-xl">
                  Yield Aggregator
               </h4>
            </div>
            <div className="bg-[#F4F6F7] w-full h-36 p-7 mt-4 rounded-4xl">
               <h4 className="font-extrabold text-xl">
                  One-click yield aggregation
               </h4>
               <p className="text-base mt-2 ">
                  Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity
               </p>
            </div>
         </div>

      </div>
    </section>
  )
}

export default WhatIs

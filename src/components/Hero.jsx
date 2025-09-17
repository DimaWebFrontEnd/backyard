import big_logo from "../assets/bigger_logo.svg"

const Heading = () => {
  return (
    <section className="flex flex-col justify-between mt-20  h-151.75 z-3 sm:h-71.25 lg:h-102 xl:h-121"> {/* h-121 */}

      {/* Heading */}
      <div className="flex justify-between items-center">
         <div className="w-full lg:min-w-185 lg:max-w-185 xl:min-w-235.75 xl:max-w-235.75">
            <h1 className="text-5xl text-[#303030] text-semibold saturate-100 lg:text-7xl xl:text-8xl">
               The yield-backed <br/> 
               stablecoin protocol <br/>
               boosting DeFi liquidity
            </h1>
            <h3 className="text-[#2626268C] text-xl pt-6 saturate-100 xl:text-2xl lg:text-xl  sm:text-base">
               Keep your yield working for you — we keep your liquidity accessible
            </h3>
         </div>

         {/* Logo Large */}
         <figure className="flex  items-center justify-center pr-6 pl-6 md:max-w-38 lg:max-w-53 xl:max-w-76">
            <img className="w-full saturate-100" src={big_logo} alt="Logo Large" />
         </figure>
      </div>
      <div className="flex justify-between w-140">
         <button className="bg-[#2D2D2D] text-[#F7F7F7] text-4 w-83 h-14 rounded-4xl cursor-pointer">Join Whitelist</button>
         <button className=" bg-[#E6E8EC] w-52 h-14 rounded-4xl cursor-pointer">Read Docs</button>
      </div>
    </section>
  )
}

export default Heading

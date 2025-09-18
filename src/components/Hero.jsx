import big_logo from "../assets/bigger_logo.svg";
import arrow from "../assets/arrow.png"

const Hero = () => {
  return (
    <section className="flex flex-col justify-between mt-0 h-full z-3 sm:mt-20 lg:h-102 xl:h-121"> {/* h-151.75  sm:h-71.25 */}

      {/* Heading */}
      <div className="flex justify-between items-center">
         <div className="w-full lg:min-w-185 lg:max-w-185 xl:min-w-235.75 xl:max-w-235.75">
            <h1 className="text-6xl text-[#303030] text-semibold saturate-100 sm:text-5xl lg:text-7xl xl:text-8xl">
               The yield-backed <br/> 
               stablecoin protocol <br/>
               boosting <span className="whitespace-nowrap">DeFi <img className="inline size-15 saturate-100 sm:hidden" src={big_logo} alt="Logo Image" /> <br className="block sm:hidden" /></span>

               liquidity
            </h1>
            <h3 className="text-[#2626268C] text-xl pt-6 saturate-100 xl:text-2xl lg:text-xl  sm:text-base">
               Keep your yield working for you — we keep your liquidity accessible
            </h3>
         </div>

         {/* Logo Large */}
         <figure className="hidden items-center justify-center pr-6 pl-6 sm:block md:max-w-48 lg:max-w-63 xl:max-w-76">
            <img className="w-full saturate-100" src={big_logo} alt="Logo Image" />
         </figure>
      </div>

      {/* Buttons Container */}
      <div className="flex justify-between max-w-140 mt-7.5 saturate-100">
         <button className="bg-[#2D2D2D] text-[#F7F7F7] text-4 w-1/2 h-14 mr-2.5 rounded-4xl cursor-pointer sm:w-83 ">Join Whitelist</button>
         <button className="hidden items-center justify-center relative bg-[#E6E8EC] w-1/2 h-14 rounded-4xl cursor-pointer sm:w-52 sm:flex">
            Read Docs 
         </button>
         <button className="flex items-center justify-between px-5 bg-[#E6E8EC] w-1/2 h-14 rounded-4xl cursor-pointer sm:w-52 sm:hidden">
            <span className="font-semibold">Learn more</span>
            <figure className="">
               <img src={arrow} alt="Arrow Right" />
            </figure>
         </button>
      </div>
    </section>
  )
}

export default Hero

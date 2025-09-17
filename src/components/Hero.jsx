import big_logo from "../assets/bigger_logo.svg"

const Heading = () => {
  return (
    <section className="flex flex-col justify-between mt-20 h-121 z-3">

      {/* Heading */}
      <div className="flex justify-between items-center">
         <div className="w-full max-w-256.75">
            <h1 className="text-5xl text-[#303030] text-semibold saturate-100 lg:text-7xl xl:text-8xl">
               The yield-backed <br/> 
               stablecoin protocol <br/>
               boosting DeFi liquidity
            </h1>
            <h3 className="text-[#2626268C] text-[24px] pt-6">
               Keep your yield working for you — we keep your liquidity accessible
            </h3>
         </div>

         {/* Logo Large */}
         <figure className="flex items-center justify-center pr-6 pl-6 ">
            <img className="saturate-100" src={big_logo} alt="Logo Large" />
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

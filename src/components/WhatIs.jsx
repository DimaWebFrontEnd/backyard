import PaginationList from "./PaginationList.jsx";
import Cards from "./Cards.jsx"

const WhatIs = () => {

   return (
      <section className="mt-16 mb-32 s:mt-32">
         <h2 className="font-bold text-3xl s:text-5xl">What is Backyard?</h2>

         {/* Cards Container */}
         <div className="flex justify-between items-end w-full overflow-hidden"> 
            <Cards />
         </div>
         <PaginationList />
      </section>
  )
}

export default WhatIs

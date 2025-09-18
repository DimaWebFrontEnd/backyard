

const PaginationList = () => {
   const pag = [ { id: "first" }, { id: "second" }, { id: "third"} ]

   
   const listItems = pag.map(item => {
      const selectedCard = item.id === "first" 
      ? "w-7 h-1 bg-[#5D625F] mr-1.25 rounded-full cursor-pointer" 
      : "w-7 h-1 bg-[#979797] mr-1.25 rounded-full cursor-pointer";
      return <li key={item.id} className={selectedCard} ></li> 
   })

   return (
      <ul className="flex mt-5 ml-7.5 lg:hidden">
         {listItems}
      </ul>
   )
}

export default PaginationList

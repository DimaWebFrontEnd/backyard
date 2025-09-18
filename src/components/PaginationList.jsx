

const PaginationList = () => {
   const pag = [ { id: "first" }, { id: "second" }, { id: "third"} ]
   
   const listItems = pag.map(item => {
      return <li key={item.id} className="w-7 h-1 bg-[#979797] mr-1.25 rounded-full cursor-pointer" ></li> /* bg-[#5D625F] */
   })

   return (
      <ul className="flex mt-5 ml-7.5">
         {listItems}
      </ul>
   )
}

export default PaginationList

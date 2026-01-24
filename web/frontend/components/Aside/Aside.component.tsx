import ListWrappper from "@/UI/ListWrapper/ListWrapper.ui"


const Aside = () => {
  return (
    <aside className="bg-(--black) h-[calc(100vh-71px)] text-white mt-px">
      <div className="flex-center " >
        <ListWrappper heading="Billionares" topics={["Saumya", "Roshan", "ABi", "Akash", "Susanti", "Bhumika", "Neha", "Arshdeep", "Harsha"]} />
      </div>
    </aside>
  )
}

export default Aside

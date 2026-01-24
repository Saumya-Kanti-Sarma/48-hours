import ListWrappper from "@/UI/ListWrapper/ListWrapper.ui"


const Aside = () => {
  return (
    <aside className="bg-(--black) h-[calc(100vh-71px)] text-white mt-px">
      <div className="flex justify-between gap-3 align-top" >
        <ListWrappper heading="Featured" topics={["Braking News", "White House Watch", "Daily Cover Stories", "New Era", "India Special", "USA Special", "World Economics", "Current Geo Politics", "About Saumya Kanti Sarma"]} />

        <ListWrappper heading="Billionaries" topics={["World's billionaires", "Indian Billionaries", "Chineise Billionaries", "japaniese billionaries", "Billionaries of USA", "Russian Billionaries", "German Billionaries"]} />

        <ListWrappper heading="Innovation" topics={["AI powered", "Block Chain", "Crypto graphy", "Quantum Computing"]} />

        <ListWrappper heading="Self Help" topics={["Best Podcasts of 2025", "Best Books for Software engineers", "Best Book for Engineers", "Are you joking Fynman?", "Napolean Hills"]} />


      </div>
    </aside>
  )
}

export default Aside

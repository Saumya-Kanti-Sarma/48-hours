import SearchBox from "@/UI/SearchBox/SearchBox.UI"
import Link from "next/link"
import ListWrapper from "@/UI/ListWrapper/ListWrapper.ui"

const Aside = () => {
  return (
    <aside className="bg-(--black) h-[calc(100vh-71px)] text-white mt-px">
      <div className="p-5 flex justify-between items-center border-b border-[#adadad4b]">
        <SearchBox placeHolder="Search for News, Articles and more..." inputType="text" />
        <div className="flex justify-between gap-2">
          {['News Letters', 'Financial Market', 'Tech Articles'].map((item, index) => (
            <Link href={`/${item.toLocaleLowerCase().replace(" ", "")}`} key={index}
              className="bg-[#adadad4b] py-2 px-4 rounded-lg font-sans hover:opacity-65 transition-all ease-in-out duration-50">
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-between gap-3 align-top flex-wrap border-[#adadad4b] border-b" >
        <ListWrapper heading="Featured" topics={["Braking News", "White House Watch", "Daily Cover Stories", "New Era", "India Special", "USA Special", "World Economics", "Current Geo Politics", "About Saumya Kanti Sarma"]} />

        <ListWrapper heading="Billionaries" topics={["World's billionaires", "Indian Billionaries", "Chineise Billionaries", "japaniese billionaries", "Billionaries of USA", "Russian Billionaries", "German Billionaries"]} />

        <ListWrapper heading="Innovation" topics={["AI powered", "Block Chain", "Crypto graphy", "Quantum Computing"]} />

        <ListWrapper heading="Self Help" topics={["Best Podcasts of 2025", "Best Books for Software engineers", "Best Book for Engineers", "Are you joking Fynman?", "Napolean Hills"]} />


      </div>
    </aside>
  )
}

export default Aside

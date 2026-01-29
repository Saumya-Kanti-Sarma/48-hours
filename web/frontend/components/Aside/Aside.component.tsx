type asideProps = {
  showAside: boolean
}

import SearchBox from "@/UI/SearchBox/SearchBox.UI"
import Link from "next/link"
import ListWrapper from "@/UI/ListWrapper/ListWrapper.ui"

const Aside = ({ showAside }: asideProps) => {
  return (
    <aside className={`${showAside ? "left-0" : "-left-full"} absolute
     w-full p-5 bg-(--black) h-[calc(100vh-71px)] text-white mt-px max-sm:h-[calc(100vh-60px)] overflow-auto transition-all duration-400 ease-in-out`}>
      <div className="pb-5 flex flex-wrap justify-between items-center">
        <SearchBox
          placeHolder="Search for News, Articles and more..."
          inputType="text"
          inputStyles="max-[900px]:w-full max-[900px]:mb-5"
        />
        <div className="flex justify-between gap-2">
          {['News Letters', 'Financial Market', 'Tech Articles'].map((item, index) => (
            <Link href={`/${item.toLocaleLowerCase().replace(" ", "")}`} key={index}
              className="bg-[#adadad4b] py-2 px-4 rounded-lg font-sans hover:opacity-65 transition-all ease-in-out duration-50 max-[460px]:text-sm text-center">
              {item}
            </Link>
          ))}
        </div>
      </div>
      <hr className="border-(--semi-white)" />
      <div className="flex justify-between gap-3 align-top flex-wrap pb-5" >
        <ListWrapper heading="Featured" topics={["Braking News", "White House Watch", "Daily Cover Stories", "New Era", "India Special", "USA Special", "World Economics", "Current Geo Politics", "About Saumya Kanti Sarma"]} />

        <ListWrapper heading="Billionaries" topics={["World's billionaires", "Indian Billionaries", "Chineise Billionaries", "japaniese billionaries", "Billionaries of USA", "Russian Billionaries", "German Billionaries"]} />

        <ListWrapper heading="Innovation" topics={["AI powered", "Block Chain", "Crypto graphy", "Quantum Computing"]} />

        <ListWrapper heading="Self Help" topics={["Best Podcasts of 2025", "Best Books for Software engineers", "Best Book for Engineers", "Are you joking Fynman?", "Napolean Hills"]} />
      </div>
      <hr className="border-(--semi-white) max-[642px]:hidden" />
    </aside>
  )
}

export default Aside

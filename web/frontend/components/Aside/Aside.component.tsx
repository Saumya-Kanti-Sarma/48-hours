type asideProps = {
  showAside: boolean
}

import SearchBox from "@/UI/SearchBox/SearchBox.UI"
import Link from "next/link"
import ListWrapper from "@/UI/ListWrapper/ListWrapper.ui"

const Aside = ({ showAside }: asideProps) => {
  return (
    <aside
      className={`
    absolute w-full p-5 bg-(--black) text-white mt-px
    h-[calc(100vh-71px)] max-sm:h-[calc(100vh-60px)]
    overflow-auto transition-all duration-400 ease-in-out

    /* Small screens: slide from left */
    ${showAside ? "left-0" : "-left-full"}
    max-[800px]:translate-y-0

    /* ≥800px: slide from top */
    min-[801px]:left-0
    ${showAside ? "min-[801px]:translate-y-0" : "min-[801px]:-translate-y-[150%]"}
  `}
    >

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

      <div className="flex justify-between gap-3 align-top flex-wrap pb-5">
        <ListWrapper
          heading="Money"
          topics={[
            "Nifty 50",
            "Sensex",
            "Bank Nifty",
            "Dow Jones Industrial Average",
            "S&P 500",
            "NASDAQ Composite"
          ]}
        />

        <ListWrapper
          heading="Digital Assets"
          topics={[
            "Bitcoin (BTC)",
            "Ethereum (ETH)",
            "Solana (SOL)",
            "Central Bank Digital Currencies (CBDC)",
            "Tokenized Assets",
            "Web3 Economy"
          ]}
        />

        <ListWrapper
          heading="Business"
          topics={[
            "Startup Funding",
            "Mergers & Acquisitions",
            "IPO Watch",
            "Corporate Earnings",
            "Global Supply Chains",
            "MSME Growth"
          ]}
        />

        <ListWrapper
          heading="Entrepreneurs"
          topics={[
            "Elon Musk",
            "Mukesh Ambani",
            "Ratan Tata",
            "Sam Altman",
            "Nandan Nilekani",
            "Women Founders"
          ]}
        />
      </div>

      <hr className="border-(--semi-white) max-[642px]:hidden" />
      <div>
        <p className="p-2">© 2026 48-hours. All Rights Reserved. (A project work done by <b>Saumya Sarma</b>)</p>
        <p className="pb-2">Source Code: <Link href={"/https://github.com/Saumya-Kanti-Sarma/48-hours"} target="_blank" className="underline text-blue-300">Git Hub</Link></p>
      </div>
    </aside>
  )
}

export default Aside

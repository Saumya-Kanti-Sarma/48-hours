import Link from "next/link"

const ListWrapper = () => {
  return (
    <section>
      <h1>Billionaries</h1>
      <ul>
        {
          ["World's billionaries", "India's billionaries", "USA's Billionaries", "Russia's Billionaries", "Japan's Billionaries"].map((item, index) => (
            <li>
              <Link href={"/"} key={index} className="underline-offset-4 text-black hover:underline transition-ease-in-out text-white">{item}</Link>
            </li>
          ))
        }
      </ul>
      <button>show more...</button>
    </section>
  )
}

export default ListWrapper

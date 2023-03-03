import { Header } from "./components/Header";

export function App() {
  const menuItems = [
    { label: "Home", url: "/" },
    { label: "News", url: "/news" },
    { label: "Wallet", url: "/wallet" },
    { label: "Stocks", url: "/stocks" },
    { label: "Simulator", url: "/simulator" },
    { label: "Login", url: "/login" },
  ];


  return (
    <div className="flex flex-col min-h-screen max-w-[1312px] mx-auto px-4">
      <Header menuItems={menuItems}/>
      <main>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, exercitationem? Totam rem nesciunt aspernatur incidunt. Repellat esse officia non placeat ex optio aperiam, ab nostrum odit amet in necessitatibus? Fugit.</div>
        <img src="" alt="" />
      </main>
      <footer>
        <p>&copy; 2023 StockMind. All rights reserved.</p>
      </footer>
    </div>
  )
}


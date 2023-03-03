import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import stonks from "./assets/stonks.jpg";

const menuItems = [
  { label: "Home", url: "/" },
  { label: "News", url: "/news" },
  { label: "Wallet", url: "/wallet" },
  { label: "Stocks", url: "/stocks" },
  { label: "Simulator", url: "/simulator" },
  { label: "Login", url: "/login" },
];

export function App() {
  return (
    <div className="min-h-screen max-w-[1312px] mx-auto px-4">
      <Header menuItems={menuItems}/>
      <main className="flex flex-row items-center bg-slate-600">
        <div
          className="bg-cover bg-center bg-opacity-30 h-80 font-bold text-fuchsia-200 flex text-center items-center"
          style={{ backgroundImage: `url(${stonks})` }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, exercitationem? Totam rem nesciunt aspernatur incidunt.
        </div>
      </main>
      <Footer />
    </div>
  )
}


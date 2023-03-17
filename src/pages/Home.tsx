import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { menuItems } from "../utils/menu";
import image from "../assets/lp-stonks.png";

export function Home() {
  return (
    <div className="min-h-screen max-w-[1312px] mx-auto px-4 flex flex-col">
      <Header menuItems={menuItems} />
      <main className="flex-1 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-center sm:gap-2 gap-4">
          <div className="flex flex-col max-w-[22rem] text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-200 leading-snug">
              Take Control of Your Finances and Investments
            </h1>
            <p className="text-gray-100 text-sm md:text-base text-center mt-4">
              Sign up today to start taking control of your finances and
              investments with our powerful simulator and stay informed with the
              latest market news.
            </p>
            <button className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-sm md:text-base py-2 px-4 rounded mt-4">
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={image}
              alt="Homem segurando o celular enquanto está usando o notebook."
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

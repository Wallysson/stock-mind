import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { Simulator } from "./pages/Simultator";
import { Stocks } from "./pages/Stocks";
import { Wallet } from "./pages/Wallet";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/stocks" element={<Stocks />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/simulator" element={<Simulator />} />
      <Route path="/login" element={<Home />} />

    </Routes>
  );
}

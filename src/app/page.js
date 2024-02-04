import "./globals.css";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import Admin from "@/component/Admin";
import Article from "@/component/Article";
import Stories from "@/component/Stories";

import Advertisnment from "@/component/Advertisnment";
export default function Home() {
  return (
    <div className="bg-main-container">
      <Header />
      <Admin />
      <Article />
      <Stories />
      <Advertisnment />
    </div>
  );
}

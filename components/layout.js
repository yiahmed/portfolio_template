import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen bg-[#0A1A2E] ">
      <Navbar />
      <div style={{ height: "93vh" }} className="w-full">
        <main className="h-full w-full overflow-auto flex flex-col items-center bg-gradient-to-b from-[#1F4653] to-[#191825]">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

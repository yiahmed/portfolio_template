import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen ">
      <Navbar />
      <div
        style={{ height: "93vh" }}
        className="w-full"
      >
        <main className="h-full w-full overflow-auto flex flex-col items-center bg-[#03001C]" >{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

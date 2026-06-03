import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
import "./App.css";
import NewsList from "./components/News/NewsList";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
function App() {
  return (
    <>
      <Header />
      <div
        className="container"
        style={{
          position: "relative",
          top: "-185px",
          zIndex: "5",
          textAlign: "center",

        }}>
        <NewsList />
      </div>
      <div
     
        style={{
          backgroundColor: "#000",
          minHeight: "265px",
          width:"100%",
          color:"#fff"
        }}>
        <div className="container" style={{paddingTop:"50Px"}}>
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default App;

import DomeGallery from "@/components/DomeGallery";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#170D27" }}>
      <DomeGallery fitBasis="auto" grayscale={false} fit={0.9} minRadius={1000}/>
    </div>
  );
}

export default App;

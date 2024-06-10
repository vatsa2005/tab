import "./App.css";
import Tabs from "./Components/Tabs";
import TabContent from "./Components/TabContent";

function App() {
  return (
    <div className="App">
      <Tabs
        bgColor="#2b2b2b"
        textColor="white"
        height={400}
        width={720}
        lineColor="white"
      >
        <TabContent title="Intro" id={1} selectedColor="green">
          <p>My name is vatsa</p>
        </TabContent>
        <TabContent title="About" id={2} selectedColor="green">
          <p> I am vatsa</p>
        </TabContent>
        <TabContent title="Contact" id={3} selectedColor="green">
          <p>
            <a href="mailto:svatsa2005@gmail.com">svatsa2005@gmail.com</a>
          </p>
        </TabContent>
      </Tabs>
    </div>
  );
}

export default App;

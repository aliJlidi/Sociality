
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Main } from "./Comopenents/Main";
import { SideBar } from "./Comopenents/SideBar";

function App() {
  return (
    <>
    <GlobalStyle/>
    <Main>
      <SideBar />
    </Main>
 
    </>
    
  );
}

export default App;

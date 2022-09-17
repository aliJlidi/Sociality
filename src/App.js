import { GlobalStyle } from "./Styles/GlobalStyle";
import { Main } from "./Comopenents/Main";
import { SideBar } from "./Comopenents/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed } from "./Comopenents/Routes/Feed/Feed";
import { usePanelOpen } from "./Hooks/usePanelOpen";
import { usePanelActive } from "./Hooks/usePanelActive";
import { Profil } from "./Comopenents/profile";
function App() {
  const panelOpen = usePanelOpen();
  const panelActive = usePanelActive();
  return (
    <>
      <GlobalStyle />
      <Main>
        <BrowserRouter>
          <Profil imgUrl={"/img/avatar.jpg"} />
          <SideBar {...panelOpen} {...panelActive} />

          <Routes>
            <Route index element={<Feed {...panelOpen} {...panelActive} />} />
            <Route path="publish/feed" element={<Feed {...panelOpen} {...panelActive} />} />

          </Routes>
        </BrowserRouter>
      </Main>
    </>
  );
}
export default App;

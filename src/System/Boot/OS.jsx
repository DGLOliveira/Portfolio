//Sets up the Computer window
import FileProvider from "./../FileManager/context.jsx";
import AppProvider from "./../AppManager/Context/context.jsx";
import BackgroundProvider from "./../Desktop/BackgroundContext.js";
import ContextMenuProvider from "./../ContextMenuManager/context.jsx";
import WorkScreen from "./WorkScreen.jsx";
import "./OS.css";

export default function OS() {
  return (
    <>
    <FileProvider>
      <AppProvider>
        <BackgroundProvider>
          <ContextMenuProvider>
            <WorkScreen />
          </ContextMenuProvider>
        </BackgroundProvider>
      </AppProvider>
    </FileProvider>
    </>
  );
}

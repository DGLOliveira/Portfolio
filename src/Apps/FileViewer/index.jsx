import Provider from "./context.jsx";
import NavigationBar from "./Components/NavigationBar.jsx";
//import ToolBar from "./Components/ToolBar.jsx";
import Content from "./Components/Content.jsx";
import "./style.css";

export default function FileViewer(props) {

    return (
        <Provider>
            <app-container>
                <NavigationBar />
                {/*Coming Soon... <ToolBar />*/}
                <app-body>
                    <Content />
                </app-body>
            </app-container>
        </Provider>

    )

}
import { Provider } from "react-redux";
import { store } from '../store';
import Header from './Header';
import Footer from "./Footer";
import Card from "./Card";




function App() {
    return <Provider store={store}>
      <Header />
      <div>
        <Card title='card' description="card descript" />
      </div>
      <Footer />
    </Provider>;
}

export default App;

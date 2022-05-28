import Header from "./containers/header";
import Layout from "./containers/layout";
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react";
import AppController from "./controllers/app";
import RouteBuilder from './routes/index';

function App() {
  useEffect(() => {
    AppController.getCategoriesData()
  })
  return (
    <div className="App">
      <Header/>
      <Layout/>
      <RouteBuilder/>
      <ToastContainer/>
    </div>
  );
}

export default App;

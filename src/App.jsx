import "./App.css";
import MainLayout from "./Components/MainLayout/MainLayout";
import Header from "./Components/Header/Header";
import CounterProvider from "./Context/counterContext";
function App(children) {
  return (
    <>
      <CounterProvider>
        <Header />
        <div className="main">
          <MainLayout>{children}</MainLayout>
        </div>
      </CounterProvider>
    </>
  );
}

export default App;

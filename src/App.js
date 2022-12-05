import './App.css';
import CosmeticsListPage from './components/PageLayout/CosmeticsListPage';
import SearchProvider from './state/search-context';

function App() {
  return (
    <div className="App">
      <div className="App-Container"
        style={{padding:"0 6rem"}}
      >
        {/* <Header/> */}
        <SearchProvider>
          <CosmeticsListPage />
        </SearchProvider>
        {/* <Fotter/> */}
      </div>
    </div>
  );
}

export default App;

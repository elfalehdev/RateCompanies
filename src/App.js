import logo from "./logo.svg";
import "./App.css";
import Company from "./CompanyComponent/Company.js";
import companyData from "./company_data.js";

function App() {
  function getCompanyComponents() {
    const components = companyData.map((company) => {
      return <Company company={company} />;
    });

    return components;
  }

  return <div className="App">{getCompanyComponents()}</div>;
}

export default App;

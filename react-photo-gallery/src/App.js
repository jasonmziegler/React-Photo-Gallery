// import logo from './logo.svg';
import './App.css';


// Components
import SearchForm from './Components/SearchForm';

function App() {
  return (
    <div className="container">
      {/*// Turn Search form into a Componenent*/}
      {/* Check Data Fetching in React Search Form Component */}
      <SearchForm />

      <nav className="main-nav">

        {/* Use React Router for these?*/}
        <ul>
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
        </ul>
      </nav>


      {/* Use Fetch to connect to Flickr API, and .then parse with .json(), .then this.setState,  .catch errors */}
      {/*Turn photoContainer into a component, and create a photo component, pass data prop to PhotoContainer*/}
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <li>
            <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
          </li>
          {/*<!-- Not Found -->*/}

          {/* Great NotFound Component and display if empty results */}
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default App;

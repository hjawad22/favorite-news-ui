import './App.css';
import { Component } from 'react';
import articles from '../../mockData'
import Articles from '../Articles/Articles';
import Search from '../Search/Search';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Details from '../Details/Details';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles.articles,
      searchResults: [],
    };
  }

  filterArticles = (userValue) => {
    const filtered = this.state.articles.filter((story) => {
      const title = story.title.toLowerCase()
      const date = story.publishedAt
      return title.includes(userValue.toLowerCase()) || date.includes(userValue)
    });

    this.setState({
      searchResults: filtered,
    });

  };

  render() {
    const { searchResults, articles } = this.state;
    return (
      <>
        <Route exact path='/' render={() => (
          <div className="App">
            <div className='hero-image-container'>
              <Search filterArticles={this.filterArticles} />
            </div>
            <div className='stories-container'>
              <h2 className='stories-heading'>Top Stories</h2>
              <Articles articles={searchResults.length > 0 ? searchResults : articles} />
            </div>
          </div>
        )} />
        <Route
          exact path='/details/:title'
          render={({ match }) => {
            const matchedPlace = this.state.articles.find(article => article.title === match.params.title);
            return matchedPlace ? <Details singleArticle={matchedPlace} /> :
              <div className='not-found-container'>
                <p>Article Not Found</p>
                <NavLink to="/"
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                  className='button-back'>Back to search results
                </NavLink>
              </div>
          }}
        />
      </>
    );
  }
}

export default App;
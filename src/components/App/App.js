import './App.css';
import { Component } from 'react';
import articles from '../../mockData'

class App extends Component {
constructor() {
  super()
  this.state = {
  articles: articles.articles
  }
}

render() {
  console.log(this.state.articles)
  return (
    <div className="App">
     <div className='hero-image-container'>
       <h1 className='logo'>Insynced</h1>
       <p className='slogan-text'>Your Trusted News Outlet, No BS, Just News.</p>
       {/* search component */}
     </div>
     <article className='stories-container'>
     <h2 className='stories-heading'>Top Stories</h2>
     <article>
      {/* articles component */}
     </article>
     </article>
    </div>
  )

}
 
}

export default App;

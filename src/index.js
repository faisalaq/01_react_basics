import React, {Component} from 'react' ;
import ReactDOM from 'react-dom';

import JSON from './db.json'
// COMPONENTS
import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {

    state = {
        news:JSON,
        filtered:[]
    }

    getKeywords = (event)=>{
        let keyword = event.target.value
        const filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
        })
        this.setState({
            filtered
        })
        console.log(filtered)
    }

    render(){
        const newsFiltered = this.state.filtered
        const newsAll = this.state.news
        return (
            <div>
                <Header keywords = {this.getKeywords}/>
                <NewsList news={this.state.filtered.length === 0 ? newsAll: newsFiltered}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
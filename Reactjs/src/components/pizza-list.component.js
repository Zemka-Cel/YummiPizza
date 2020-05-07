import React from 'react';
import Axios from 'axios';
import { List, ListItem } from 'material-ui';


class PizzasList extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:8000/api/articles')
            .then(response => {
                this.setState({ articles: response.data })
            })
    }

    clickMe(article){
        alert('test');
        console.log(article);
    }

    render() {

        return (
            <div>
                <h2 className="p-1"><strong>Yummi Pizza Menu:</strong></h2>
                <ul className="list-group">
                    {this.state.articles.map(article => {
                        return (
                            <div>
                                <li className="list-group-item  border mt-3 d-flex w-100 flex-xl-row flex-column justify-content-between font-weight-bold">

                                    {article.title}

                                    <p className="text-lowercase font-weight-light ">({article.decription})</p>
                                    <div className="">
                                        <p>{article.price}EUR</p>

                                        <button className="btn btn-info mt-3 w-100" 
                                        onClick={this.clickMe.bind(this, article)}>Add to cart</button>
                                    </div>
                                </li>

                            </div>

                        )
                    })}
                </ul>

            </div>

        )
    }
}

export default PizzasList;
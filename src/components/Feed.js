import * as React from 'react';

import {Cards} from './Cards';

export class Feed extends React.Component {

    state = {
        loading: true,
        cards: []
    };

    constructor(props) {
        super(props);

        this.fetchNext = this.fetchNext.bind(this);
    }

    componentDidMount() {
        this.fetchData()
            .catch((error) => {
                this.setState({
                    loading: false,
                    error
                });
            });
    }

    fetchData() {
        return this.fetch();
    }

    fetchNext() {
        if (this.next) {
            return this.fetch(this.next);
        }
    }

    async fetch(query = {}) {
        let params = Object.keys(query)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
            .join('&');

        let response = await fetch('/collections/api/cards/channels/gory/?' + params, {credentials: 'same-origin'});
        let json = await response.json();

        this.next = json.next;

        this.setState({
            cards: this.state.cards.concat(json.results),
            loading: false
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="screen">
                    <div className="spinner"/>
                </div>
            );
        }

        if (this.state.error) {
            return (
                <div className="screen">
                    <h1>ERROR: {this.state.error.message}</h1>
                </div>
            );
        }

        return (
            <Cards
                cards={this.state.cards}
                fetchNext={this.fetchNext}
            />
        );
    }

}

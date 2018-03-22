import * as React from 'react';

import {Cards} from './Cards';

export class Feed extends React.Component {

    state = {
        loading: true,
        cards: [],
        width: 0,
        height: 0,
        columns: 0,
        columnWidth: 0
    };

    constructor(props) {
        super(props);

        this.fetchNext = this.fetchNext.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.fetchData()
            .catch((error) => {
                this.setState({
                    loading: false,
                    error
                });
            });

        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    }


    updateDimensions(){
      let w = window,
              d = document,
              documentElement = d.documentElement,
              body = d.getElementsByTagName('body')[0],
              width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
              height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight,
              cols,
              colWidth;
      if (width >= 1300) cols = 4;
      if (width < 1300 && width >= 950) cols = 3;
      if (width < 950 && width >= 640) cols = 2;

      colWidth = Math.round(width/cols);

       this.setState({width: width, height: height, columns: cols, columnWidth: colWidth});

       console.log("width", width);
       console.log("height", height);
       console.log("cols", cols);
       console.log("colWidth", colWidth);
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

        let response = await fetch('/collections/api/cards/channels/retsepty/?' + params, {credentials: 'same-origin'});
        let json = await response.json();

        this.next = json.next;

        this.setState({
            cards: this.state.cards.concat(json.results),
            loading: false
        });
        console.log(this.state.cards);
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
                columns={this.state.columns}
                colWidth={this.state.columnWidth}
            />
        );
    }

}

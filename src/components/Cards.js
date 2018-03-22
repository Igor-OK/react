
import React, {Component} from 'react';


import {CardAlter} from './CardAlter';
import {Infinite} from './Infinite';

export class Cards extends Component{
  constructor(props) {
      super(props);

      // this.fetchNext = this.fetchNext.bind(this);
      // this.updateDimensions = this.updateDimensions.bind(this);
  }
// export function Cards({cards, fetchNext}) {

// columns: [0,0,0,0]
//
getImageSize(card){
  console.log(card);
  let {description, owner, board, service, source_meta, content} = card,
      imageData = content && content[0] && content[0].content;
  let src='https://avatars.mds.yandex.net/get-pdb/'+imageData.group_id+'/'+imageData.avatars_key+'/s350';

    console.log(src);
}
render(){
      return (
          <Infinite fetchNext={this.props.fetchNext}>
              <div className="cards">
                  {this.props.cards.map((card) =>{
                    this.getImageSize(card),
                      <CardAlter card={card} key={card.id} />
                      }
                  )}
              </div>
          </Infinite>
      );
    }
}



// var img = new Image();
// img.onload = function() {
//   alert(this.width + 'x' + this.height);
// }
// img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';


// imageElement.naturalHeight
//
//
// imageElement.naturalWidth

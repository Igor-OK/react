import * as React from 'react';

import {CardAlter} from './CardAlter';
import {Infinite} from './Infinite';

export function Cards({cards, fetchNext}) {


  // 
  // let col_heights = [],
  //     container = document.getElementByClass('cards')[0];
  // for (let i = 0; i <= 4; i++) {
  //   col_heights.push(0);
  // }
  // for (let i = 0; i < container.children.length; i++) {
  //   let order = (i + 1) % 4 || 4;
  //   container.children[i].style.order = order;
  //   col_heights[order] += parseFloat(container.children[i].style.height);
  // }
  // let highest = Math.max.apply(Math, col_heights);
  // container.style.height = highest+'px';


    return (
        <Infinite fetchNext={fetchNext}>
            <div className="cards">
                {cards.map((card) =>
                    <CardAlter card={card} key={card.id}/>
                )}
            </div>
        </Infinite>
    );
}

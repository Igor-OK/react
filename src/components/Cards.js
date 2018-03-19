import * as React from 'react';

import {CardAlter} from './CardAlter';
import {Infinite} from './Infinite';

export function Cards({cards, fetchNext}) {
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

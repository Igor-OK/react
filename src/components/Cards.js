import * as React from 'react';

import {Card} from './Card';
import {Infinite} from './Infinite';

export function Cards({cards, fetchNext}) {
    return (
        <Infinite fetchNext={fetchNext}>
            <div className="cards">
                {cards.map((card) =>
                    <Card card={card} key={card.id}/>
                )}
            </div>
        </Infinite>
    );
}

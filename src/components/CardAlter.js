import * as React from 'react';
import * as moment from 'moment';

import {Image} from './Image';

export function CardAlter({card}) {
    if (!card) {
        return null;
    }

    let {description, owner, board, service, source_meta, content} = card,
        imageData = content && content[0] && content[0].content;

    return (
        <div className="card">
            {imageData && (
                <div className="card__image">
                    <Image
                        imageData={imageData}
                    />
                    {console.log("hi")}

                </div>
            )}


        </div>
    );

}
// var img = new Image();
// img.onload = function() {
//   alert(this.width + 'x' + this.height);
// }
// img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';

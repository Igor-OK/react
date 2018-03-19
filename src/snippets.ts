// let response = await fetch('/collections/api/cards/channels/gory/', {credentials: 'same-origin'});

// let params = Object.keys(query)
//     .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
//     .join('&');


//import * as moment from 'moment';
//import 'moment/locale/ru';
//
//moment.locale('ru');


/*
import * as React from 'react';
import * as moment from 'moment';

export function Card({card}) {
    if (!card) {
        return null;
    }

    let {description, owner, board, service, source_meta} = card,
        {group_id, avatars_key} = card.content && card.content[0] && card.content[0].content || {};

    return (
        <div className="card">
            {group_id && avatars_key && (
                <div className="card__image">
                    <div className="image">
                        <img src={`https://avatars.mds.yandex.net/get-pdb/${group_id}/${avatars_key}/s375`}
                             className="image__image"
                             alt=""
                        />
                    </div>
                </div>
            )}

            {owner && (
                <div className="card__profile">
                    <div className="card__close">
                        <button className="close">
                            <span className="close__icon"/>
                        </button>
                    </div>

                    <div className="person person_card">
                        <a href={`/collections/user/${encodeURIComponent(owner.login)}/`}
                           aria-label="text"
                           className="person__avatar"
                           title={owner.display_name}
                        >
                            <img
                                className="avatar"
                                src={`https://avatars.mds.yandex.net/get-yapic/${owner.default_avatar_id}/islands-retina-small`}
                                alt={owner.display_name}
                            />
                        </a>

                        <div className="person__info">
                            {board && (
                                <div className="board">
                                    <a href={`/collections/user/${encodeURIComponent(owner.login)}/${encodeURIComponent(board.slug)}/`}
                                       className="board__link"
                                    >
                                        {board.title}
                                    </a>
                                </div>
                            )}

                            <div className="user">
                                <a className="user__link"
                                   href={`/collections/user/${encodeURIComponent(owner.login)}/`}
                                >
                                    {owner.display_name}
                                </a>
                            </div>

                            {service && service.created_at && (
                                <div className="date">
                                    <span className="date__desc">
                                        {moment(card.service.created_at).fromNow()}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="card__article">
                        <div className="article">
                            <div className="article__desc">
                                {description}
                            </div>

                            {source_meta && (
                                <a className="article__link"
                                   href={source_meta.page_url}
                                >
                                    {source_meta.page_domain_decoded}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}

 */

import React from 'react'
import { css } from 'glamor'

const NewsItem = (props)=>{

    console.log(props.item)
    let news_item = css({
        padding: '20px',
        boxSizing: 'border-box',
        borderBottom: '1px solid grey'
    })

    let item_grey = css({
        background: 'white'
    })

    return (
        <div className = {`${news_item} ${item_grey}`}>
            <h3>{props.item.title}</h3>
            <div>{props.item.feed}</div>
        </div>
    )
}

export default NewsItem;

/*

*/ 
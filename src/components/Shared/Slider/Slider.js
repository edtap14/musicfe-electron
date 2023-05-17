import React from "react";
import './Slider.scss'
import Slick from 'react-slick'
import { map } from "lodash";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    centerMode: true,
}

export function Slider({ data, basePath }) {

    return (
        <Slick { ...settings } className='slider'>
            { map(data, (item) => {
                return (
                    <Link to={ `/${ basePath }/${ item.id }` } key={ item.id } className='slider__item'>
                        <Image src={ item.image } alt={ item.name }/>
                        <h3>{ item.name }</h3>
                    </Link>
                )
            }) }
        </Slick>
    )
}
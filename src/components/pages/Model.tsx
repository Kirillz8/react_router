import React from 'react';
import {adidasArr, AdidasItem} from './Adidas';
import {useParams} from 'react-router-dom';
import s from '../Site.module.css';
import {PumaItem} from './Puma';

export type ModeklType = {
    items: AdidasItem[] | PumaItem[]
}

export const Model = ({items}:ModeklType) => {
    const params = useParams()

    const currentModel = items.find(el => el.id === Number(params.id));

    return (
        <div style={{textAlign: 'center'}}>
            {currentModel ? (
                <>
                    <h2>{currentModel.model}</h2>
                    <h2>{currentModel.collection}</h2>
                    <h2>{currentModel.price}</h2>
                    <img
                        className={s.img}
                        src={currentModel.picture}
                        alt={currentModel.model}
                    />
                </>) : <h2>Model not found</h2>}
        </div>
    );
};
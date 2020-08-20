import React, {Component} from "react";

import PicDefault from './images/Default.png';
import PicDefaultHover from './images/DefaultHover.png';
import PicSelected from './images/Selected.png';
import PicSelectedHover from './images/SelectedHover.png';
import PicDisabled from './images/Disabled.png';

export default class ListItem extends Component {

    componentDidMount() {
        const preloadList = [
            PicDefault,
            PicDefaultHover,
            PicSelected,
            PicSelectedHover,
            PicDisabled
        ]
        preloadList.forEach((image) => {
            new Image().src = image
        });
    }

    render() {
        const defaultBackground = {backgroundImage: `url(${PicDefault})`}
        const backgroundHover = {backgroundImage: `url(${PicDefaultHover})`}
        const backgroundClick = {backgroundImage: `url(${PicSelected})`}
        const backgroundClickHover = {backgroundImage: `url(${PicSelectedHover})`}
        const backgroundDisable = {backgroundImage: `url(${PicDisabled})`}
        const disableTrue = {opacity: 0.12}
        const title = <div>Сказочное заморское яство</div>
        const {
            productName, productPortion, productGift, productComment, productMass, productFooterSelected,
            onClick, onHover, disable,
            setMapClick, setMapHover, setMapHoverLeave, setMapDisable
        } = this.props

        return (
            <div className="flex-container-inner"
                 onPointerEnter={setMapHover}
                 onPointerLeave={setMapHoverLeave}>
                <div className="box"
                     onClick={setMapClick}
                     onDoubleClick={setMapDisable}
                     style={disable ? backgroundDisable :
                         onHover ? (onClick ? backgroundClick : backgroundHover)
                             :
                             (onClick ? (onHover ? backgroundClick : backgroundClickHover) : defaultBackground)}>
                    <div className="inner" style={disable ? disableTrue : null}>
                        {disable ? title : onClick ? onHover ? title :
                            <div className="title_click_hover">Котэ не одобряет?</div> : title}
                        <div className="text-1">Нямушка</div>
                        <div className="text-2">{`c ${productName}`}</div>
                        <div><span className="fat">{productPortion}</span> порций</div>
                        <div>{`${productGift} в подарок`}</div>
                        <div>{productComment}</div>
                    </div>
                    <div className="mass">
                        <div className="size">{productMass}</div>
                        <div>кг</div>
                    </div>
                </div>
                <div className="footer">
                    {disable ?
                        <span className="footer_span_disabled">{`Печалька, с ${productName} закончился.`}</span> :
                        onClick ? productFooterSelected :
                            <React.Fragment>
                                Чего сидишь? Порадуй котэ, <span
                                className="footer_span"
                                onClick={setMapClick}>купи</span>
                            </React.Fragment>}
                </div>
            </div>
        )
    }
}

import React, {Component} from "react";

import './cat-page.css'

import DataListMap from "./data-list-map";

class CatPage extends Component {

    maxId = 10;

    createProductData(
        productName,
        productPortion,
        productGift,
        productComment,
        productMass,
        productFooterSelected
        ) {
        return {
            productName,
            productPortion,
            productGift,
            productComment,
            productMass,
            productFooterSelected,
            onClick: false,
            onHover: false,
            disable: false,
            id: this.maxId++
        }
    }

    state = {
        productData : [
            this.createProductData('фуа-гра','10','мышь','','0,5','Печень утки с разварная с артишоками.'),
            this.createProductData('рыбой','40','2 мыши','','2','Головы щучьи с чесноком да свежайшая сёмгушка.'),
            this.createProductData('курой','100','5 мышей','заказчик доволен','5','Филе из цыплят с трюфелями в бульоне.')
        ]
    }

    toggleProperty(arr, id, propName) {
        const id_i = arr.findIndex((el) => el.id ===id)
        const oldItem = arr[id_i]
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName] }
        const newArray = [
            ...arr.slice(0, id_i),
            newItem,
            ...arr.slice(id_i+1)
        ]
        return newArray
    }

    click = (id) => {
        this.setState(({productData}) => {
            return {
                productData: this.toggleProperty(productData, id, 'onClick')
            }
        })
    }
    hover = (id) => {
        this.setState(({productData}) => {
            return {
                productData: this.toggleProperty(productData, id, 'onHover')
            }
        })
    }
    hoverleave = (id) => {
        this.setState(({productData}) => {
            return {
                productData: this.toggleProperty(productData, id, 'onHover')
            }
        })
    }
    disable = (id) => {
        this.setState(({productData}) => {
            return {
                productData: this.toggleProperty(productData, id, 'disable')
            }
        })
    }

    render() {
        console.log(this.state)

        const {productData} = this.state

        return (
            <div className="external">
                <div className="internally">
                    <h2 className="h2-text">Ты сегодня покормил кота?</h2>
                    <div className="flex-container">

                        <DataListMap
                        data={productData}
                        setClick={this.click}
                        setHover={this.hover}
                        setHoverLeave={this.hoverleave}
                        setDisable={this.disable}
                        />

                    </div>
                </div>
            </div>
        )
    }
}
export default CatPage
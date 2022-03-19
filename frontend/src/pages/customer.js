import React from "react";
import { Icon, Row, Col, Card } from "antd";
import DemoPic from "../assets/images/demo3.jpeg";
import style from  "../assets/css/customer.css";

class Customer extends React.Component {
    listItems = [
        "This is a list",
        "Another list item",
        "Yup, another list",
        "This is a list",
        "Another list item",
        "Yup, another list",
        "This is a list",
        "Another list item",
        "Yup, another list",
    ]
    productTiles = [
        "1", "2", "3", "4", "5", "6", "7", "8"
    ]
    courseTiles = [
        "1", "2", "3", "4", "5", "6", "7", "8"
    ]
    bakeryTiles = [
        "1", "2", "3", "4", "5", "6", "7", "8"
    ]
    render() {
        return (
            <div>
                {/* Page title */}
                <Row >
                    <Col span={22}>
                        <h1>Hello Customer</h1>
                    </Col>
                    <Col offset={22}>
                        <Icon type="shopping-cart" className={style.cartIcon}/>
                    </Col>
                </Row>

                <Row>
                    <Col span={19}>
                        <h2>Explore Products</h2>
                        <Row gutter={[16, 16]}>
                            {
                                this.productTiles.map((item, idx) => {
                                    return <Col span={4} ><ItemTile hasIcon={true} size="big" desc={item}></ItemTile></Col>
                                })
                            }
                        </Row>

                        <Row>
                            <Col span={11}>
                                <h2>Explore Courses</h2>
                                <Row gutter={[15, 15]}>
                                    {
                                        this.courseTiles.map((item, idx) => {
                                            return <Col span={4} ><ItemTile hasIcon={false} desc={item}></ItemTile></Col>
                                        })
                                    }
                                </Row>
                            </Col>

                            <Col  offset={12}>
                                <h2>Explore Bakery</h2>
                                <Row gutter={[15, 15]}>
                                    {
                                        this.bakeryTiles.map((item, idx) => {
                                            return <Col span={4} ><ItemTile hasIcon={false} desc={item}></ItemTile></Col>
                                        })
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    {/* Sidebar list */}
                    <Col offset={19}>
                        <ul>
                            {
                                this.listItems.map((item, idx) => {
                                    return <li>{item}</li>
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}

class ItemTile extends React.Component {
    className = style.tile + " " + (this.props.size === "big" ? style.tileBig : style.tileSmall)
    render() {
        return (
            <div className={this.className}>
                <span className={style.desc}>{this.props.desc}</span>
                <img src={DemoPic} alt="" />
                {
                    this.props.hasIcon && <span className={style.addCart+" "+style.cartIcon}><Icon type="shopping-cart" /></span>
                }
            </div>
        )
    }
}

export default Customer;
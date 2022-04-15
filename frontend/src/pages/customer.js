import React from "react";
import { Icon, Row, Col, Modal, message } from "antd";
import DemoPic from "../assets/images/demo3.jpeg";
import style from "../assets/css/customer.css";

class Customer extends React.Component {
    productTiles = [

    ]
    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
            currentProduct: {}
        }
        // localStorage.clear(); // uncomment this line for debug
        let p = localStorage.getItem('items')
        if (p === null) {
            localStorage.setItem('items', JSON.stringify([
                {
                    "id": 0,
                    "type": "product",
                    "name": "Kootek 22 Pcs Cake Decorating Kit",
                    "img": "https://m.media-amazon.com/images/I/61nCTo1sqmL._AC_UL640_FMwebp_QL65_.jpg",
                    "desc": "Cake Decorating Supplies: 1 Aluminum alloy cake turntable, 1 cake leveler, 1 icing spatula, 3 icing combs, 12 stainless steel decorating tips, 2 silicone pastry bags, 2 reusable plastic couplers, with which you can create various types of patterns on cake or cupcake.<br /><br />\
                        12 Inch Cake Turntable: Constructed with heavy-duty aluminum alloy, non-slip surface & rubber feet provide excellent stability on the countertop, keep the cake stand from moving, and can help you get to all sides of the cake.<br /><br />\
                        Numbered Cake Decorating Tips: Made from durable stainless steel, 12 different decorating tips help you create beautiful patterns. With couplers, you can switch tips from one to another easily, no need to use extra frosting bags.<br /><br />\
                        Two 12 Inch Pastry Bags: Reusable silicone piping bags are support different color icing while decorating cakes or cupcakes. Ideal for decorating cake, cupcakes, cookies, candy, fondants, and pies that requires a variety of creams, frostings or fillings.<br /><br />\
                        Frosting Like A Pro: Cake leveler makes it easy to trim your cake to the right height to make layered cakes, then smooth it with the icing spatula or have a textured look by using 3 decorating combs. (Keep all things dry and clean after use or wash.)",
                },
                {
                    "id": 1,
                    "type": "product",
                    "name": "Chef Knife, 8 Inch Kitchen Knife, Professional Japanese AUS-10V",
                    "img": "https://m.media-amazon.com/images/I/61j-VRu377L._AC_UL640_FMwebp_QL65_.jpg",
                    "desc": "【Multi-Functional Chef's Knife】 This 8 inch Professional chef's knife designed to perform well at many differing kitchen tasks， It can be used for your daily kitchen tasks of chopping, slicing, dicing and mincing of all kinds of meat, vegetables, fruits and bread. This chef knife has been the top choice of both home chefs and professionals alike.<br /><br />\
                        【Sharp Knife】Sharpness is key to achieving the best cuts and this is evident in the knife's blade which is quite sharp and will remain this way even after tough tasks such as cutting tough meat or removing flesh from bones. The sharpness is further boosted by use of the latest German engineering.<br /><br />\
                        【Durable】This kitchen knife features an ultra sharp AUS-10V Vacuum Heat Treated Japanese super steel cutting core at 59±2 Rockwell hardness: extraordinary performance and edge retention.The cooking knife will maintain its functionality and sharpness for a long time. You will have no regret in testing the durability of this knife during tough and challenging tasks.<br /><br />\
                        【Ergonomic Handle For Comfort】The knife with ergonomic handle provides non-slip and comfortable grip, enhancing the handhelds touch to make our knife easy to hold, so you will not feel tired for using a long time . And the handle has excellent anti-corrosive performance and it is durable and easy to clean. comfortable grip, not easy to slip, sturdy and labor-saving.<br /><br />\
                        【Exquisite Gift Box】 This 8 inch chef knife with a exquisite Gift Box is very suitable as a gift for mom, This is also a good choice as a gift for women, gift for dad, gift for wife, gift for grandma , such as Mother's Day, Father's Day, Thanksgiving Day, Black Friday, Christmas day, New Year, Easter Day, Halloween, birthday, etc, This is a great gift ideas."
                },
                {
                    "id": 2,
                    "type": "product",
                    "name": "10 Strawberry Street 10.5\" Catering Round Dinner Plate, Set of 12",
                    "img": "https://m.media-amazon.com/images/I/61lLyn73+AS._AC_UL640_FMwebp_QL65_.jpg",
                    "desc": "Set includes (12) – 10.5\" dinner plates<br /><br />\
                        Microwave, oven and dishwasher safe<br /><br />\
                        Simple & classic round shape<br /><br />\
                        Material: Ceramic<br /><br />\
                        Product Dimensions: 10.5” L x 10.5” W x 1” H<br /><br />\
                        Set of Twelve 10-1/2-inch Dinner Plates<br /><br />\
                        Material: porcelain<br /><br />\
                        Oven, freezer, microwave and dishwasher safe",
                },
                {
                    "id": 3,
                    "type": "course",
                    "name": "Culinary Education in 90 min",
                    "img": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/a8af212bb1ff081ee7d42e7c7e941c4b/original",
                    "desc": "“Knowing a 1000 recipes will not make you a great Chef, but knowing food science & mastering culinary techniques will!” <br /><br />\
                    In short, that’s exactly what this class is about.<br /><br />\
                    In the following 9 lessons & a Bonus one, you will get to know all the basics of the essential culinary topics that you will need to work on and develop in order to really “kill it in the kitchen” & become a great Chef. ",
                },
                {
                    "id": 4,
                    "type": "course",
                    "name": "Easy Cakes PT. 2 - Unleash Your Baking Skills",
                    "img": "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/90b93e015ad12db19288818f4c0e461f/original",
                    "desc": "Baking at home does that sound difficult. Look no further. This is the perfect course for you to learn and take your baking skills to the next level<br /><br />\
                    This course covers the essential techniques used in baking and a comprehensive detail about the ingredients we use in baking. Understanding these concepts will provide you with confidence to bake just about anything at home<br /><br />\
                    This is a complete Baking Course suitable for students just starting out in their baking adventure or have experience and want to improve their baking skills. In this course I have put together all aspects and steps in baking a Raspberry Muffin, Chocolate Chip Cookie, Orange Chiffon Cake and a Beautiful Bundt Cake. <br /><br />\
                    We will be making all the recipes from scratch and we will follow the step by step directions of the whole process together. I will also explain everything about the ingredients we are using. <br /><br />\
                    The course will help everyone from complete BEGINNERs who have never baked  before to PROFESSIONALS who bake in professional bakeries.<br /><br />\
                    The course will also make an amazing gift to your friend or a family relative who are aspiring bakers and want to pursue to become professionals or just want to have fun baking  "
                },
                {
                    "id": 5,
                    "type": "bakery",
                    "name": "CHOCOLATE RIPPLE FUDGE CAKE",
                    "img": "https://3brothersbakery.com/wp-content/uploads/2018/05/ChocolateRippleFudgeCake_01-324x324.jpg",
                    "desc": "One of our most popular cakes, the Chocolate Ripple Fudge is a chocolate lover’s dream. Not too sweet, this cake alternates the richness of the fudge topping with buttercream icing. Non-dairy"
                },
            ]))
            p = localStorage.getItem('items')
        }
        let items = JSON.parse(p)
        console.info(p)
        this.productTiles = items.filter(item => item.type === "product")
        this.courseTiles = items.filter(item => item.type === "course")
        this.bakeryTiles = items.filter(item => item.type === "bakery")
    }
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
    showModal = item => {
        this.setState({
            modalVisible: true,
            currentProduct: item
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    };
    render() {
        return (
            <div>
                <Modal title={this.state.currentProduct.type + " Detail"} visible={this.state.modalVisible} okText="Order" onCancel={() => { this.handleCancel() }} onOk={() => { message.success('Success!') }}>
                    <img src={this.state.currentProduct.img} alt="" className={style["detail-img"]} />
                    <div dangerouslySetInnerHTML={{ __html: this.state.currentProduct.desc }} />
                </Modal>
                {/* Page title */}
                <Row >
                    <Col span={22}>
                        <h1>Hello Customer</h1>
                    </Col>
                    <Col offset={22}>
                        <Icon type="shopping-cart" className={style.cartIcon} />
                    </Col>
                </Row>

                <Row>
                    <Col span={19}>

                        <Row gutter={[16, 16]}>
                            <h2>Explore Products</h2>
                            {
                                this.productTiles.map((item, idx) => {
                                    return <Col span={4} key={item.id} onClick={() => this.showModal(item)}><ItemTile hasIcon={true} size={"big"} name={item.name} image={item.img}></ItemTile></Col>
                                })
                            }
                        </Row>

                        <Row gutter={[16, 16]}>
                            <h2>Explore Courses</h2>
                            {
                                this.courseTiles.map((item, idx) => {
                                    return <Col span={4} key={item.id} onClick={() => this.showModal(item)}><ItemTile hasIcon={true} size={"big"} name={item.name} image={item.img}></ItemTile></Col>
                                })
                            }
                        </Row>

                        <Row gutter={[16, 16]}>
                            <h2>Explore Bakery</h2>
                            {
                                this.bakeryTiles.map((item, idx) => {
                                    return <Col span={4} key={item.id} onClick={() => this.showModal(item)}><ItemTile hasIcon={true} size={"big"} name={item.name} image={item.img}></ItemTile></Col>
                                })
                            }
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
    // className = style.tile + " " + (this.props.size === "big" ? style['tile-big'] : style['tile-small'])
    className = style.tile + " " + style['tile-big']
    render() {
        return (
            <div className={this.className}>
                <span className={style.desc}>{this.props.name}</span>
                <img src={this.props.image} alt="" />
                {
                    this.props.hasIcon && <span className={style.addCart + " " + style.cartIcon}><Icon type="shopping-cart" /></span>
                }
            </div>
        )
    }
}

export default Customer;
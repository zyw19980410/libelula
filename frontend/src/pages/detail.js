import { Table, Col, Row, Button, message } from 'antd';
import style from "../assets/css/main.css";
import request from 'umi-request'
import Auth from '../store/auth'
class Detail extends React.Component {
  render() {
    return (
      <>
        <div class="breadcrumb">
          <a href="#">All categories</a>
          <a href="#">Product Details</a>
        </div>

        <div class="goods_detail_con clearfix">
          <div class="goods_detail_pic fl"><img style={{height: '350px',width: '350px'}} src={require("../images/slide.jpg")} />
          </div>

          <div class="goods_detail_list fr">
            <h3>Slide</h3>
            <p>Silk has become a part of the life and culture of Indian people. Although India produces various kinds of silk products, for example. Clothing fabrics, neckties/women's shawls, ready-to-wear, and the only sari produced in India. Sari is almost synonymous with the word silk. It is the traditional clothing of Indian women since ancient times. There are numerous Indian literature references to this pleated dress and its various dress patterns in different periods, different regions and different groups.
            </p>
            <div class="prize_bar">
              <span class="show_pirze">$<em id="price">100</em></span>
            </div>
            <form method="post" action="../../Buyer/place_order/">
              <div class="goods_num clearfix">
                <div class="num_name fl">count：</div>
                <div class="num_add fl">
                  <input type="text" id="count" name="count" class="num_show fl" value="1" />
                    <input type="hidden" id="goods_id" name="goods_id" class="num_show fl" value="{{ goods.id }}" />
                      <a href="javascript:;" onclick="changecount('add')" class="add fr">+</a>
                      <a href="javascript:;" onclick="changecount('minus')" class="minus fr">-</a>
                    </div>
                </div>
                <div class="total">Total price：<em id="total">100</em><em>dollar</em></div>
                <div class="operate_btn">
                  <a href="http://localhost:3000/payresult" input type="submit" class="buy_btn" value="Buy now">Buy now</a>
                  <a href="http://localhost:3000/cart" class="add_cart" id="add_cart">Add cart</a>
                </div>
            </form>
          </div>
        </div>

        <div class="main_wrap clearfix">
          <div class="l_wrap fl clearfix">
            <div class="new_goods">
              <h3>New Arrivals</h3>
              <ul>
                <li>
                  <a href="#"><img src={require("../images/goods/silk001.jpg")} /></a>
                  <h4><a href="#">Indian silk</a></h4>
                  <div class="prize">$3.90</div>
                </li>
                <li>
                  <a href="#"><img src={require("../images/goods/silk002.jpg")} /></a>
                  <h4><a href="#">Indian silk</a></h4>
                  <div class="prize">$16.80</div>
                </li>
              </ul>
            </div>
          </div>

          <div class="r_wrap fr clearfix">
            <ul class="detail_tab clearfix">
              <li class="active">Product introduction</li>
              <li>comment</li>
            </ul>

            <div class="tab_content">
              <dl>
                <dt>Product detail: </dt>
                <dd>It is the traditional clothing of Indian women since ancient times. There are numerous Indian
                  literature references to this pleated dress and its various dress patterns in different periods,
                  different regions and different groups. India's sari is an example of the outstanding skills of
                  weavers.
                </dd>
              </dl>
            </div>

          </div>
        </div>
      </>
    )
  }
}
export default Detail;
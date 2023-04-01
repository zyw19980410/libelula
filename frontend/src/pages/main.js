import { Table, Col, Row, Button, message } from 'antd';
import style from "../assets/css/main.css";
import request from 'umi-request'
import Auth from '../store/auth'
import React from "react";

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      dataList: [
        [
          { img: '../images/thumbnail/1.jpg', title: 'title1', content: 'content1' },
          { img: '../images/thumbnail/2.jpg', title: 'title2', content: 'content2' },
        ],
        [
          { img: '../images/thumbnail/3.jpg', title: 'title3', content: 'content3' },
          { img: '../images/thumbnail/4.jpg', title: 'title4', content: 'content4' },
        ],
        [
          { img: '../images/thumbnail/5.jpg', title: 'title5', content: 'content5' },
          { img: '../images/thumbnail/6.jpg', title: 'title6', content: 'content6' },
        ],
      ],
      currentPage: 0,
    }
  }
  clickRight() {
    if (this.state.currentPage >= 0 && this.state.currentPage < 3) {
      this.state.currentPage++;
      return ;
    }
    return ;
  }
  clickLeft() {
    if (this.state.currentPage >= 0 && this.state.currentPage < 3) {
      this.state.currentPage--;
      return ;
    }
    return ;
  }
  render() {
    return (
      <div id='main'>
        <p className='title'>Home Page</p>
        <div className='pannerPic'>
          <img src={require("../images/thumbnail/adv01.jpg")} alt="" />
        </div>
        <p className='title'>first page</p>
        <div className='content'>
          {
            this.state.dataList[this.state.currentPage].map((item, i) => {
              return <div className='box'>
                <div className='boxImg'>
                  <img src={require(`../images/thumbnail/${i+1}.jpg`)} alt="" />
                </div>
                <div className='boxText'>
                  <p>{item.title}</p>
                  <a href='http://localhost:3000/detail'>{item.content}</a>
                </div>
              </div>
            })
          }
        </div>
        <div className='changePage'>
          <div onClick={() => this.clickLeft()}>{'<<'}</div>
          <p>the {this.state.currentPage} page / all 3 pages</p>
          <div onClick={() => this.clickRight()}>{'>>'}</div>
        </div>
      </div>
    )
  }
}
export default Main;
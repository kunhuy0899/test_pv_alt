import React, { Component } from 'react'
import './content.css'
import image4 from './image4.JPG'
export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {  list: [] };
    }
    componentDidMount(){
        this.ListItem();
    }
    ListItem(){
        fetch('https://festival-hue-api.dev-altamedia.com/api/session/showAllSession').then((result) => {
        return result.json();}).then((jsonResult) => {this.setState({list:jsonResult.data})                                                   
    })
    }
    render() {
        const listitem=this.state.list.map((list,index)=>(
            <div className="item-list" key={index}>
                            <div className="info-item">
                                <div className="image">
                                    <img src={list.feSessionThumbnail} />
                                </div>
                                <div className="info">
                                    <div className="info-title">
                                        <h1 className="f24 styleline">{list.feSessionContent}</h1>
                                        <h1 className="f24 styleline">Địa điểm: {list.feSessionLocaltion}</h1>
                                        <h1 className="f24">Thời gian: {list.feSessionStartTime}   |   {list.feSessionCreatedAt}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="button-item">
                                <div className="image-button">
                                    <img src={image4} />
                                </div>
                            </div>
            </div>
        ));
        return (
            <div className="content">
                    <div className="title">
                        <h1 className="f48">Danh sách địa điểm soát vé</h1>
                    </div>
                    <div className="content-list">
                        {listitem}
                    </div>

            </div>
        )
    }
}

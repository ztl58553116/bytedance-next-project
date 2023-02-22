import React from 'react'
import Style from './../styles/sider.module.css'
const side = (prop)=> {
    const url = prop.url;
    return <>
        <div className={Style.sider}>
          <div className={Style.advertisement} style={{backgroundImage: 'url('+ url +')'}}></div> 
          <div className={Style.applink}>
            <div className={Style.picture}></div>
            <div className={Style.text1}>下载稀土掘金app</div>
            <div className={Style.text2}>一个帮助开发者成长的社区</div>
          </div>
        </div>
    </>
}
export default side;
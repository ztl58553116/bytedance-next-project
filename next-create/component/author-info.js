import React from 'react'
import Style from './../styles/authorinfo.module.css'
const info = (prop)=> {
    const name = prop.info.name;
    const logo_url = prop.info.logo_url;
    const level_url = prop.info.level_url;
    const date = prop.arti.date;
    const read = prop.arti.number;
    // console.log(level_url);
    return <>
        <div className={Style.box}>
            <div className={Style.logo} style={{backgroundImage: 'url('+ logo_url + ')'}}></div>
            <p className={Style.name}>{name}</p>
            <div className={Style.level} style={{backgroundImage: 'url(' + level_url + ')'}}></div>
            <p className={Style.detail}>{date}&nbsp;{read}</p>
        </div>
    </>
}
export default info;
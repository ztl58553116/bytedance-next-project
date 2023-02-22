import React from "react"
import Style from './../styles/rank.module.css'
const Rank = (content) => {
    const data = content.content.data;
    // console.log(data.data);
    const logo_url0 = data.authors.data[0].attributes["logo_url"];
    const logo_url1 = data.authors.data[1].attributes["logo_url"];
    const logo_url2 = data.authors.data[2].attributes["logo_url"];
    return (<>
        <div className={Style.authorrank}>
            <div className={Style.text}> &nbsp;&nbsp;🎖️作者榜</div>
                <div className={Style.author}>
                    <div className={Style.photo} style={{backgroundImage: 'url('+logo_url0+')'}}></div>
                    <div className={Style.name}>{data.authors.data[0].attributes["name"]}</div>
                    <div className={Style.direction}>{data.authors.data[0].attributes["introduction"]} &nbsp;{data.authors.data[0].attributes["company"]} </div>
                </div>

                <div className={Style.author}>
                <div className={Style.photo} style={{backgroundImage: 'url('+logo_url1+')'}}></div>
                    <div className={Style.name}>{data.authors.data[1].attributes["name"]}</div>
                    <div className={Style.direction}>{data.authors.data[1].attributes["introduction"]} &nbsp;{data.authors.data[0].attributes["company"]} </div>
                </div>

                <div className={Style.author}>
                <div className={Style.photo} style={{backgroundImage: 'url('+logo_url2+')'}}></div>
                    <div className={Style.name}>{data.authors.data[2].attributes["name"]}</div>
                    <div className={Style.direction}>{data.authors.data[2].attributes["introduction"]} &nbsp;{data.authors.data[0].attributes["company"]} </div>
                </div>
        </div>
    </>);
    
}
export default Rank;
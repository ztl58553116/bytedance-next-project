import React from "react"
import Style from "./../styles/arti.module.css"
import Router from "next/router";
function goto1() {
    Router.push('/page?arti_id=0&&author_id=2');
}
function goto2() {
    Router.push('/page?arti_id=1&&author_id=2');
}
function goto3() {
    Router.push('/page?arti_id=2&&author_id=4');
}
function goto4() {
    Router.push('/page?arti_id=3&&author_id=4');
}
function goto5() {
    Router.push('/page?arti_id=4&&author_id=4');
}
function goto6() {
    Router.push('/page?arti_id=5&&author_id=4');
}
function goto7() {
    Router.push('/page?arti_id=6&&author_id=4');
}
const article = (prop)=> {
    const data = prop.info;
    // console.log(data.data[0].attributes);
    return <>
        <div className={Style.banner}>
            <div className={Style.artitab}>
                <a className={Style.text1}>推荐</a>
                <a className={Style.text2}>最新</a>
                <a className={Style.text3}>热榜</a>
            </div>
            <div className={Style.article} onClick={goto1}>
                <p className={Style.demo}>{data.data[0].attributes.name} · {data.data[0].attributes.date} · {data.data[0].attributes.direction}</p>
                <h1 className={Style.title}>{data.data[0].attributes.title}</h1>
                <p className={Style.preview}>{data.data[0].attributes.preview}</p>
            </div>
            <div className={Style.article} onClick={goto2}>
                <p className={Style.demo}>{data.data[1].attributes.name} · {data.data[1].attributes.date} · {data.data[1].attributes.direction}</p>
                <h1 className={Style.title}>{data.data[1].attributes.title}</h1>
                <p className={Style.preview}>{data.data[1].attributes.preview}</p>
            </div>
            <div className={Style.article} onClick={goto3}>
                <p className={Style.demo}>{data.data[2].attributes.name} · {data.data[2].attributes.date} · {data.data[2].attributes.direction}</p>
                <h1 className={Style.title}>{data.data[2].attributes.title}</h1>
                <p className={Style.preview}>{data.data[2].attributes.preview}</p>
            </div>
            <div className={Style.article} onClick={goto4}>
                <p className={Style.demo}>{data.data[3].attributes.name} · {data.data[3].attributes.date} · {data.data[3].attributes.direction}</p>
                <h1 className={Style.title}>{data.data[3].attributes.title}</h1>
                <p className={Style.preview}>{data.data[3].attributes.preview}</p>
            </div>
            <div className={Style.article} onClick={goto5}>
                <p className={Style.demo}>{data.data[4].attributes.name} · {data.data[4].attributes.date} · {data.data[4].attributes.direction}</p>
                <h1 className={Style.title}>{data.data[4].attributes.title}</h1>
                <p className={Style.preview}>{data.data[4].attributes.preview}</p>
            </div>
            <div className={Style.article} onClick={goto6}>
                <p className={Style.demo}>{data.data[5].attributes.name} · {data.data[5].attributes.date} · {data.data[5].attributes.direction}</p>
                <h1 className={Style.title}>{data.data[5].attributes.title}</h1>
                <p className={Style.preview}>{data.data[5].attributes.preview}</p>
            </div>
            <div className={Style.article} onClick={goto7}>
                <p className={Style.demo}>{data.data[6].attributes.name} · {data.data[6].attributes.date} · {data.data[6].attributes.direction}</p>
                <h1 className={Style.title}>{data.data[6].attributes.title}</h1>
                <p className={Style.preview}>{data.data[6].attributes.preview}</p>
            </div>
        </div>
    </>
}
export default article;
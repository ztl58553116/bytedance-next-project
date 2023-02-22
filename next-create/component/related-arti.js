import React from 'react'
import Style from './../styles/rela_arti.module.css'
import Link from 'next/link'
const article = ()=> {
    return <>
        <div className={Style.container}>
            <div className={Style.tab}>&nbsp;&nbsp;&nbsp;相关文章</div>
            <div className={Style.lst}><Link href="/page?arti_id=0&&author_id=2" className={Style.lnk}>【前端专场 学习资料一】</Link></div>
            <div className={Style.lst}><Link href="/page?arti_id=1&&author_id=2" className={Style.lnk}>【前端专场 学习资料二】</Link></div>
            <div className={Style.lst}><Link href="/page?arti_id=2&&author_id=2" className={Style.lnk}>前端与HTML ｜ 青训营笔记</Link></div>
            <div className={Style.lst}><Link href="/page?arti_id=3&&author_id=4" className={Style.lnk}>当青训营遇上码上掘金</Link></div>
            <div className={Style.lst}><Link href="/page?arti_id=4&&author_id=4" className={Style.lnk}>CSS | 青训营笔记</Link></div>
            <div className={Style.lst}><Link href="/page?arti_id=5&&author_id=4" className={Style.lnk}>响应式系统与React | 青训营笔记</Link></div>
            <div className={Style.lst}><Link href="/page?arti_id=6&&author_id=4" className={Style.lnk}>Next.js | 青训营笔记</Link></div>
        </div>
    </>
}
export default article;
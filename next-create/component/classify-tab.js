import React from "react";
import Link from "next/link"
const classifytab = ()=>{
    return (<>
        <div id="classifytab">
        <div className="zonghe"><Link href="/">综合</Link></div> 
        <div className="guanzhu"><Link href="/index1">关注</Link></div>
        <div className="houduan"><Link href="/index2">后端</Link></div>
        <div className="qianduan"><Link href="/index3">前端</Link></div>
        <div className="Android"><Link href="/index4">Android</Link></div>
        <div className="IOS"><Link href="/index5">iOS</Link></div>
        <div className="AI"><Link href="/index6">人工智能</Link></div>
        <div className="kaifa"><Link href="/index7">开发工具</Link></div>
        <div className="code"><Link href="/index8">代码人生</Link></div>
        <div className="read"><Link href="/index9">阅读</Link></div>
        </div>
    </>);
};
export default classifytab;
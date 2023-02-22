import Style from './../styles/admin.module.css'
const admin = ()=> {
    return <>
        <div className={Style.box}>
            <div className={Style.logo} style={{backgroundImage: 'url(http://localhost:1337/uploads/Zhang_Tailai_1ebc9be2b6.png)'}}></div>
            <p className={Style.name}>张泰来</p>
            <p className={Style.descript}>前端开发者</p>
            <div className={Style.level} style={{backgroundImage: 'url(http://localhost:1337/uploads/lv3_e3765e67a1.png)'}}></div>
        </div>
    </>
}
export default admin;
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Style from './../styles/top.module.css'
import {Button, Space} from 'antd'
import Router from "next/router";
const { Header, Content, Footer, Sider} = Layout;

const changemyTheme = ()=>{
  if (document.querySelector('body').style.backgroundColor === 'rgb(255, 255, 255)') {
    document.querySelector('body').style.backgroundColor = '#18181c'
    document.querySelector(':where(.css-dev-only-do-not-override-ixblex).ant-menu').style.backgroundColor = '#18181c'
    document.querySelector('.ant-layout-header').style.backgroundColor = '#18181c'
    document.querySelector('.ant-layout').style.backgroundColor = '#18181c'
    // document.querySelector('toptab').style.backgroundColor = '#18181c'
    return
  }
  document.querySelector('body').style.backgroundColor = 'rgb(255, 255, 255)'
  document.querySelector(':where(.css-dev-only-do-not-override-ixblex).ant-menu').style.backgroundColor = 'rgb(255, 255, 255)'
  document.querySelector('.ant-layout-header').style.backgroundColor = 'rgb(255, 255, 255)'
  document.querySelector('.ant-layout').style.backgroundColor = 'rgb(255, 255, 255)';
  // document.querySelector('toptab').style.backgroundColor = 'rgb(255, 255, 255)';
}

function goto() {
  Router.push('/');
}

const Toptab = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const arr = ['首页','沸点','课程','直播','活动','商城','APP','插件'];
  return (<>
    <Layout className="toptab">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(8).fill(null).map((_, index) => {
            const key = index;
            return {
              key,
              label: `${arr[key]}`,
            };
          })}
        />
      </Header>
      <Button className={Style.btn} onClick={changemyTheme}>主题切换</Button>
      <Button className={Style.btn2} onClick={goto}>返回首页</Button>
    </Layout>
  </>
  );
};
export default Toptab;
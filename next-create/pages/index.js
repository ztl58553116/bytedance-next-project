import Toptab from '../component/Top-tab';
import Ctab from '../component/classify-tab'
import React, {useState} from 'react';
import Rank from '../component/author-rank'
import Arti from '../component/arti'
import Sider from '../component/side'
import { Divider } from 'antd';

export default(props)=> {
    const data = props.data;
    console.log(data);
    const adv_url = data.adv.data.advs.data[0].attributes.adv_url;
    const article = data.brief.data.briefs;
    return (
      <>
        <Toptab></Toptab>
        <Ctab></Ctab>
        <Arti info={article}></Arti>
        <Sider url={adv_url}></Sider>
        <Rank content={data["author"]}/>
      </>
    );
}

export const getServerSideProps = async() => {
    const fetchParams1 = {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: `{
      authors {
          data {
            attributes {
            name
            company
            introduction
            logo_url
            level_url
            }
          }
        }
      }`
    })
  }
    const res1 = await fetch('http://localhost:1337/graphql',fetchParams1);
    const data1 = await res1.json();

    const fetchParams2 = {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: `{
        advs {
          data {
            attributes {
              adv_url
            }
          }
        }
      }`
    })
  }
    const res2 = await fetch(`http://localhost:1337/graphql`, fetchParams2);
    const data2 = await res2.json();

    const fetchParams3 = {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        query: `{
          briefs {
            data {
              attributes {
                title
                name
                date
                preview
                direction
              }
            }
          }
        }`
      })
    }

    const res3 = await fetch(`http://localhost:1337/graphql`, fetchParams3);
    const data3 = await res3.json();


    const fetchParams4 = {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        query: `{
          articles {
            data {
              attributes {
                content
              }
            }
          }
        }`
      })
    }
    const res4 = await fetch(`http://localhost:1337/graphql`, fetchParams4);
    const data4 = await res4.json();
    const data = {
      author:data1,adv:data2,brief:data3,article:data4,
    }

    return {
        props: {
          data
        }
    }
}

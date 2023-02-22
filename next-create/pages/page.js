import React from 'react'
import Showdown from 'showdown';
import Authorinfo from './../component/author-info'
import Admin from './../component/admin'
import Toptab from './../component/Top-tab'
import RelatedArti from './../component/related-arti'
import {withRouter}  from 'next/router'
export async function getServerSideProps(context) {
  const fetchParams1 = {
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
              title
              date
              number
            }
          }
        }
      }`
    })
  }

  const res1 = await fetch(`http://localhost:1337/graphql`, fetchParams1);
  const data1 = await res1.json();

  const fetchParams2 = {
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
                introduction
                company
                logo_url
                level_url
              }
            }
          }
      }`
    })
  }

  const res2 = await fetch(`http://localhost:1337/graphql`, fetchParams2);
  const data2 = await res2.json();

  const data = {
    content:data1,
    author:data2,
  }
  return {
    props: {
      data
    }
  }
}

const page = ({router,data})=> {
    console.log(router.query);
    const arti_id = router.query.arti_id;
    const author_id = router.query.author_id;
    const arti_attrs = data.content.data.articles.data[arti_id].attributes;
    const author_attrs = data.author.data.authors.data[author_id].attributes;
    const converter = new Showdown.Converter();
    return <>
        <Toptab></Toptab>
        <h2 className='arti_title'>{arti_attrs.title}</h2>
        <Admin></Admin>
        <div className='Content'>
          <Authorinfo info={author_attrs} arti={arti_attrs}></Authorinfo>
          <div className="container" dangerouslySetInnerHTML={{ __html: converter.makeHtml(arti_attrs.content) }}></div>
        </div>
        <RelatedArti></RelatedArti>
    </>

}
export default withRouter(page);
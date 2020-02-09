import React from 'react'
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'
import Link from 'next/link'
import '../assets/antd-custom.less'
import { Typography, Tag, Row, Col, Layout } from 'antd'
import ReactMarkdown from "react-markdown";

const { Title, Paragraph, Text } = Typography;
const { Footer } = Layout;


const Home = ({ posts }) => (
  <div className="app">
    <Head>
      <title>Home</title>
      <link rel="icon" href="favicon.ico" />
    </Head>
    <Row>
      <Col md={{span: 10, offset: 7}} xs={24}>
        <div className="header" style={{ textAlign: "center" }}>
          <Link href="/">
            <a><img src="logo.png" height="34" /></a>
          </Link>
        </div>
        {posts.map(post => (
          <div className="news">
            <Title level={4}>
              <Link href={post.slug}>
                <a>{post.title}</a>
              </Link>
            </Title>
            <Paragraph>
              <ReactMarkdown source={post.detail.substring(0, 222) + '...'} />
            </Paragraph>
            <div className="news-bottom">
              <Tag color="green">{post.category}</Tag>
              <Text type="secondary">{post.date}</Text>
            </div>
          </div>
        ))}
        <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
          Daily News © 2020 Created by Burak Gür
        </Footer>
      </Col>
    </Row>
  </div>
);

Home.getInitialProps = async ctx => {
  const res = await fetch('https://daily-news-burakgur.herokuapp.com/api/posts')
  const json = await res.json()
  return {
    posts: json.posts
  }
}



export default Home;

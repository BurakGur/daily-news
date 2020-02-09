import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import "../assets/antd-custom.less";
import { Typography, Tag, Row, Col, Layout } from "antd";
import ReactMarkdown from "react-markdown";


const { Title, Paragraph, Text } = Typography;
const { Footer } = Layout;

const News = ({ post }) => (
  <div className="app">
    <Head>
      <title>Home</title>
      <link rel="icon" href="favicon.ico" />
    </Head>
    <Row>
      <Col span={10} offset={7}>
        <div className="header" style={{ textAlign: "center" }}>
          <Link href="/">
            <a><img src="logo.png" height="34" /></a>
          </Link>
        </div>
          <div className="news">
            <Title level={4}>
              <Link href="/test">
                <a>{post.title}</a>
              </Link>
            </Title>
            <Paragraph>
              <ReactMarkdown source={post.detail} />
            </Paragraph>
            <div className="news-bottom">
              <Tag color="green">{post.category}</Tag>
              <Text type="secondary">{post.date}</Text>
            </div>
          </div>
        <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
          Daily News © 2020 Created by Burak Gür
        </Footer>
      </Col>
    </Row>
  </div>
);

News.getInitialProps = async ({req, query}) => {
  console.log(query);
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return {
    post: json.post
  };
};

export default News;

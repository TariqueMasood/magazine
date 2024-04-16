"use client";

import { Col, Row, Tab, Tabs } from "react-bootstrap";
import BlogCard from "../blog-card/blog-card";
import styles from "./blog-tabs.module.css";

const tabsData = [
  {
    title: "All",
    eventKey: "general",
  },
  {
    title: "Business",
    eventKey: "business",
  },
  {
    title: "Entertainment",
    eventKey: "entertainment",
  },
];

const BlogTabs = (props) => {
  return (
    <Tabs
      defaultActiveKey="general"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      {tabsData.map((tab) => (
        <Tab key={tab.title} eventKey={tab.eventKey} title={tab.title}>
          <Row>
            {props.data.results?.map((data) => (
              <Col key={data.id} md={6} lg={4}>
                <BlogCard data={data} />
              </Col>
            ))}
          </Row>
        </Tab>
      ))}
    </Tabs>
    // <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    //   <div className={styles.tabContainer}>
    //     <Nav variant="pills">
    //       <Nav.Item>
    //         <Nav.Link eventKey="all">All content</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link eventKey="general">General content</Nav.Link>
    //       </Nav.Item>
    //     </Nav>
    //   </div>
    //   <Tab.Content>
    //     <Tab.Pane eventKey="all">All tab content</Tab.Pane>
    //     <Tab.Pane eventKey="general">General tab content</Tab.Pane>
    //   </Tab.Content>
    // </Tab.Container>
  );
};

export default BlogTabs;

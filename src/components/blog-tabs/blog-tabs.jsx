"use client";
import { Nav, Row, Tab, Tabs } from "react-bootstrap";
import MgLoader from "../loader/loader";
import BlogCard from "../blog-card/blog-card";

const tabsData = [
  {
    title: "All",
    eventKey: "general",
    content: "General content",
  },
  {
    title: "Business",
    eventKey: "business",
    content: "Business content",
  },
  {
    title: "Entertainment",
    eventKey: "entertainment",
    content: "entertainment content",
  },
  {
    title: "Health",
    eventKey: "health",
    content: "health content",
  },
  {
    title: "Science",
    eventKey: "science",
    content: "science content",
  },
  {
    title: "Sports",
    eventKey: "sports",
    content: "sports content",
  },
  {
    title: "Technology",
    eventKey: "technology",
    content: "technology content",
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
            {props.loading ? (
              <div className="text-center">
                <MgLoader />
              </div>
            ) : (
              props.ariticles.articles?.map((article) => (
                <BlogCard
                  key={article.title}
                  title={article.title ? article.title.slice(0, 45) : ""}
                  content={article.content ? article.content.slice(0, 150) : ""}
                  imageUrl={article.urlToImage}
                  publishDate={new Date(article.publishedAt).toGMTString()}
                  author={article.author}
                  source={article.source.name}
                />
              ))
            )}
          </Row>
        </Tab>
      ))}
    </Tabs>
  );
};
// const BlogTabs2 = (props) => {
//   return (
//     <Tab.Container id="left-tabs-example" defaultActiveKey="general">
//       <Nav variant="underline">
//         <Nav.Item>
//           <Nav.Link eventKey="general">All</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="business">Business</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="entertainment">Entertainment</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="health">Health</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="science">Science</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="sports">Sports</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="technology">Technology</Nav.Link>
//         </Nav.Item>
//       </Nav>
//       <Row>
//         <Tab.Content>
//           <Tab.Pane eventKey="general">
//             <BlogCard
//               key={article.title}
//               title={article.title ? article.title.slice(0, 45) : ""}
//               content={article.content ? article.content.slice(0, 150) : ""}
//               imageUrl={article.urlToImage}
//               publishDate={new Date(article.publishedAt).toGMTString()}
//               author={article.author}
//               source={article.source.name}
//             />
//           </Tab.Pane>
//         </Tab.Content>
//       </Row>
//     </Tab.Container>
//   );
// };

export default BlogTabs;

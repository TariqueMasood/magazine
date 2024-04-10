import { Container } from "react-bootstrap";
import styles from "./testimonial.module.css";
import TestimonialCard from "../testimonial-card/testimonial-card";
import SectionHeader from "../section-header/section-header";
import SectionBorder from "../section-border/section-border";
import userImg1 from "../../../public/images/testimonial-img1.png";
import userImg2 from "../../../public/images/testimonial-img2.png";
import userImg3 from "../../../public/images/testimonial-img3.png";
import MgSlider from "../slider/slider";

const data = [
  {
    id: 1,
    title:
      "Project Leaders magazine dives deep into the human stories behind innovation. It's refreshing to see leadership challenges explored authentically, making them relatable and offering valuable insights.",
    userImg: userImg1,
    userName: "AR",
    userPost: "CEO",
    company: "RIntech",
  },
  {
    id: 2,
    title:
      "Thank you for featuring our project! Your storytelling captured the essence of our work and its impact on communities worldwide. It's inspiring to see leader narratives woven into the bigger picture.",
    userImg: userImg2,
    userName: "MR",
    userPost: "Project Lead",
    company: "Edintech",
  },
  {
    id: 3,
    title:
      "We subscribed for the in-depth leader stories, but the magazine has become a well-rounded resource. The blend of business strategy, technological innovation, and social impact resonates strongly with our leadership team.",
    userImg: userImg3,
    userName: "AP",
    userPost: "COO",
    company: "LRS Health",
  },
  {
    id: 4,
    title:
      "The focus on the 'why' behind projects, not just the 'what,' is invaluable. It's helped my team understand the societal impact of our work and approach it with renewed purpose.",
    userImg: userImg1,
    userName: "MF",
    userPost: "CTO",
    company: "RIntech",
  },
  {
    id: 5,
    title:
      "We truly appreciate the opportunity to showcase our innovative healthcare projects. Your focus on both human stories and technological advancements has created a powerful and engaging narrative for our audience.",
    userImg: userImg1,
    userName: "KC",
    userPost: "President",
    company: "SR Medical Group",
  },
  {
    id: 6,
    title:
      "The 'Project Leaders Magazine' provides a platform for leaders to share their journeys - the wins, the setbacks, and the lessons learned. It's a masterclass in navigating complex business challenges.",
    userImg: userImg1,
    userName: "JK",
    userPost: "President",
    company: "NND Tech",
  },
  {
    id: 7,
    title:
      "Finding relatable stories of leaders overcoming challenges has been incredibly helpful. Your magazine offers a sense of shared experience and practical takeaways that I can apply to my own entrepreneurial journey.",
    userImg: userImg1,
    userName: "AK",
    userPost: "Founder",
    company: "KCA",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.borderContainer}>
          <SectionHeader
            title="TESTIMONIAL"
            subTitle="What our readers say."
            desc="Hear from Those Who Read It."
          />
          <SectionBorder />
        </div>

        <MgSlider settings={settings}>
          {data.map((data, index) => {
            return (
              <TestimonialCard
                key={index}
                title={data.title}
                userImg={data.userImg}
                userName={data.userName}
                userPost={data.userPost}
                company={data.company}
              />
            );
          })}
        </MgSlider>
      </Container>
    </div>
  );
};

export default TestimonialSlider;

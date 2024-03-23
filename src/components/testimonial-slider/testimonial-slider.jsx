import { Container } from "react-bootstrap";
import styles from "./testimonial.module.css";
import TestimonialCard from "../testimonial-card/testimonial-card";
import SectionHeader from "../section-header/section-header";
import SectionBorder from "../section-border/section-border";
import userImg1 from "../../../public/images/testimonial-img1.png";
import userImg2 from "../../../public/images/testimonial-img2.png";
import userImg3 from "../../../public/images/testimonial-img3.png";

const data = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non lectus rutrum, congue nisl id, iaculis lorem.",
    userImg: userImg1,
    userName: "Roger Wilson",
    userPost: "Teacher",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non lectus rutrum, congue nisl id, iaculis lorem.",
    userImg: userImg2,
    userName: "Tom",
    userPost: "Teacher",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non lectus rutrum, congue nisl id, iaculis lorem.",
    userImg: userImg3,
    userName: "Rob Zuber",
    userPost: "CEO",
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non lectus rutrum, congue nisl id, iaculis lorem.",
    userImg: userImg1,
    userName: "Rob Zuber",
    userPost: "CEO",
  },
];

const TestimonialSlider = () => {
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

        <div className={styles.sliderWrapper}>
          {data.map((data, index) => {
            return (
              <TestimonialCard
                key={index}
                title={data.title}
                userImg={data.userImg}
                userName={data.userName}
                userPost={data.userPost}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default TestimonialSlider;

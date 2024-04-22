import Image from "next/image";
import SectionBorder from "../section-border/section-border";

const Author = () => {
  return (
    <div className="d-flex flex-column gap-3 mt-4">
      <label className={styles.shareLabel}>
        AUTHOR
        <SectionBorder />
      </label>
      <div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <Image
                alt="card"
                src={blog?.image !== null ? blog?.image : blogImage}
                width={300}
                height={200}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className={styles.authorTop}>
                  {" "}
                  <b>Claire McCarthy, MD</b>, Senior Faculty Editor, Harvard
                  Health Publishing
                </p>
                <p className={styles.authorMiddle}>
                  Claire McCarthy, MD, is a primary care pediatrician at Boston
                  Children&apos;s Hospital, and an assistant professor of
                  pediatrics at Harvard Medical School. In addition to being a
                  senior faculty editor for Harvard Health Publishing, Dr.
                  McCarthy…
                  <label className={styles.shareLabel}>See Full Bio</label>
                </p>
                <p className="card-text">
                  <small className={styles.authorBottom}>
                    View all posts by Claire McCarthy, MD
                    <label className="ps-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className={`bi bi-arrow-right ${styles.arrowAuthor}`}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          strokeWidth="5"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </label>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;

import MgLoader from "@/components/loader/loader";

const Loading = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "28px",
        width: "100vw",
        height: "100vh",
        marginTop: "100px",
      }}
    >
      <MgLoader />
    </div>
  );
};

export default Loading;

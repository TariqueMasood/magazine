import MgLoader from "@/components/loader/loader";

const Loading = () => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "100vw",
        height: "100vh",
        marginTop: "200px",
      }}
    >
      <MgLoader />
    </div>
  );
};

export default Loading;

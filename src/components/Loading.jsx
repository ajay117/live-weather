import ReactLoading from "react-loading";

const Loading = () => (
  <div className="h-screen flex justify-center items-center">

  <ReactLoading type="spin" color="black" height={'40px'} width={"40px"} />
  </div>
);

export default Loading;

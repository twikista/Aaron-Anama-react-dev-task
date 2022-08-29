import { useParams, useNavigate } from "react-router-dom";

const withRouter = (WrapperComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return <WrapperComponent {...props} params={params} navigate={navigate} />;
};

export default withRouter;

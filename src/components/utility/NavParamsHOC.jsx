import { useParams, useNavigate, useLocation } from "react-router-dom";

const withRouter = (WrapperComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <WrapperComponent
      {...props}
      params={params}
      navigate={navigate}
      location={location}
    />
  );
};

export default withRouter;

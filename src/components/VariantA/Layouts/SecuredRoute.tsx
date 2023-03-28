import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SecuredRoute(props: any) {
  const navigate = useNavigate();
  const { setLoginModal } = useStoreActions((actions: any) => actions.global);
  useEffect(() => {
    // checks if the user is authenticated
    if (!localStorage.getItem("token")) {
      setLoginModal(true);
      navigate("/");
    }
  }, []);

  return <div>{props.children}</div>;
}

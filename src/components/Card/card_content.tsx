import { Button, FloatButton, Result, notification } from "antd";
import Loading_component from "../loading";

const Card_Content = ({ children, loading, error }: any) => {
  const [api, contextHolder] = notification.useNotification();
  // console.log(error);

  if (error) {
    if ("status" in error) {
      if (error.status === 401) {
        // RemoveCookie("access_token");
        // navigate("/auth-sign-in");
        api.error({
          message: `Notification`,
          description: "Failed, Please Try Again Later",
          placement: "topRight",
        });
      }
    }
  }

  return (
    <div style={{ minHeight: "83vh" }}>
      {contextHolder}
      {error ? (
        <>
          <Result
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<Button type="primary">Back Home</Button>}
          />
        </>
      ) : (
        <>{loading ? <Loading_component /> : children}</>
      )}

      <FloatButton.BackTop />
    </div>
  );
};
export default Card_Content;

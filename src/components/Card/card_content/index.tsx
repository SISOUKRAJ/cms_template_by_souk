import { Button, FloatButton, Result, notification } from "antd";
import Loading_component from "../../loading";
import { CheckErrorResponse } from "../../../middlewares/api_error_respone";

const Card_Content = ({ children, loading, error }: any) => {
  const [api, contextHolder] = notification.useNotification();
  CheckErrorResponse(error, api);
  return (
    <div>
      <FloatButton.BackTop />
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
    </div>
  );
};
export default Card_Content;

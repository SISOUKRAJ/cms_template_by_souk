import { NotificationInstance } from "antd/es/notification/interface";

export const CheckErrorResponse = (error: any, api: NotificationInstance) => {
  switch (error) {
    case undefined:
      break;
    default:
      switch (error.status) {
        case 401:
          api.error({
            message: `Notification`,
            description: "Failed, Please Try Again Later",
            placement: "topRight",
          });
          //   navigate("/auth-sign-in");
          break;
        default:
          api.warning({
            message: `Notification`,
            description: "Failed, Please Try Again Later",
            placement: "topRight",
          });
          break;
      }
  }
  return;
};

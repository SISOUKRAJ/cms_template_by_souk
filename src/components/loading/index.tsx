// import React from "react";

import { Flex, Spin } from "antd";

const Loading_component = () => {
  return (
    <Flex justify="center" align="center" style={{ height: "83vh" }} gap="middle">
      <Spin size="large"/>
    </Flex>
  );
};

export default Loading_component;

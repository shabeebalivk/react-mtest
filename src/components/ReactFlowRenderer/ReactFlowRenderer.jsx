import React, { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
  Node
} from "react-flow-renderer";
import { nodes as initialNodes, edges as initialEdges } from "./elements";
import { Button, Modal, Input, Form } from "antd";
import CustomNode from "./CustomNode";

function ReactFlowRenderer() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: ConnectionLineType.SmoothStep,
            animated: true,
            style: { stroke: "red" },
          },
          eds
        )
      ),
    [setEdges]
  );
  // const getNodeId = () => Math.random();
  function onInit() {
    console.log("Logged");
  }
  // function displayCustomNamedNodeModal() {
  //   setIsModalVisible(true);
  // }
  // function handleCancel() {
  //   setIsModalVisible(false);
  // }
  // function handleOk(data) {
  //   onAdd(data.nodeName);
  //   setIsModalVisible(false);
  // }
  // const onAdd = useCallback(
  //   (data) => {
  //     const newNode = {
  //       id: String(getNodeId()),
  //       data: { label: data },
  //       position: {
  //         x: 50,
  //         y: 0,
  //       },
  //     };
  //     setNodes((nds) => nds.concat(newNode));
  //   },
  //   [setNodes]
  // );

  const nodeTypes = {
    customNode: CustomNode
  };
  

  return (
    <div style={{ height: "100vh", margin: "10px" }}>
      {/* <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <Form onFinish={handleOk} autoComplete="off" name="new node">
          <Form.Item label="Node Name" name="nodeName">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal> */}
      {/* <Button type="primary" onClick={() => displayCustomNamedNodeModal()}>
        Add Custom Name Node
      </Button> */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        elementsSelectable={false} // disable selection of elements
        nodesDraggable={false} // disable dragging of nodes
        nodesConnectable={false} // disable connecting of nodes
        nodesDeletable={false} // disable deletion of nodes
        // onConnect={onConnect}
        onInit={onInit}
        fitView
        attributionPosition="bottom-left"
        connectionLineType={ConnectionLineType.SmoothStep}
        nodeTypes={nodeTypes}
        
      />
    </div>
  );
}

export default ReactFlowRenderer;

import { useCallback } from "react";
import * as Styles from "./styles";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 200, y: 0 }, data: { label: "Start" } },
  {
    id: "2",
    position: { x: 200, y: 100 },
    data: { label: "Requirement Selection" },
  },
  {
    id: "3",
    position: { x: 200, y: 200 },
    data: { label: "Questionnaire" },
  },
  {
    id: "4",
    position: { x: 50, y: 300 },
    data: { label: "Collaborator Feedback_1" },
  },
  {
    id: "5",
    position: { x: 200, y: 300 },
    data: { label: "Collaborator Feedback_2" },
  },
  {
    id: "6",
    position: { x: 350, y: 300 },
    data: { label: "Collaborator Feedback_3" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "2", target: "3" },
  { id: "e1-4", source: "3", target: "4" },
  { id: "e1-5", source: "3", target: "5" },
  { id: "e1-6", source: "3", target: "6" },
];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <Styles.FlowContainer>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </Styles.FlowContainer>
  );
};

export default Flow;

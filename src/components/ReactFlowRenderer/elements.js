export const nodes = [
  {
    id: "1",
    type: "customNode",
    data: { name: 'MyComponent', color: '#333', employeeName: 'Seth Williams', designation: 'Managing Director' },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",
    type: "customNode",
    data: { name: 'MyComponent', color: '#333', employeeName: 'Ramon Harris', designation: 'Regional Director' },
    position: { x: 100, y: 400 },
  },
  {
    id: "3",
    type: "customNode",
    data: { name: 'MyComponent', color: '#333', employeeName: 'Dan Morgan', designation: 'Managing Director' },
    position: { x: 400, y: 400 },
  },
  {
    id: "4",
    type: "customNode",
    data: { name: 'MyComponent', color: '#333', employeeName: 'Isabella Kaif', designation: 'CFO' },
    position: { x: 100, y: 800 },
  },
  {
    id: "5",
    type: "customNode",
    data: { name: 'MyComponent', color: '#333', employeeName: 'Dave Cooper', designation: 'Regional Director' },
    position: { x: 600, y: 150 },
  },
];

export const edges = [
  { id: "e1-2", source: "1", target: "2", type: "smoothstep", animated: false },
  { id: "e1-3", source: "1", target: "3", type: "smoothstep", animated: false, },
  { id: "e1-4", source: "2", target: "4", type: "smoothstep", animated: false, },
  { id: "e1-5", source: "1", target: "5", type: "smoothstep", animated: false, },
];

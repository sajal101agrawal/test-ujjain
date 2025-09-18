// Mock data for demonstration purposes

export const crowdDensityData = [
  { zone: 'Mahakaleshwar Temple', density: 6.8, risk: 'critical', coordinates: [23.1765, 75.7685] },
  { zone: 'Kshipra Ghat', density: 4.2, risk: 'moderate', coordinates: [23.1669, 75.7694] },
  { zone: 'Ram Ghat', density: 5.9, risk: 'high', coordinates: [23.1745, 75.7732] },
  { zone: 'Main Market Area', density: 3.1, risk: 'low', coordinates: [23.1825, 75.7848] },
  { zone: 'Parking Zone A', density: 7.2, risk: 'critical', coordinates: [23.1892, 75.7901] },
  { zone: 'Food Court', density: 2.8, risk: 'low', coordinates: [23.1712, 75.7756] }
];

export const alertsData = [
  {
    id: 1,
    type: 'critical',
    zone: 'Mahakaleshwar Temple',
    message: 'Crowd density exceeding 6.8 people/m². Immediate diversion protocol activated.',
    timestamp: new Date(Date.now() - 180000),
    status: 'active'
  },
  {
    id: 2,
    type: 'warning',
    zone: 'Ram Ghat',
    message: 'Predicted density spike in 25 minutes. Preemptive rerouting recommended.',
    timestamp: new Date(Date.now() - 450000),
    status: 'acknowledged'
  },
  {
    id: 3,
    type: 'info',
    zone: 'Kshipra Ghat',
    message: 'Normal flow patterns detected. All systems operating within parameters.',
    timestamp: new Date(Date.now() - 720000),
    status: 'resolved'
  }
];

// Dynamic alert templates for random generation
export const alertTemplates = [
  { type: 'critical', messages: [
    'Critical density threshold exceeded at {zone}. Emergency protocols initiated.',
    'Immediate crowd dispersal required at {zone}. Risk level: CRITICAL.',
    'Stampede risk detected at {zone}. All units respond immediately.'
  ]},
  { type: 'warning', messages: [
    'Elevated crowd density approaching threshold at {zone}.',
    'Predicted congestion in 20-30 minutes at {zone}. Monitor closely.',
    'Traffic buildup detected at {zone}. Consider alternative routing.'
  ]},
  { type: 'info', messages: [
    'Normal crowd flow patterns at {zone}. No action required.',
    'System functioning optimally at {zone}. Density within safe limits.',
    'Routine monitoring active at {zone}. All parameters normal.'
  ]}
];

export const forecastData = {
  labels: ['Now', '15 min', '30 min', '45 min', '1 hour'],
  datasets: [
    {
      label: 'Mahakaleshwar Temple',
      data: [6.8, 7.2, 6.9, 6.4, 5.8],
      borderColor: '#ef4444',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      tension: 0.4
    },
    {
      label: 'Ram Ghat',
      data: [5.9, 6.1, 5.7, 5.2, 4.8],
      borderColor: '#f59e0b',
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      tension: 0.4
    },
    {
      label: 'Kshipra Ghat',
      data: [4.2, 4.5, 4.8, 4.3, 3.9],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4
    }
  ]
};

export const realTimeMetrics = {
  totalPilgrims: 245678,
  averageDensity: 4.7,
  activeAlerts: 3,
  divertedTraffic: 12450,
  lastUpdate: new Date()
};

export const cameraFeeds = [
  { id: 1, name: 'Temple Main Gate', status: 'active', density: 6.8, location: 'Entry Point Alpha', resolution: '4K' },
  { id: 2, name: 'Ghat Area North', status: 'active', density: 4.2, location: 'Bathing Complex', resolution: 'HD' },
  { id: 3, name: 'Market Junction', status: 'maintenance', density: 0, location: 'Commercial Zone', resolution: 'HD' },
  { id: 4, name: 'Parking Zone A', status: 'active', density: 7.2, location: 'Vehicle Management', resolution: '4K' },
  { id: 5, name: 'Emergency Route', status: 'active', density: 2.1, location: 'Exit Corridor', resolution: 'HD' },
  { id: 6, name: 'Food Court Central', status: 'active', density: 2.8, location: 'Service Area', resolution: 'HD' },
  { id: 7, name: 'VIP Enclosure', status: 'active', density: 1.4, location: 'Special Access', resolution: '4K' },
  { id: 8, name: 'Security Checkpoint', status: 'active', density: 3.6, location: 'Screening Zone', resolution: 'HD' }
];

export const trafficFlow = [
  { route: 'Route A (Main)', flow: 'heavy', capacity: 85 },
  { route: 'Route B (Alternative)', flow: 'moderate', capacity: 45 },
  { route: 'Route C (Emergency)', flow: 'light', capacity: 20 },
  { route: 'Route D (Bypass)', flow: 'moderate', capacity: 60 }
];

// Simulated real-time updates
export const generateRealTimeUpdate = () => {
  const zones = crowdDensityData.map(zone => ({
    ...zone,
    density: Math.max(0.5, zone.density + (Math.random() - 0.5) * 1.5),
    timestamp: new Date()
  }));

  return {
    zones,
    totalPilgrims: realTimeMetrics.totalPilgrims + Math.floor((Math.random() - 0.5) * 1000),
    averageDensity: zones.reduce((sum, zone) => sum + zone.density, 0) / zones.length,
    activeAlerts: Math.floor(Math.random() * 5) + 1,
    lastUpdate: new Date()
  };
};

// Extended dashboard data (dummy data for demo)

export const hotspots = [
  { id: 'HS-101', zone: 'Mahakaleshwar Temple', current: 6.8, predicted: 7.2, risk: 88, trend: 'up', inflow: 1250, outflow: 740, capacityUtil: 92 },
  { id: 'HS-102', zone: 'Kshipra Ghat', current: 4.2, predicted: 4.6, risk: 64, trend: 'up', inflow: 860, outflow: 910, capacityUtil: 71 },
  { id: 'HS-103', zone: 'Ram Ghat', current: 5.9, predicted: 6.1, risk: 79, trend: 'flat', inflow: 980, outflow: 820, capacityUtil: 84 },
  { id: 'HS-104', zone: 'Main Market Area', current: 3.1, predicted: 3.4, risk: 38, trend: 'up', inflow: 520, outflow: 610, capacityUtil: 46 },
  { id: 'HS-105', zone: 'Parking Zone A', current: 7.2, predicted: 6.8, risk: 91, trend: 'down', inflow: 410, outflow: 1020, capacityUtil: 95 }
];

export const resources = {
  police: [
    { id: 'P-01', team: 'Alpha', status: 'available', location: 'Command Center', assignedZone: null },
    { id: 'P-02', team: 'Bravo', status: 'deployed', location: 'Ram Ghat', assignedZone: 'Ram Ghat' },
    { id: 'P-03', team: 'Charlie', status: 'available', location: 'Depot', assignedZone: null }
  ],
  medical: [
    { id: 'M-01', team: 'Med-A', status: 'available', location: 'Depot', assignedZone: null },
    { id: 'M-02', team: 'Med-B', status: 'deployed', location: 'Mahakaleshwar Temple', assignedZone: 'Mahakaleshwar Temple' }
  ],
  barriers: [
    { id: 'B-01', units: 20, status: 'available', location: 'Warehouse' },
    { id: 'B-02', units: 12, status: 'deployed', location: 'Kshipra Ghat' }
  ]
};

export const auditLog = [
  { id: 5001, ts: new Date(Date.now() - 60 * 60 * 1000), actor: 'DOC-Operator-2', action: 'Approved reroute', details: 'Zone: Ram Ghat → Route B' },
  { id: 5002, ts: new Date(Date.now() - 45 * 60 * 1000), actor: 'AI Engine', action: 'Suggested holding pattern', details: 'Zone: Temple South Gate' },
  { id: 5003, ts: new Date(Date.now() - 20 * 60 * 1000), actor: 'SDRF-Lead', action: 'Deployed unit', details: 'Team: Bravo to Ram Ghat' }
];

export const systemHealth = [
  { service: 'Forecast Engine', status: 'ok', latencyMs: 420 },
  { service: 'MQTT Broker', status: 'ok', latencyMs: 35 },
  { service: 'Feature Store (Redis/Feast)', status: 'degraded', latencyMs: 120 },
  { service: 'API Gateway', status: 'ok', latencyMs: 55 },
  { service: 'WebSocket Stream', status: 'ok', latencyMs: 40 }
];

export const commsStatus = [
  { channel: 'LED Signage', successRate: 98, queue: 2, lastSendMins: 3 },
  { channel: 'SMS Gateway', successRate: 96, queue: 12, lastSendMins: 1 },
  { channel: 'IVR System', successRate: 92, queue: 5, lastSendMins: 12 },
  { channel: 'Mobile Push', successRate: 97, queue: 0, lastSendMins: 2 }
];

export const signageTemplates = [
  { id: 'T1', name: 'Reroute Advisory', text: 'Please follow Route B due to congestion at {zone}.' },
  { id: 'T2', name: 'Holding Pattern', text: 'Kindly wait at current location. Movement will resume shortly.' },
  { id: 'T3', name: 'Safety Notice', text: 'Keep left, move calmly, and follow official instructions.' }
];

export const aiSuggestions = [
  { id: 'S-01', zone: 'Mahakaleshwar Temple', type: 'reroute', impact: '-18% density in 30 min', details: 'Open Route C, close Route A for 20 min' },
  { id: 'S-02', zone: 'Parking Zone A', type: 'hold', impact: '-12% inflow in 15 min', details: 'Hold new arrivals for 10 min' }
];

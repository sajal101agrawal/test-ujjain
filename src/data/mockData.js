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
    message: 'Crowd density exceeding 6 people/m². Immediate diversion required.',
    timestamp: new Date(Date.now() - 300000),
    status: 'active'
  },
  {
    id: 2,
    type: 'warning',
    zone: 'Ram Ghat',
    message: 'High crowd buildup detected. Monitor closely.',
    timestamp: new Date(Date.now() - 900000),
    status: 'acknowledged'
  },
  {
    id: 3,
    type: 'info',
    zone: 'Parking Zone A',
    message: 'Traffic congestion reported. Alternative routes suggested.',
    timestamp: new Date(Date.now() - 1200000),
    status: 'resolved'
  }
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

export const languages = {
  en: {
    name: 'English',
    alertMessage: 'Reroute due to congestion',
    safetyTip: 'Please follow the designated path for your safety'
  },
  hi: {
    name: 'हिंदी',
    alertMessage: 'भीड़ के कारण मार्ग बदलें',
    safetyTip: 'कृपया अपनी सुरक्षा के लिए निर्धारित पथ का पालन करें'
  },
  gu: {
    name: 'ગુજરાતી',
    alertMessage: 'ભીડને કારણે માર્ગ બદલો',
    safetyTip: 'કૃપા કરીને તમારી સલામતી માટે નિયુક્ત પાથને અનુસરો'
  },
  mr: {
    name: 'मराठी',
    alertMessage: 'गर्दीमुळे मार्ग बदला',
    safetyTip: 'कृपया आपल्या सुरक्षेसाठी निर्दिष्ट मार्गाचे अनुसरण करा'
  }
};

export const cameraFeeds = [
  { id: 1, name: 'Temple Main Gate', status: 'active', density: 6.8 },
  { id: 2, name: 'Ghat Area North', status: 'active', density: 4.2 },
  { id: 3, name: 'Market Junction', status: 'maintenance', density: 0 },
  { id: 4, name: 'Parking Zone', status: 'active', density: 7.2 },
  { id: 5, name: 'Emergency Route', status: 'active', density: 2.1 },
  { id: 6, name: 'Food Court', status: 'active', density: 2.8 }
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

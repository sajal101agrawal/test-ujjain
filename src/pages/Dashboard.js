import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
  AlertTriangle, 
  Users, 
  Activity, 
  TrendingUp, 
  MapPin, 
  Clock,
  CheckCircle,
  XCircle,
  Camera,
  Wifi,
  WifiOff
} from 'lucide-react';

import HeatMap from '../components/HeatMap';
import AlertsPanel from '../components/AlertsPanel';
import LiveMetrics from '../components/LiveMetrics';
import CrowdForecast from '../components/CrowdForecast';
import { crowdDensityData, realTimeMetrics, alertsData, generateRealTimeUpdate } from '../data/mockData';

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  padding: 2rem;
`;

const DashboardHeader = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const DashboardTitle = styled.h1`
  font-size: 2rem;
  color: #1f2937;
  margin: 0;
`;

const LastUpdate = styled.div`
  display: flex;
  align-items: center;
  color: #6b7280;
  font-size: 0.875rem;
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  background: ${props => {
    switch(props.status) {
      case 'online': return '#dcfce7';
      case 'warning': return '#fef3c7';
      case 'offline': return '#fee2e2';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'online': return '#166534';
      case 'warning': return '#92400e';
      case 'offline': return '#991b1b';
      default: return '#374151';
    }
  }};
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DashboardCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const MetricCard = styled.div`
  background: ${props => {
    switch(props.type) {
      case 'critical': return 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)';
      case 'warning': return 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)';
      case 'success': return 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)';
      default: return 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)';
    }
  }};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => {
    switch(props.type) {
      case 'critical': return '#dc2626';
      case 'warning': return '#d97706';
      case 'success': return '#059669';
      default: return '#374151';
    }
  }};
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;

const LiveIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #059669;
  font-weight: 600;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

function Dashboard() {
  const [currentMetrics, setCurrentMetrics] = useState(realTimeMetrics);
  const [currentAlerts, setCurrentAlerts] = useState(alertsData);
  const [systemStatus, setSystemStatus] = useState('online');

  useEffect(() => {
    const interval = setInterval(() => {
      const update = generateRealTimeUpdate();
      setCurrentMetrics(prev => ({
        ...prev,
        ...update,
        lastUpdate: new Date()
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', { 
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getRiskType = (density) => {
    if (density >= 6) return 'critical';
    if (density >= 4) return 'warning';
    return 'success';
  };

  return (
    <DashboardContainer>
      <DashboardHeader>
        <HeaderContent>
          <div>
            <DashboardTitle>Live Operations Dashboard</DashboardTitle>
            <p style={{ color: '#6b7280', margin: '0.5rem 0 0 0' }}>
              Real-time crowd monitoring and management for Simhastha 2028
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <StatusIndicator status={systemStatus}>
              {systemStatus === 'online' ? <Wifi size={16} /> : <WifiOff size={16} />}
              System {systemStatus === 'online' ? 'Online' : 'Offline'}
            </StatusIndicator>
            <LastUpdate>
              <Clock size={16} style={{ marginRight: '0.5rem' }} />
              Last Update: {formatTime(currentMetrics.lastUpdate)}
            </LastUpdate>
          </div>
        </HeaderContent>

        <MetricsGrid>
          <MetricCard type="info">
            <MetricValue type="info">
              {currentMetrics.totalPilgrims.toLocaleString('en-IN')}
            </MetricValue>
            <MetricLabel>Total Pilgrims</MetricLabel>
          </MetricCard>

          <MetricCard type={getRiskType(currentMetrics.averageDensity)}>
            <MetricValue type={getRiskType(currentMetrics.averageDensity)}>
              {currentMetrics.averageDensity.toFixed(1)}
            </MetricValue>
            <MetricLabel>Avg Density (ppl/m²)</MetricLabel>
          </MetricCard>

          <MetricCard type={currentMetrics.activeAlerts > 2 ? 'critical' : 'warning'}>
            <MetricValue type={currentMetrics.activeAlerts > 2 ? 'critical' : 'warning'}>
              {currentMetrics.activeAlerts}
            </MetricValue>
            <MetricLabel>Active Alerts</MetricLabel>
          </MetricCard>

          <MetricCard type="success">
            <MetricValue type="success">
              {currentMetrics.divertedTraffic?.toLocaleString('en-IN') || '12,450'}
            </MetricValue>
            <MetricLabel>Traffic Diverted</MetricLabel>
          </MetricCard>
        </MetricsGrid>

        <LiveIndicator>
          LIVE - Updates every 3 seconds
        </LiveIndicator>
      </DashboardHeader>

      <DashboardGrid>
        <DashboardCard>
          <CardHeader>
            <CardTitle>
              <MapPin size={20} />
              Live Crowd Density Heat Map
            </CardTitle>
          </CardHeader>
          <HeatMap data={crowdDensityData} />
        </DashboardCard>

        <DashboardCard>
          <CardHeader>
            <CardTitle>
              <AlertTriangle size={20} />
              Active Alerts ({currentAlerts.filter(a => a.status === 'active').length})
            </CardTitle>
          </CardHeader>
          <AlertsPanel alerts={currentAlerts} />
        </DashboardCard>
      </DashboardGrid>

      <BottomGrid>
        <DashboardCard>
          <CardHeader>
            <CardTitle>
              <TrendingUp size={20} />
              Crowd Density Forecast
            </CardTitle>
          </CardHeader>
          <CrowdForecast />
        </DashboardCard>

        <DashboardCard>
          <CardHeader>
            <CardTitle>
              <Camera size={20} />
              Camera Feed Status
            </CardTitle>
          </CardHeader>
          <LiveMetrics />
        </DashboardCard>
      </BottomGrid>
    </DashboardContainer>
  );
}

export default Dashboard;

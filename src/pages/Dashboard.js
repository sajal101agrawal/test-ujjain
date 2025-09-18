import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
  AlertTriangle, 
  TrendingUp, 
  MapPin, 
  Clock,
  Camera,
  Wifi,
  WifiOff
} from 'lucide-react';

import HeatMap from '../components/HeatMap';
import AlertsPanel from '../components/AlertsPanel';
import LiveMetrics from '../components/LiveMetrics';
import CrowdForecast from '../components/CrowdForecast';
import HotspotTable from '../components/HotspotTable';
import SystemHealth from '../components/SystemHealth';
import CommsStatus from '../components/CommsStatus';
import ActionQueue from '../components/ActionQueue';
import CameraModal from '../components/CameraModal';
import { crowdDensityData, realTimeMetrics, alertsData, generateRealTimeUpdate, hotspots, systemHealth, commsStatus } from '../data/mockData';

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: var(--gray-50);
  padding: 1.5rem;
  max-width: 1800px;
  margin: 0 auto;
`;

const DashboardHeader = styled.div`
  background: var(--white);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--gray-200);
  border-left: 6px solid var(--mp-orange);
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
  font-size: 2.25rem;
  color: var(--gray-800);
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.025em;
`;

const LastUpdate = styled.div`
  display: flex;
  align-items: center;
  color: var(--gray-500);
  font-size: 0.875rem;
  font-weight: 500;
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${props => {
    switch(props.status) {
      case 'online': return 'linear-gradient(135deg, var(--success) 0%, #16a34a 100%)';
      case 'warning': return 'linear-gradient(135deg, var(--warning) 0%, #f59e0b 100%)';
      case 'offline': return 'linear-gradient(135deg, var(--error) 0%, #dc2626 100%)';
      default: return 'var(--gray-200)';
    }
  }};
  color: var(--white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

// Removed - no longer needed

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const DashboardCard = styled.div`
  background: var(--white);
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid var(--gray-200);
  transition: all 0.2s ease;
  height: fit-content;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-800);
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.025em;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const MetricCard = styled.div`
  background: var(--white);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid var(--gray-200);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => {
      switch(props.type) {
        case 'critical': return 'var(--error)';
        case 'warning': return 'var(--warning)';
        case 'success': return 'var(--success)';
        default: return 'var(--mp-orange)';
      }
    }};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
`;

const MetricValue = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${props => {
    switch(props.type) {
      case 'critical': return 'var(--error)';
      case 'warning': return 'var(--warning)';
      case 'success': return 'var(--success)';
      default: return 'var(--gray-800)';
    }
  }};
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`;

const MetricLabel = styled.div`
  font-size: 0.875rem;
  color: var(--gray-600);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.75px;
`;

const LiveIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: var(--success);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--success);
  
  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background: var(--success);
    border-radius: 50%;
    animation: pulse 2s infinite;
    box-shadow: 0 0 8px var(--success);
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

function Dashboard() {
  const [currentMetrics, setCurrentMetrics] = useState(realTimeMetrics);
  const [currentAlerts, setCurrentAlerts] = useState(alertsData);
  const [currentHotspots, setCurrentHotspots] = useState(hotspots);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const systemStatus = 'online';
  const [actionQueue, setActionQueue] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const update = generateRealTimeUpdate();
      setCurrentMetrics(prev => ({
        ...prev,
        ...update,
        lastUpdate: new Date()
      }));
      
      // Update alerts randomly
      if (Math.random() < 0.3) {
        const newAlert = {
          id: Date.now(),
          type: Math.random() < 0.3 ? 'critical' : Math.random() < 0.6 ? 'warning' : 'info',
          zone: hotspots[Math.floor(Math.random() * hotspots.length)].zone,
          message: 'Density fluctuation detected. Monitoring situation.',
          timestamp: new Date(),
          status: 'active'
        };
        setCurrentAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
      }
      
      // Update hotspots
      setCurrentHotspots(prev => prev.map(h => ({
        ...h,
        current: Math.max(0.5, h.current + (Math.random() - 0.5) * 0.8),
        predicted: Math.max(0.5, h.predicted + (Math.random() - 0.5) * 0.8),
        risk: Math.min(100, Math.max(0, h.risk + (Math.random() - 0.5) * 10)),
        inflow: Math.max(0, h.inflow + Math.floor((Math.random() - 0.5) * 100)),
        outflow: Math.max(0, h.outflow + Math.floor((Math.random() - 0.5) * 100))
      })));
    }, 5000);

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

  const draftReroute = (row) => {
    setActionQueue(prev => ([
      { action: 'Reroute Advisory', target: row.zone, details: `Suggest alternate route; current risk ${row.risk}%`, status: 'queued' },
      ...prev.slice(0, 7)
    ]));
  };

  const holdZone = (row) => {
    setActionQueue(prev => ([
      { action: 'Hold Pattern', target: row.zone, details: 'Temporary holding for 10 minutes', status: 'queued' },
      ...prev.slice(0, 7)
    ]));
  };

  const executeEmergencyProtocol = () => {
    setActionQueue(prev => ([
      { action: 'Emergency Protocol', target: 'All Zones', details: 'Mass evacuation procedures initiated', status: 'sent' },
      ...prev.slice(0, 7)
    ]));
  };

  const executeMassDiversion = () => {
    setActionQueue(prev => ([
      { action: 'Mass Diversion', target: 'High Risk Zones', details: 'Alternative routes activated for all zones >5 ppl/m²', status: 'sent' },
      ...prev.slice(0, 7)
    ]));
  };

  const broadcastAlert = () => {
    setActionQueue(prev => ([
      { action: 'Public Broadcast', target: 'All Channels', details: 'Safety announcement sent via LED, SMS, IVR', status: 'sent' },
      ...prev.slice(0, 7)
    ]));
  };

  const allClear = () => {
    setActionQueue(prev => ([
      { action: 'All Clear Signal', target: 'All Zones', details: 'Normal operations resumed - risk levels normalized', status: 'sent' },
      ...prev.slice(0, 7)
    ]));
  };

  const openCameraModal = (camera) => {
    setSelectedCamera(camera);
  };

  const closeCameraModal = () => {
    setSelectedCamera(null);
  };

  const acknowledgeAlert = (alertId) => {
    setCurrentAlerts(prev => 
      prev.map(alert => 
        alert.id === alertId 
          ? { ...alert, status: 'acknowledged' }
          : alert
      )
    );
    setActionQueue(prev => ([
      { action: 'Alert Acknowledged', target: 'Alert #' + alertId, details: 'Manual acknowledgment by operator', status: 'sent' },
      ...prev.slice(0, 7)
    ]));
  };

  const resolveAlert = (alertId) => {
    setCurrentAlerts(prev => 
      prev.map(alert => 
        alert.id === alertId 
          ? { ...alert, status: 'resolved' }
          : alert
      )
    );
    setActionQueue(prev => ([
      { action: 'Alert Resolved', target: 'Alert #' + alertId, details: 'Issue resolved by field team', status: 'sent' },
      ...prev.slice(0, 7)
    ]));
  };

  return (
    <DashboardContainer>
      <DashboardHeader>
        <HeaderContent>
          <div>
            <DashboardTitle>Live Operations Dashboard</DashboardTitle>
            <p style={{ color: 'var(--gray-600)', margin: '0.75rem 0 0 0', fontWeight: '400', fontSize: '1.1rem', lineHeight: '1.5' }}>
              Real-time crowd monitoring and management system for Simhastha 2028
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
            <MetricLabel>Total Pilgrims Present</MetricLabel>
          </MetricCard>

          <MetricCard type={getRiskType(currentMetrics.averageDensity)}>
            <MetricValue type={getRiskType(currentMetrics.averageDensity)}>
              {currentMetrics.averageDensity.toFixed(1)}
            </MetricValue>
            <MetricLabel>Avg Density (people/m²)</MetricLabel>
          </MetricCard>

          <MetricCard type={currentMetrics.activeAlerts > 2 ? 'critical' : currentMetrics.activeAlerts > 0 ? 'warning' : 'success'}>
            <MetricValue type={currentMetrics.activeAlerts > 2 ? 'critical' : currentMetrics.activeAlerts > 0 ? 'warning' : 'success'}>
              {currentMetrics.activeAlerts}
            </MetricValue>
            <MetricLabel>Active Alerts</MetricLabel>
          </MetricCard>

          <MetricCard type="success">
            <MetricValue type="success">
              {currentMetrics.divertedTraffic?.toLocaleString('en-IN') || '12,450'}
            </MetricValue>
            <MetricLabel>Traffic Successfully Diverted</MetricLabel>
          </MetricCard>

          <MetricCard type="info">
            <MetricValue type="info">
              99.2%
            </MetricValue>
            <MetricLabel>System Uptime</MetricLabel>
          </MetricCard>

         
        </MetricsGrid>

        <LiveIndicator>
          LIVE - Updates every 5 seconds
        </LiveIndicator>
      </DashboardHeader>

      {/* Main Dashboard Grid */}
      <MainGrid>
        <DashboardCard>
          <CardHeader>
            <CardTitle>
              <MapPin size={18} />
              Live Crowd Density Heat Map
            </CardTitle>
          </CardHeader>
          <HeatMap data={crowdDensityData} />
        </DashboardCard>

        <DashboardCard>
          <CardHeader>
            <CardTitle>
              <AlertTriangle size={18} />
              Active Alerts ({currentAlerts.filter(a => a.status === 'active').length})
            </CardTitle>
          </CardHeader>
          <AlertsPanel 
            alerts={currentAlerts} 
            onAcknowledge={acknowledgeAlert}
            onResolve={resolveAlert}
          />
        </DashboardCard>
      </MainGrid>

      {/* Full Width Hotspots Table */}
      <DashboardCard style={{ marginBottom: '1.5rem' }}>
        <CardHeader>
          <CardTitle>
            <TrendingUp size={18} />
            Critical Hotspots Analysis
          </CardTitle>
        </CardHeader>
        <HotspotTable data={currentHotspots} onReroute={draftReroute} onHold={holdZone} />
      </DashboardCard>

      {/* Two Column Grid - Main Features */}
      <TwoColumnGrid>
        <DashboardCard>
          <CardHeader>
            <CardTitle>
              <TrendingUp size={18} />
              Crowd Density Forecast
            </CardTitle>
          </CardHeader>
          <CrowdForecast />
        </DashboardCard>

        <DashboardCard>
          <CardHeader>
            <CardTitle>
              <Camera size={18} />
              Camera Feed Monitoring
            </CardTitle>
          </CardHeader>
          <LiveMetrics onCameraClick={openCameraModal} />
        </DashboardCard>
      </TwoColumnGrid>

      {/* System Status Grid */}
      <TwoColumnGrid>
        <DashboardCard>
          <CardHeader>
            <CardTitle>
              <Wifi size={18} />
              System Health Monitor
            </CardTitle>
          </CardHeader>
          <SystemHealth services={systemHealth} />
        </DashboardCard>

        <DashboardCard>
          <CardHeader>
            <CardTitle>
              <Wifi size={18} />
              Communications Status
            </CardTitle>
          </CardHeader>
          <CommsStatus channels={commsStatus} />
        </DashboardCard>
      </TwoColumnGrid>

      {/* Actions and Control */}
      <TwoColumnGrid>
        <DashboardCard>
          <CardHeader>
            <CardTitle>
              <AlertTriangle size={18} />
              Emergency Controls
            </CardTitle>
          </CardHeader>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
            <button
              onClick={executeEmergencyProtocol}
              style={{
                background: 'linear-gradient(135deg, var(--error) 0%, #dc2626 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '0.875rem 1rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
            >
              Emergency Protocol
            </button>
            <button
              onClick={executeMassDiversion}
              style={{
                background: 'linear-gradient(135deg, var(--warning) 0%, #f59e0b 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '0.875rem 1rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
            >
              Mass Diversion
            </button>
            <button
              onClick={broadcastAlert}
              style={{
                background: 'linear-gradient(135deg, var(--ujjain-blue) 0%, var(--ujjain-purple) 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '0.875rem 1rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
            >
              Broadcast Alert
            </button>
            <button
              onClick={allClear}
              style={{
                background: 'linear-gradient(135deg, var(--success) 0%, #16a34a 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '0.875rem 1rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
            >
              All Clear
            </button>
          </div>
        </DashboardCard>

        <DashboardCard>
          <CardHeader>
            <CardTitle>
              <Clock size={18} />
              Action Log
            </CardTitle>
          </CardHeader>
          <ActionQueue items={actionQueue.slice(0, 6)} />
        </DashboardCard>
      </TwoColumnGrid>

      {/* Camera Modal */}
      {selectedCamera && (
        <CameraModal camera={selectedCamera} onClose={closeCameraModal} />
      )}
    </DashboardContainer>
  );
}

export default Dashboard;

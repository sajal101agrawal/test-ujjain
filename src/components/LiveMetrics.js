import React from 'react';
import styled from 'styled-components';
import { 
  Camera, 
  Wifi, 
  WifiOff, 
  TrendingUp,
  Router
} from 'lucide-react';

import { cameraFeeds, trafficFlow } from '../data/mockData';

const MetricsContainer = styled.div`
  height: 400px;
  overflow-y: auto;
`;

const MetricsSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FeedGrid = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const FeedItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: ${props => props.status === 'maintenance' ? '#fef2f2' : '#f8fafc'};
  border: 1px solid ${props => props.status === 'maintenance' ? '#fecaca' : '#e2e8f0'};
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.status === 'maintenance' ? '#fee2e2' : '#f1f5f9'};
  }
`;

const FeedInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`;

const FeedIcon = styled.div`
  color: ${props => {
    switch(props.status) {
      case 'active': return '#10b981';
      case 'maintenance': return '#ef4444';
      default: return '#6b7280';
    }
  }};
`;

const FeedDetails = styled.div`
  flex: 1;
`;

const FeedName = styled.div`
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

const FeedStatus = styled.div`
  font-size: 0.75rem;
  color: ${props => {
    switch(props.status) {
      case 'active': return '#059669';
      case 'maintenance': return '#dc2626';
      default: return '#6b7280';
    }
  }};
  font-weight: 500;
`;

const DensityBadge = styled.div`
  background: ${props => {
    if (props.density >= 6) return 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)';
    if (props.density >= 4) return 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)';
    return 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)';
  }};
  color: ${props => {
    if (props.density >= 6) return '#991b1b';
    if (props.density >= 4) return '#92400e';
    return '#166534';
  }};
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  min-width: 60px;
  text-align: center;
`;

const TrafficItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const RouteInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const RouteIcon = styled.div`
  color: #6b7280;
`;

const RouteDetails = styled.div``;

const RouteName = styled.div`
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

const RouteFlow = styled.div`
  font-size: 0.75rem;
  color: ${props => {
    switch(props.flow) {
      case 'heavy': return '#dc2626';
      case 'moderate': return '#d97706';
      case 'light': return '#059669';
      default: return '#6b7280';
    }
  }};
  font-weight: 500;
  text-transform: uppercase;
`;

const CapacityBar = styled.div`
  width: 100px;
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`;

const CapacityFill = styled.div`
  height: 100%;
  width: ${props => props.capacity}%;
  background: ${props => {
    if (props.capacity >= 80) return '#ef4444';
    if (props.capacity >= 60) return '#f59e0b';
    return '#10b981';
  }};
  transition: width 0.3s ease;
`;

const CapacityText = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
  margin-left: 0.5rem;
`;

const QuickStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.color || '#1f2937'};
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
`;

function LiveMetrics({ onCameraClick }) {
  const activeCameras = cameraFeeds.filter(feed => feed.status === 'active').length;
  const maintenanceCameras = cameraFeeds.filter(feed => feed.status === 'maintenance').length;
  

  return (
    <MetricsContainer>
      <QuickStats>
        <StatItem>
          <StatValue color="#10b981">{activeCameras}</StatValue>
          <StatLabel>Active Cameras</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue color={maintenanceCameras > 0 ? "#ef4444" : "#6b7280"}>
            {maintenanceCameras}
          </StatValue>
          <StatLabel>Under Maintenance</StatLabel>
        </StatItem>
      </QuickStats>

      <MetricsSection>
        <SectionTitle>
          <Camera size={16} />
          Camera Feeds ({activeCameras}/{cameraFeeds.length} Active)
        </SectionTitle>
        
        <FeedGrid>
          {cameraFeeds.map((feed) => (
            <FeedItem 
              key={feed.id} 
              status={feed.status}
              onClick={() => onCameraClick && onCameraClick(feed)}
              style={{ cursor: 'pointer' }}
            >
              <FeedInfo>
                <FeedIcon status={feed.status}>
                  {feed.status === 'active' ? <Wifi size={16} /> : <WifiOff size={16} />}
                </FeedIcon>
                
                <FeedDetails>
                  <FeedName>{feed.name}</FeedName>
                  <FeedStatus status={feed.status}>
                    {feed.status === 'active' ? 'ONLINE' : 'MAINTENANCE'}
                  </FeedStatus>
                </FeedDetails>
              </FeedInfo>
              
              {feed.status === 'active' && (
                <DensityBadge density={feed.density}>
                  {feed.density.toFixed(1)}
                </DensityBadge>
              )}
            </FeedItem>
          ))}
        </FeedGrid>
      </MetricsSection>

      <MetricsSection>
        <SectionTitle>
          <Router size={16} />
          Traffic Flow Status
        </SectionTitle>
        
        {trafficFlow.map((route, index) => (
          <TrafficItem key={index}>
            <RouteInfo>
              <RouteIcon>
                <TrendingUp size={16} />
              </RouteIcon>
              
              <RouteDetails>
                <RouteName>{route.route}</RouteName>
                <RouteFlow flow={route.flow}>
                  {route.flow} flow
                </RouteFlow>
              </RouteDetails>
            </RouteInfo>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CapacityBar>
                <CapacityFill capacity={route.capacity} />
              </CapacityBar>
              <CapacityText>{route.capacity}%</CapacityText>
            </div>
          </TrafficItem>
        ))}
      </MetricsSection>
    </MetricsContainer>
  );
}

export default LiveMetrics;

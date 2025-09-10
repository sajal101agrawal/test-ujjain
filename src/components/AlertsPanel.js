import React from 'react';
import styled from 'styled-components';
import { 
  AlertTriangle, 
  AlertCircle, 
  Info, 
  CheckCircle, 
  Clock,
  MapPin
} from 'lucide-react';

const AlertsContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding-right: 0.5rem;
`;

const AlertItem = styled.div`
  background: ${props => {
    switch(props.type) {
      case 'critical': return 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)';
      case 'warning': return 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)';
      case 'info': return 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)';
      default: return '#f8fafc';
    }
  }};
  border: 1px solid ${props => {
    switch(props.type) {
      case 'critical': return '#fecaca';
      case 'warning': return '#fed7aa';
      case 'info': return '#93c5fd';
      default: return '#e2e8f0';
    }
  }};
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const AlertHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const AlertIcon = styled.div`
  color: ${props => {
    switch(props.type) {
      case 'critical': return '#dc2626';
      case 'warning': return '#d97706';
      case 'info': return '#2563eb';
      default: return '#6b7280';
    }
  }};
  flex-shrink: 0;
`;

const AlertContent = styled.div`
  flex: 1;
`;

const AlertZone = styled.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AlertMessage = styled.div`
  color: #374151;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
`;

const AlertMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #6b7280;
`;

const AlertTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const AlertStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.75rem;
  background: ${props => {
    switch(props.status) {
      case 'active': return '#fee2e2';
      case 'acknowledged': return '#fef3c7';
      case 'resolved': return '#dcfce7';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'active': return '#991b1b';
      case 'acknowledged': return '#92400e';
      case 'resolved': return '#166534';
      default: return '#374151';
    }
  }};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #6b7280;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

const ActionButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  background: white;
  color: #374151;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }

  &.primary {
    background: #2563eb;
    color: white;
    border-color: #2563eb;

    &:hover {
      background: #1d4ed8;
    }
  }
`;

const PriorityBadge = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => {
    switch(props.type) {
      case 'critical': return '#dc2626';
      case 'warning': return '#d97706';
      case 'info': return '#2563eb';
      default: return '#6b7280';
    }
  }};
  animation: ${props => props.type === 'critical' ? 'pulse 2s infinite' : 'none'};

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

function AlertsPanel({ alerts = [] }) {
  const getAlertIcon = (type) => {
    switch(type) {
      case 'critical':
        return <AlertTriangle size={20} />;
      case 'warning':
        return <AlertCircle size={20} />;
      case 'info':
        return <Info size={20} />;
      default:
        return <Info size={20} />;
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'resolved':
        return <CheckCircle size={12} />;
      default:
        return null;
    }
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const diffMs = now - timestamp;
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
    return timestamp.toLocaleDateString();
  };

  const handleAcknowledge = (alertId) => {
    // In a real app, this would call an API
    console.log('Acknowledged alert:', alertId);
  };

  const handleResolve = (alertId) => {
    // In a real app, this would call an API
    console.log('Resolved alert:', alertId);
  };

  if (!alerts || alerts.length === 0) {
    return (
      <EmptyState>
        <CheckCircle size={48} style={{ marginBottom: '1rem', color: '#10b981' }} />
        <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>All Clear</div>
        <div>No active alerts at this time</div>
      </EmptyState>
    );
  }

  // Sort alerts by priority and time
  const sortedAlerts = [...alerts].sort((a, b) => {
    const priorityOrder = { critical: 3, warning: 2, info: 1 };
    if (priorityOrder[a.type] !== priorityOrder[b.type]) {
      return priorityOrder[b.type] - priorityOrder[a.type];
    }
    return b.timestamp - a.timestamp;
  });

  return (
    <AlertsContainer>
      {sortedAlerts.map((alert) => (
        <AlertItem key={alert.id} type={alert.type}>
          <PriorityBadge type={alert.type} />
          
          <AlertHeader>
            <AlertIcon type={alert.type}>
              {getAlertIcon(alert.type)}
            </AlertIcon>
            
            <AlertContent>
              <AlertZone>
                <MapPin size={14} />
                {alert.zone}
              </AlertZone>
              
              <AlertMessage>
                {alert.message}
              </AlertMessage>
              
              <AlertMeta>
                <AlertTime>
                  <Clock size={12} />
                  {formatTime(alert.timestamp)}
                </AlertTime>
                
                <AlertStatus status={alert.status}>
                  {getStatusIcon(alert.status)}
                  {alert.status.toUpperCase()}
                </AlertStatus>
              </AlertMeta>

              {alert.status === 'active' && (
                <ActionButtons>
                  <ActionButton onClick={() => handleAcknowledge(alert.id)}>
                    Acknowledge
                  </ActionButton>
                  <ActionButton 
                    className="primary" 
                    onClick={() => handleResolve(alert.id)}
                  >
                    Resolve
                  </ActionButton>
                </ActionButtons>
              )}
            </AlertContent>
          </AlertHeader>
        </AlertItem>
      ))}
    </AlertsContainer>
  );
}

export default AlertsPanel;

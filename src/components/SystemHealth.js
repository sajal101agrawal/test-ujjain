import React from 'react';
import styled from 'styled-components';
import { Server } from 'lucide-react';

const Panel = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  color: #374151;
  font-weight: 600;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-top: 1px solid #f3f4f6;
`;

const Status = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${p => p.state === 'ok' ? '#166534' : p.state === 'degraded' ? '#92400e' : '#991b1b'};
  background: ${p => p.state === 'ok' ? '#dcfce7' : p.state === 'degraded' ? '#fef3c7' : '#fee2e2'};
`;

function SystemHealth({ services = [] }) {
  return (
    <Panel>
      <Header>
        <Server size={16} /> System Health
      </Header>
      {services.map((s, idx) => (
        <Item key={idx}>
          <div style={{ color: '#111827', fontWeight: 500 }}>{s.service}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ color: '#6b7280', fontSize: 12 }}>{s.latencyMs} ms</div>
            <Status state={s.status}>{s.status.toUpperCase()}</Status>
          </div>
        </Item>
      ))}
    </Panel>
  );
}

export default SystemHealth;



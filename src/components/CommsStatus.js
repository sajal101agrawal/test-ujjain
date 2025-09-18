import React from 'react';
import styled from 'styled-components';
import { Radio, Clock } from 'lucide-react';

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

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 100px 120px;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid #f3f4f6;
  align-items: center;
`;

const Meter = ({ value }) => (
  <div style={{ height: 6, background: '#e5e7eb', borderRadius: 3, overflow: 'hidden' }}>
    <div style={{ width: `${value}%`, height: '100%', background: value >= 95 ? '#10b981' : value >= 90 ? '#f59e0b' : '#ef4444' }} />
  </div>
);

function CommsStatus({ channels = [] }) {
  return (
    <Panel>
      <Header>
        <Radio size={16} /> Communications Status
      </Header>
      <Row style={{ fontSize: 12, color: '#6b7280', background: '#f9fafb' }}>
        <div>Channel</div>
        <div>Success</div>
        <div>Queue</div>
        <div>Last Send</div>
      </Row>
      {channels.map((c, idx) => (
        <Row key={idx}>
          <div style={{ color: '#111827', fontWeight: 500 }}>{c.channel}</div>
          <div>
            <Meter value={c.successRate} />
            <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>{c.successRate}%</div>
          </div>
          <div style={{ fontSize: 14, color: '#374151' }}>{c.queue}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6b7280', fontSize: 12 }}>
            <Clock size={14} /> {c.lastSendMins} min ago
          </div>
        </Row>
      ))}
    </Panel>
  );
}

export default CommsStatus;



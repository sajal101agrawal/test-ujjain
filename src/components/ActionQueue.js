import React from 'react';
import styled from 'styled-components';
import { ListChecks, Clock, CheckCircle } from 'lucide-react';

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
  display: grid;
  grid-template-columns: 1fr 120px 140px 100px;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid #f3f4f6;
  align-items: center;
`;

function ActionQueue({ items = [] }) {
  return (
    <Panel>
      <Header>
        <ListChecks size={16} /> Action Queue
      </Header>
      <Item style={{ fontSize: 12, color: '#6b7280', background: '#f9fafb' }}>
        <div>Action</div>
        <div>Target</div>
        <div>Details</div>
        <div>Status</div>
      </Item>
      {items.map((a, idx) => (
        <Item key={idx}>
          <div style={{ color: '#111827', fontWeight: 500 }}>{a.action}</div>
          <div style={{ color: '#374151' }}>{a.target}</div>
          <div style={{ color: '#6b7280', fontSize: 12 }}>{a.details}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: a.status === 'sent' ? '#059669' : '#6b7280', fontSize: 12 }}>
            {a.status === 'sent' ? <CheckCircle size={14} /> : <Clock size={14} />}
            {a.status.toUpperCase()}
          </div>
        </Item>
      ))}
    </Panel>
  );
}

export default ActionQueue;



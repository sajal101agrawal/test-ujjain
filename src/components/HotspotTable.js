import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { ArrowUpDown, TrendingUp, TrendingDown, MapPin, AlertTriangle, Filter } from 'lucide-react';

const TableWrapper = styled.div`
  overflow: hidden;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background: var(--white);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--gray-200);
  background: var(--gray-50);
`;

const SearchInput = styled.input`
  border: 1px solid var(--gray-300);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  width: 240px;
  font-size: 0.875rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--mp-orange);
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  color: var(--gray-600);
  font-weight: 600;
  border-bottom: 1px solid var(--gray-200);
  background: var(--gray-50);
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Td = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--gray-100);
  font-size: 0.875rem;
  color: var(--gray-700);
  font-weight: 500;
`;

const RiskBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${props => props.level >= 80 ? '#991b1b' : props.level >= 60 ? '#92400e' : '#065f46'};
  background: ${props => props.level >= 80 ? '#fee2e2' : props.level >= 60 ? '#fef3c7' : '#dcfce7'};
`;

const ActionBtn = styled.button`
  border: 1px solid var(--gray-300);
  background: var(--white);
  color: var(--gray-700);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover { 
    background: var(--mp-orange);
    color: var(--white);
    border-color: var(--mp-orange);
    transform: translateY(-1px);
  }
`;

const HeaderBtn = ({ children, onClick }) => (
  <button 
    onClick={onClick} 
    style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: 6, 
      color: 'var(--gray-600)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.75rem',
      fontWeight: '600'
    }}
  >
    {children}
    <ArrowUpDown size={12} />
  </button>
);

function HotspotTable({ data = [], onReroute, onHold }) {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState({ key: 'risk', dir: 'desc' });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const rows = data.filter(r => !q || r.zone.toLowerCase().includes(q) || r.id.toLowerCase().includes(q));
    return rows.sort((a, b) => {
      const dir = sortBy.dir === 'asc' ? 1 : -1;
      return (a[sortBy.key] > b[sortBy.key] ? 1 : -1) * dir;
    });
  }, [data, query, sortBy]);

  const setSort = (key) => setSortBy(s => ({ key, dir: s.key === key && s.dir === 'asc' ? 'desc' : 'asc' }));

  return (
    <TableWrapper>
      <Toolbar>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6b7280', fontSize: 12 }}>
          <Filter size={14} /> Hotspots ({filtered.length})
        </div>
        <SearchInput placeholder="Search by zone or ID" value={query} onChange={e => setQuery(e.target.value)} />
      </Toolbar>

      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Zone</Th>
            <Th><HeaderBtn onClick={() => setSort('current')}>Current</HeaderBtn></Th>
            <Th><HeaderBtn onClick={() => setSort('predicted')}>Predicted</HeaderBtn></Th>
            <Th><HeaderBtn onClick={() => setSort('risk')}>Risk</HeaderBtn></Th>
            <Th>Trend</Th>
            <Th>Flow (In/Out)</Th>
            <Th><HeaderBtn onClick={() => setSort('capacityUtil')}>Capacity</HeaderBtn></Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(row => (
            <tr key={row.id}>
              <Td>{row.id}</Td>
              <Td style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <MapPin size={14} style={{ color: '#6b7280' }} /> {row.zone}
              </Td>
              <Td>{row.current.toFixed(1)}</Td>
              <Td>{row.predicted.toFixed(1)}</Td>
              <Td>
                <RiskBadge level={row.risk}>{row.risk}</RiskBadge>
              </Td>
              <Td>
                {row.trend === 'up' ? <TrendingUp size={16} color="#d97706" /> : row.trend === 'down' ? <TrendingDown size={16} color="#059669" /> : <AlertTriangle size={16} color="#6b7280" />}
              </Td>
              <Td>{row.inflow}/{row.outflow}</Td>
              <Td>{row.capacityUtil}%</Td>
              <Td>
                <ActionBtn 
                  onClick={() => {
                    if (onReroute) {
                      onReroute(row);
                    }
                  }}
                >
                  Draft Reroute
                </ActionBtn>
                <ActionBtn 
                  onClick={() => {
                    if (onHold) {
                      onHold(row);
                    }
                  }}
                >
                  Hold Traffic
                </ActionBtn>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}

export default HotspotTable;



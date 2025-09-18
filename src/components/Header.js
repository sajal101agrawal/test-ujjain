import React from 'react';
import styled from 'styled-components';
import { Shield, Activity } from 'lucide-react';

const MPGovStripe = styled.div`
  height: 4px;
  background: var(--header-gradient);
  position: relative;
  z-index: 101;
`;

const HeaderContainer = styled.header`
  background: var(--white);
  border-bottom: 1px solid var(--gray-200);
  position: sticky;
  top: 0;
  z-index: 100;
  height: 80px;
  box-shadow: var(--header-shadow);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--gray-800);
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
`;

const LogoIcon = styled.div`
  width: 48px;
  height: 48px;
  background: var(--header-gradient);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  box-shadow: var(--card-shadow);
`;

// Removed unused navigation components

const HackathonBadge = styled.div`
  background: linear-gradient(135deg, var(--ujjain-blue) 0%, var(--ujjain-purple) 100%);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

function Header() {
  const currentTime = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <>
      <MPGovStripe />
      <HeaderContainer>
        <Nav>
          <Logo>
            <LogoIcon>
              <Shield size={20} />
            </LogoIcon>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--gray-800)' }}>CrowdSafe AI</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginTop: '-2px' }}>Operations Command Center</div>
            </div>
          </Logo>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <HackathonBadge>
              <Activity size={12} />
              Simhastha 2028
            </HackathonBadge>
            <div style={{ textAlign: 'right', color: 'var(--gray-600)', fontSize: '0.875rem' }}>
              <div style={{ fontWeight: '600' }}>Ujjain, Madhya Pradesh</div>
              <div style={{ fontSize: '0.75rem' }}>{currentTime} IST</div>
            </div>
          </div>
        </Nav>
      </HeaderContainer>
    </>
  );
}

export default Header;

import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  Smartphone, 
  Navigation, 
  AlertTriangle, 
  Shield, 
  Globe, 
  MapPin,
  Bell,
  Route,
  Users,
  Clock,
  Star,
  MessageCircle,
  Phone
} from 'lucide-react';

import { languages } from '../data/mockData';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
`;

const DemoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const FeaturesSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const PhoneDemo = styled.div`
  background: #1f2937;
  border-radius: 30px;
  padding: 1.5rem 1rem;
  width: 320px;
  height: 640px;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  @media (max-width: 480px) {
    width: 280px;
    height: 560px;
  }
`;

const PhoneScreen = styled.div`
  background: white;
  border-radius: 20px;
  height: 100%;
  padding: 1.5rem;
  overflow-y: auto;
  position: relative;
`;

const AppHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

const AppTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
`;

const LanguageSelector = styled.select`
  padding: 0.375rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  background: white;
  color: #374151;
`;

const AppContent = styled.div`
  space-y: 1rem;
`;

const AlertCard = styled.div`
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border: 1px solid #fca5a5;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const AlertIcon = styled.div`
  color: #dc2626;
  flex-shrink: 0;
  margin-top: 0.125rem;
`;

const AlertContent = styled.div`
  flex: 1;
`;

const AlertTitle = styled.div`
  font-weight: 600;
  color: #991b1b;
  margin-bottom: 0.25rem;
`;

const AlertMessage = styled.div`
  color: #7f1d1d;
  font-size: 0.875rem;
  line-height: 1.4;
`;

const RouteCard = styled.div`
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const RouteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const RouteTitle = styled.div`
  font-weight: 600;
  color: #0c4a6e;
  flex: 1;
`;

const RouteTime = styled.div`
  background: #2563eb;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const RouteDescription = styled.div`
  color: #075985;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
`;

const RouteButton = styled.button`
  width: 100%;
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #1d4ed8;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const StatCard = styled.div`
  background: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e2e8f0;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
`;

const FeatureTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

const FeatureDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

const DownloadSection = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const DownloadButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  margin: 0 0.5rem;
  transition: transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    display: block;
    margin: 0.5rem 0;
    width: 100%;
  }
`;

function MobileApp() {
  const [selectedLanguage, setSelectedLanguage] = useState('hi');

  return (
    <PageContainer>
      <ContentWrapper>
        <PageHeader>
          <Title>CrowdSafe Pilgrim App</Title>
          <Subtitle>
            Your personal safety companion for Simhastha 2028
          </Subtitle>
        </PageHeader>

        <DemoSection>
          <FeaturesSection>
            <h2 style={{ marginBottom: '2rem', color: '#1f2937' }}>Key Features</h2>
            
            <FeatureGrid>
              <FeatureCard>
                <FeatureIcon>
                  <Navigation size={28} />
                </FeatureIcon>
                <FeatureTitle>Smart Navigation</FeatureTitle>
                <FeatureDescription>
                  AI-powered route suggestions that avoid crowded areas and guide you safely to your destination.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>
                  <Bell size={28} />
                </FeatureIcon>
                <FeatureTitle>Real-time Alerts</FeatureTitle>
                <FeatureDescription>
                  Instant notifications about crowd conditions, route changes, and safety announcements.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>
                  <Globe size={28} />
                </FeatureIcon>
                <FeatureTitle>12 Languages</FeatureTitle>
                <FeatureDescription>
                  Full support for Hindi, English, Gujarati, Marathi, and 8 other regional languages.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>
                  <Shield size={28} />
                </FeatureIcon>
                <FeatureTitle>Privacy Protected</FeatureTitle>
                <FeatureDescription>
                  Anonymous location sharing ensures crowd safety without compromising your personal privacy.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>
                  <Phone size={28} />
                </FeatureIcon>
                <FeatureTitle>Emergency Services</FeatureTitle>
                <FeatureDescription>
                  One-touch access to emergency contacts, medical assistance, and security personnel.
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>
                  <Users size={28} />
                </FeatureIcon>
                <FeatureTitle>Community Updates</FeatureTitle>
                <FeatureDescription>
                  Stay informed with live updates from fellow pilgrims and official announcements.
                </FeatureDescription>
              </FeatureCard>
            </FeatureGrid>
          </FeaturesSection>

          <PhoneDemo>
            <PhoneScreen>
              <AppHeader>
                <AppTitle>CrowdSafe</AppTitle>
                <LanguageSelector 
                  value={selectedLanguage} 
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  {Object.entries(languages).map(([code, lang]) => (
                    <option key={code} value={code}>{lang.name}</option>
                  ))}
                </LanguageSelector>
              </AppHeader>

              <AppContent>
                <AlertCard>
                  <AlertIcon>
                    <AlertTriangle size={20} />
                  </AlertIcon>
                  <AlertContent>
                    <AlertTitle>Crowd Alert</AlertTitle>
                    <AlertMessage>
                      {languages[selectedLanguage]?.alertMessage}
                    </AlertMessage>
                  </AlertContent>
                </AlertCard>

                <RouteCard>
                  <RouteHeader>
                    <Route size={20} style={{ color: '#2563eb' }} />
                    <RouteTitle>Recommended Route</RouteTitle>
                    <RouteTime>12 min</RouteTime>
                  </RouteHeader>
                  <RouteDescription>
                    Via Alternative Path B - Avoiding high density zone near Temple Gate 2
                  </RouteDescription>
                  <RouteButton>Start Navigation</RouteButton>
                </RouteCard>

                <StatsGrid>
                  <StatCard>
                    <StatValue>2.3</StatValue>
                    <StatLabel>Current Density</StatLabel>
                  </StatCard>
                  <StatCard>
                    <StatValue>Safe</StatValue>
                    <StatLabel>Zone Status</StatLabel>
                  </StatCard>
                </StatsGrid>

                <div style={{ 
                  background: '#dcfce7', 
                  padding: '1rem', 
                  borderRadius: '12px',
                  border: '1px solid #bbf7d0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <Shield size={20} style={{ color: '#059669' }} />
                  <div style={{ color: '#166534', fontSize: '0.875rem', lineHeight: '1.4' }}>
                    {languages[selectedLanguage]?.safetyTip}
                  </div>
                </div>
              </AppContent>
            </PhoneScreen>
          </PhoneDemo>
        </DemoSection>

        <DownloadSection>
          <h2 style={{ marginBottom: '1rem', color: '#1f2937' }}>Download the App</h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.125rem' }}>
            Available for iOS and Android. Join thousands of pilgrims using CrowdSafe for a safer journey.
          </p>
          
          <div>
            <DownloadButton>
              <Smartphone size={20} />
              Download for iOS
            </DownloadButton>
            <DownloadButton>
              <Smartphone size={20} />
              Download for Android
            </DownloadButton>
          </div>
          
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280' }}>
              <Star size={16} style={{ color: '#f59e0b' }} />
              4.8/5 Rating
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280' }}>
              <Users size={16} />
              50K+ Downloads
            </div>
          </div>
        </DownloadSection>
      </ContentWrapper>
    </PageContainer>
  );
}

export default MobileApp;

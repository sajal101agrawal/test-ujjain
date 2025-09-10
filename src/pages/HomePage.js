import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Shield, 
  Activity, 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  Globe, 
  Brain, 
  Camera,
  Smartphone,
  BarChart3
} from 'lucide-react';

const PageContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="50" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const TeamBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  margin-bottom: 2rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: white;
  color: #667eea;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease;
  margin: 1rem 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const StatsSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #64748b;
  font-weight: 500;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #1f2937;
`;

const ProblemSection = styled.section`
  padding: 4rem 2rem;
  background: #fef2f2;
`;

const ProblemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProblemCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid #ef4444;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const SolutionSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background: #f8fafc;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
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

const TechSection = styled.section`
  padding: 4rem 2rem;
  background: #1f2937;
  color: white;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TechCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

function HomePage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <TeamBadge>
            <Activity size={20} style={{ marginRight: '0.5rem' }} />
            MANTHAN - Simhastha Tech Hackathon 2025
          </TeamBadge>
          
          <Title>CrowdSafe AI</Title>
          <Subtitle>
            AI-Driven Crowd Flow Forecasting &<br />
            Stampede Prevention Platform
          </Subtitle>
          
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            Protecting 80+ million pilgrims at Simhastha 2028 through predictive AI,
            real-time monitoring, and intelligent crowd management.
          </p>
          
          <div>
            <CTAButton to="/dashboard">
              View Live Dashboard
            </CTAButton>
            <CTAButton to="/mobile-app">
              Pilgrim Mobile App
            </CTAButton>
          </div>
        </HeroContent>
      </HeroSection>

      {/* Statistics */}
      <StatsSection>
        <Container>
          <StatsGrid>
            <StatCard>
              <StatNumber>80M+</StatNumber>
              <StatLabel>Expected Pilgrims</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>6+</StatNumber>
              <StatLabel>People/m² at Peak</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>1,000+</StatNumber>
              <StatLabel>Historical Casualties</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>30-60</StatNumber>
              <StatLabel>Minutes Prediction</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>

      {/* Problem Statement */}
      <ProblemSection>
        <Container>
          <SectionTitle style={{ color: '#dc2626' }}>The Challenge</SectionTitle>
          <ProblemGrid>
            <ProblemCard>
              <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <AlertTriangle size={24} style={{ marginRight: '0.5rem', color: '#ef4444' }} />
                Historical Stampedes
              </h3>
              <p>Past incidents in 1992, 2003, and 2013 resulted in over 1,000 casualties due to crowd mismanagement and delayed response.</p>
            </ProblemCard>
            
            <ProblemCard>
              <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <Users size={24} style={{ marginRight: '0.5rem', color: '#ef4444' }} />
                Massive Scale
              </h3>
              <p>Peak density of 5 lakh pilgrims per hour creates dangerous zones exceeding 6 people per square meter.</p>
            </ProblemCard>
            
            <ProblemCard>
              <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <Camera size={24} style={{ marginRight: '0.5rem', color: '#ef4444' }} />
                Limited Monitoring
              </h3>
              <p>Manual CCTV monitoring can track less than 5 feeds per operator, providing only reactive response capabilities.</p>
            </ProblemCard>
          </ProblemGrid>
        </Container>
      </ProblemSection>

      {/* Solution Features */}
      <SolutionSection>
        <Container>
          <SectionTitle>Our Solution</SectionTitle>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#64748b', marginBottom: '3rem' }}>
            Predict-before-prevent approach using advanced AI and real-time data fusion
          </p>
          
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>
                <Brain size={32} />
              </FeatureIcon>
              <h3 style={{ marginBottom: '1rem' }}>AI Prediction</h3>
              <p>ST-GNN + LSTM hybrid forecasts crowd density 30-60 minutes ahead with MAE < 8%</p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <Activity size={32} />
              </FeatureIcon>
              <h3 style={{ marginBottom: '1rem' }}>Real-time Monitoring</h3>
              <p>YOLOv9-based crowd detection from CCTV and drone feeds with 15 FPS processing</p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <Globe size={32} />
              </FeatureIcon>
              <h3 style={{ marginBottom: '1rem' }}>Multilingual Alerts</h3>
              <p>12-language support with IVR and SMS fallback for comprehensive pilgrim communication</p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <Smartphone size={32} />
              </FeatureIcon>
              <h3 style={{ marginBottom: '1rem' }}>Mobile Integration</h3>
              <p>Pilgrim app with anonymous GPS, route guidance, and real-time safety notifications</p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <BarChart3 size={32} />
              </FeatureIcon>
              <h3 style={{ marginBottom: '1rem' }}>Operations Dashboard</h3>
              <p>Live heat maps, alert management, and resource optimization for authorities</p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <TrendingUp size={32} />
              </FeatureIcon>
              <h3 style={{ marginBottom: '1rem' }}>Edge Computing</h3>
              <p>NVIDIA Jetson edge processing reduces bandwidth by 75% while enabling real-time decisions</p>
            </FeatureCard>
          </FeatureGrid>
        </Container>
      </SolutionSection>

      {/* Technology Stack */}
      <TechSection>
        <Container>
          <SectionTitle style={{ color: 'white' }}>Technology Architecture</SectionTitle>
          <TechGrid>
            <TechCard>
              <h4 style={{ marginBottom: '1rem' }}>Edge Computing</h4>
              <p>NVIDIA Jetson Nano with YOLOv9 at 15 FPS for real-time crowd detection</p>
            </TechCard>
            
            <TechCard>
              <h4 style={{ marginBottom: '1rem' }}>AI Models</h4>
              <p>Spatio-Temporal Graph Neural Networks combined with LSTM for accurate forecasting</p>
            </TechCard>
            
            <TechCard>
              <h4 style={{ marginBottom: '1rem' }}>Cloud Infrastructure</h4>
              <p>Azure Kubernetes with auto-scaling, tested for 2M events per minute</p>
            </TechCard>
            
            <TechCard>
              <h4 style={{ marginBottom: '1rem' }}>Data Pipeline</h4>
              <p>MQTT over 5G/Fiber with Feast feature store and Redis for real-time processing</p>
            </TechCard>
          </TechGrid>
        </Container>
      </TechSection>

      {/* Call to Action */}
      <HeroSection style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
        <HeroContent>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Experience the Future of Crowd Safety</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Join us in revolutionizing crowd management for safer pilgrimages
          </p>
          <CTAButton to="/dashboard" style={{ background: 'white', color: '#059669' }}>
            <Shield size={20} style={{ marginRight: '0.5rem', display: 'inline' }} />
            Launch Dashboard
          </CTAButton>
        </HeroContent>
      </HeroSection>
    </PageContainer>
  );
}

export default HomePage;

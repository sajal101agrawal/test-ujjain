import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Shield, 
  Activity, 
  TrendingUp, 
  Globe, 
  Brain, 
  BarChart3,
  Clock
} from 'lucide-react';

const PageContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: var(--header-gradient);
  color: var(--white);
  padding: 6rem 2rem 7rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.05;
  letter-spacing: -0.03em;

  @media (max-width: 768px) {
    font-size: 2.75rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 3rem;
  opacity: 0.95;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const GovBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.5rem 1.25rem;
  border-radius: 24px;
  margin-bottom: 2.5rem;
  font-weight: 500;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.875rem;
  letter-spacing: 0.025em;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--white);
  color: var(--mp-orange);
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  font-size: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-transform: none;
  letter-spacing: 0;

  &:hover {
    background: var(--gray-50);
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  }
`;

const StatsSection = styled.section`
  padding: 6rem 2rem;
  background: var(--gray-50);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: var(--white);
  border-radius: 16px;
  border: 1px solid var(--gray-200);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: var(--mp-orange);
    box-shadow: 0 8px 32px rgba(255, 107, 53, 0.1);
    transform: translateY(-4px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--mp-orange);
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`;

const StatLabel = styled.div`
  color: var(--gray-600);
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.4;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--gray-800);
  font-weight: 700;
  letter-spacing: -0.03em;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: var(--gray-600);
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  line-height: 1.6;
`;

const ProblemSection = styled.section`
  padding: 6rem 2rem;
  background: var(--gray-50);
`;

const ProblemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const ProblemCard = styled.div`
  background: var(--white);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid var(--gray-200);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--error);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(220, 38, 38, 0.1);
  }
`;

const SolutionSection = styled.section`
  padding: 6rem 2rem;
  background: var(--white);
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const FeatureCard = styled.div`
  background: var(--white);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid var(--gray-200);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-4px);
    border-color: var(--ujjain-blue);
    box-shadow: 0 12px 40px rgba(46, 134, 171, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 56px;
  height: 56px;
  background: var(--header-gradient);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: var(--white);
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.25);
`;

const TechSection = styled.section`
  padding: 6rem 2rem;
  background: var(--gray-900);
  color: var(--white);
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const TechCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: 16px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: var(--mp-orange);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(255, 107, 53, 0.2);
  }
`;

function HomePage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <GovBadge>
            <Activity size={16} style={{ marginRight: '0.5rem' }} />
            Ujjain Mahakumbh Hackathon 2028
          </GovBadge>
          
          <Title>CrowdSafe AI</Title>
          <Subtitle>
            AI-Driven Crowd Flow Forecasting &<br />
            Stampede Prevention Platform
          </Subtitle>
          
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '900px', margin: '0 auto 2rem', fontWeight: '400', lineHeight: '1.5' }}>
            Production-grade AI system delivering precise crowd density forecasts with {'<'}8% MAE.
            Enterprise-scale edge computing infrastructure protecting 80+ million attendees through predictive analytics.
          </p>
          
          <div style={{ marginTop: '2.5rem' }}>
            <CTAButton to="/dashboard">
              <BarChart3 size={18} />
              Launch Operations Dashboard
            </CTAButton>
          </div>
        </HeroContent>
      </HeroSection>

      {/* Statistics */}
      <StatsSection>
        <Container>
          <StatsGrid>
            <StatCard>
              <StatNumber>{'<'}8%</StatNumber>
              <StatLabel>Forecast MAE Target</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>30-60</StatNumber>
              <StatLabel>Minutes Ahead Prediction</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>{'≤'}5s</StatNumber>
              <StatLabel>End-to-End Alert Latency</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>99.5%</StatNumber>
              <StatLabel>System Availability</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>15+</StatNumber>
              <StatLabel>FPS Edge Inference</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>2M+</StatNumber>
              <StatLabel>Events/Min Capacity</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>

      {/* Problem Statement */}
      <ProblemSection>
        <Container>
          <SectionTitle style={{ color: 'var(--error)' }}>System Requirements & Challenges</SectionTitle>
          <SectionSubtitle>
            Critical operational constraints that drive our technical architecture
          </SectionSubtitle>
          <ProblemGrid>
            <ProblemCard>
              <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <TrendingUp size={24} style={{ marginRight: '0.5rem', color: 'var(--error)' }} />
                Extreme Scale Requirements
              </h3>
              <p><strong>Peak flow:</strong> 5 lakh pilgrims/hour with density >6 pax/m². System must process 2M+ events/min with horizontal autoscaling on AKS.</p>
            </ProblemCard>
            
            <ProblemCard>
              <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <Clock size={24} style={{ marginRight: '0.5rem', color: 'var(--error)' }} />
                Real-Time Performance
              </h3>
              <p><strong>Latency targets:</strong> Edge inference at 15+ FPS, forecast updates every ≤60s, end-to-end alert delivery ≤5s p95 with 99.5% availability.</p>
            </ProblemCard>
            
            <ProblemCard>
              <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <Shield size={24} style={{ marginRight: '0.5rem', color: 'var(--error)' }} />
                Privacy & Compliance
              </h3>
              <p><strong>Data protection:</strong> No PII storage, AES-256 encryption, anonymized GPS aggregation, IT Act compliance with documented DPIA.</p>
            </ProblemCard>
          </ProblemGrid>
        </Container>
      </ProblemSection>

      {/* Solution Features */}
      <SolutionSection>
        <Container>
          <SectionTitle>System Architecture & Features</SectionTitle>
          <SectionSubtitle>
            Edge-to-cloud AI pipeline with proactive risk management and multilingual response
          </SectionSubtitle>
          
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>
                <Brain size={28} />
              </FeatureIcon>
              <h3 style={{ marginBottom: '1rem', color: 'var(--gray-800)' }}>ST-GNN + LSTM Forecasting</h3>
              <p>Spatio-temporal graph neural networks predict density at +10, +20, +30, +45, +60 minute horizons with target MAE {'<'}8% versus ground-truth counts.</p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <Activity size={28} />
              </FeatureIcon>
              <h3 style={{ marginBottom: '1rem', color: 'var(--gray-800)' }}>Edge AI Inference</h3>
              <p>NVIDIA Jetson/Coral devices run YOLOv9 crowd detection at ≥15 FPS per camera, transmitting embeddings to reduce bandwidth by 75%.</p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <Globe size={28} />
              </FeatureIcon>
              <h3 style={{ marginBottom: '1rem', color: 'var(--gray-800)' }}>Risk Engine & Alerts</h3>
              <p>Advanced 0-100 risk scoring algorithm analyzing density, flow divergence, and egress capacity. Automated alert distribution via LED signage, SMS/IVR systems with multilingual support.</p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <Shield size={28} />
              </FeatureIcon>
              <h3 style={{ marginBottom: '1rem', color: 'var(--gray-800)' }}>Security & Privacy</h3>
              <p>AES-256 encryption, TLS in transit, no PII storage, anonymous data aggregation with full IT Act compliance and documented DPIA.</p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <BarChart3 size={28} />
              </FeatureIcon>
              <h3 style={{ marginBottom: '1rem', color: 'var(--gray-800)' }}>Operations Dashboard</h3>
              <p>React + Mapbox console with live heat maps, what-if simulations, alert approval/override workflows, and audit trails for post-event analysis.</p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <TrendingUp size={28} />
              </FeatureIcon>
              <h3 style={{ marginBottom: '1rem', color: 'var(--gray-800)' }}>Multi-Source Data Fusion</h3>
              <p>Unified feature store (Feast+Redis) ingesting CCTV/drone metrics, anonymous GPS pings, event schedules, and closure data via MQTT transport.</p>
            </FeatureCard>
          </FeatureGrid>
        </Container>
      </SolutionSection>

      {/* Technology Stack */}
      <TechSection>
        <Container>
          <SectionTitle style={{ color: 'white' }}>Technical Stack & Performance</SectionTitle>
          <SectionSubtitle style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Production-grade infrastructure meeting Simhastha 2028 operational requirements
          </SectionSubtitle>
          <TechGrid>
            <TechCard>
              <h4 style={{ marginBottom: '1rem', color: 'white' }}>Edge Layer</h4>
              <p>NVIDIA Jetson Nano/Xavier handling 2-4 cameras each, YOLOv9 models, 30-min local buffering with backfill on reconnect.</p>
            </TechCard>
            
            <TechCard>
              <h4 style={{ marginBottom: '1rem', color: 'white' }}>Data Bus</h4>
              <p>MQTT over TLS 1.2+ with QoS for at-least-once delivery, topic-per-zone, schema validation, 5G/Fiber backhaul.</p>
            </TechCard>
            
            <TechCard>
              <h4 style={{ marginBottom: '1rem', color: 'white' }}>Cloud Core (AKS)</h4>
              <p>Multi-AZ Azure Kubernetes with KEDA autoscaling, PyTorch models, Feast/Redis feature store, zero-downtime rolling updates.</p>
            </TechCard>
            
            <TechCard>
              <h4 style={{ marginBottom: '1rem', color: 'white' }}>Client Applications</h4>
              <p>React dashboard with WebSocket live updates, Flutter mobile app with offline tiles, LED signage REST API adapter.</p>
            </TechCard>
            
            <TechCard>
              <h4 style={{ marginBottom: '1rem', color: 'white' }}>Security & Privacy</h4>
              <p>AES-256 encryption, TLS in transit, 90-day key rotation, RBAC with immutable audit trails, no PII storage.</p>
            </TechCard>
            
            <TechCard>
              <h4 style={{ marginBottom: '1rem', color: 'white' }}>Observability</h4>
              <p>Metrics for ingestion lag, model MAE, alert acceptance, centralized logging, SLO dashboards with incident runbooks.</p>
            </TechCard>
          </TechGrid>
        </Container>
      </TechSection>

      {/* Call to Action */}
      <section style={{ 
        padding: '5rem 2rem', 
        background: 'var(--gray-900)', 
        color: 'var(--white)',
        textAlign: 'center'
      }}>
        <Container>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1.5rem', 
            fontWeight: '600',
            letterSpacing: '-0.02em'
          }}>Ready to Deploy at Scale</h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '3rem', 
            opacity: '0.9', 
            maxWidth: '600px', 
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Production-ready system meeting all Simhastha 2028 operational requirements
          </p>
          <CTAButton to="/dashboard" style={{ 
            background: 'var(--white)', 
            color: 'var(--gray-900)'
          }}>
            <BarChart3 size={20} />
            Access Operations Dashboard
          </CTAButton>
        </Container>
      </section>
    </PageContainer>
  );
}

export default HomePage;

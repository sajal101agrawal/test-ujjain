import React from 'react';
import styled from 'styled-components';
import { 
  Users, 
  Award, 
  Target, 
  TrendingUp, 
  Shield, 
  Brain,
  Zap,
  Globe,
  Phone,
  Mail,
  MapPin,
  Calendar
} from 'lucide-react';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: #fafafa;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TeamSection = styled.section`
  background: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #1f2937;
  margin-bottom: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
  font-weight: 700;
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const TeamRole = styled.p`
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const StatsSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  margin-bottom: 3rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

const ProjectSection = styled.section`
  background: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  padding: 2rem;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #667eea;
`;

const ProjectIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: white;
`;

const ProjectTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

const ContactSection = styled.section`
  background: #1f2937;
  color: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
`;

const HackathonBadge = styled.div`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  margin: 2rem auto;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

function About() {
  return (
    <PageContainer>
      <ContentWrapper>
        <HeroSection>
          <Title>About MANTHAN</Title>
          <Subtitle>
            We're building the future of crowd safety through innovative AI technology 
            for one of the world's largest religious gatherings.
          </Subtitle>
          <HackathonBadge>
            <Award size={20} />
            Simhastha Tech Hackathon 2025
          </HackathonBadge>
        </HeroSection>

        <TeamSection>
          <SectionTitle>Meet the Team</SectionTitle>
          <TeamGrid>
            <TeamCard>
              <Avatar>RY</Avatar>
              <TeamName>Rajkaran Yadav</TeamName>
              <TeamRole>Team Lead & Project Manager</TeamRole>
              <ContactInfo>
                <Phone size={16} />
                +91-9975889977
              </ContactInfo>
              <ContactInfo>
                <Mail size={16} />
                rajkaran.yadav@example.com
              </ContactInfo>
            </TeamCard>

            <TeamCard>
              <Avatar>SA</Avatar>
              <TeamName>Sajal Agrawal</TeamName>
              <TeamRole>AI Architect & Developer</TeamRole>
              <ContactInfo>
                <Phone size={16} />
                +91-8720069569
              </ContactInfo>
              <ContactInfo>
                <Mail size={16} />
                sajal.agrawal@example.com
              </ContactInfo>
            </TeamCard>
          </TeamGrid>
        </TeamSection>

        <StatsSection>
          <SectionTitle style={{ color: 'white' }}>Project Impact</SectionTitle>
          <StatsGrid>
            <StatCard>
              <StatNumber>80M+</StatNumber>
              <StatLabel>Pilgrims to Protect</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>15%</StatNumber>
              <StatLabel>Density Reduction Target</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>30-60</StatNumber>
              <StatLabel>Minutes Ahead Prediction</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>12</StatNumber>
              <StatLabel>Languages Supported</StatLabel>
            </StatCard>
          </StatsGrid>
        </StatsSection>

        <ProjectSection>
          <SectionTitle>Key Technologies</SectionTitle>
          <ProjectGrid>
            <ProjectCard>
              <ProjectIcon>
                <Brain size={24} />
              </ProjectIcon>
              <ProjectTitle>AI & Machine Learning</ProjectTitle>
              <ProjectDescription>
                Advanced ST-GNN + LSTM hybrid models for accurate crowd density forecasting 
                with less than 8% Mean Absolute Error.
              </ProjectDescription>
            </ProjectCard>

            <ProjectCard>
              <ProjectIcon>
                <Zap size={24} />
              </ProjectIcon>
              <ProjectTitle>Edge Computing</ProjectTitle>
              <ProjectDescription>
                NVIDIA Jetson-powered edge processing with YOLOv9 for real-time crowd 
                detection at 15 FPS, reducing bandwidth by 75%.
              </ProjectDescription>
            </ProjectCard>

            <ProjectCard>
              <ProjectIcon>
                <Globe size={24} />
              </ProjectIcon>
              <ProjectTitle>Cloud Infrastructure</ProjectTitle>
              <ProjectDescription>
                Scalable Azure Kubernetes deployment with auto-scaling capabilities, 
                tested for 2M+ events per minute throughput.
              </ProjectDescription>
            </ProjectCard>

            <ProjectCard>
              <ProjectIcon>
                <Shield size={24} />
              </ProjectIcon>
              <ProjectTitle>Privacy & Security</ProjectTitle>
              <ProjectDescription>
                AES-256 encryption with anonymous data collection, fully compliant 
                with NDPS and IT Act regulations.
              </ProjectDescription>
            </ProjectCard>
          </ProjectGrid>
        </ProjectSection>

        <ContactSection>
          <SectionTitle style={{ color: 'white' }}>Project Details</SectionTitle>
          <ContactGrid>
            <ContactCard>
              <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Calendar size={20} />
                Registration
              </h4>
              <p>Registration No.: TH12354</p>
              <p>Simhastha Tech Hackathon 2025</p>
              <p>Theme: Smart Mobility & Access Management</p>
            </ContactCard>

            <ContactCard>
              <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <MapPin size={20} />
                Institution
              </h4>
              <p>Lakshmi Narain College of Technology</p>
              <p>Bhopal, Madhya Pradesh</p>
              <p>Computer Science & Engineering</p>
            </ContactCard>

            <ContactCard>
              <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Target size={20} />
                Mission
              </h4>
              <p>Preventing stampedes through predictive AI</p>
              <p>Protecting 80M+ pilgrims at Simhastha 2028</p>
              <p>Building safer religious gatherings</p>
            </ContactCard>
          </ContactGrid>
        </ContactSection>
      </ContentWrapper>
    </PageContainer>
  );
}

export default About;

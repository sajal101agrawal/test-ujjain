import React from 'react';
import styled from 'styled-components';
import { 
  Award, 
  Target, 
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
  background: var(--gray-50);
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
  color: var(--navy);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--gray-500);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TeamSection = styled.section`
  background: var(--white);
  padding: 3rem 2rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--gray-200);
  border-top: 4px solid var(--saffron);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: var(--navy);
  margin-bottom: 3rem;
  font-weight: 700;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--gray-50);
  border-radius: 8px;
  border: 2px solid var(--gray-200);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--saffron);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, var(--saffron) 0%, var(--green) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: var(--white);
  font-size: 2rem;
  font-weight: 700;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 0.5rem;
`;

const TeamRole = styled.p`
  color: var(--green);
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.875rem;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--gray-500);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const StatsSection = styled.section`
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%);
  color: var(--white);
  padding: 3rem 2rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  border-top: 4px solid var(--saffron);
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
  background: var(--white);
  padding: 3rem 2rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--gray-200);
  border-top: 4px solid var(--green);
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  padding: 2rem;
  background: var(--gray-50);
  border-radius: 8px;
  border-left: 4px solid var(--saffron);
  transition: all 0.2s ease;
  border: 2px solid var(--gray-200);

  &:hover {
    border-color: var(--saffron);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--saffron) 0%, var(--green) 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ProjectTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  color: var(--gray-500);
  line-height: 1.6;
`;

const ContactSection = styled.section`
  background: var(--navy);
  color: var(--white);
  padding: 3rem 2rem;
  border-radius: 8px;
  text-align: center;
  border-top: 4px solid var(--saffron);
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
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  margin: 2rem auto;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.875rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

function About() {
  return (
    <PageContainer>
      <ContentWrapper>
        <HeroSection>
          <Title>About MANTHAN</Title>
          <Subtitle>
            We're building the future of crowd safety through innovative AI technology for one of the world's largest religious gatherings.
          </Subtitle>
          <HackathonBadge>
            <Award size={20} />
            Simhastha Tech Hackathon 2028
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

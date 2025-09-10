import React from 'react';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TrendingUp, AlertTriangle, Clock } from 'lucide-react';

import { forecastData } from '../data/mockData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ForecastContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const ChartContainer = styled.div`
  flex: 1;
  position: relative;
  margin-bottom: 1rem;
`;

const ForecastSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SummaryCard = styled.div`
  background: ${props => {
    switch(props.type) {
      case 'critical': return 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)';
      case 'warning': return 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)';
      case 'good': return 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)';
      default: return '#f8fafc';
    }
  }};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid ${props => {
    switch(props.type) {
      case 'critical': return '#fecaca';
      case 'warning': return '#fed7aa';
      case 'good': return '#bbf7d0';
      default: return '#e2e8f0';
    }
  }};
`;

const SummaryValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => {
    switch(props.type) {
      case 'critical': return '#dc2626';
      case 'warning': return '#d97706';
      case 'good': return '#059669';
      default: return '#374151';
    }
  }};
  margin-bottom: 0.25rem;
`;

const SummaryLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
`;

const PredictionInsights = styled.div`
  background: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const InsightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InsightIcon = styled.div`
  color: ${props => {
    switch(props.type) {
      case 'warning': return '#f59e0b';
      case 'info': return '#3b82f6';
      case 'success': return '#10b981';
      default: return '#6b7280';
    }
  }};
`;

function CrowdForecast() {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: 'Inter',
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1f2937',
        bodyColor: '#374151',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        titleFont: {
          family: 'Inter',
          size: 14,
          weight: 600
        },
        bodyFont: {
          family: 'Inter',
          size: 13
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: 'Inter',
            size: 11
          },
          color: '#6b7280'
        }
      },
      y: {
        beginAtZero: true,
        max: 8,
        grid: {
          color: '#f3f4f6'
        },
        ticks: {
          font: {
            family: 'Inter',
            size: 11
          },
          color: '#6b7280',
          callback: function(value) {
            return value.toFixed(1);
          }
        },
        title: {
          display: true,
          text: 'Density (people/m²)',
          font: {
            family: 'Inter',
            size: 12,
            weight: 500
          },
          color: '#374151'
        }
      }
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6
      },
      line: {
        borderWidth: 2
      }
    }
  };

  // Calculate predictions
  const getCurrentPeak = () => {
    const currentValues = forecastData.datasets.map(dataset => dataset.data[0]);
    return Math.max(...currentValues);
  };

  const getPredictedPeak = () => {
    const allFutureValues = forecastData.datasets.flatMap(dataset => dataset.data.slice(1));
    return Math.max(...allFutureValues);
  };

  const getCriticalZones = () => {
    return forecastData.datasets.filter(dataset => 
      dataset.data.some(value => value >= 6)
    ).length;
  };

  const currentPeak = getCurrentPeak();
  const predictedPeak = getPredictedPeak();
  const criticalZones = getCriticalZones();

  const getPeakType = (value) => {
    if (value >= 7) return 'critical';
    if (value >= 5) return 'warning';
    return 'good';
  };

  return (
    <ForecastContainer>
      <ForecastSummary>
        <SummaryCard type={getPeakType(currentPeak)}>
          <SummaryValue type={getPeakType(currentPeak)}>
            {currentPeak.toFixed(1)}
          </SummaryValue>
          <SummaryLabel>Current Peak</SummaryLabel>
        </SummaryCard>

        <SummaryCard type={getPeakType(predictedPeak)}>
          <SummaryValue type={getPeakType(predictedPeak)}>
            {predictedPeak.toFixed(1)}
          </SummaryValue>
          <SummaryLabel>Predicted Peak</SummaryLabel>
        </SummaryCard>

        <SummaryCard type={criticalZones > 0 ? 'critical' : 'good'}>
          <SummaryValue type={criticalZones > 0 ? 'critical' : 'good'}>
            {criticalZones}
          </SummaryValue>
          <SummaryLabel>Critical Zones</SummaryLabel>
        </SummaryCard>
      </ForecastSummary>

      <ChartContainer>
        <Line data={forecastData} options={chartOptions} />
      </ChartContainer>

      <PredictionInsights>
        <InsightItem>
          <InsightIcon type={predictedPeak > currentPeak ? 'warning' : 'success'}>
            <TrendingUp size={16} />
          </InsightIcon>
          <span>
            Density expected to {predictedPeak > currentPeak ? 'increase' : 'decrease'} by{' '}
            {Math.abs(predictedPeak - currentPeak).toFixed(1)} people/m² in next hour
          </span>
        </InsightItem>

        <InsightItem>
          <InsightIcon type={criticalZones > 0 ? 'warning' : 'info'}>
            <AlertTriangle size={16} />
          </InsightIcon>
          <span>
            {criticalZones > 0 
              ? `${criticalZones} zone(s) predicted to exceed safe density limits`
              : 'All zones expected to remain within safe density limits'
            }
          </span>
        </InsightItem>

        <InsightItem>
          <InsightIcon type="info">
            <Clock size={16} />
          </InsightIcon>
          <span>
            Predictions updated every 5 minutes using ST-GNN + LSTM model
          </span>
        </InsightItem>
      </PredictionInsights>
    </ForecastContainer>
  );
}

export default CrowdForecast;

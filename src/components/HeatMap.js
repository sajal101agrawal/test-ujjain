import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapContainer = styled.div`
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

const Legend = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-size: 0.875rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const LegendColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const ZoneInfo = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 200px;
`;

const ZoneTitle = styled.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
`;

const ZoneDetail = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
`;

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMEMxOS40MDM2IDAgMjUgNS41OTY0NCAyNSAxMi41QzI1IDE5LjQwMzYgMTkuNDAzNiAyNSAxMi41IDI1QzUuNTk2NDQgMjUgMCAxOS40MDM2IDAgMTIuNUMwIDUuNTk2NDQgNS41OTY0NCAwIDEyLjUgMFoiIGZpbGw9IiMzMzc0RkYiLz4KPHBhdGggZD0iTTEyLjUgNDFMMTcuNSAzMEg3LjVMMTIuNSA0MVoiIGZpbGw9IiMzMzc0RkYiLz4KPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjEyLjUiIHI9IjciIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=',
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMEMxOS40MDM2IDAgMjUgNS41OTY0NCAyNSAxMi41QzI1IDE5LjQwMzYgMTkuNDAzNiAyNSAxMi41IDI1QzUuNTk2NDQgMjUgMCAxOS40MDM2IDAgMTIuNUMwIDUuNTk2NDQgNS41OTY0NCAwIDEyLjUgMFoiIGZpbGw9IiMzMzc0RkYiLz4KPHBhdGggZD0iTTEyLjUgNDFMMTcuNSAzMEg3LjVMMTIuNSA0MVoiIGZpbGw9IiMzMzc0RkYiLz4KPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjEyLjUiIHI9IjciIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=',
  shadowUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGVsbGlwc2UgY3g9IjIwLjUiIGN5PSIyMC41IiByeD0iMjAuNSIgcnk9IjIwLjUiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4zIi8+Cjwvc3ZnPgo=',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function HeatMap({ data }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [selectedZone, setSelectedZone] = React.useState(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current, {
      center: [23.1765, 75.7685], // Ujjain coordinates
      zoom: 14,
      zoomControl: false
    });

    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add zoom control to top right
    L.control.zoom({
      position: 'topright'
    }).addTo(map);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current || !data) return;

    const map = mapInstanceRef.current;

    // Clear existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Circle) {
        map.removeLayer(layer);
      }
    });

    // Add markers for each zone
    data.forEach((zone) => {
      const getRiskColor = (density) => {
        if (density >= 6) return '#ef4444'; // Red - Critical
        if (density >= 4) return '#f59e0b'; // Orange - Warning
        return '#10b981'; // Green - Safe
      };

      const getRadius = (density) => {
        return Math.max(50, density * 20);
      };

      // Create circle marker for density visualization
      const circle = L.circle([zone.coordinates[0], zone.coordinates[1]], {
        color: getRiskColor(zone.density),
        fillColor: getRiskColor(zone.density),
        fillOpacity: 0.4,
        radius: getRadius(zone.density),
        weight: 2
      }).addTo(map);

      // Create marker with custom icon
      const marker = L.marker([zone.coordinates[0], zone.coordinates[1]]).addTo(map);

      // Add popup
      const popupContent = `
        <div style="font-family: Inter, sans-serif;">
          <h4 style="margin: 0 0 0.5rem 0; color: #1f2937;">${zone.zone}</h4>
          <p style="margin: 0.25rem 0; color: #6b7280; font-size: 0.875rem;">
            <strong>Density:</strong> ${zone.density.toFixed(1)} people/m²
          </p>
          <p style="margin: 0.25rem 0; color: ${getRiskColor(zone.density)}; font-size: 0.875rem;">
            <strong>Risk Level:</strong> ${zone.risk.toUpperCase()}
          </p>
        </div>
      `;

      marker.bindPopup(popupContent);
      circle.bindPopup(popupContent);

      // Add click handlers
      const clickHandler = () => {
        setSelectedZone(zone);
      };

      marker.on('click', clickHandler);
      circle.on('click', clickHandler);
    });
  }, [data]);

  const getRiskColor = (density) => {
    if (density >= 6) return '#ef4444';
    if (density >= 4) return '#f59e0b';
    return '#10b981';
  };

  return (
    <MapContainer>
      <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
      
      <Legend>
        <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>
          Risk Levels
        </div>
        <LegendItem>
          <LegendColor color="#ef4444" />
          <span>Critical (≥6 ppl/m²)</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#f59e0b" />
          <span>High (4-6 ppl/m²)</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#10b981" />
          <span>Safe ({'<'}4 ppl/m²)</span>
        </LegendItem>
      </Legend>

      {selectedZone && (
        <ZoneInfo>
          <ZoneTitle>{selectedZone.zone}</ZoneTitle>
          <ZoneDetail>
            <strong>Current Density:</strong> {selectedZone.density.toFixed(1)} people/m²
          </ZoneDetail>
          <ZoneDetail style={{ color: getRiskColor(selectedZone.density) }}>
            <strong>Risk Level:</strong> {selectedZone.risk.toUpperCase()}
          </ZoneDetail>
          <ZoneDetail>
            <strong>Coordinates:</strong> {selectedZone.coordinates[0].toFixed(4)}, {selectedZone.coordinates[1].toFixed(4)}
          </ZoneDetail>
        </ZoneInfo>
      )}
    </MapContainer>
  );
}

export default HeatMap;

import { PieChart as MuiPieChart } from '@mui/x-charts';
import { Typography, useTheme, Box } from '@mui/material';
import '../PieChart/PieChart.css';

export default function PieChart({ data }) {
  const theme = useTheme();

  const totalValue = data?.reduce((total, item) => total + item.value, 0) || 0;

  const formatLabelWithPercentage = (item) => {
    const percentage = ((item.value / totalValue) * 100).toFixed(1);
    return `${percentage}%`;
  };

  const renderCustomLegend = () => (
    <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column' }}>
      {data.map((item, index) => {
        const percentage = ((item.value / totalValue) * 100).toFixed(1);
        return (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 'normal', color: 'darkblue' }}>{item.label}</Typography>
            <Typography variant="body2" sx={{ color: '#808080' }}>
              {percentage}% ({item.value.toFixed(2)})
            </Typography>
          </Box>
        );
      })}
    </Box>
  );

  if (!data || data.length === 0) {
    return (
      <Box
        sx={{
          height: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          border: `1px dashed ${theme.palette.divider}`,
          borderRadius: theme.shape.borderRadius,
          position: 'relative',
        }}
      >
        {/* 🔒 Disabled PieChart */}
        <div className="disable-clicks">
          <MuiPieChart
            series={[{
              data: [
                { value: 20, label: 'Sample 1' },
                { value: 30, label: 'Sample 2' },
                { value: 50, label: 'Sample 3' },
              ]
            }]}
            height={200}
            slotProps={{
              legend: {
                direction: 'column',
                position: { vertical: 'middle', horizontal: 'right' },
                labelStyle: { fontSize: '12px', fontWeight: 'bold' },
              },
            }}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              borderRadius: '50%',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              position: 'absolute',
              top: '15%',
              left: '15%',
              width: '70%',
              height: '70%',
              opacity: 0.4,
            }}
          />
        </div>

        <Typography variant="body1" color="text.secondary" sx={{ position: 'absolute', top: '50%', fontWeight: 'bold' }}>
          No expense data
        </Typography>
        <Typography variant="caption" color="text.disabled" sx={{ position: 'absolute', bottom: '10px', fontStyle: 'italic' }}>
          Add expenses to see the chart
        </Typography>
      </Box>
    );
  }

  // ✅ Real chart, also wrapped in disable-clicks
  return (
    <Box>
      <div className="disable-clicks">
        <MuiPieChart
          series={[{
            data,
            innerRadius: 40,
            outerRadius: 100,
            paddingAngle: 3,
            cornerRadius: 3,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30 },
            arcLabel: formatLabelWithPercentage,
            arcLabelMinAngle: 15,
          }]}
          height={200}
          slotProps={{
            legend: {
              direction: 'column',
              position: { vertical: 'middle', horizontal: 'right' },
              labelStyle: { fontSize: '11px' },
            },
          }}
        />
      </div>

      {renderCustomLegend()}
    </Box>
  );
}

import * as React from 'react';
import { LineChart } from '@mui/x-charts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];

export const Dashboard = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      backgroundColor: 'white', // Optional: background color for the entire page
      padding: '20px'
    }}>
      <div style={{ 
        backgroundColor: '#f0f3f9', 
        borderRadius: '40px',
        marginTop: '-10px',
        marginBottom: '60px',
        height: '80%', // Adjust height as needed
        width: '80%' // Adjust width as needed
      }}>
        <LineChart
          width={800}
          height={600}
          series={[
            {
              data: uData,
              label: 'uv',
              color: 'blue',
            },
            {
              data: pData,
              label: 'pv',
              color: 'green',
            },
          ]}
          xAxis={[
            {
              data: xLabels,
              label: 'Pages',
              scaleType: 'point',
              sx: {
                line: {
                  stroke: 'black',
                },
                tick: {
                  stroke: 'black',
                  color: 'black',
                },
              },
            },
          ]}
          yAxis={[
            {
              label: 'Values',
              sx: {
                line: {
                  stroke: 'black',
                },
                tick: {
                  stroke: 'black',
                  color: 'black',
                },
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;

import styles from './Graph.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      
    },
  };

const Graph = () => {

    const data = {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'],
        datasets: [
            {
                data: [2, 1, 1, 1, 1],
                backgroundColor: [
                    '#6E62E5',
                    '#D3CFFC'
                ],
                borderColor: [
                    '#6E62E5',
                    '#D3CFFC'
                ],
                borderWidth: 1,
            }
        ]
    }

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <div className={styles.headingContainer}>
                        <h3 id={styles.unique}>
                            Applied Candidates
                        </h3>
                        <span>Last 5 days</span>
                    </div>

                    <div className={styles.graphContainer}>
                        <Bar style={{height: '100px'}} className={styles.graph} options={options} data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graph;
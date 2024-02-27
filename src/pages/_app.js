import '@/styles/globals.css'
// import '../../components-landing/styles.css';
import { ActiveItemProvider } from '../contexts/ActiveItemContext';
import { TestProvider } from '../contexts/QuestionsContent'
import { ExpertiseItemProvider } from '@/contexts/ExpertiseContext';

function MyApp({ Component, pageProps }) {
  return (
    <ExpertiseItemProvider>
      <TestProvider>
        <ActiveItemProvider>
          <Component {...pageProps} />
        </ActiveItemProvider>
      </TestProvider>
    </ExpertiseItemProvider>
  );
}

export default MyApp;
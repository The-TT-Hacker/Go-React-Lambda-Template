import { useEffect, useState } from 'react';
import './App.css';
import { AppClient, ConfiguratorRequest, ConfiguratorResponse } from './client';
import Background from './background.jpg';
import { Loading } from './components/Loading/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface PageProps {
  client: AppClient;
  setPage: React.Dispatch<React.SetStateAction<PageState>>;
  setRequest: React.Dispatch<React.SetStateAction<ConfiguratorRequest>>;
  setResponse: React.Dispatch<
    React.SetStateAction<ConfiguratorResponse | undefined>
  >;
  request: ConfiguratorRequest;
  response?: ConfiguratorResponse;
}

interface PageState {
  page: (props: PageProps) => JSX.Element;
}

export function App() {
  const [client, setClient] = useState<AppClient | undefined>();

  useEffect(() => {
    fetch('settings.json')
      .then((res) => res.json())
      .then((settings) => setClient(new AppClient({ BASE: settings.backend })));
  }, []);

  return (
    <div
      id="main"
      style={{
        overflowX: 'hidden',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <ToastContainer />
      <div className="App">
        {client ? (
          <>
            <h1>Hello World</h1>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

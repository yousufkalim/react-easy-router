import { Config } from '../Store';

function Loader() {
  const { config } = Config();

  return (
    <div
      className="loader"
      style={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={config.loader || 'https://i.imgur.com/FhvNntt.gif'} alt="loader" />
    </div>
  );
}
export default Loader;

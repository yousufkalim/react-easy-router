/**
 * Loader component
 * @author Yousuf Kalim
 */
import { Config } from '../Store';

/**
 * Loader
 * @returns {JSX.Element}
 * @constructor Loader
 */
function Loader() {
  const { config } = Config(); // Get the config from the store

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
      {/* If user has provided the custom loader then show, otherwise show default */}
      <img src={config.loader || 'https://i.imgur.com/FhvNntt.gif'} alt="loader" />
    </div>
  );
}
export default Loader;

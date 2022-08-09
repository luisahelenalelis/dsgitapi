import ContentLoader from 'react-content-loader'

const CardLoader = () => (
    <div className="card-loader-container">
      <ContentLoader
        speed={2}
        width={320}
        height={460}
        viewBox="0 0 320 460"
        backgroundColor="#ecebeb"
        foregroundColor="#d6d2d2"
      >
        <rect x="10" y="0" rx="15" ry="15" width="300" height="300" />
      </ContentLoader>
    </div>
  );
  

export default CardLoader;
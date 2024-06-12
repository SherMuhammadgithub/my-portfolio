const Loader = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <style>
        {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
    
              @keyframes fadeInOut {
                0%, 80%, 100% { opacity: 0; }
                40%, 60% { opacity: 1; }
              }
    
              .loading-container {
                display: flex;
                flex-direction: column;
                align-items: center;
              }
    
              .spinner {
                display: inline-block;
                width: 80px;
                height: 80px;
                border: 8px solid;
                border-color: #693dc3 transparent #693dc3 transparent;
                border-radius: 50%;
                animation: spin 1.2s linear infinite;
              }
    
              .loading-text {
                margin-top: 20px;
                display: flex;
                font-size: 2rem;
                color: white;
              }
    
              .loading-text span {
                opacity: 0;
                animation: fadeInOut 2s ease-in-out infinite;
              }
    
              ${[...Array(8).keys()]
                .map(
                  (i) => `
                .loading-text span:nth-child(${i + 1}) {
                  animation-delay: ${i * 0.25}s;
                }
              `
                )
                .join("")}
            `}
      </style>
      <div className="loading-container">
        <div className="spinner"></div>
        <div className="loading-text">
          {"Loading...".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;

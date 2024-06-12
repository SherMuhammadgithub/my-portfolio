const Loader = () => {
  return (
    <div>
      <style>
        {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
      </style>
      <div
        style={{
          display: "inline-block",
          width: "80px",
          height: "80px",
          border: "8px solid",
          borderColor: "#693dc3 transparent #693dc3 transparent",
          borderRadius: "50%",
          animation: "spin 1.2s linear infinite",
        }}
      ></div>
    </div>
  );
};

export default Loader;

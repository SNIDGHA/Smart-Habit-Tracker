import "./Style/LoadingSpinner.module.css";
const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="loader animate-spin absolute"></div>
            <div className="loader animate-spin absolute ml-[80px]"></div>
            <div className="loader animate-spin absolute ml-[160px]"></div>
            <div className="loader animate-spin absolute mr-[80px]"></div>
            <div className="loader animate-spin absolute mr-[160px]"></div>
        </div>
    );
};

export default LoadingSpinner;

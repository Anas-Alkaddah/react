import '../index.css';

function Loader({ loading = false, noResults = false, noResultsText = 'No Results', children }) {
    if (loading) {
        return (
            <div className="loader-wrapper">
                <div className="spinner" />
                <p>Loading...</p>
            </div>
        );
    }

    if (noResults) {
        return (
            <div className="no-results">
                <p>{noResultsText}</p>
            </div>
        );
    }

    return children || null;
}

export default Loader;



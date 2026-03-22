import './pageHeader.css';

const PageHeader = ({ title, breadcrumb }) => {
    return (
        <section className="page-header">
            <div className="page-header-bg"></div>
            <div className="page-header-container">
                <div className="page-header-content">
                    <h1 className="page-header-title">{title}</h1>
                    <div className="page-header-breadcrumb">
                        {breadcrumb.map((item, index) => (
                            <span key={index} className="breadcrumb-item">
                                {item.link ? (
                                    <a href={item.link} className="breadcrumb-link">
                                        {item.name}
                                    </a>
                                ) : (
                                    <span className="breadcrumb-current">{item.name}</span>
                                )}
                                {index < breadcrumb.length - 1 && (
                                    <span className="breadcrumb-separator">/</span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
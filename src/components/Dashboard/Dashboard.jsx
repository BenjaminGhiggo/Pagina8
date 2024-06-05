import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="top-buttons">
                <button className="small-button">a</button>
                <button className="small-button">b</button>
                <button className="small-button">c</button>
                <button className="small-button">d</button>
                <button className="small-button">e</button>
            </div>
            <div className="main-buttons">
                <button className="large-button">INTEGRAR</button>
                <button className="large-button">DERIVAR</button>
                <button className="large-button">CAMBIO DE BASE</button>
                <button className="large-button">GRAFICAR</button>
            </div>
        </div>
    );
};

export default Dashboard;

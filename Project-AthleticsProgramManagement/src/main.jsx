import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import IndexHomePage from './components/homePage/index';
import IndexSchedulePage from './components/schedulePage/index';
import IndexResultPage from './components/resultPage/index';
import Root from './routes/root';


function Main() {
    return (<Provider store={store}>
        <Router>
            <Root />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<IndexHomePage />} />
                <Route path="/competition" element={<IndexSchedulePage />} />
                <Route path="/result" element={<IndexResultPage />} />
                {/* <Route path="/" element={<App />} /> */}
            </Routes>
        </Router>
    </Provider>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));

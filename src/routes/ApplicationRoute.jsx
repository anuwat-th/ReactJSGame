import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
function ApplicationRoute() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default ApplicationRoute;
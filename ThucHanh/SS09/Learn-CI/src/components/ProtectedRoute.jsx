import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children, isLoggedIn }) {
    if(isLoggedIn) {
        return children
    }
    return <Navigate to="/login" replace />
}

export default ProtectedRoute
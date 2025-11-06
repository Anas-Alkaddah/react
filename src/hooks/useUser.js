import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';

export default function useUser() {
    return useContext(UserContext);
}



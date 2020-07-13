import { createContext } from 'react';
import appStore from '../store/AppStore';

export const storeContext = createContext(appStore);
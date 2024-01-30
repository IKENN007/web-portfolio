'use client'

import Sidebar from '../components/Sidebar'

import { Provider } from 'react-redux'

import reduxStore from '../app_redux/store'

const layout = ({ children }) => {
    return (
        <Provider store={reduxStore}>
            <div className="flex">
                <Sidebar />
                
                <main className="flex-grow p-4">
                    {children}
                </main>
            </div>
        </Provider>
    )
}

export default layout

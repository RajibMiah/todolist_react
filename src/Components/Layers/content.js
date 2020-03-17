import React from 'react'
import Sidebar from './sidebar'
import  Tasks  from '../Layers/tasks'
export default function content() {
    return (
        <div>
            <Sidebar/>
            <Tasks/>
        </div>
    )
}

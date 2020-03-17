import React from 'react';
import { firebase } from 'firebase'

export default function checkbox( {id} ) {
    const archiveTask = () =>{
      firebase
      .firestore()
      .collections('tasks')
      .doc(id)
      .update({
          archived: true,
      });
    }
    return (
        <div
         className = "checbox-holder"
         data-testid = "checkbox-action"
         onClick = {()=> archiveTask()}
        >
            <span className = "checkbox"></span>
        </div>
    )
}

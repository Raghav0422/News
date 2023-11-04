import React from 'react'

export default function Alert(props){
    const captalized =(word)=>{
        const lower= word.toLowerCase();
        return(captalized);
    }
    return(
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong> {props.alert.msg}
        </div>
    );
}


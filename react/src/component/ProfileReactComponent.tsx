import * as React from 'react';
import useInput from "./customHook/userInput";
import profileStyles from "../profile-style.module.css";

export interface IUser {
    name: string,
    email: string,
}
export interface IUserProps {
    name: string,
    email: string,
    sendToRemoteApp: (user: IUser) => void;
}


export const ProfileReactComponent: React.FC<{ 
    name: string,
    email: string,
    sendToRemoteApp: (user: IUser) => void;
  }> = (props: IUserProps) => {
    
    console.log('-- React Profile Component');
      
    const [name, setInputName, onChangeInputName] = useInput(props.name);
    const [email, setInputEmail, onChangeInputEmail] = useInput(props.email);

    const onSendAngularShell = (event) => {
        /* Set State */
        setInputName(name);
        /* Set State */
        setInputEmail(email);
        /* Send Event To Remote Application*/      
        props.sendToRemoteApp({name, email});
        event.preventDefault();
        console.log(props);
    };

    const onReset = (event) => {
        /* Set State empty */
        setInputName("");
        /* Set State empty */
        setInputEmail("");
        /* Send Event To Remote Application*/
        props.sendToRemoteApp({name: "", email: ""});
        event.preventDefault();
        console.log(props);
    };

    
    
    return (
        <div >
            <div>
                <h3>Props Name: {name}</h3>
                <p>Props Name: {email}</p>
            </div>
            
            <div className={profileStyles["react-container"]}>
                <div style={{ display: "flex", paddingTop: "10px" }}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input className={profileStyles["react-input"]} type="text" {...onChangeInputName} 
                        />
                        
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <label htmlFor="email">Email</label>
                        <input className={profileStyles["react-input"]} type="email"  {...onChangeInputEmail}
                        />
                    </div>
                </div>

                <div style={{ display: "flex", marginTop: "5px" }}>
                     <div>
                        <button className={profileStyles["react-btn"]} onClick={onSendAngularShell}>Send Shell</button>
                     </div>

                     <div style={{ marginLeft: "10px" }}>
                        <button className={profileStyles["react-btn"]} onClick={onReset}>Reset Form & Send Shell</button>
                     </div>
                </div>
            </div>
        </div>
    );

}

// export default ProfileReactComponent;
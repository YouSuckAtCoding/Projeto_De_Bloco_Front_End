import '../Login/Login.css'
import {LoginUrl} from '../../Urls/UserUrls.js'
import {id} from '../../storageKeys.js'

async function LoginCall() {
    await fetch(LoginUrl,
        {
            method: 'POST',
            body: JSON.stringify({
                email: document.getElementById('email').value,
                pass: document.getElementById('pass').value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json()
        .then((data) => {
            console.log(data);
            sessionStorage.setItem(id, data.id);
            window.location.href = "http://localhost:3000";
        })

        ).catch((err) => {
            console.log(err.message);
        })
    alert("Done");

}



export default function Login() {
    return (
        <div className='LoginContainer'>
            <div className="FormContainer">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass" placeholder="Password" />
                </div>
                <div className="col-auto">
                    <button onClick={LoginCall} className="btn btn-primary mb-3">Log in</button>
                </div>
            </div>
        </div>
    )
}
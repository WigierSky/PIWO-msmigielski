import {logInWithGoogle, useAuth, logout, logInWithGitHub} from "../Firebase/UserService";

const Login = () => {

    const user = useAuth();
    if(user)
    return (
        <div className="App">
            <h2>Hello {user.displayName}</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    return (
        <div className="App">
            <h2>Please log in</h2>
            <button onClick={logInWithGoogle}>Login with big G</button>
            <button onClick={logInWithGitHub}>Login with Github</button>
        </div>
        );
}

export default Login;

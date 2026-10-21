function Login({verifyLoggedIn}){
    return(
        <>
            <h1>Login Form</h1>
            <input type="text" className="bg-gray-400 rounded-lg p-2 m-2" placeholder="Username"></input>
            <input type="password" className="bg-gray-400 rounded-lg p-2 m-2s" placeholder="Password"></input>
            
            {/* you will need to complete extensive login handling here
            However you will be able to set user based on the parent components 
            function */}
            <button onClick={() => verifyLoggedIn("Owen Tasker")}>Login</button>
        </>
    )
}

export default Login;
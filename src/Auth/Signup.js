function Signup() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1 className="">Create account</h1>
                    <form>
                        <div className="mb-3">
                            <label className="lh-sm" for="name">Name</label>
                            <input type="text" id="name" className="form-control" placeholder="Enter your name"></input>
                        </div>
                        <div className="mb-3">
                            <label className="lh-sm" for="email">Email</label>
                            <input type="text" id="email" className="form-control" placeholder="Email"></input>
                        </div>
                        <div className="mb-3">
                            <label className="lh-sm" for="passcode">Password</label>
                            <input type="password" id="passcode" className="form-control" placeholder="Password"></input>
                        </div>
                        <div className="mb-3">
                            <label className="lh-sm" for="cpasscode">Confirm Password</label>
                            <input type="password" id="cpasscode" className="form-control" placeholder="Password"></input>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary ">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Signup;
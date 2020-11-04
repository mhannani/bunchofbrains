import React from "react";

export default ()=>{
    return(
        <form className="col-xl-10 col-sm-12 px-0 sign-up-using-email-form form-horizontal" >
            <div className="form-group">
                <div className={'row'}>
                    <div className={'col-6'}>
                        <input type="text" className="form-control margin-bottom"
                               placeholder="First name"/>
                    </div>
                    <div className={'col-6'}>
                        <input type="text" className="form-control margin-bottom"
                               placeholder="last name"/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <input type="email" className="form-control margin-bottom"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp" placeholder="Email address"/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control margin-bottom"
                       id="exampleInputPassword1"
                       placeholder="Password"/>
            </div>
            <div className="form-group requirement">
                Password must be at least 8 characters long.
            </div>
            <button type="submit" className="btn w-100 col-12">Sign Up</button>
        </form>
    )
}
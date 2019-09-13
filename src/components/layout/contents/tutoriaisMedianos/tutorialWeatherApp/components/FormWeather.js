import React from 'react';

const Form = props => {
    return(
            <form onSubmit={props.getWeather} className="formdiv">
            <div>{props.error ? error() : null}</div>
            <div className="row">
                <div className="col-md-3 offset-md-2 input1">
                    <input type="text" className="form-control" name="city" placeholder="City"/>
                </div>
                <div className="col-md-3 input2">
                    <input type="text" className="form-control" name="country" placeholder="Country"/>
                </div>
                <div className="col-md-3 mt-md-0 text-md-left">
                    <button className="btn btn-dark">Get Weather</button>
                </div>
            </div>
            </form>

    )
}

const error = () => (
    <div className="alert alert-danger mx-5" role="alert">
        Please Enter an City and Country!
    </div>
)

export default Form
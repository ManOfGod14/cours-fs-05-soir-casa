import React from "react";

export function TopChrono() {

    return (
        <>
            <div className="chrono-div">
                <div className="card">
                    <div className="card-header">
                        <h1>
                            <i className="bi bi-hourglass-top"></i>
                                Top Chrono
                            <i className="bi bi-hourglass-split"></i>
                        </h1>
                    </div>
            
                    <div className="card-body">
                        <div className="temps">
                            <span id="chronoId">00 : 00 : 00 : 00</span>
                        </div>
                    </div>
            
                    <div className="card-footer">
                        <button id="startId" className="btn btn-outline-success">
                            <i className="bi bi-skip-start-fill"></i> Start
                        </button>

                        <button id="stopId" className="btn btn-outline-warning">
                            <i className="bi bi-stop-fill"></i> Stop
                        </button>

                        <button id="resetId" className="btn btn-outline-danger">
                            <i className="bi bi-arrow-clockwise"></i> Reset
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
import React, { useState } from "react";

import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
    const [show, setShow] = useState(true);

    return (
        <div style={{ padding: "70px" }}>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button className="btn btn-primary" onClick={() => setShow(!show)}>
                Show hide
            </button>
        </div>
    );
};

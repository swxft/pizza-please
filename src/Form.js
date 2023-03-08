import React from "react";
import { useState } from "react";
import './Form.css';

function Form() {
    const [name, setName] = useState("")
    const [peperoni, setPeperoni] = useState(false)
    const [cheese, setCheese] = useState(false)
    const [sausage, setSausage] = useState(false)
    return (
        <>
            <div className="order-form">
                <h1>Customize Your Pizza 🍕</h1>
                <form className="Form">
                    <label>
                        Name for your order: 
                        <input className="name-input" type="text" value={name} onChange={e => setName(e.target.value)} />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={peperoni}
                            onChange={() => setPeperoni(!peperoni)}
                        />
                        Peperoni
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={cheese}
                            onChange={() => setCheese(!cheese)}
                        />
                        Cheese
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={sausage}
                            onChange={() => setSausage(!sausage)}
                        />
                        Sausage
                    </label>
                </form>
            </div>
            <div>
                <h2> {name}'s Pie </h2>
                <h3>
                    {peperoni && <div>Pepperoni</div>}
                    {cheese && <div>Cheese</div>}
                    {sausage && <div>Sausage</div>}
                </h3>
            </div>
        </>
    );
}

export default Form
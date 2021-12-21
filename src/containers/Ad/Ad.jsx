import React from 'react';

import './Ad.css';

const Ad = () => (
    <div className="ad__section section__padding mt-5 mb-5 px-5">
        <h3>Skapa annons</h3>
        <p>Annonsera enkelt med oss...</p>
        <div className='container'>
            <form>
                <row>
                    <group>
                        <label>Typ av kontor</label>
                        <select placeholder='Välj typ av lokal'>
                            <option>Kontorslokal</option>
                            <option>Samlingslokal</option>
                            <option>Danslokal</option>
                        </select>
                        <label>Adress</label>
                        <input type="address" placeholder="t.ex. Hamngatan 10" />
                        <label>Kommun</label>
                        <input type="text" placeholder="t.ex. Stockholm" />
                    </group>
                </row>
            </form>
            <form>
                <row>
                    <group>
                        <label>Beskrivning</label>
                        <input type="description" placeholder="Här kan du beskriva t.ex. kommunikationer, möblering, osv.." />
                    </group>
                </row>
            </form>
            <form>
                <row>
                    <group>
                        <label>Email</label>
                        <input type="e-mail" placeholder="t.ex. Johan@example.com" />
                        <label>Lösenord</label>
                        <input type="password" placeholder="Ange ditt lösenord" />
                        <button type="submit"> Fortsätt!</button>
                    </group>
                </row>
            </form>
        </div>
    </div>
);

export default Ad;
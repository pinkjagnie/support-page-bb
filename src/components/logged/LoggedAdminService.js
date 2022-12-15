import React from "react";

import "./loggedAdmin.css";

const LoggedAdminService = () => {

  return(
    <div className="loggedAdminServiceBox">
      <h3>Zmień stan usługi</h3>

      <div className="loggedAdminSingleService">
        <form>
          <label>Serwer baza danych:</label>
          <select> 
          {/* <select ref={ref} */}
            <option value='ok'>OK</option>
            <option value='heavy-traffic'>Duży ruch</option>
            <option value='scheduled-maintenance'>Planowana konserwacja</option>
            <option value='breakdown'>Awaria</option>
            <option value='maintenance'>Konserwacja</option>
          </select>
          <button type='submit'>Zatwierdź</button>
        </form>
      </div>

      <hr/>
      <div className="loggedAdminSingleService">
        <form>
          <label>Serwer Oxygen:</label>
          <select> 
          {/* <select ref={ref} */}
            <option value='ok'>OK</option>
            <option value='heavy-traffic'>Duży ruch</option>
            <option value='scheduled-maintenance'>Planowana konserwacja</option>
            <option value='breakdown'>Awaria</option>
            <option value='maintenance'>Konserwacja</option>
          </select>
          <button type='submit'>Zatwierdź</button>
        </form>
      </div>

      <hr/>
      <div className="loggedAdminSingleService">
        <form>
          <label>Serwer Hydrogen:</label>
          <select> 
          {/* <select ref={ref} */}
            <option value='ok'>OK</option>
            <option value='heavy-traffic'>Duży ruch</option>
            <option value='scheduled-maintenance'>Planowana konserwacja</option>
            <option value='breakdown'>Awaria</option>
            <option value='maintenance'>Konserwacja</option>
          </select>
          <button type='submit'>Zatwierdź</button>
        </form>
      </div>
      
      <hr/>
      <div className="loggedAdminSingleService">
        <form>
          <label>Serwer Backup:</label>
          <select> 
          {/* <select ref={ref} */}
            <option value='ok'>OK</option>
            <option value='heavy-traffic'>Duży ruch</option>
            <option value='scheduled-maintenance'>Planowana konserwacja</option>
            <option value='breakdown'>Awaria</option>
            <option value='maintenance'>Konserwacja</option>
          </select>
          <button type='submit'>Zatwierdź</button>
        </form>
      </div>

      <hr/>
      <div className="loggedAdminSingleService">
        <form>
          <label>Serwer CCTV:</label>
          <select> 
          {/* <select ref={ref} */}
            <option value='ok'>OK</option>
            <option value='heavy-traffic'>Duży ruch</option>
            <option value='scheduled-maintenance'>Planowana konserwacja</option>
            <option value='breakdown'>Awaria</option>
            <option value='maintenance'>Konserwacja</option>
          </select>
          <button type='submit'>Zatwierdź</button>
        </form>
      </div>

      <hr/>
      <div className="loggedAdminSingleService">
        <form>
          <label>Usługi klient biznesowy:</label>
          <select> 
          {/* <select ref={ref} */}
            <option value='ok'>OK</option>
            <option value='heavy-traffic'>Duży ruch</option>
            <option value='scheduled-maintenance'>Planowana konserwacja</option>
            <option value='breakdown'>Awaria</option>
            <option value='maintenance'>Konserwacja</option>
          </select>
          <button type='submit'>Zatwierdź</button>
        </form>
      </div>

      <hr/>
      <div className="loggedAdminSingleService">
        <form>
          <label>Usługi klient indywidualny:</label>
          <select> 
          {/* <select ref={ref} */}
            <option value='ok'>OK</option>
            <option value='heavy-traffic'>Duży ruch</option>
            <option value='scheduled-maintenance'>Planowana konserwacja</option>
            <option value='breakdown'>Awaria</option>
            <option value='maintenance'>Konserwacja</option>
          </select>
          <button type='submit'>Zatwierdź</button>
        </form>
      </div>
    </div>
  )
};

export default LoggedAdminService;
import HeadzLayout from './layouts/HeadzLayout/HeadzLayout'
import { Set, Router, Route, Private } from '@redwoodjs/router'
import Fields5sLayout from 'src/layouts/Fields5sLayout'
import Fields4sLayout from 'src/layouts/Fields4sLayout'
import Fields3sLayout from 'src/layouts/Fields3sLayout'
import Fields2sLayout from 'src/layouts/Fields2sLayout'
import Fields1sLayout from 'src/layouts/Fields1sLayout'
import AppointmentsLayout from 'src/layouts/AppointmentsLayout'
import ContactsLayout from 'src/layouts/ContactsLayout'
import VaultsLayout from 'src/layouts/VaultsLayout'
import { useState } from 'react'
import { UserContext } from './UserContext'

const sum = Math.floor(Math.random() * 9999999)

const Routes = () => {
  const [user, setUser] = useState('test')
  const [cust, setCust] = useState('test')
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser, cust, setCust }}>
        <Set wrap={HeadzLayout}>
          <Private unauthenticated="login">
            <Set wrap={Fields5sLayout}>
              <Route path="/fields5s/new" page={Fields5NewFields5Page} name="newFields5" />
              <Route path="/fields5s/{id:Int}/edit" page={Fields5EditFields5Page} name="editFields5" />
              <Route path="/fields5s/{id:Int}" page={Fields5Fields5Page} name="fields5" />
              <Route path="/fields5s" page={Fields5Fields5sPage} name="fields5S" />
            </Set>
            <Set wrap={Fields4sLayout}>
              <Route path="/fields4s/new" page={Fields4NewFields4Page} name="newFields4" />
              <Route path="/fields4s/{id:Int}/edit" page={Fields4EditFields4Page} name="editFields4" />
              <Route path="/fields4s/{id:Int}" page={Fields4Fields4Page} name="fields4" />
              <Route path="/fields4s" page={Fields4Fields4sPage} name="fields4S" />
            </Set>
            <Set wrap={Fields3sLayout}>
              <Route path="/fields3s/new" page={Fields3NewFields3Page} name="newFields3" />
              <Route path="/fields3s/{id:Int}/edit" page={Fields3EditFields3Page} name="editFields3" />
              <Route path="/fields3s/{id:Int}" page={Fields3Fields3Page} name="fields3" />
              <Route path="/fields3s" page={Fields3Fields3sPage} name="fields3S" />
            </Set>
            <Set wrap={Fields2sLayout}>
              <Route path="/fields2s/new" page={Fields2NewFields2Page} name="newFields2" />
              <Route path="/fields2s/{id:Int}/edit" page={Fields2EditFields2Page} name="editFields2" />
              <Route path="/fields2s/{id:Int}" page={Fields2Fields2Page} name="fields2" />
              <Route path="/fields2s" page={Fields2Fields2sPage} name="fields2S" />
            </Set>
            <Set wrap={Fields1sLayout}>
              <Route path="/fields1s/new" page={Fields1NewFields1Page} name="newFields1" />
              <Route path="/fields1s/{id:Int}/edit" page={Fields1EditFields1Page} name="editFields1" />
              <Route path="/fields1s/{id:Int}" page={Fields1Fields1Page} name="fields1" />
              <Route path="/fieldtest" page={Fields1Fields1sPage} name="fields1S" />
            </Set>
            <Set wrap={AppointmentsLayout}>
              <Route path="/appointments/new" page={AppointmentNewAppointmentPage} name="newAppointment" />
              <Route path="/appointments/{id:Int}/edit" page={AppointmentEditAppointmentPage} name="editAppointment" />
              <Route path="/appointments/{id:Int}" page={AppointmentAppointmentPage} name="appointment" />
              <Route path="/appointments" page={AppointmentAppointmentsPage} name="appointments" />
            </Set>
            <Set wrap={ContactsLayout}>
              <Route path={`/contacts/${sum}/new`} page={ContactNewContactPage} name="newContact" />
              <Route path={`/contacts/${sum}/{id:Int}/edit`} page={ContactEditContactPage} name="editContact" />
              <Route path={`/contacts/${sum}/{id:Int}`} page={ContactContactPage} name="contact" />
              <Route path="/contacts" page={ContactContactsPage} name="contacts" />
            </Set>
            <Set wrap={VaultsLayout}>
              <Route path={`/vaults/${sum}/new`} page={VaultNewVaultPage} name="newVault" />
              <Route path={`/vaults/${sum}/{id:Int}/edit`} page={VaultEditVaultPage} name="editVault" />
              <Route path={`/vaults/${sum}/{id:Int}`} page={VaultVaultPage} name="vault" />
              <Route path="/vaults" page={VaultVaultsPage} name="vaults" />
            </Set>{' '}
          </Private>
          <Route path="/login" page={LoginPage} name="login" />
          <Route path="/signup" page={SignupPage} name="signup" />
          <Route path="/" page={HomepagePage} name="homepage" />
          <Route notfound page={NotFoundPage} />
        </Set>
      </UserContext.Provider>
    </Router>
  )
}

export default Routes

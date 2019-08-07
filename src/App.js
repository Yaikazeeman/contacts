import React, {Component} from 'react';
import './App.css';
import contactsData from './contactsData.json';
import Contacts from './Contacts';

class App extends Component {

  state = {
    contactsData: contactsData,
    searchContact: [...contactsData].splice(0, 5)
  }

  remove = (index) => {
    let contactArrCopy = this.state.searchContact.filter((contact, i) => i !== index);
    this.setState({searchContact: contactArrCopy})
  }

  search = (event) => {
    let searchTerm = event.target.value;

    let searchContact = this.state.contactsData.filter((contact) => (
      contact.name.indexOf(searchTerm) >= 0
    ));
    this.setState({searchContact: searchContact});
  }

  AddRandomContact = () => {
    let AddContact = contactsData[Math.floor(Math.random()*contactsData.length)];
    let newContactArr = this.state.searchContact.concat([AddContact]);
    this.setState({searchContact: newContactArr})
  }

  sort = () => {
    let sortContacts = [...this.state.searchContact]
    sortContacts.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1);
    this.setState({searchContact: sortContacts})
  }

  render(){
    let contactsArr = this.state.searchContact.map((contactsData, index) => {
      return(
        <Contacts 
        removeContact={ this.remove}
        index={index}
        name={contactsData.name}
        pictureUrl={contactsData.pictureUrl}
        popularity={contactsData.popularity}
        />
      )
    })

    return(
      <div>
        <div className="searchbardiv">
          <input placeholder="Search" onChange={this.search}/>
        </div>
        <div className="buttonsDiv">
          <button onClick={this.AddRandomContact}>Add random Contact</button>
          <button onClick={this.sort}>Sort by popularity</button>
        </div>
        <div className="contactsContainer">
          <table>
            <tr>
              <th>Photo</th>
              <th>name</th>
              <th>popularity</th>
            </tr>
            {contactsArr}
          </table>
        </div>
      </div>
    )
  }

}


export default App;

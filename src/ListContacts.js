import React from 'react';

// Functional Conponent holds no state, sate is passed thrugh props 
function ListContacts(props){
    return(
        <ol className='contact-list'>
        {props.contacts.map((contact) =>(
                <li key={contact.id} className='contact-list-item'>
                    
                    {/* Avatar */}
                    <div 
                    className ='contact-avatar'
                    style={{
                        backgroundImage: `url(${contact.avatarURL})`
                    }}>
                    </div>

                    {/* Contact Details */}
                    <div className ='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.handle}</p>
                    </div>

                    {/* Remove Button */}
                    <button className = 'remove-button'>
                        rem
                    </button>
                
                </li>
            ))}
        </ol>
    )
};

// Class Function > Holds State with this
// class ListContacts extends React.Component {

//     render(){
//         console.log('Props', this.props)
//         return(
//             <ol className='contact-list'>
//                 {this.props.contacts.map((contact) =>(
//                         <li key={contact.id} className='contact-list-item'>
                            
//                             {/* Avatar */}
//                             <div 
//                             className ='contact-avatar'
//                             style={{
//                                 backgroundImage: `url(${contact.avatarURL})`
//                             }}>
//                             </div>

//                             {/* Contact Details */}
//                             <div className ='contact-details'>
//                             <p>{contact.name}</p>
//                             <p>{contact.handle}</p>
//                             </div>

//                             {/* Remove Button */}
//                             <button className = 'remove-button'>
//                                 rem
//                             </button>
                        
//                         </li>
//                 ))}
//             </ol>
//         )
//     }
// }

export default ListContacts;
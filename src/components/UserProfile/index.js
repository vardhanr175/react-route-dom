import './style.css'

const ContactItem = (props) => {
    const {contactList} = props;
    const {name,mobileNo,isFavourite} = contactList;
    const starImg = isFavourite ? 'fav':'no-fav';
   return (
            <li>
                <div className='table-cell name-column'>
                    <p>{name}</p>
                </div>
                <hr className='separator' />
                <div className='table-cell mobile-no-column'>
                    <p className='mobile-no-value'>{mobileNo}</p>
                    <button type='button' className='favourite-icon-container'>
                        <p className='favourite-icon'>{starImg}</p>
                    </button>
                </div>
            </li>
    )
}
export default ContactItem
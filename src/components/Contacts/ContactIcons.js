import React from 'react'
import {ContactsIconsWrapper, Icon} from './ContactsIcons.element'
import {useSelector} from 'react-redux'
import {selectContact} from '../../features/contactsSlice'

const ContactIcons = () => {

    const contact = useSelector(selectContact)

    return (
        <ContactsIconsWrapper>
            {contact.map(s => (
                <a href={s.link} key={s.label}>
                    <Icon>
                        {s.icon}
                    </Icon>
                </a>
            ))}
        </ContactsIconsWrapper>
    )
}

export default ContactIcons

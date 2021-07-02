import React from 'react'
import {ContactsIconsWrapper, Icon} from './ContactsIcons.element'
import {useSelector} from 'react-redux'
import {selectContact} from '../../features/contactsSlice'

const ContactIcons = () => {

    const contact = useSelector(selectContact)

    return (
        <ContactsIconsWrapper>
            {contact.map(s => (
                <li key={s.label}>
                    <a href={s.link}>
                        <Icon>
                            {s.icon}
                        </Icon>
                    </a>
                </li>
            ))}
        </ContactsIconsWrapper>
    )
}

export default ContactIcons

import React from 'react'
import {data} from '../../redux/data/contact'
import {ContactsIconsWrapper, Icon} from "./ContactsIcons.element";

const ContactIcons = () => (
    <ContactsIconsWrapper>
        {data.map((s) => (
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

export default ContactIcons

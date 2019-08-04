import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import TopNav from './TopNav'

const tabs = [
    {
        label: 'Dashboard',
        value: 'dashboard',
    },
    {
        label: 'Team',
        value: 'team',
    },
    {
        label: 'Projects',
        value: 'projects',
    },
    {
        label: 'Company',
        value: 'company',
    }
]

const menuItems = [
    {
        value: 'profile',
        label: 'MY PROFILE',
    },
    {
        value: 'myProjects',
        label: 'MY PROJECTS',
    },
    {
        value: 'notifications',
        label: 'NOTIFICATIONS',
        meta: 12
    },
    {
        value: 'tasks',
        label: 'TASKS',
        meta: 5
    },
    {
        value: 'help',
        label: 'HELP',
    },
    {
        value: 'logout',
        label: 'LOGOUT',
    }
]


const NavExample = () => {
    const [activeTab, setActiveTab] = useState('')
    const onSelectTab = (tab) => {
        console.log('Select action =>', tab)
        setActiveTab(tab)
    }

    return <TopNav
        companyLogo={'Company Name'}
        tabs={tabs}
        menuItems={menuItems}
        activeTab={activeTab}
        onSelect={onSelectTab} />
}

storiesOf('Top Nav', module)
    .add('default', () => (
        <NavExample />
    ));


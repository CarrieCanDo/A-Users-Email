let appData = {
    name: 'Gmail',
    mailboxes: [
        {name:'inbox',
            emailType: ['primary', 'promotions', 'social']
        },
        {name:'starred',
            emailType: ['from', 'any time', 'has attachment', 'to']
        }, 
        {name:'sent', 
            emailType:['any time', 'has attachment', 'to']
        }],

    status: {
        automatic: true,
        doNotDisturb: false,
        setAsAwawy: false,
    },

    contacts: [
        {name:'Erin', lastMessage: "I won't/' be in class today"},
        {name:'Matt', lastMessage: "Today, we are going to rock it!"}
    ],

};

let mailboxNames = appData.mailboxes.map(mailbox => mailbox.name);

let inboxEmails = appData.mailboxes.find(mailbox => mailbox.name === 'inbox').emails;

let secondEmailText = inboxEmails.length > 1 ? inboxEmails[1].text : 'No second email found';

let sentMailbox = appData.mailboxes.find(mailbox => mailbox.name === 'sent');
if (sentMailbox && sentMailbox.emails.length > 0) {
    sentMailbox.emails[0].status = 'sent';
}

let draftsMailbox = appData.mailboxes.find(mailbox => mailbox.name === 'drafts');
if (draftsMailbox) {
    draftsMailbox.emails.push({ id: Date.now(), text: 'New draft email text', status: 'draft' });
}

console.log(mailboxNames);
console.log(inboxEmails);
console.log(secondEmailText);


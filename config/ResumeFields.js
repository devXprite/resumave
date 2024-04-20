export default {
    basic: {
        name: 'Basic',
        fields: [
            { name: 'name', label: 'Full Name', required: true},
            { name: 'title', label: 'Your Job Title' },
            { name: 'email', label: 'Email', type: 'email' },
            { name: 'phone', label: 'Phone', type: 'tel' },
            { name: 'address', label: 'Address' },
            { name: 'linkedin', label: 'Linked' },
            { name: 'github', label: 'Github' },
            { name: 'website', label: 'Website' },
            { name: 'summary', label: 'Summary', type: 'textarea', span: true, rows:3 },
        ],
    },

    education: {
        name: 'Education',
        multiple: true,
        fields: [
            { name: 'degree', label: 'Degree' },
            { name: 'institution', label: 'Institution/Place of Education' },
            { name: 'start', label: 'Start Date', type: 'month' },
            { name: 'end', label: 'End Date', type: 'month' },
            { name: 'location', label: 'Description', },
            { name: 'gpa', label: 'gpa', },
        ],
    },

    experience: {
        name: 'Experience',
        multiple: true,
        fields: [
            { name: 'role', label: 'Title' },
            { name: 'company', label: 'Company' },
            { name: 'start', label: 'Start Date', type: 'date' },
            { name: 'end', label: 'End Date', type: 'date' },
            { name: 'description', label: 'Description', type: 'textarea' },
        ],
    },

    projects: {
        name: 'Projects',
        multiple: true,
        fields: [
            { name: 'name', label: 'Name' },
            { name: 'description', label: 'Description', type: 'textarea' },
            { name: 'link', label: 'Link' },
        ],
    },

    skills: {
        name: 'Skills',
        fields: [{ name: 'skills', label: 'Skills', type: 'textarea' }],
    },
};

'use client';

import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import Section from './Section';
import ListItem from './ListItem';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        color: '#555',
        padding: 30,
        fontFamily: 'Times-Roman',
    },

    header: {
        textAlign: 'center',
    },

    header__name: {
        color: '#111',
        fontSize: 20,
        fontFamily: 'Times-Bold',
        textAlign: 'center',
    },
    header__links: {
        color: '#555',
        fontSize: 11,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 14,
        marginTop: 6,
        marginBottom: 4,
    },

    title_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 12,
    },

    subTitle_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 11,
    },

    title: {
        fontFamily: 'Times-Bold',
        marginRight: 'auto',
        color: '#555',
    },
    date: {
        fontFamily: 'Times-Italic',
        fontSize: 10,
    },

    line: {
        borderBottom: '1px solid #eee',
        margin: '5px 0px',
    },
    lists: {
        fontSize: 10.2,
        marginTop: 2,
    },
    link: {
        color: '#666',
    },
});

const Header = ({ data }) => {
    const contactLinks = [
        {
            name: data['phone'],
            value: data['phone'],
        },
        {
            name: data['email'],
            value: `mailto:${data['email']}`,
        },
        {
            name: 'LinkedIn',
            value: data['linkedin'],
        },
        {
            name: 'Github',
            value: data['github'],
        },
        {
            name: 'Blogs',
            value: data['blogs'],
        },
        {
            name: 'Twitter',
            value: data['twitter'],
        },
        {
            name: 'Portfolio',
            value: data['portfolio'],
        },
    ];

    return (
        <Section>
            <Text style={styles.header__name}>{data.name}</Text>
            <View style={styles.header__links}>
                {contactLinks
                    .filter(obj => obj.value)
                    .map(({ value, name }) => (
                        <Link key={name} src={value} style={{ color: '#555' }}>
                            {name}
                        </Link>
                    ))}
            </View>
        </Section>
    );
};

const Education = ({ data }) => (
    <Section title={'Education'}>
        {data.map((educationObj, i) => (
            <View key={i} style={styles?.wrappper}>
                <View style={styles.title_wrapper}>
                    <Text style={styles.title}>{educationObj.degree}</Text>
                    <Text style={styles.date}>
                        ({educationObj.start} - {educationObj.end})
                    </Text>
                </View>

                <View style={styles.subTitle_wrapper}>
                    <Text>
                        {educationObj.institution}
                        {educationObj.gpa && <Text> ({educationObj.gpa})</Text>}
                    </Text>

                    <Text style={styles.date}>{educationObj.location}</Text>
                </View>

                {i !== data.length - 1 && <View style={styles.line} />}
            </View>
        ))}
    </Section>
);

const Projects = ({ data }) => (
    <Section title={'Projects'}>
        {data.map((project, i) => (
            <View key={i}>
                <View style={styles.title_wrapper}>
                    <Text style={styles.title}>{project.title}</Text>
                    {/* <Text style={styles.date}>
                        ({project.start} - {project.end})
                    </Text> */}
                </View>

                <View style={styles.subTitle_wrapper}>
                    <Link
                        style={{
                            textDecoration: 'none',
                            color: '#666',
                        }}
                        src={project.url}
                    >
                        {project.url}
                    </Link>
                </View>

                <View style={styles.lists}>
                    {project.description?.split('\n').map((responsibility, i) => (
                        <ListItem key={i}>{responsibility}</ListItem>
                    ))}
                </View>

                {i !== data.length - 1 && <View style={styles.line} />}
            </View>
        ))}
    </Section>
);

const Experience = ({ data }) => (
    <Section title={'Experience'}>
        {data.map((experience, i) => (
            <View key={i} style={styles?.wrappper}>
                <View style={styles.title_wrapper}>
                    <Text style={styles.title}>{experience.role}</Text>
                    <Text style={styles.date}>
                        {experience.start} - {experience.end}
                    </Text>
                </View>

                <View style={styles.subTitle_wrapper}>
                    <Text>{experience.company}</Text>
                    <Text>{experience.location}</Text>
                </View>

                <View style={styles.lists}>
                    {experience.description?.split('\n').map((responsibility, i) => (
                        <ListItem key={i}>{responsibility}</ListItem>
                    ))}
                </View>
                {i !== data.length - 1 && <View style={styles.line} />}
            </View>
        ))}
    </Section>
);


const Skills = ({ data }) => (
    <Section title={'skills'}>
        
    </Section>
);


const Resume = ({ data }) => {
    const { contact, education, experience, projects } = data;

    return (
        <Document language="en">
            <Page size="A4" style={styles.page}>
                <Header data={contact} />
                <Section title={'Summery'}>
                    <Text style={{ fontSize: 10 }}>{data.summary?.summary}</Text>
                </Section>

                {education.length > 0 && <Education data={education} />}
                {experience.length > 0 && <Experience data={experience} />}
                {projects.length > 0 && <Projects data={projects} />}
            </Page>
        </Document>
    );
};

export default Resume;

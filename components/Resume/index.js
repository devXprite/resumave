'use client';

import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import Header from './sections/Header';
import Section from './Section';
import Education from './sections/Education';
import Experience from './sections/Experience';

Font.register({
    family: 'Merriweather',
    // src: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap',
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        color: '#555',
        padding: 24,
        fontFamily: 'Times-Roman',
    },
});

const Resume = ({ data }) => {
    const { contact, education, experience } = data;

    return (
        <Document language="en">
            <Page size="A4" style={styles.page}>
                <Header data={contact} />

                <Section title={'Summery'}>
                    <Text style={{ fontSize: 10 }}>{data.summary?.summary}</Text>
                </Section>

                {education.length > 0 && <Education data={education} />}
                {experience.length > 0 && <Experience data={experience} />}
            </Page>
        </Document>
    );
};

export default Resume;

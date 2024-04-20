'use client';

import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import Header from './sections/Header';

Font.register({
    family: 'Merriweather',
    // src: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap',
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        margin: 10,
        padding: 10,
        // fontFamily: 'Merriweather',
    },
});

const Resume = ({ data }) => {
    const { contact } = data;

    return (
        <Document language="en">
            <Page size="A4" style={styles.page}>
                <Header data={contact} />
            </Page>
        </Document>
    );
};

export default Resume;

'use client';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Section from '../Section';

const Education = ({ data }) => {
    const styles = StyleSheet.create({
        wrappper: {
            margin: '2px 0px',
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 12,
        },
        title: {
            fontFamily: 'Times-Bold',
            marginRight: 'auto',
            color: '#555',
        },
        date: {
            fontFamily: 'Times-Italic',
        },
    });

    return (
        <Section title={'Education'}>
            {data.map((education, i) => (
                <View style={styles.wrappper}>
                    <View style={styles.container}>
                        <Text style={styles.title}>{education.degree}</Text>
                        <Text style={styles.date}>
                            ({education.start} - {education.end})
                        </Text>
                    </View>

                    <View
                        style={{
                            ...styles.container,
                            fontSize: 11,
                        }}
                    >
                        <Text>
                            {education.institution}
                            {education.gpa && <Text> ({education.gpa})</Text>}
                        </Text>

                        <Text style={styles.date}>{education.location}</Text>
                    </View>

                    {i !== data.length - 1 && <View style={{ borderBottom: '1px solid #eee', margin: '5px 0px' }} />}
                </View>
            ))}
        </Section>
    );
};

export default Education;

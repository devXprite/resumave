import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';
import Section from '../Section';
import ListItem from '../ListItem';

const Experience = ({ data }) => {
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
        lists: {
            fontSize: 10.5,
            marginTop: 2,
        },
    });

    return (
        <Section title={'Experience'}>
            {data.map((experience, i) => (
                <View style={styles.wrappper}>
                    <View style={styles.container}>
                        <Text style={styles.title}>{experience.role}</Text>
                        <Text style={styles.date}>
                            {experience.start} - {experience.end}
                        </Text>
                    </View>

                    <View style={styles.container}>
                        <Text>{experience.company}</Text>
                        <Text>{experience.location}</Text>
                    </View>

                    <View style={styles.lists}>
                        {experience.description.split('\n').map((responsibility, i) => (
                            <ListItem key={i}>{responsibility}</ListItem>
                        ))}
                    </View>
                </View>
            ))}
        </Section>
    );
};

export default Experience;

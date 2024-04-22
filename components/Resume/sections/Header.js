'use client';

import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

const Header = ({ data }) => {
    console.log(data);

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
        <View
            style={{
                textAlign: 'center',
            }}
        >
            <Text
                style={{
                    color: '#111',
                    fontSize: 22,
                    fontFamily: 'Times-Bold',
                    fontWeight: "normal"
                }}
            >
                {data.name}
            </Text>

            {/* <Text
                style={{
                    fontSize: 16,
                    marginTop: 4,
                    marginBottom: 10,
                }}
            >
                {data.title}
            </Text> */}

            <View
                style={{
                    color: '#555',
                    fontSize: 12,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 14,
                    marginTop: 10,
                }}
            >
                {contactLinks
                    .filter(obj => obj.value)
                    .map(obj => (
                        <Link
                            src={obj.value}
                            style={{
                                color: '#555',
                            }}
                        >
                            {obj.name}
                        </Link>
                    ))}
            </View>

            <View
                style={{
                    height: 2,
                    margin: '16px 0px',
                    backgroundColor: '#eee',
                }}
            ></View>
        </View>
    );
};

export default Header;

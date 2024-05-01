import { Text, View, StyleSheet } from '@react-pdf/renderer';

const ListItem = ({ children }) => {
    return (
        <View style={styles.row}>
            <View style={styles.bullet}>
                <Text>{'\u2022' + ' '}</Text>
            </View>
            <Text>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    bullet: {
        height: '100%',
        color: '#444'
    },
});

export default ListItem;

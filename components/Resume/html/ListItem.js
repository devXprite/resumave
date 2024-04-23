import { Text, View, StyleSheet } from '@react-pdf/renderer';

const ListItem = ({ children }) => {
    return (
        <div style={styles.row}>
            <div style={styles.bullet}>
                <p>{'\u2022' + ' '}</p>
            </div>
            <p>{children}</p>
        </div>
    );
};

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    bullet: {
        height: '100%',
    },
});

export default ListItem;

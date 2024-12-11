import { Colors } from "@/assets/Colors"
import { ActivityIndicator, StyleSheet, View } from "react-native"

interface LoadingIndicatorProps {
    loading: boolean
}

export function LoadingIndicator({ loading }: LoadingIndicatorProps) {
    return (
        <>
            {loading && (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color={Colors.primary_2} />
                </View>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    loaderContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
})
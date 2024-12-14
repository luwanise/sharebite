import { Colors } from "@/assets/Colors"
import React from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"

interface LoadingIndicatorProps {
    loading: boolean,
    bgOverlay?: boolean
}

export function LoadingIndicator({ loading, bgOverlay = true }: LoadingIndicatorProps) {
    return (
        <>
            {loading && (
                <View style={[styles.loaderContainer, bgOverlay && { backgroundColor: '#fff6' }]}>
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
    },
})
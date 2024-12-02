import {Image, StyleSheet, Platform, View, Button, TouchableOpacity} from 'react-native';

import {HelloWave} from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {chatService} from "@/services/chat.service";
import {useEffect, useState} from "react";
import {IChat, IUserChat} from "@/shared/types/chat.interface";
import {Text} from 'react-native';
import {useProfile} from "@/hooks/useProfile";
import {IUser} from "@/shared/types/user.interface";

const chat1: IChat = {
    id: 1,
    chatName: "Livingston",
    showChatName: "Livingston",
    isGroup: false,
    isDeleted: false,
    lastMessage: "привет"
};

const chat2: IChat = {
    id: 2,
    chatName: "Kokain",
    showChatName: "Kokain",
    isGroup: false,
    isDeleted: false,
    lastMessage: "как дела"
};

const chat3: IChat = {
    id: 3,
    chatName: "Ukrop",
    showChatName: "Ukrop",
    isGroup: false,
    isDeleted: false,
    lastMessage: "я дима"
};

const chats = [chat1, chat2, chat3];

export default function HomeScreen() {
    const queryClient = new QueryClient();


    return (
        <QueryClientProvider client={queryClient}>
            <ParallaxScrollView
                headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
                headerImage={
                    <Image
                        source={require('@/assets/images/partial-react-logo.png')}
                        style={styles.reactLogo}
                    />
                }>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">Работай!</ThemedText>
                    <HelloWave/>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="subtitle">Step 1: Try it</ThemedText>
                    <ThemedText>
                        Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
                        Press{' '}
                        <ThemedText type="defaultSemiBold">
                            {Platform.select({
                                ios: 'cmd + d',
                                android: 'cmd + m',
                                web: 'F12'
                            })}
                        </ThemedText>{' '}
                        to open developer tools.
                    </ThemedText>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="subtitle">Step 2: Explore</ThemedText>
                    <ThemedText>
                        Tap the Explore tab to learn more about what's included in this starter app.
                    </ThemedText>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
                    <ThemedText>
                        When you're ready, run{' '}
                        <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
                        <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
                        <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
                        <ThemedText type="defaultSemiBold">app-example</ThemedText>.
                    </ThemedText>
                </ThemedView>
                <View>
                    {chats.map(chat => (
                        <View style={styles.chat}>
                            <TouchableOpacity
                                key={chat.id}
                            >
                                <Text>{chat.showChatName}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ParallaxScrollView>
        </QueryClientProvider>

    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems:
            'center',
        gap:
            8,
    }
    ,
    stepContainer: {
        gap: 8,
        marginBottom:
            8,
    }
    ,
    reactLogo: {
        height: 178,
        width:
            290,
        bottom:
            0,
        left:
            0,
        position:
            'absolute',
    }
    ,
    chat: {
        height: 78,
        borderWidth: 1,
    }
});

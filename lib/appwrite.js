import { Account, Avatars, Client, Databases, ID, Query, Storage } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.nabil.memoryhelper',
    projectId: '662542046636ed2ede25',
    databaseId: '66254b493b518a5b669a',
    userCollectionId: '66254b94849d40175a69',
    textCollectionId: '6627e9aae46982d82f95',
    storageId: '66254e041dd56b01cb2e'
}

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    textCollectionId,
    storageId
} = config;

// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID
    .setPlatform(platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password)

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )

    return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailSession(email, password)

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
}

export const getAllPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            textCollectionId,
            [Query.orderDesc('$createdAt')]
        )

        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

export const searchPosts = async (query) => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            textCollectionId,
            [Query.search('title', query)]
        )

        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

export const getUserPosts = async (userId) => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            textCollectionId,
            [Query.equal('author', userId), Query.orderDesc('$createdAt')]
        )

        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

export const signOut = async () => {
    try {
        const session = await account.deleteSession('current');

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const addText = async (form) => {
    try {
        const newPost = await databases.createDocument(
            databaseId, textCollectionId, ID.unique(), {
                title: form.title,
                category: form.category,
                text: form.text,
                author: form.userId
            }
        )

        return newPost;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentText = async (title) => {
    try {
        const text = await databases.listDocuments(
            databaseId,
            textCollectionId,
            [Query.equal('title', title)]
        );

        if (!text.documents || text.documents.length === 0) {
            throw new Error('Text not found');
        }

        return text.documents[0];
    } catch (error) {
        throw new Error(error);
    }
}


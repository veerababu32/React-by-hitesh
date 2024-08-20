/* eslint-disable no-undef */
const conf = {
  // for React
  // appWriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
  // appWriteProductId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
  // appWriteDatabaseId: String(process.env.REACT_APP_APPWRITE_DATABASE_ID),
  // appWriteCollectionId: String(process.env.REACT_APP_APPWRITE_COLLECTION_ID),
  // appWriteBucketId: String(process.env.REACT_APP_APPWRITE_BUCKET_ID),
  appWriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
  appWriteProductId: String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
  appWriteDatabaseId: String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
  appWriteCollectionId: String(import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID),
  appWriteBucketId: String(import.meta.env.VITE_APP_APPWRITE_BUCKET_ID),
};

export default conf;

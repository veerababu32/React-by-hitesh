import conf from '../conf/conf';
import { Client, Databases, ID, Query, Storage } from 'appwrite';

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProductId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log('Appwrite service :: getPost() ::', error);
      return false;
    }
  }

  async getPosts() {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        [Query.equal('status', true)]
      );
    } catch (error) {
      console.log('Appwrite service :: getPosts() ::', error);
      return false;
    }
  }

  async createPost({ title, slug, content, featuredImg, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        { title, content, featuredImg, status, userId }
      );
    } catch (error) {
      console.log('Appwrite service :: createPost() ::', error);
      return false;
    }
  }

  async updatePost(slug, { title, content, featuredImg, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        { title, featuredImg, content, status }
      );
    } catch (error) {
      console.log('Appwrite service :: updatePost() ::', error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log('Appwrite service :: deletePost() ::', error);
      return false;
    }
  }

  // storage service

  async createFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log('Appwrite service :: createFile() ::', error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log('Appwrite service :: deleteFile() ::', error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appWriteBucketId, fileId).href;
  }
}

const service = new Service();

export default service;

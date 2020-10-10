class ImageUploader {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  async upload(file) {
    // https://api.cloudinary.com/v1_1/<cloud name>/<resource_type>/upload
    // cloud name is the name of your Cloudinary account.
    // resource_type is the type of file to upload. Valid values: image, raw, video and auto to automatically detect the file type.
    // const url = 'https://api.cloudinary.com/v1_1/dk2fipffx/auto/upload';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'BusinessCardMaker');

    // const response = await fetch(url, {
    //   method: 'POST',
    //   body: formData,
    // });

    const response = this.httpClient('/auto/upload', {
      data: formData,
    });

    console.log(response);

    // return await response.json();
    return await response;
  }
}

export default ImageUploader;

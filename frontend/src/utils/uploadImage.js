import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  // append image file to form data
  formData.append("image", imageFile);

  try {
    const response = await axiosInstance.post(
      API_PATHS.IMAGE.UPLOAD_IMAGE,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set header for file upload
        },
      }
    );

    console.log("Upload API response:", response.data);

    return response.data; // Return response data
  } catch (error) {
    console.error("Error uploading image", error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

export default uploadImage;

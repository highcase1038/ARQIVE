import { useState, useCallback } from "react";
import { updateProfilePic, loadUser } from "../../../actions/auth";
import { useDispatch } from "react-redux";

import axios from "axios";
import getCroppedImg from "./cropImage";

const useProfileImage = () => {
  const dispatch = useDispatch();

  const [modalState, setmodalState] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [image, setimage] = useState("");
  const [zoom, setZoom] = useState(1);
  const [crop, setcrop] = useState({
    x: 10,
    y: 10,
  });
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({
    x: 47,
    y: 94,
    width: 206,
    height: 206,
  });
  const [croppedImage, setCroppedImage] = useState(null);
  const [newimage, setnewimage] = useState(null);

  const toggle = () => {
    setmodalState(!modalState);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert("File too large! Please select an image smaller than 5MB");
        return;
      }
      
      // Validate file type
      if (!file.type.match(/image\/(jpeg|jpg|png|gif|webp)/)) {
        alert("Unsupported file format! Please select JPG, PNG, or GIF image");
        return;
      }

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        console.log("Image loaded, ready for cropping");
        setimage(reader.result);
      });
      reader.readAsDataURL(file);
    }
  };

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation,
        setnewimage,
        onSubmitPic
      );

      setCroppedImage(croppedImage);
    } catch (e) {
      console.error("Failed to crop image:", e);
      alert("Failed to crop image, please try again");
    }
  }, [croppedAreaPixels, rotation, image]);

  const onSubmitPic = (pic) => {
    let formData = new FormData();

    formData.append("upload_preset", "theArQive");
    formData.append("file", pic);

    setUploading(true);
    console.log("Starting image upload to Cloudinary...");
    
    // Get Cloudinary URL from environment or use default
    const cloudinaryUrl = process.env.REACT_APP_CLOUDINARY || 
                         "https://api.cloudinary.com/v1_1/dezpaxhhp/image/upload";
    
    console.log("Cloudinary URL:", cloudinaryUrl);

    axios
      .post(cloudinaryUrl, formData)
      .then((response) => {
        console.log("Cloudinary upload successful!");
        console.log("Image data:", response.data);
        console.log("Image URL:", response.data.secure_url);
        
        // Update user profile picture URL
        return dispatch(updateProfilePic(response.data.secure_url));
      })
      .then(() => {
        // Reload user data to ensure synchronization
        console.log("Reloading user data...");
        return dispatch(loadUser());
      })
      .then(() => {
        setUploading(false);
        toggle();
        console.log("Profile picture update completed!");
        alert("Profile picture updated successfully!");
      })
      .catch((error) => {
        setUploading(false);
        console.error("Upload failed!");
        console.error("Error type:", error.name);
        console.error("Error message:", error.message);
        
        if (error.response) {
          // Server returned an error response
          console.error("Server response status:", error.response.status);
          console.error("Server response data:", error.response.data);
          
          const errorMessage = error.response.data?.error?.message || 
                              error.response.data?.message ||
                              "Server error";
          alert(`Upload failed: ${errorMessage}`);
        } else if (error.request) {
          // Request was sent but no response received
          console.error("Request details:", error.request);
          alert("Network error: Unable to connect to Cloudinary. Please check your network connection.");
        } else {
          // Error occurred while setting up the request
          console.error("Error config:", error.config);
          alert(`Upload failed: ${error.message}`);
        }
      });
  };

  return {
    modalState,
    onSelectFile,
    image,
    toggle,
    crop,
    zoom,
    setcrop,
    setZoom,
    onCropComplete,
    onSubmitPic,
    showCroppedImage,
    uploading,
  };
};

export default useProfileImage;
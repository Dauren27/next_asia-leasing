import React, { useState, useRef, useEffect } from "react";
import styles from "./fileUpload.module.scss";
import { IoMdCloudUpload } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Image from "next/image";

const FileUpload = ({ onFilesSelected }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...Array.from(files)]); // Efficiently handle multiple files
  };
  const fileRemove = (file) => {
    const updatedList = [...selectedFiles];
    updatedList.splice(selectedFiles.indexOf(file), 1);
    setSelectedFiles(updatedList);
  };
  const displaySelectedFiles = () => {
    return selectedFiles.map((file, index) => {
      let fileSize;
      if (file.size < 1024) {
        fileSize = file.size + " B";
      } else if (file.size < 1024 * 1024) {
        fileSize = (file.size / 1024).toFixed(2) + " KB";
      } else {
        fileSize = (file.size / (1024 * 1024)).toFixed(2) + " MB";
      }

      const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
      const extension = file.name.split(".").pop().toLowerCase();

      let fileHTML;
      if (imageExtensions.includes(extension)) {
        const imageUrl = URL.createObjectURL(file);
        fileHTML = (
          <li key={index} className={styles.row}>
            <div className={styles.content}>
              <Image src={imageUrl} alt={file.name} width={500} height={250} />
              <div className={styles.details}>
                <span className={styles.name}>{file.name}</span>
                <span className={styles.size}>{fileSize}</span>
              </div>
            </div>
            <MdDelete onClick={() => fileRemove(file)} />
          </li>
        );
      } else {
        fileHTML = (
          <li key={index} className={styles.row}>
            <div className={styles.content}>
              <i className="fas fa-file-alt"></i>
              <div className={styles.details}>
                <span className={styles.name}>{file.name}</span>
                <span className={styles.size}>{fileSize}</span>
              </div>
            </div>
            <MdDelete onClick={() => fileRemove(file)} />
          </li>
        );
      }

      return fileHTML;
    });
  };

  // Implement resizeAndCompressImage function here (consider external library for advanced compression)
  const handleSendButtonClick = () => {
    if (selectedFiles.length > 0) {
      // Send compressed files to server using FormData and fetch/axios
      selectedFiles.forEach((file, index) => {
        // Implement logic to send compressedFile using resizeAndCompressImage
      });
    }
  };

  useEffect(() => {
    onFilesSelected(selectedFiles);
  }, [selectedFiles]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.dropArea}>
        <input
          className={styles.fileInput}
          type="file"
          name="file"
          hidden
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
        />
        <IoMdCloudUpload />
        <p>Выберите фото для загрузки</p>
      </div>
      <section className={styles.progressArea}></section>
      <section className={styles.uploadedArea}>
        <ul>{displaySelectedFiles()}</ul>
      </section>
    </div>
  );
};

export default FileUpload;

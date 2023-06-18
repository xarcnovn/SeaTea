import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  margin: 20px auto; /* Move the loading animation down */
  border-color: #999;
`;

const MyComponent: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [responseImage, setResponseImage] = useState<string | null>(null);
  const spinnerRef = useRef<any>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setUploadedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      setIsLoading(true);

      try {
        const response = await axios.post('http://localhost:5000/bafalize', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          responseType: 'arraybuffer' // Specify response type as arraybuffer
        });

        // Handle success
        console.log('Image uploaded successfully!');
        const base64Image = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );
        setResponseImage(`data:image/jpeg;base64,${base64Image}`);
      } catch (error) {
        // Handle error
        console.error('Error uploading image:', error);
      }

      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoading) {
      spinnerRef.current = setTimeout(() => {
        spinnerRef.current = null;
      }, 5000);
    } else {
      clearTimeout(spinnerRef.current);
      spinnerRef.current = null;
    }

    return () => {
      clearTimeout(spinnerRef.current);
    };
  }, [isLoading]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div style={{ marginRight: '512px' }}>
        <div
          style={{
            width: '512px',
            height: '512px',
            border: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            marginBottom: '20px'
          }}
        >
          {!uploadedImage && (
            <span style={{ marginBottom: '20px' }}>Drop an image here or click to upload</span>
          )}
          {uploadedImage && (
            <img
              src={uploadedImage}
              alt="Uploaded"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />
          )}
        </div>
        <form onSubmit={handleFormSubmit}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="file" accept=".jpg" onChange={handleFileChange} />
            <button type="submit">Upload Image</button>
          </div>
        </form>
        {isLoading && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '20px' // Add margin-top to create space
            }}
          >
            <ClipLoader css={override} size={60} color={'#999'} loading={true} />
            <span>Loading...</span>
          </div>
        )}
      </div>
      <div>
        <div
          style={{
            width: '512px',
            height: '512px',
            border: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            marginBottom: '20px'
          }}
        >
          {responseImage && (
            <img
              src={responseImage}
              alt="Response"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;

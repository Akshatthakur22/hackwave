document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const fileList = document.getElementById('fileList');

    uploadButton.addEventListener('click', click1);

    function click1() {
        const files = fileInput.files;
        
        if (files.length === 0) {
            alert("Please select files.");
        } else {
            uploadFiles(files);
        }
    }

    function uploadFiles(files) {
        const fileCount = files.length;

        for (let i = 0; i < fileCount; i++) {
            const file = files[i];
            uploadFile(file);
        }
        alert("Files have been uploaded.");
    }

    function uploadFile(file) {
        const formData = new FormData();
        formData.append('file', file);

        // Replace the URL with your server endpoint for file uploading
        const url = 'your_upload_endpoint_here';

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            // Handle the response data, maybe display success message or update UI
            console.log('File uploaded successfully:', data);
        })
        .catch(error => {
            // Handle errors, display error message or retry uploading
            console.error('There was a problem with the upload:', error.message);
        });
    }
});


async function uploadFile() {
const fileInput = document.getElementById('file-input');
const file = fileInput.files[0];
    if (!file) {
        alert("Please select a file.");
        return;
    }

    const reader = new FileReader();
    reader.onload = async function (event) {
        const content = btoa(event.target.result);
        const fileName = file.name;

        const repo = "mawd";
        const path = `images/uploads/${fileName}`;
        const owner = "koiychi";
        const token = "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";

        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
        
        const data = {
            message: `Upload ${fileName}`,
            content: content,
            branch: "main"
        };

        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": `token ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            document.getElementById('status').innerText = "File uploaded successfully!";
        } else {
            document.getElementById('status').innerText = "Failed to upload.";
        }
    };
    reader.readAsBinaryString(file);
}
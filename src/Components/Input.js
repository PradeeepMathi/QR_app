import "../Components/stylSheet/Input.css";

export default function Input({
  dataInput,
  setDataInput,
  sizeInput,
  setSizeInput,
  setImg,
  setLoading,
  img,
}) {
  const URL = `https://api.qrserver.com/v1/create-qr-code/?size=${sizeInput}x${sizeInput}&data=${encodeURIComponent(
    dataInput
  )}`;
  //Using Try catch method
  async function handleGenerate() {
    setLoading(true);
    try {
      const URL = `https://api.qrserver.com/v1/create-qr-code/?size=${sizeInput}x${sizeInput}&data=${encodeURIComponent(
        dataInput
      )}`;
      setImg(URL);
    } catch (error) {
      console.error("Error generating Qr code", error);
    } finally {
      setLoading(false);
    }
  }
  
//   const downloadQRCode = async () => {
//     if (img && sizeInput && dataInput) {
//       try {
//         const response = await fetch(img);
//         const blob = await response.blob();
//         const link = document.createElement("a");
//         link.href = window.URL.createObjectURL(blob);
//         link.download = "qrcode.png";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       } catch (error) {
//         console.error("Error downloading QR code", error);
//       }
//     }
//   };
  
  function handleDownload() {
    if ((sizeInput, dataInput)) {
      fetch(img)
        .then((response) => response.blob())
        .then((blob) => {
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob); // Replace URL with window.URL
          link.download = "qrcode.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error("Error downloading QR code", error);
        });
    }
  }
  return (
    <div>
      <div className='input-container'>
        <label htmlFor="dataInput" className="input-lable">
          Enter Data For QR Code:
        </label>
        <input
          onChange={(e) => setDataInput(e.target.value)}
          type="text"
          id="dataInput"
          value={dataInput}
          placeholder="Enter Data For QR Code"
        />

        <label htmlFor="sizeInput" className="input-lable">
          Enter Data For Size:
        </label>
        <input
          onChange={(e) => setSizeInput(e.target.value)}
          type="text"
          id="sizeInput"
          value={sizeInput}
          placeholder="Enter Data For Size"
        />
        <button onClick={handleGenerate}>Generate QR_Code</button>
        <button onClick={handleDownload}>Download QR_Code</button>
        
      </div>
      <div className='footer'>
         <p>@Designed By Pradeep</p>
      </div>
    </div>
  );
}

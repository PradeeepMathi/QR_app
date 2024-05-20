import "../Components/stylSheet/Image.css";
export default function Image({ img, loading }) {
  return (
    <div>
      <div>
        <p>QR Generator:</p>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div>{img && <img src={img} alt="" className="img-qr" />}</div>
        )}
      </div>
    </div>
  );
}

import React from "react";

function GoldPriceManager() {
  return (
    <div>
      <h1>Gold Price Manager</h1>
      <iframe
        title="Gold Price"
        srcDoc={`<script type="text/javascript" src="https://tygiausd.org/GiavangFullScript/dat-gia-vang/Widgets"></script>
                  <noscript> Vui lòng bật javascript để xem <a href="https://tygiausd.org/giavang/gia-vang-hom-nay">giá vàng</a></noscript>`}
        style={{ width: "100%", height: "1000px", border: "none" }}
      />
    </div>
  );
}

export default GoldPriceManager;

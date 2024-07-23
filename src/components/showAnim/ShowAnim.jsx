import { useState } from "react";

export default function ShowAnim() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>show</button>

      {show && <div className="p-4 bg-red-500">hello fa</div>}
    </div>
  );
}

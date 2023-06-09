import { useEffect } from "react";




export const GifCard = ({gif}) => {
  // useEffect(() => {
  //   const getGifList = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:5600/gif/items');
  //       setGifList(res.data);
  //       console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   getGifList();
  // }, []);
  return (
    <div>
      <img
        title="gif"
        src={gif.item}
        width="480"
        height="480"
        allowFullScreen
      ></img>
      <p>{gif.caption}</p>
      <div>
        Posted by: {gif.uploadedBy}
      </div>
    </div>
  );
};

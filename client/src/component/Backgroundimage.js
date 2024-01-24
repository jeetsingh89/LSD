import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const Box = styled.div`
  position: fixed;
  zindex: -1;
  top: 0;
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BGImage() {
  const [width, setWidth] = useState();
  const [height, setheight] = useState();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    const myLoader=({src})=>{
      return `${API}/user/photo/${blog.postedBy.username}`;
    }
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Box>
        <Image
          src={`https://source.unsplash.com/${width}x${height}/?space,scifi,futuristic,astrophotography,abstract,psychedelic`}
          alt="Picture of the author"
          width={width}
          height={height}/>
         
      </Box>
    );
  }

  return null;
}

export default BGImage;
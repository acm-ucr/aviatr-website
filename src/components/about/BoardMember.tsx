import React from "react";
import { CSSProperties } from "react";

const BoardMember = ({ name, position, image }: {name: any, position:any, image: any}) => {
    return (
      <div style={styles.container}>
        <img src={image} alt={name + "'s profile image"} style={styles.image} />
        <div>
          <div style={styles.name}>{name}</div>
          <div style={styles.position}>{position}</div>
        </div>
      </div>
    );
  };


  const styles: { [key: string]: CSSProperties } = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",  
        justifyContent: "center", 
        width: "250px",
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
    },
    image: {
      width: "189.07px",
      height: "223.87px",
      borderRadius: "15%",
      marginBottom: "20px",
    },
    name: {
      fontSize: "22px",
      fontWeight: "bold",
      alignItems: "center",
    },
    position: {
      fontSize: "18px",
      color: "#555",
      alignItems: "center",
    },
  };
  
  export default BoardMember;